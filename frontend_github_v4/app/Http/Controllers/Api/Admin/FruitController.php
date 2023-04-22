<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\FruitBenefitsResource;
use App\Http\Resources\FruitFactsResource;
use Illuminate\Http\Request;
use App\Models\Fruits;
use App\Http\Resources\FruitResource;
use App\Models\FruitsBenefits;
use App\Models\FruitsFacts;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;

class FruitController extends Controller
{
    public function index(){
        return FruitResource::collection(Fruits::orderBy('id','desc')->paginate(100));
    }

    public function create(Request $request){
         $benefits = json_decode($request->benefits);
         $facts = json_decode($request->facts);

        $request->validate([
            'name'=>['required','unique:fruits,name'],
            'description'=>['required'],
            'image'=>['required'],
        ]);

        if($request->hasFile('image')){
            return DB::transaction(function () use($request,$benefits,$facts){
                $filename = $request->image->getClientOriginalName();
                $file = time().$filename;
                $fruit = Fruits::create([
                'name'=>$request->name,
                'image'=>$file,
                'description'=>$request->description
                ]);
                $this->Benefits($benefits,$fruit->id);
                $this->Facts($facts,$fruit->id);
                new FruitResource($fruit);
            $request->file('image')->move(public_path('storage/images/fruits'), $file);
            return response('Data has been Added',200);
            });
          }
          return response('Internal server not found',500);
    }

    private function Benefits($data,$fruit){
        foreach($data as $value){
            $fruits = FruitsBenefits::create([
                'fruit_id'=>$fruit,
                'name'=>$value->name,
                'details'=>$value->description
            ]);
            new FruitBenefitsResource($fruits);
        }
    }

    private function BenefitsDelete($data){
        foreach($data as $value){
            $fruits = FruitsBenefits::where('id',$value)->delete();
            new FruitBenefitsResource($fruits);
        }
    }

    private function BenefitsAdd($data){
        foreach($data as $value){
           $fruit = FruitsBenefits::where('id',$value->id)->first();
           if($fruit){
               $fruit->update(['name'=>$value->name,'details'=>$value->details]);
           }else{
               FruitsBenefits::create([
                   'fruit_id'=>$value->fruit_id,
                   'name'=>$value->name,
                   'details'=>$value->details
               ]);
           }
       }
    }

    private function Facts($data,$fruit){
        foreach($data as $value){
            $fruits = FruitsFacts::create([
                'fruit_id'=>$fruit,
                'name'=>$value->name,
                'description'=>$value->description
            ]);
            new FruitFactsResource($fruits);
        }
    }

    private function FactsDelete($data){
        foreach($data as $value){
            $fruits = FruitsFacts::where('id',$value)->delete();
            new FruitFactsResource($fruits);
        }
    }

    private function FactsAdd($data){
         foreach($data as $value){
            $fruit = FruitsFacts::where('id',$value->id)->first();
            if($fruit){
                $fruit->update(['name'=>$value->name,'description'=>$value->description]);
            }else{
                FruitsFacts::create([
                    'fruit_id'=>$value->fruit_id,
                    'name'=>$value->name,
                    'description'=>$value->description
                ]);
            }
        }
    }

    public function edit(Fruits $fruit){
        $fruit = Fruits::where('id',$fruit->id)->with(['facts','benefits'])->first();
        return new FruitResource($fruit);
    }

    public function update(Fruits $fruit, Request $request){

        $path_current = str_replace(
            'http://127.0.0.1:8000/storage/images/fruits/',"",
            $request->image_current);
         $path = 'images/fruits/'.$path_current;

        return DB::transaction(function () use($request,$fruit,$path){
            $benefits = json_decode($request->benefits);
            $benefits_delete = json_decode($request->benefits_delete);
            $facts = json_decode($request->facts);
            $facts_delete = json_decode($request->facts_delete);

            $this->FactsAdd($facts);
            $this->BenefitsAdd($benefits);
            $this->BenefitsDelete($benefits_delete);
            $this->FactsDelete($facts_delete);

            if($request->hasFile('image') && Storage::disk('public')->exists($path)){
                Storage::disk('public')->delete($path);
                $filename = $request->image->getClientOriginalName();
                $file = time().$filename;
                $request->file('image')->move(public_path('storage/images/fruits'), $file);
                $fruit = Fruits::where('id',$fruit->id)->update([
                    'name'=>$request->name,
                    'image'=>$file,
                    'description'=>$request->description
                ]);
                new FruitResource($fruit);
                return response('Updated Successful',200);
            }else{
                $fruit = Fruits::where('id',$fruit->id)->update([
                    'name'=>$request->name,
                    'description'=>$request->description
                ]);
                new FruitResource($fruit);
                return response('Updated Successful',200);
            }
        }); //transaction
        return response('error somethings wrong',200);
    }

    public function destroy(Fruits $fruit){
        $fruit = Fruits::find($fruit)->first();
        $path = 'images/fruits/'.$fruit->image;

        return DB::transaction(function () use($fruit,$path){
            if(Storage::disk('public')->exists($path)){
                Storage::disk('public')->delete($path);
                Fruits::where('id',$fruit->id)->delete();
                $facts = FruitsFacts::where('fruit_id',$fruit->id)->delete();
                $benefits = FruitsBenefits::where('fruit_id',$fruit->id)->delete();
                new FruitResource($fruit);
                new FruitFactsResource($facts);
                new FruitBenefitsResource($benefits);
                return response('Data has been Deleted',200);
            }
                Fruits::where('id',$fruit->id)->delete();
                new FruitResource($fruit);
                return response('No Data Image has been Delete',200);
        });
     }
}
