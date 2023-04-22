<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\UsersChoices;

class HomeController extends Controller
{
    public function doughnut(){
        $pregnant = UsersChoices::where('health_issues_id',1)->count(); //pregnant
        $injury = UsersChoices::where('health_issues_id',2)->count(); //injury
        $anxiety = UsersChoices::where('health_issues_id',3)->count(); //anxiety
        $depressed = UsersChoices::where('health_issues_id',4)->count(); //depressed
        $allergy = UsersChoices::where('health_issues_id',5)->count(); //allergy
        $none = UsersChoices::where('health_issues_id',6)->count(); //none

        return response()->json([
            'Pregnant'=>$pregnant,
            'Injury'=>$injury,
            'Anxiety'=>$anxiety,
            'Depressed'=>$depressed,
            'Allergy'=>$allergy,
            'None'=>$none,
        ]);
    }
}
