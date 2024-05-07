<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Investorpost;
use App\Models\Buyerpost;
use App\Models\Realtorpost;
use App\Models\Comment;
use App\Models\Story;
use App\Models\Favorite;


class PostController extends Controller
{
    public function posting(Request $request){
            // dd($request->all());

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
        $data->location = $request->location ?? '';

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
        $data->location = $request->location ?? '';

        $data->user_id = auth()->user()->id;

        $data->postpic = $filename;
        
        $data->save();

        return response()->json(['saved' => true]);


    }



    public function realtorposting(Request $request){

    //   dd($request->all());
        $filename = $request->file('image')->getClientOriginalName();
        $imagePath =  $request->file('image')->move(public_path('post'), $filename);


     
        $data = new Realtorpost;
        $data->postdetails = $request->postdetails;
        $data->posttitle = $request->posttitle;
        $data->user_id = auth()->user()->id;
        $data->location = $request->location;
        $data->type = $request->types;



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
        
      
        $data = Buyerpost::with('User' , 'comments')->
            orderBy('created_at', 'desc')
            ->limit(9)
            ->get();


            $data1 = Investorpost::with('User' , 'comments')->
            orderBy('created_at', 'desc')
            ->limit(9)
            ->get();

   


            $mergedData = $data->concat($data1);

        $mergedArray = $mergedData->toArray();

       return response()->json(['data' => $mergedArray, 'data1' => $data]);
    }



    
    public function filterpost(Request $request){
        
      
        // dd(request('types'));
        if(request('types') == 'Buyers'){

       
        $data = Buyerpost::with('User' , 'comments')


        ->when(request('looking'), function ($q) {
                
            $q->Where('postdetails', 'like', '%'.request('looking').'%' )
            ->orWhere('posttitle', 'like', '%'.request('looking').'%')
          ;
              
               
        })

        ->when(request('selectedlocation'), function ($q) {
                
            $q->Where('location', request('selectedlocation') )
           
          ;
              
               
        })

       
        
            ->orderBy('created_at', 'desc')
            ->limit(9)
            ->get();

        }


        if(request('types') == 'Investors'){

       
            $data = Investorpost::with('User' , 'comments')
    
    
            ->when(request('looking'), function ($q) {
                    
                $q->Where('postdetails', 'like', '%'.request('looking').'%' )
                ->orWhere('posttitle', 'like', '%'.request('looking').'%')
              ;
                  
                   
            })
    
            ->when(request('selectedlocation'), function ($q) {
                    
                $q->Where('location', request('selectedlocation') )
               
              ;
                  
                   
            })
    
           
            
                ->orderBy('created_at', 'desc')
                ->limit(9)
                ->get();
    
            }



            if(request('types') == 'Realtors'){

       
                $data = Realtorpost::with('User')
        
        
                ->when(request('looking'), function ($q) {
                        
                    $q->Where('postdetails', 'like', '%'.request('looking').'%' )
                    ->orWhere('posttitle', 'like', '%'.request('looking').'%')
                  ;
                      
                       
                })
        
                ->when(request('selectedlocation'), function ($q) {
                        
                    $q->Where('location', request('selectedlocation') )
                   
                  ;
                      
                       
                })
        
               
                
                    ->orderBy('created_at', 'desc')
                    ->limit(9)
                    ->get();
        
                }


       return response()->json(['data' => $data]);
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


    public function addfavorite(){
        // dd(request('post_id'));
        $exist = Favorite::where('post_id' , request('post_id'))->where('auth_id' , auth()->user()->id )->first();
        if($exist){
            $exist->delete();
        }

        $data = new Favorite;
        $data->post_id = request('post_id');
        $data->auth_id = auth()->user()->id;
        $data->save();
        return response()->json(['saved' => true]);

    }


    public function listlocation(){

        $data = Investorpost::whereNotNull('location')->pluck('location');

        $data1 = Buyerpost::whereNotNull('location')->pluck('location');

        $data2 = Realtorpost::whereNotNull('location')->pluck('location');

        $mergedData = $data->merge($data1)->merge($data2)->unique();


            return response()->json(['data' => $mergedData]); 

    }

}
