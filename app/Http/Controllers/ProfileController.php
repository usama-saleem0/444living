<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\State;
use Illuminate\Support\Str;
use App\Models\Voucher;
use Illuminate\Support\Facades\Mail;
use Illuminate\Mail\Message;
use App\Mail\VoucherEmail;

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
        if($data->membership = null){
            $data->membership = 'Free Trail';

        }
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

    public function total(){
        $total = User::where('type' , 'Realtor')->get();
        $realtor = count($total);


        $total2 = User::where('type' , 'Investor')->get();

        $investor = count($total2);

        return response()->json(['realtors' => $realtor , 'investors' => $investor]);
    }


    public function State(){
        $data = State::get();

        return response()->json(['data' => $data]);
    }


    public function allrealtors(){
        $data = User::where('type' , 'Realtor')->get();
        return response()->json(['data' => $data]);
    }



    public function allbuyers(){
        $data = User::where('type' , 'Buyer')->get();
        return response()->json(['data' => $data]);
    }


    public function allinvestors(){
        $data = User::where('type' , 'Investor')->get();
        return response()->json(['data' => $data]);
    }



    public function generate_tokan(Request $request){

        $randomString = Str::random(10);
        $data = new Voucher;
        $data->voucher_code = $randomString;
        $data->user_id = $request->id;
        $data->user_email = $request->email;
        $data->percent = $request->percent;


        Mail::to($request->email)->send(new VoucherEmail($request->email, $request->id, $randomString, $request->percent ));

        $data->save();
        return response()->json(['saved' => true]);

        // dd($request->all());

    }


    public function getadmin(){
        $data = User::where('type' , 'admin')->first();
        return response()->json(['data' => $data]);
    }
}
