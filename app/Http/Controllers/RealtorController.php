<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Email;

class RealtorController extends Controller
{
    
    public function toprealtor(){
        $data = User::where('type', 'Realtor')
        ->orderBy('created_at', 'asc')
        ->limit(9)
        ->get();
        return response()->json(['data' => $data]);
    }


    public function emails(){

        $data = Email::first();

        return response()->json(['data' => $data]);


    
    }
}
