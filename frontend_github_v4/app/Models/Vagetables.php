<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vagetables extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function facts(){
        return $this->hasMany(VagetablesFacts::class,'vagetable_id');
    }

    public function benefits(){
        return $this->hasMany(VagetablesBenefits::class,'vagetable_id');
    }
}
