<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdminController extends Controller
{
    public function profile(Request $request){
        return $request->user()->where('id',Auth::id())->with('role:user_id,name')->first();
    }
}
