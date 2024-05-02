<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Investorpost;
use App\Models\Buyerpost;
use App\Models\Realtorpost;
use App\Models\Comment;
use App\Models\Story;


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



    public function realtorposting(Request $request){

      
        $filename = $request->file('image')->getClientOriginalName();
        $imagePath =  $request->file('image')->move(public_path('post'), $filename);


     
        $data = new Realtorpost;
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

    
    public function pastlisting(){
        $data = Realtorpost::where('user_id' , auth()->user()->id)->get();
        return response()->json(['data' => $data]);
    }


    public function getposts(){
        $data = Buyerpost::with('User')->
            orderBy('created_at', 'desc')
            ->limit(9)
            ->get();


            $data1 = Investorpost::with('User')->
            orderBy('created_at', 'desc')
            ->limit(9)
            ->get();

   


            $mergedData = $data->concat($data1);

        $mergedArray = $mergedData->toArray();

       return response()->json(['data' => $mergedArray, 'data1' => $data]);
    }


    public function getlisting(){
        $data = Realtorpost::with('User')->
            orderBy('created_at', 'asc')
            ->limit(9)
            ->get();

       return response()->json(['data' => $data]);
    }


    public function postcommit(Request $request){
        $data = new Comment;
        $data->comments = $request->commit;
        $data->post_id = $request->commit_id;
        $data->user_id = $request->user_id;
        $data->save();

        return response()->json(['saved' => true]);


    }


    public function poststory(Request $request){

        // dd($request->all());

       $exist = Story::where('user_id' , auth()->user()->id)->first();

       if($exist){

        $exist->delete();

       }

       $fileExtension = $request->file('image')->getClientOriginalExtension();
        $filename = $request->file('image')->getClientOriginalName();
        $imagePath =  $request->file('image')->move(public_path('story'), $filename);
       
     
        $data = new Story;
       
        $data->user_id = $request->user_id;

        $data->story = $filename;
        $data->file_type = $fileExtension;
        
        $data->save();

        return response()->json(['saved' => true]);


    }


    public function getstory(){
        $data = Story::with('user')->orderBy('created_at', 'desc')
        
        ->get();

        return response()->json(['data' => $data]);
    }

}
