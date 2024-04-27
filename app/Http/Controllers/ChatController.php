<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Chat;
use App\Models\User;

class ChatController extends Controller
{
    public function getuser(){
        // dd(auth()->user()->id);

        $data = User::with('brand')->where('id' , auth()->user()->id)->first();
        return response()->json(['data'=> $data]);
     }

     public function getbrand(){
      // dd(request()->id);

      $data = User::with('brand')->where('id' , request()->id)->first();
      return response()->json(['data'=> $data]);
   }


     public function getinfluencer(){
      // dd(auth()->user());
        if(auth()->user()->auth_type =='Brand'){
       

         $data = User::where('auth_type' , 'Influencer')->get();
      }
      else{

         $chat = Chat::where('reciever_id' , auth()->user()->id)->pluck('sender_id')->unique();
        
         $data = User::whereIn('id', $chat)->get();

      }
      return response()->json(['influencer' => $data]);
     }


     public function getchat(){
        $user = User::where('id' , request('id'))->first();
        
       
        $user->chat_count = 0;
        $user->save();
       
        $data = Chat::where('sender_id' , auth()->user()->id)
        ->where('reciever_id' , request('id'))
        ->orWhere('sender_id' , request('id'))
        ->where('reciever_id' , auth()->user()->id)->get();
        return response()->json(['data' => $data , 'chat_user' => auth()->user()->id]);
    }


    public function chats(Request $request){
        // dd($request->all());
    $randomNumber = random_int(1, 10000);
    // dd($randomNumber);
    $message = new Chat;
    $message->text = $request->message;
    $message->sender_id = auth()->user()->id;
    $message->reciever_id = $request->reciever_id;
    $message->reciever_name = $request->reciever_name;
    $message->room_id = $randomNumber;  
   

    $user = User::where('id' , auth()->user()->id)->first();
    
    $counts = $user->chat_count;
    $user->chat_count = $counts +1;
    $user->save();
    



    $message->save();

    return response()->json(['saved' => true]);




}


public function recentchat(){

    $chat = Chat::where('reciever_id' , auth()->user()->id)->pluck('sender_id')->unique();
    $chat1 = Chat::where('sender_id' , auth()->user()->id)->pluck('reciever_id')->unique();

    
$mergedChats = $chat->merge($chat1)->unique();

        
    $data = User::whereIn('id', $mergedChats)->get();

    return response()->json(['data' => $data]);
}

}
