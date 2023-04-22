<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Meats extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function facts(){
        return $this->hasMany(MeatsFacts::class,'meat_id');
    }

    public function benefits(){
        return $this->hasMany(MeatsBenefits::class,'meat_id');
    }
}
