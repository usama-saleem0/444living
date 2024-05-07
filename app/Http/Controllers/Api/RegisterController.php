<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\RegisterRequest;
use GuzzleHttp\Psr7\Request;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Mail;
use Illuminate\Mail\Message;
use App\Mail\WelcomeEmail;



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


            $token = Str::random(10);

            $email = $request->email;
            $userId = $user->id;

            Mail::to($email)->send(new WelcomeEmail($email, $userId, $token));



            // Mail::send('Mails.verifyemail', ['token' => $token], function(Message $message) use ($email){
            //     $message->to($email);
            //     $message->subject('Verify Your Email');
            // });



            // return response()->json($user);

            return response()->json(['user' => $user ,'saved' => true]);
        } catch (\Exception $e) {
            return response([
                'message' => 'Internal error, please try again later.' 
            ], 400);
        }
    }


   


    
}
