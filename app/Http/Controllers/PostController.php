<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Investorpost;
use App\Models\Buyerpost;

class PostController extends Controller
{
    public function posting(Request $request){

        // dd(auth()->user()->id);

        // $request->validate([
            

        //     'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048', 

        // ]);
    
        
        $filename = $request->file('image')->getClientOriginalName();
        $imagePath =  $request->file('image')->move(public_path('post'), $filename);


     
        $data = new Investorpost;
        $data->postdetails = $request->postdetails;
        $data->posttitle = $request->posttitle;
        $data->user_id = auth()->user()->id;

        $data->postpic = $filename;
        
        $data->save();

        return response()->json(['saved' => true]);


    }



    public function buyerposting(Request $request){

      
        $filename = $request->file('image')->getClientOriginalName();
        $imagePath =  $request->file('image')->move(public_path('post'), $filename);


     
        $data = new Buyerpost;
        $data->postdetails = $request->postdetails;
        $data->posttitle = $request->posttitle;
        $data->user_id = auth()->user()->id;

        $data->postpic = $filename;
        
        $data->save();

        return response()->json(['saved' => true]);


    }


    public function pastpost(){
        $data = Buyerpost::where('user_id' , auth()->user()->id)->get();
        return response()->json(['data' => $data]);
    }


}
