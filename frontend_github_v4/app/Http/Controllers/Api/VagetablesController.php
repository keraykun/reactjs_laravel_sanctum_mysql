<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\VagetableResource;
use App\Models\Vagetables;
use Illuminate\Http\Request;

class VagetablesController extends Controller
{
    public function index(){
        return VagetableResource::collection(Vagetables::all());
    }

    public function show(Vagetables $vagetable){
        $vagetable = Vagetables::where('id',$vagetable->id)->with(['facts','benefits'])->first();
        return new VagetableResource($vagetable);
    }
}
