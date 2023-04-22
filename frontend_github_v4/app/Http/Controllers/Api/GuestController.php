<?php

namespace App\Http\Controllers\Api;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Details;
use App\Models\Role;
use App\Models\User;
use App\Models\UsersChoices;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class GuestController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum')->except(['login','signup']);
    }

    public function users(){
        $user = User::where('id',Auth::id())->with('role')->first();
        return $user;
    }

    public function login(Request $request){
        $credentials = $request->validate([
            'email'=>['required'],
            'password'=>['required'],
        ]);
        if(!Auth::attempt($credentials)){
            return response()->json([
                'message'=>'Email not provided, Please Try again!'
            ]);
        }
        $user = User::where('id',Auth::id())->with('role')->first();
        if($user->role->name==='admin'){
            $token = $user->createToken($user->email,['server:admin'])->plainTextToken;
        }else if($user->role->name==='user'){
            $token = $user->createToken($user->email,['server:user'])->plainTextToken;
        }else{
            abort(405,'No token and user has been generate');
        }
        return response()->json([
            'user'=>$user,
            'token'=>$token
        ]);
    }


    public function logout(){
        $user = Auth::user();
        $user->currentAccessToken()->delete();
        return response('',204);
    }

    public function signup(Request $request){

        $request->validate([
            'name'=>['required'],
            'contact'=>['required'],
            'birthdate'=>['required'],
            'email'=>['required','email','unique:users,email'],
            'password'=>['required'],
            // 'password_confirm'=>['required']
        ]);


        return DB::transaction(function () use($request){
             $user = User::query()->create([
                'name'=>$request->name,
                'email'=>$request->email,
                'password'=>Hash::make($request->password),
                'email_verified_at'=>now()
             ]);
             Role::query()->create([
                'user_id'=>$user->id,
                'name'=>'user',
             ]);

             Details::create([
                'user_id'=>$user->id,
                'contact'=>$request->contact,
                'gender'=>$request->gender,
                'birthdate'=>$request->birthdate
             ]);

             UsersChoices::create([
                'user_id'=>$user->id,
                'health_issues_id'=>$request->healthissue,
                'goals_id'=>$request->goal,
             ]);

             return response()->json('Congratulations you have been Registered');
            //$token = $user->createToken('main')->plainTextToken;
        });
    }

}
