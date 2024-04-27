<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\RegisterRequest;
use GuzzleHttp\Psr7\Request;
use Illuminate\Auth\Events\Registered;


class RegisterController extends Controller
{
    public function register(RegisterRequest $request)
    {
        // dd($request->all());
        try {
            $user = User::create([
                'username' => $request->input('username'),
                'number' => $request->input('number'),
                'email' => $request->input('email'),
                'type' => $request->input('type'),
                'password' => Hash::make($request->input('password')),
            ]);
           

            if (config('auth.must_verify_email')) {
                event(new Registered($user));
            }

            // return response()->json($user);

            return response()->json(['user' => $user ,'saved' => true]);
        } catch (\Exception $e) {
            return response([
                'message' => 'Internal error, please try again later.' 
            ], 400);
        }
    }


   


    
}
