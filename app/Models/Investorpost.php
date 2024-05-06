<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Comment;

class Investorpost extends Model
{
    use HasFactory;

   

    
    protected $fillable = [
        'user_id'
    ];

    protected $appends =[
        'counts'
    ];

    public function User()
    {
        return $this->belongsTo(User::class , 'user_id' , 'id');
    
    }

    public function getCountsAttribute()
    {
        return $this->hasMany(Comment::class, 'post_id', 'id', 'user_id' , 'user_id')->count();
    }


    public function comments()
    {
        
        return $this->hasMany(Comment::class, 'post_id', 'id', 'user_id' , 'user_id');
    }


   
}
