<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Email;

class RealtorController extends Controller
{

    public function toprealtor(){

        if(auth()->user()->type === 'Investor' || auth()->user()->type === 'Buyer'){
            $data = User::where('type', 'Realtor')
            ->orderBy('created_at', 'asc')
            ->limit(9)
            ->get();
        }


        if(auth()->user()->type === 'Realtor'){
            $data = User::where('type', 'Investor')
            ->orderBy('created_at', 'asc')
            ->limit(9)
            ->get();
        }

        return response()->json(['data' => $data]);
    }




    public function explorerealtor(){


            $data = User::where('type', 'Realtor')
            ->whereNotIn('id', [auth()->user()->id])

            ->orderBy('created_at', 'asc')
            ->limit(5)
            ->get();







        return response()->json(['data' => $data]);
    }




    public function onerealtor(){
        if(auth()->user()->type === 'Investor' || auth()->user()->type === 'Buyer'){
        $data = User::where('type', 'Realtor')
        ->orderBy('created_at', 'desc')
        ->first();
        }

        if(auth()->user()->type === 'Realtor'){
            $data = User::where('type', 'Investor')
            ->orderBy('created_at', 'desc')
            ->first();
            }
        return response()->json(['data' => $data]);
    }


    public function emails(){

        $data = Email::first();

        return response()->json(['data' => $data]);



    }
}
