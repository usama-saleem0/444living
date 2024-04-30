<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class InvestorController extends Controller
{
    

    public function exploreinvestor(){

     
        $data = User::where('type', 'Investor')
        ->whereNotIn('id', [auth()->user()->id])
        ->orderBy('created_at', 'asc')
        ->limit(3)
        ->get();
   

   
    return response()->json(['data' => $data]);
}

}
