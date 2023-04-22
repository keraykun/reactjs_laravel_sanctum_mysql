<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\FruitResource;
use App\Models\Fruits;
use Illuminate\Http\Request;

class FruitController extends Controller
{
    public function index(){
        return FruitResource::collection(Fruits::all());
    }

    public function show(Fruits $fruit){
      $fruit = Fruits::where('id',$fruit->id)->with(['facts','benefits'])->first();
      return new FruitResource($fruit);
    }
}
