<?php

namespace App\Http\Controllers\Api\User;

use App\Http\Controllers\Controller;
use App\Models\UsersRecordsBmi;
use Illuminate\Http\Request;

class BMIController extends Controller
{
    public function bmiCalculator(Request $request){
        UsersRecordsBmi::create([
            'user_id'=>$request->user()->id,
            'age'=>$request->age,
            'weight'=>$request->weight,
            'height'=>$request->height,
            'result'=>$request->result
        ]);
        return response('Successfull Added to Record !');
    }
}
