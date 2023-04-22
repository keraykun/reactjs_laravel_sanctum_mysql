<?php

namespace App\Http\Controllers\Api\User;

use App\Http\Controllers\Controller;
use App\Models\UsersRecordsBmi;
use App\Models\UsersRecordsFatburner;
use Illuminate\Http\Request;

class RecordController extends Controller
{
    public function record(Request $request){
       $bmi = UsersRecordsBmi::where('user_id',$request->user()->id)->get();
       $fat = UsersRecordsFatburner::where('user_id',$request->user()->id)->get();

       return response()->json([
        'bmi'=>$bmi,
        'fat'=>$fat
       ]);
        //return $request->user()->where('id',Auth::id())->with('role:user_id,name')->first();
    }
}
