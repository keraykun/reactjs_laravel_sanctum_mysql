<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\MeatsBenefitsResource;
use App\Http\Resources\MeatsFactsResource;
use Illuminate\Http\Request;
use App\Models\Meats;
use App\Http\Resources\MeatsResource;
use App\Models\MeatsBenefits;
use App\Models\MeatsFacts;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;

class MeatController extends Controller
{
    public function index(){
        return MeatsResource::collection(Meats::orderBy('id','desc')->paginate(100));
    }

    public function create(Request $request){
         $benefits = json_decode($request->benefits);
         $facts = json_decode($request->facts);

        $request->validate([
            'name'=>['required','unique:meats,name'],
            'description'=>['required'],
            'image'=>['required'],
        ]);

        if($request->hasFile('image')){
            return DB::transaction(function () use($request,$benefits,$facts){
                $filename = $request->image->getClientOriginalName();
                $file = time().$filename;
                $fruit = Meats::create([
                    'name'=>$request->name,
                    'image'=>$file,
                    'description'=>$request->description
                ]);
                $this->Benefits($benefits,$fruit->id);
                $this->Facts($facts,$fruit->id);
                new MeatsResource($fruit);
            $request->file('image')->move(public_path('storage/images/meats'), $file);
            return response('Data has been Added',200);
            });
          }
          return response('error',200);
    }

    private function Benefits($data,$fruit){
        foreach($data as $value){
            $Meats = MeatsBenefits::create([
                'meat_id'=>$fruit,
                'name'=>$value->name,
                'details'=>$value->description
            ]);
            new MeatsBenefitsResource($Meats);
        }
    }

    private function BenefitsDelete($data){
        foreach($data as $value){
            $Meats = MeatsBenefits::where('id',$value)->delete();
            new MeatsBenefitsResource($Meats);
        }
    }

    private function BenefitsAdd($data){
        foreach($data as $value){
           $fruit = MeatsBenefits::where('id',$value->id)->first();
           if($fruit){
               $fruit->update(['name'=>$value->name,'details'=>$value->details]);
           }else{
               MeatsBenefits::create([
                   'meat_id'=>$value->meat_id,
                   'name'=>$value->name,
                   'details'=>$value->details
               ]);
           }
       }
   }


    private function Facts($data,$fruit){
        foreach($data as $value){
            $Meats = MeatsFacts::create([
                'meat_id'=>$fruit,
                'name'=>$value->name,
                'description'=>$value->description
            ]);
            new MeatsFactsResource($Meats);
        }
    }

    private function FactsDelete($data){
        foreach($data as $value){
            $Meats = MeatsFacts::where('id',$value)->delete();
            new MeatsFactsResource($Meats);
        }
    }

    private function FactsAdd($data){
         foreach($data as $value){
            $fruit = MeatsFacts::where('id',$value->id)->first();
            if($fruit){
                $fruit->update(['name'=>$value->name,'description'=>$value->description]);
            }else{
                MeatsFacts::create([
                    'meat_id'=>$value->meat_id,
                    'name'=>$value->name,
                    'description'=>$value->description
                ]);
            }
        }
    }

    public function edit(Meats $meat){
        $meat = Meats::where('id',$meat->id)->with(['facts','benefits'])->first();
        return new MeatsResource($meat);
    }

    public function update(Meats $meat, Request $request){

        $path_current = str_replace(
            'http://127.0.0.1:8000/storage/images/meats/',"",
            $request->image_current);
         $path = 'images/Meats/'.$path_current;

        return DB::transaction(function () use($request,$meat,$path){
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
                $request->file('image')->move(public_path('storage/images/meats'), $file);
                $meat = Meats::where('id',$meat->id)->update([
                    'name'=>$request->name,
                    'image'=>$file,
                    'description'=>$request->description
                ]);
                new MeatsResource($meat);
                return response('Updated Successful',200);
            }else{
                $meat = Meats::where('id',$meat->id)->update([
                    'name'=>$request->name,
                    'description'=>$request->description
                ]);
                new MeatsResource($meat);
                return response('Updated Successful',200);
            }
        }); //transaction
        return response('error somethings wrong',200);
    }

    public function destroy(Meats $meat){
        $meat = Meats::find($meat)->first();
        $path = 'images/Meats/'.$meat->image;

        return DB::transaction(function () use($meat,$path){
            if(Storage::disk('public')->exists($path)){
            Storage::disk('public')->delete($path);
            Meats::where('id',$meat->id)->delete();
            $facts = MeatsFacts::where('meat_id',$meat->id)->delete();
            $benefits = MeatsBenefits::where('meat_id',$meat->id)->delete();
            new MeatsResource($meat);
            new MeatsFactsResource($facts);
            new MeatsBenefitsResource($benefits);
            return response('Data has been Deleted',200);
            }
                Meats::where('id',$meat->id)->delete();
                new MeatsResource($meat);
                return response('No Data Image has been Delete',200);
        });
     }
}
