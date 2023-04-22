<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\VagetablesBenefitsResource;
use App\Http\Resources\VagetablesFactsResource;
use Illuminate\Http\Request;
use App\Models\Vagetables;
use App\Http\Resources\VagetableResource;
use App\Models\VagetablesBenefits;
use App\Models\VagetablesFacts;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;

class VagetablesController extends Controller
{
    public function index(){
        return VagetableResource::collection(Vagetables::orderBy('id','desc')->paginate(100));
    }

    public function create(Request $request){
         $benefits = json_decode($request->benefits);
         $facts = json_decode($request->facts);

        $request->validate([
            'name'=>['required','unique:vagetables,name'],
            'description'=>['required'],
            'image'=>['required'],
        ]);

        if($request->hasFile('image')){
            return DB::transaction(function () use($request,$benefits,$facts){
                $filename = $request->image->getClientOriginalName();
                $file = time().$filename;
                $fruit = Vagetables::create([
                    'name'=>$request->name,
                    'image'=>$file,
                    'description'=>$request->description
                ]);
                $this->Benefits($benefits,$fruit->id);
                $this->Facts($facts,$fruit->id);
                new VagetableResource($fruit);
            $request->file('image')->move(public_path('storage/images/vagetables'), $file);
            return response('Data has been Added',200);
            });
          }
          return response('error',200);
    }

    private function Benefits($data,$fruit){
        foreach($data as $value){
            $Vagetables = VagetablesBenefits::create([
                'vagetable_id'=>$fruit,
                'name'=>$value->name,
                'details'=>$value->description
            ]);
            new VagetablesBenefitsResource($Vagetables);
        }
    }

    private function BenefitsDelete($data){
        foreach($data as $value){
            $Vagetables = VagetablesBenefits::where('id',$value)->delete();
            new VagetablesBenefitsResource($Vagetables);
        }
    }

    private function BenefitsAdd($data){
        foreach($data as $value){
           $fruit = VagetablesBenefits::where('id',$value->id)->first();
           if($fruit){
               $fruit->update(['name'=>$value->name,'details'=>$value->details]);
           }else{
               VagetablesBenefits::create([
                   'vagetable_id'=>$value->vagetable_id,
                   'name'=>$value->name,
                   'details'=>$value->details
               ]);
           }
       }
   }


    private function Facts($data,$fruit){
        foreach($data as $value){
            $Vagetables = VagetablesFacts::create([
                'vagetable_id'=>$fruit,
                'name'=>$value->name,
                'description'=>$value->description
            ]);
            new VagetablesFactsResource($Vagetables);
        }
    }

    private function FactsDelete($data){
        foreach($data as $value){
            $Vagetables = VagetablesFacts::where('id',$value)->delete();
            new VagetablesFactsResource($Vagetables);
        }
    }

    private function FactsAdd($data){
         foreach($data as $value){
            $fruit = VagetablesFacts::where('id',$value->id)->first();
            if($fruit){
                $fruit->update(['name'=>$value->name,'description'=>$value->description]);
            }else{
                VagetablesFacts::create([
                    'vagetable_id'=>$value->vagetable_id,
                    'name'=>$value->name,
                    'description'=>$value->description
                ]);
            }
        }
    }

    public function edit(Vagetables $vagetable){
        $vagetable = Vagetables::where('id',$vagetable->id)->with(['facts','benefits'])->first();
        return new VagetableResource($vagetable);
    }

    public function update(Vagetables $vagetable, Request $request){

        $path_current = str_replace(
            'http://127.0.0.1:8000/storage/images/Vagetables/',"",
            $request->image_current);
         $path = 'images/Vagetables/'.$path_current;

        return DB::transaction(function () use($request,$vagetable,$path){
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
                $request->file('image')->move(public_path('storage/images/Vagetables'), $file);
                $vagetable = Vagetables::where('id',$vagetable->id)->update([
                    'name'=>$request->name,
                    'image'=>$file,
                    'description'=>$request->description
                ]);
                new VagetableResource($vagetable);
                return response('Updated Successful',200);
            }else{
                $vagetable = Vagetables::where('id',$vagetable->id)->update([
                    'name'=>$request->name,
                    'description'=>$request->description
                ]);
                new VagetableResource($vagetable);
                return response('Updated Successful',200);
            }
        }); //transaction
        return response('error somethings wrong',200);
    }

    public function destroy(Vagetables $vagetable){
        $vagetable = Vagetables::find($vagetable)->first();
        $path = 'images/Vagetables/'.$vagetable->image;

        return DB::transaction(function () use($vagetable,$path){
            if(Storage::disk('public')->exists($path)){
            Storage::disk('public')->delete($path);
            Vagetables::where('id',$vagetable->id)->delete();
            $facts = VagetablesFacts::where('vagetable_id',$vagetable->id)->delete();
            $benefits = VagetablesBenefits::where('vagetable_id',$vagetable->id)->delete();
            new VagetableResource($vagetable);
            new VagetablesFactsResource($facts);
            new VagetablesBenefitsResource($benefits);
            return response('Data has been Deleted',200);
            }
                Vagetables::where('id',$vagetable->id)->delete();
                new VagetableResource($vagetable);
                return response('No Data Image has been Delete',200);
        });
     }
}
