<?php

namespace App\Models;

use App\Http\Resources\FruitResource;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Fruits extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function facts(){
        return $this->hasMany(FruitsFacts::class,'fruit_id');
    }

    public function benefits(){
        return $this->hasMany(FruitsBenefits::class,'fruit_id');
    }

}
