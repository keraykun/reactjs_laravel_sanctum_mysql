<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UsersChoices extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function health(){
        return $this->belongsTo(HealthIssue::class,'health_issues_id');
    }

    public function goal(){
        return $this->belongsTo(Goals::class,'goals_id');
    }
}
