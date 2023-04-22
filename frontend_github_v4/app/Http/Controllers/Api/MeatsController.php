<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\MeatsResource;
use App\Models\Meats;
use Illuminate\Http\Request;

class MeatsController extends Controller
{
    public function index(){
        return MeatsResource::collection(Meats::all());
    }

    public function show(Meats $meat){
        $meat = Meats::where('id',$meat->id)->with(['facts','benefits'])->first();
        return new MeatsResource($meat);
    }
}
