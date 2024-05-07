<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Favorite extends Model
{
    use HasFactory;


    protected $fillable = [
        'user_id'
    ];


    public function User()
    {
        return $this->belongsTo(User::class , 'user_id' , 'id');
    
    }


    protected $appends = ['text'];

    public function getTextAttribute()
    {
        return $this->attributes['user_id'];
    }
    public function buyers()
    {

    
       
        return $this->hasOne(Buyerpost::class, 'id', 'post_id');
    }


    public function investors()
    {

       
        return $this->hasOne(Investorpost::class, 'id', 'post_id');
    }
}
