<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Goals;
use App\Models\HealthIssue;
use App\Models\UsersChoices;
use Illuminate\Http\Request;

class SignUpController extends Controller
{
    public function healthissue(){
        return HealthIssue::all();
    }

    public function goals(){
        return Goals::all();
    }
}
