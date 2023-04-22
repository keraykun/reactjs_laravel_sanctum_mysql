<?php

namespace App\Http\Controllers\Api\User;

use App\Http\Controllers\Controller;
use App\Models\UsersChoices;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function dashboard(Request $request){
        return UsersChoices::where('user_id',$request->user()->id)
        ->with(['health:id,name','goal:id,name'])
        ->first();
    }
}
