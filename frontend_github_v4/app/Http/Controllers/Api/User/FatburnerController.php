<?php

namespace App\Http\Controllers\Api\User;

use App\Http\Controllers\Controller;
use App\Models\UsersRecordsFatburner;
use Illuminate\Http\Request;

class FatburnerController extends Controller
{
    public function fatBurner(Request $request){
        UsersRecordsFatburner::create([
            'user_id'=>$request->user()->id,
            'gender'=>$request->gender,
            'weight'=>$request->weight,
            'waist'=>$request->waist,
            'result'=>$request->result
        ]);
        return response('Successfull Added to Record !');
    }
}
