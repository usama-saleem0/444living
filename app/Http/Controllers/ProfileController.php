<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class ProfileController extends Controller
{
     public function profileregister(Request $request){

        

        $request->validate([
            

            'profile' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048', 
            'cover' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048', 

        ]);
    
        
        $filename = $request->file('profile')->getClientOriginalName();
        $imagePath =  $request->file('profile')->move(public_path('profile'), $filename);


        $filenames = $request->file('cover')->getClientOriginalName();
        $imagePath2 =  $request->file('cover')->move(public_path('cover'), $filenames);

        $data = User:: where('id' , $request->user_id)->first();
        $data->first_name = $request->firstname;
        $data->last_name = $request->lastname;
        $data->profile = $filename;
        $data->cover = $filenames;
        $data->save();

        return response()->json(['saved' => true]);


    }


    public function getprofile(){
        // dd(request()->id);

        $data = User::where('id', request()->id)->first();

        return response()->json(['data' => $data]);
    }

    public function editprofile(Request $request){

            $user = User::where('id' , auth()->user()->id)->first();

            $user->email = $request->email;
            $user->first_name = $request->firstname;
            $user->last_name = $request->lastname;
            $user->username = $request->user_name;
            $user->bio = $request->bio;
            $user->save();

            return response()->json(['saved' => true]);



    }


    public function getusers(){
        
         $data = User::where('id' , auth()->user()->id)->first();

         return response()->json(['data' => $data]);
    }
}
