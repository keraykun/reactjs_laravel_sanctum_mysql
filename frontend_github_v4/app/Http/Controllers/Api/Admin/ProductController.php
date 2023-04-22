<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;
use App\Http\Resources\ProductResource;

class ProductController extends Controller
{

    public function index(){
        return ProductResource::collection(Product::all());
    }

    public function create(Request $request){
        $product = Product::create([
            'name'=>$request->product,
            'price'=>$request->price,
            'quantity'=>$request->quantity,
        ]);
        new ProductResource($product);
        return response('Data has been Added',200);
    }

    public function destroy(Product $product){
        $product = Product::where('id',$product->id)->delete();
        new ProductResource($product);
        return response('Data has been Deleted',200);
    }

    public function edit(Product $product){
        $product = Product::where('id',$product->id)->first();
        return new ProductResource($product);
    }

    public function update(Product $product, Request $request){
        $data = Product::findOrFail($product->id);
        Product::where('id',$data->id)->update([
            'name'=>$request->product,
            'price'=>$request->price,
            'quantity'=>$request->quantity,
        ]);
        new ProductResource($product);
        return response('Data has been Updated',200);
    }


}
