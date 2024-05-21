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
    
        if( $request->file('image')){

        
        $filename = $request->file('image')->getClientOriginalName();
        $imagePath =  $request->file('image')->move(public_path('post'), $filename);
    }


     
        $data = new Investorpost;
        $data->postdetails = $request->postdetails;
        $data->posttitle = $request->posttitle;
        $data->user_id = auth()->user()->id;
        $data->location = $request->location ?? '';
        $data->state = $request->state ?? '';

        if( $request->file('image')){
        $data->postpic = $filename;
        }
        
        $data->save();

        return response()->json(['saved' => true]);


    }



    public function buyerposting(Request $request){

       
        if( $request->file('image')){
        $filename = $request->file('image')->getClientOriginalName();
        $imagePath =  $request->file('image')->move(public_path('post'), $filename);
        }


     
        $data = new Buyerpost;
        $data->postdetails = $request->postdetails;
        $data->posttitle = $request->posttitle;
        $data->location = $request->location ?? '';
        $data->state = $request->state ?? '';

        $data->user_id = auth()->user()->id;

        if( $request->file('image')){

            $data->postpic = $filename;
        }

        
        $data->save();

        return response()->json(['saved' => true]);


    }



    public function realtorposting(Request $request){

    //   dd($request->all());
    if( $request->file('image')){
        $filename = $request->file('image')->getClientOriginalName();
        $imagePath =  $request->file('image')->move(public_path('post'), $filename);
    }


     
        $data = new Realtorpost;
        $data->postdetails = $request->postdetails;
        $data->posttitle = $request->posttitle;
        $data->user_id = auth()->user()->id;
        $data->location = $request->location;
        $data->bedroom = $request->bedroom ?? '';
        $data->bathroom = $request->bathroom ?? '';
        $data->state = $request->state ?? '';


        $data->type = $request->types;

        if( $request->file('image')){

            $data->postpic = $filename;
        }

        
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
        
      
        $data = Buyerpost::with('User' , 'comments.User')->
            orderBy('created_at', 'desc')
            ->limit(9)
            ->get();


            $data1 = Investorpost::with('User' , 'comments.User')->
            orderBy('created_at', 'desc')
            ->limit(9)
            ->get();

   


            $mergedData = $data->concat($data1);

        $mergedArray = $mergedData->toArray();

       return response()->json(['data' => $mergedArray, 'data1' => $data]);
    }



    
    public function filterpost(Request $request){
        
      
   
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


        ->when(request('selectedstate'), function ($q) {
                
             $q->Where('state', request('selectedstate') )
           
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

            ->when(request('selectedstate'), function ($q) {
                
                 $q->Where('state', request('selectedstate') )
               
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


                ->when(request('selectedstate'), function ($q) {
                
                     $q->Where('state', request('selectedstate') )
                   
                  ;
                      
                       
                })
        
               
                
                    ->orderBy('created_at', 'desc')
                    ->limit(9)
                    ->get();
        
                }


                else{
                   

       
                    $data1 = Realtorpost::with('User')
            
            
                    ->when(request('looking'), function ($q) {
                            
                        $q->Where('postdetails', 'like', '%'.request('looking').'%' )
                        ->orWhere('posttitle', 'like', '%'.request('looking').'%')
                      ;
                          
                           
                    })
            
                    ->when(request('selectedlocation'), function ($q) {
                            
                        $q->Where('location', request('selectedlocation') )
                       
                      ;
                          
                           
                    })

                    ->when(request('selectedstate'), function ($q) {
                        
                
                         $q->Where('state', request('selectedstate') )
                       
                      ;
                          
                           
                    })
            
                   
                    
                        ->orderBy('created_at', 'desc')
                        ->limit(9)
                        ->get();



                        
                    $data2 = Buyerpost::with('User')
            
            
                    ->when(request('looking'), function ($q) {
                            
                        $q->Where('postdetails', 'like', '%'.request('looking').'%' )
                        ->orWhere('posttitle', 'like', '%'.request('looking').'%')
                      ;
                          
                           
                    })
            
                    ->when(request('selectedlocation'), function ($q) {
                            
                        $q->Where('location', request('selectedlocation') )
                       
                      ;
                          
                           
                    })

                    ->when(request('selectedstate'), function ($q) {
                
                         $q->Where('state', request('selectedstate') )
                       
                      ;
                          
                           
                    })
            
                   
                    
                        ->orderBy('created_at', 'desc')
                        ->limit(9)
                        ->get();


                        
                    $data3 = Investorpost::with('User')
            
            
                    ->when(request('looking'), function ($q) {
                            
                        $q->Where('postdetails', 'like', '%'.request('looking').'%' )
                        ->orWhere('posttitle', 'like', '%'.request('looking').'%')
                      ;
                          
                           
                    })
            
                    ->when(request('selectedlocation'), function ($q) {
                            
                        $q->Where('location', request('selectedlocation') )
                       
                      ;
                          
                           
                    })


                    ->when(request('selectedstate'), function ($q) {
                
                         $q->Where('state', request('selectedstate') )
                       
                      ;
                          
                           
                    })
            
                   
                    
                        ->orderBy('created_at', 'desc')
                        ->limit(9)
                        ->get();


                        $data = $data1->concat($data2)->concat($data3);
            
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
        $exist = Favorite::where('post_id' , request('post_id'))->where('auth_id' , auth()->user()->id )->where('user_id' , request('user_id'))->first();
        if($exist){
            $exist->delete();
        }

        $data = new Favorite;
        $data->post_id = request('post_id');
        $data->user_id = request('user_id');

        $data->auth_id = auth()->user()->id;
        $data->save();
        return response()->json(['saved' => true]);

    }

    public function favoritelists(){
        
        $data = Favorite::with('buyers')->where('auth_id' , auth()->user()->id)->
        orderBy('created_at', 'desc')
       
        ->get();
        
        $buyerid = [];
        foreach ($data as $buyers){
            $buyerid[] = $buyers->user_id;
        }


        $buyersdata = Favorite::with(['User','buyers' => function ($query) use ($buyerid) {
            $query->whereIn('user_id', $buyerid);
        }])
        ->where('auth_id', auth()->user()->id)
        ->orderBy('created_at', 'desc')
        ->get();



        $data1 = Favorite::with('investors')->where('auth_id' , auth()->user()->id)->
        orderBy('created_at', 'desc')
       
        ->get();
        $investorid = [];
        foreach ($data1 as $investion){
            $investorid[] = $investion->user_id;
        }


        $investiondata = Favorite::with(['User','investors' => function ($query) use ($buyerid) {
            $query->whereIn('user_id', $buyerid);
        }])
        ->where('auth_id', auth()->user()->id)
        ->orderBy('created_at', 'desc')
        ->get();
    
       



   return response()->json(['data' => $buyersdata, 'data1' => $investiondata]);

    }


    public function listlocation(){

        $data = Investorpost::whereNotNull('location')->pluck('location');

        $data1 = Buyerpost::whereNotNull('location')->pluck('location');

        $data2 = Realtorpost::whereNotNull('location')->pluck('location');

        $mergedData = $data->merge($data1)->merge($data2)->unique();


            return response()->json(['data' => $mergedData]); 

    }

}
