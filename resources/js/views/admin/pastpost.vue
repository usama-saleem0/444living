<template>

    
    <div class="page-1">
        <!-- <Header/> -->
     <div class="contanir" >
        <div class="main">
        <div class="box-1">
            <div class="toppadds">
                <span class="overviews">
                Post Something  so Investor and Realtor can reach you!
             </span>
            </div>
            
            <div style="width: 100%;
    position: relative;
    display: flex;
    align-content: center;
    align-items: center;">
                <input type="text" placeholder="Post Add" class="inputclass" v-model="form.posttitle"/>
                <svg @click="openFileDialog" class="setsvg" xmlns="http://www.w3.org/2000/svg" width="30" height="28" viewBox="0 0 30 28" fill="none">
  <path d="M29.9997 2.70113C29.9997 7.57531 29.9997 12.4495 29.9997 17.3242C29.985 17.3484 29.9621 17.3714 29.9568 17.3979C29.5962 19.0905 28.4296 20.0396 26.6972 20.0402C20.564 20.0414 14.4307 20.0414 8.29746 20.039C8.06392 20.039 7.82626 20.0361 7.59742 19.9942C6.01617 19.7047 4.99318 18.432 4.992 16.753C4.98965 12.2703 4.98965 7.78813 4.992 3.30539C4.99318 1.34346 6.33207 0.00111571 8.28216 0.000526186C10.5676 -0.00065286 12.853 0.000526186 15.1378 0.000526186C19.0245 0.000526186 22.9117 -0.00124238 26.7984 0.00170523C28.2343 0.00288428 29.4144 0.84885 29.845 2.17587C29.9021 2.3486 29.9485 2.52604 29.9997 2.70113ZM7.49624 14.9384C7.61742 14.8247 7.69508 14.7563 7.76743 14.6838C8.78278 13.6674 9.79753 12.6493 10.8129 11.633C11.8535 10.5913 13.1312 10.5866 14.1707 11.6253C14.6266 12.081 15.0713 12.5468 15.5431 13.0302C16.0655 12.4029 16.5579 11.811 17.0508 11.2186C18.0821 9.97879 19.1121 8.73726 20.1451 7.49926C20.7181 6.81246 21.4393 6.51476 22.3299 6.69338C22.8582 6.79891 23.2764 7.08423 23.6241 7.49218C24.8406 8.92119 26.0636 10.3449 27.2814 11.7733C27.3343 11.8358 27.359 11.9224 27.3972 11.9979C27.4296 11.9714 27.462 11.9449 27.4943 11.9183C27.4943 11.8211 27.4943 11.7244 27.4943 11.6271C27.4943 8.86754 27.4943 6.10857 27.4943 3.34902C27.4943 2.69406 27.3119 2.51072 26.6613 2.51013C20.5487 2.51013 14.4366 2.51013 8.32393 2.51013C7.69213 2.51013 7.49683 2.70408 7.49624 3.32838C7.49624 7.086 7.49624 10.843 7.49624 14.6007C7.49624 14.6944 7.49624 14.7875 7.49624 14.9384Z" fill="#DED4A2"/>
  <path d="M25.9573 21.9194C25.5679 23.1657 25.1979 24.3583 24.822 25.5491C24.4784 26.6362 23.7384 27.3083 22.626 27.5005C22.2077 27.5724 21.7395 27.5429 21.3277 27.4332C14.9397 25.7372 8.55763 24.0223 2.17437 22.3079C0.54017 21.8687 -0.349286 20.2947 0.128973 18.6877C1.07843 15.496 2.03554 12.3067 2.99029 9.11618C3.00912 9.0531 3.03265 8.9912 3.10265 8.92871C3.10736 9.02598 3.11559 9.12384 3.11559 9.22111C3.11618 11.8533 3.1103 14.485 3.11795 17.1172C3.12442 19.4228 4.63037 21.3317 6.82754 21.8074C7.22403 21.8935 7.64053 21.9141 8.04819 21.9147C13.8773 21.9212 19.7064 21.9194 25.535 21.9194C25.6603 21.9194 25.7856 21.9194 25.9573 21.9194Z" fill="#DED4A2"/>
  <path d="M11.2514 8.76159C9.87484 8.76395 8.75361 7.65152 8.7442 6.27381C8.73479 4.8955 9.87484 3.75419 11.2573 3.75831C12.6267 3.76244 13.7509 4.89373 13.7492 6.26496C13.7474 7.63973 12.6273 8.75923 11.2514 8.76159Z" fill="#DED4A2"/>
</svg>
            </div>

            <div class="col text-right"><p style="margin: auto 0;
    color: #DED4A2;
    font-family: sans-serif;
  
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    cursor: pointer;"
    @click="MoreF" >More</p></div>

            <input type="file" id="file-input" style="position: absolute; bottom: 0; left: 0; opacity: 0; width: 0%;" @change="handleFileChange" accept="image/*">

 <div  v-if="imageUrl || morefeild" style="width: 100%;
            
    position: relative;
    display: flex;
    align-content: center;
    align-items: center;">
                <input type="text" placeholder="Enter location" class="inputclass" v-model="form.location"/>
        
            </div>


         

                    <div  v-if="morefeild" style="width: 100%;
            
            position: relative;
            display: flex;
            align-content: center;
            align-items: center;">
          

                <input type="text" placeholder="Enter Details" class="inputclass" v-model="form.postdetials"/>
             

            

                
                    </div>

<div v-if="imageUrl" style="    width: 100%;
    border: 1px solid beige;
    padding: 10px;
    display: flex;
    gap: 10px;">

    <!-- <img src="/images/Background.png" class="postimage"/> -->
    <img  :src="imageUrl" alt="Selected Image" class="postimage">
    <input type="text" placeholder="Add Details" class="inputclass" v-model="form.postdetials"/>
    
</div>
<div class="col text-right btn-post" v-if="imageUrl || morefeild ">
    <button>
        <svg width="13" height="25" viewBox="0 0 13 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M-0.333333 0.833496C-0.333333 2.07016 0.888333 3.91683 2.125 5.46683C3.715 7.46683 5.615 9.21183 7.79333 10.5435C9.42667 11.5418 11.4067 12.5002 13 12.5002C11.4067 12.5002 9.425 13.4585 7.79333 14.4568C5.615 15.7902 3.715 17.5352 2.125 19.5318C0.888333 21.0835 -0.333333 22.9335 -0.333333 24.1668" stroke="#DED4A2" stroke-width="2"/>
</svg>
    <span class="overview "  @click="savepost">


                    Post
             </span>
    </button>
</div>
             
             <div class="new-2">
                 <div class="short-card">
                     <p>Active Jobs</p>
                     <h2>24.9k</h2>
                     <h3>+11.6% (2817)</h3>
                 </div>
                 <div class="short-card">
                     <p>Completed</p>
                     <h2>24.9k</h2>
                     <h3>+11.6% (2817)</h3>
                 </div>
                 <div class="short-card">
                     <p>Paid</p>
                     <h2>24.9k</h2>
                     <h3>+11.6% (2817)</h3>
                 </div>
                 <div class="short-card">
                     <p>Un Paid</p>
                     <h2>24.9k</h2>
                     <h3>+11.6% (2817)</h3>
                 </div>
             </div>
             <div class="bordersbot">
                <span class="overview">
                    Past Posts
             </span>
             </div>

             <div class="postscroll">

                    <div class="row" style="border-bottom: 1px solid #DED4A2;     margin-bottom: 20px;" v-for="item in model">
                    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 hello-bhai">
                        <!-- <img src="/images/Rectangle23.png" alt=""/> -->
                        <img :src="'/post/' + item.postpic" alt=""/>

                    </div>

                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12  col-12 topset byby-top">
                        <span class="sq240">
                            {{ item.posttitle }}
                        </span>
                        <p class="lorem">
                                    {{item.postdetails  }}
                                   </p>
                    </div>

                    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 text-right topset colgap">
                        <span class="posted">
                            Posted: {{ dated(item.created_at) }}
                        </span>
                        <p>
                            <span class="rights100" style="color: white;">

                           
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12 23C11.7348 23 11.4804 22.8946 11.2929 22.7071C11.1054 22.5196 11 22.2652 11 22V19H7C6.46957 19 5.96086 18.7893 5.58579 18.4142C5.21071 18.0391 5 17.5304 5 17V7C5 6.46957 5.21071 5.96086 5.58579 5.58579C5.96086 5.21071 6.46957 5 7 5H21C21.5304 5 22.0391 5.21071 22.4142 5.58579C22.7893 5.96086 23 6.46957 23 7V17C23 17.5304 22.7893 18.0391 22.4142 18.4142C22.0391 18.7893 21.5304 19 21 19H16.9L13.2 22.71C13 22.89 12.76 23 12.5 23H12ZM3 15H1V3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H19V3H3V15Z" fill="#DED4A2"/>
</svg>100    </span>

<span   class="rights100" style="color: white;">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z" fill="#DED4A2"/>
</svg>100
</span>
                        </p>
                    </div>
                </div>

                    
             </div>
             
          
         </div> 
         <Profile/>
        </div>
       
     </div>
    </div>
  
 </template>
 
 <script>
 import Vue from 'vue'
 import chartBarDemo from "../../chart/demo/chart-bar-demo";

 import Tables from "../admin/simpletable.vue"

 import Profile from "./investorprofilecard.vue";
 import Header from "../admin/components/Topbar.vue";
 import { get , byMethod} from '../lib/api';
 export default {
     name: 'admin',
 
     components: {
    
    Profile,
    Header,
    Tables,
   
 },
 
     mounted() {
    
     chartBarDemo();
   },
 
 
     data () {
             return {
                 method:'POST',
                 model:{},
                 model:'',
                 imageUrl: '',
                 form:{},
                 morefeild:false
  
               
               
             }
         },
         created(){
         
         get('/pastpost')
               .then((res) => {
                 
                  this.setData(res)
 
               })
           
         }, 
 
         methods:{


            MoreF(){
                this.morefeild = !this.morefeild
                console.log('more',this.morefeild)
            },

            dated(e){
                const moment = require('moment');
                let formattedDate = moment(e).format("h:mma, DD dddd");
                return formattedDate
            },

            handleFileChange(event) {
      this.file = event.target.files[0];
    this.imageUrl = URL.createObjectURL(this.file);
  },
  openFileDialog() {
    document.getElementById('file-input').click();
  },
             setData(res) {
         
               Vue.set(this.$data, 'model', res.data.data)
               console.log(res.data.data)
               
              
 
             //   console.log(res.data)
           },
 
             profile(){
                 this.$router.push('/admin/dashborad4')
             },

             savepost(){

            const formData = new FormData();
            
            formData.append('image', this.file); 

            formData.append('postdetails', this.form.postdetials);
            formData.append('posttitle', this.form.posttitle);
            formData.append('location', this.form.location);
           
            console.log(formData);



                        
            byMethod(this.method, '/buyerposting' , formData)
                            .then((res) => {
                            
                                console.log(res)
                                if(res.data && res.data.saved) {
                                    this.imageUrl  ='';
                                    this.morefeild = false
                                    this.form = {};

                                    let message =
            "Successfully Create Post.";
          let toast = Vue.toasted.show(message, {
            theme: "toasted-primary",
            position: "top-right",
            duration: 5000,
          });

          get('/pastpost')
               .then((res) => {
                 
                  this.setData(res)
 
               })
                                
                                }
                            })
                            .catch((error) => {
                                if(error.response.status === 422) {
                                    this.errors = error.response.data.errors
                                }
                                this.isProcessing = false
                            })

            },
 
         }
 }
 </script>
 
 <style scoped>

 .postimage{
    width: 100%;
    max-width: 200px;
    max-height: 200px;
    min-width: 200px;
    min-height: 200px;
}
 .postscroll{
    overflow-y: scroll;
    height: 440px;
 }
 .colgap{
    display: flex;
    flex-direction: column;
    gap: 30px;
 }

 .topset{
    padding: 0px 20px 20px 20px;
 }

 .lorem{
    color: #A2A2A4;
    font-family: sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

 }

 .posted{
    color: #A2A2A4;
font-family: sans-serif;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
 }

 .sq240{

    color: #DED4A2;
font-family: sans-serif;
font-size: 25px;
font-style: normal;
font-weight: 400;
line-height: normal;

 }

 .rights100{
    padding-right: 20px;
 }
 .imger {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.imger img {
    border-radius: 50px;
    height: 65px;
    object-fit: cover;
    width: 24% !important;
}

.go-this-pic {
    height: 44px;
    right: -5px;
}

.go-this-pic img {height: 100%;object-fit: cover;}


.go-this-pic {
    width: 40px !important;
    height: 42px !important;
    max-height: 42px !important;
    min-height: 42px !important;
    padding-left: 20px !important;
}

.go-this-pic img {
    height: 100%;
    object-fit: cover;
}

.setp {
    padding-left: 20px !important;
}



.setp {
    padding-left: 15px !important;
}


.imger h2 {
    color: #000;
    font-family: "Saol Display";
    font-size: 23px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.slide-card p {
    color: #000;
    font-family: sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.96px;
    margin: 0px;
    padding: 30px 30px 30px 0px;
}



.arrow{
    background: #293857;
    width: 100%;
    justify-content: center;
    align-items: center;
}

.contac{
    background: #293857;
    display: flex;
    width: 100%;
    padding: 6px 10px 4px 10px;
    justify-content: center;
    align-items: center;
    color: #FFF;
    text-align: center;
    font-family: sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
}

.col-3.hello-bhai img {
    width: 100%;
}

.slide-card {
    width: 320px;
    height: 100% !important;
    border: 2px solid #293857 !important;
    background: #DED4A2 !important;
    box-shadow: none !important;
    border-radius: 0px !important;
    padding: 30px;
}

 .toppadds{
    padding-left: 10px;
    padding-top: 25px;
 }

 .setsvg{
    position: absolute;
    right: 20px;
    cursor: pointer !important;
 }

 .inputclass{
    width: 100%;
    padding: 25px;
    background-color: transparent;
    border: 1px solid #DED4A2;
 }

 .bordersbot{
    width: 100%;
    border-bottom: 1px solid #DED4A2;
    padding: 10px;
 }

 .overview{
    margin: auto 0;
    color: #DED4A2;
    font-family: sans-serif;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
 }

 .overviews{
    margin: auto 0;
    color: #DED4A2;
    font-family: sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
 }
 .charttext{
    color: #000;

font-family: "system-ui";
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: 24px;
padding: 10px 0px 0px 0px;
 }
 .sett{
    padding: 10px 25px;
 }

 .chartsnew{
    padding: 0px 0px 25px 0px;
 }

 .chartdate{
    color: #1B1C1D;

font-family: fantasy;
font-size: 36px;
font-style: normal;
font-weight: 400;
line-height: normal;
 }
 
 .id-box img {
     width: 47%;
     border-radius: 50%;
    
     max-height: 190px;
     min-height: 190px;
     object-fit: cover;
 }
 .page-1 {
     width: 100%;
     background-color: #293857 !important;
     padding: 30px;
 }
 
 .contanir {
     width: 100%;
     max-width: 1600px;
     margin: 0 auto;
 }
 .Sponsorship h2 {
     color: #000;
     font-family: sans-serif;
     font-size: 18px;
     font-style: normal;
     font-weight: 500;
     line-height: 24px; /* 150% */
     padding-bottom: 25px;
     margin: 0px ;
 }
 
 .card-box {
     width: 100%;
     display: flex;
     justify-content: space-between;
 }
 
 .cards {
     border-radius: 16px;
     border: 2px solid #000;
     background: #F96;
     box-shadow: 4px 4px 0px 2px #1B1C1D;
     width: 30%;
     height: 100%;
     flex-shrink: 0;
 }
 .main {
     width: 100%;
     display: flex;
     justify-content: space-between;
     align-items: center !important;
     padding-top: 10px !important

   
 }
 
 .box-1 {
     height: 100%;
     background: transparent;
     width: 63%;
     display: flex;
     flex-wrap: wrap;
     align-items: center;
     justify-content: space-between;
     gap: 25px;
 }
 
 .box-2 {
     height: 100%;
     flex-shrink: 0;
     border-radius: 20px;
     background: #FFF;
     box-shadow: 0px 10px 54px 0px rgba(0, 0, 0, 0.25);
     width: 30%;
     padding: 30px;
 }
 
 .Sponsorship {
     width: 100%;
     height: 100%;
     flex-shrink: 0;
     border-radius: 20px;
     background: #FFF;
     box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
     padding: 30px 33px ;
 }
 .btn-box {
     width: 100%;
     display: flex;
     align-items: center;
     justify-content: space-between;
     padding: 30px 0px;
 }
 
 .btn-2 {
     display: flex;
     width: 46%;
     justify-content: space-between;
 }
 
 .btn-1 {
     width: 35%;
     display: flex;
     align-items: center;
     gap: 18px;
 }
 
 .Campaign {
     display: flex;
     align-items: center;
     gap: 10px;
     border-radius: 10px;
     background: #FFF;
     box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
     padding: 12px 20px;
 }
 
 .Campaign h2 {
     padding: 0px;
     color: #000;
     font-family: sans-serif;
     font-size: 16px;
     font-style: normal;
     font-weight: 500;
     line-height: normal;
 }
 
 .Campaign p {
     color: #000;
     font-family: sans-serif;
     font-size: 14px;
     font-style: normal;
     font-weight: 500;
     line-height: normal;
     margin: 0px;
 }
 
 .over-btn {
     width: 100%;
     display: flex;
     justify-content: center;
     padding: 50px 0px 0px 0px;
 }
 
 .over-btn button {
     border-radius: 6px;
     border: 1px solid #000;
     background: #F96;
     box-shadow: 2px 2px 0px 0px #1B1C1D;
     display: inline-flex;
     padding: 10px 21.25px 10px 20px;
     justify-content: center;
     align-items: center;
     gap: 4.75px;
     color: #FFF;
     text-align: center;
     font-family: sans-serif;
     font-size: 16px;
     font-style: normal;
     font-weight: 700;
     line-height: 24px; /* 150% */
 }
 
 .btn-1 button {
     border-radius: 6px;
     border: 1px solid #000;
     background: #F96;
     box-shadow: 2px 2px 0px 0px #1B1C1D;
     display: flex;
     width: 154.75px;
     justify-content: center;
     align-items: center;
     gap: 7.647px;
     flex-shrink: 0;
     padding: 10px;
     color: #FFF;
     text-align: center;
     font-family: sans-serif;
     font-size: 16px;
     font-style: normal;
     font-weight: 700;
     line-height: 24px; /* 150% */
 }
 
 button.Add {
     border-radius: 6px;
     border: 1px solid #000;
     background: #F5F3EA;
     box-shadow: 2px 2px 0px 0px #1B1C1D;
     color: #000;
 }
 
 .OverView {
     width: 100%;
     padding-top: 75px;
 }
 
 .OverView h2 {
     color: #000;
     font-family: sans-serif;
     font-size: 26px;
     font-style: normal;
     font-weight: 500;
     line-height: 24px; /* 92.308% */
     margin: 0px;
     padding-bottom: 30px;
 }
 
 .over-box {
     width: 100%;
     display: flex;
 }
 
 .Over-card h4 {
     color: #FF5757;
     font-family: sans-serif;
     font-size: 20px;
     font-style: normal;
     font-weight: 800;
     line-height: 24px; /* 114.286% */
     margin: 0px;
 }
 
 .Over-card h4 span {
     color: #000;
     font-family: sans-serif;
     font-size: 38px;
     font-style: normal;
     font-weight: 700;
     line-height: 24px; /* 58.537% */
     padding-left: 5px;
 }
 
 .Over-card {
     width: 25%;
 }
 
 /* .../ */
 .pox-1 {
     width: 100%;
     display: flex;
     justify-content: space-between;
     align-items: center;
     padding: 20px;
     border-bottom: 1px solid #000;
 }
 
 .pox-1 h2 {
     color: #000;
     text-align: center;
     font-family: sans-serif;
     font-size: 16px;
     font-style: normal;
     font-weight: 800;
     line-height: 24px; /* 150% */
     margin: 0px;
     padding: 0px;
 }
 
 .top-btn {
     width: 49%;
     display: flex;
     align-items: center;
 }
 
 .top-btn button {
     border: none;
     background: transparent;
 }
 
 .pox-2 {
     width: 100%;
     padding: 20px;
 }
 
 .pox-2 p {
     color: #000;
     font-family: sans-serif;
     font-size: 18px;
     font-style: normal;
     font-weight: 400;
     line-height: normal;
     letter-spacing: -0.96px;
     margin: 0px;
 }
 
 .pox-2 h2 {
     color: #000;
     font-family: sans-serif;
     font-style: normal;
     font-weight: 600;
     line-height: 24px; /* 150% */
     padding: 15px 0px;
 }
 
 .pox-box {
     width: 100%;
     display: flex;
     flex-wrap: wrap;
     align-items: center;
     justify-content: space-between;
     gap: 10px 0px;
 }
 
 .yes {
     width: 50%;
     display: flex;
     align-items: center;
     gap: 5px;
 }
 
 
 
 .pox-3 {
     width: 100%;
     display: flex;
     justify-content: space-between;
     align-items: flex-end;
     padding: 25px 0px 0px 0px;
 }
 
 .pox-3 h2 {
     color: #000;
     font-family: sans-serif;
     font-size: 18px;
     font-style: normal;
     font-weight: 400;
     line-height: normal;
     padding: 0px 0px 0px 0px;
 }
 
 .pox-3 p {
     color: #000;
     text-align: center;
     font-family: sans-serif;
     font-size: 15px;
     font-style: normal;
     font-weight: 600;
     line-height: 24px; /* 150% */
     width: 40%;
 }
 
 
 
 .pox-3 h2 span {
     color: #000;
     font-family: sans-serif;
     font-size: 20px;
     font-style: normal;
     font-weight: 600;
     line-height: normal;
 }
 
 
 button.llo {
     color: #fff;
 }
 
 
 
 /* .../ */
 
 
 
 
 
 .box-2 h2 {
     color: #000;
     font-family: sans-serif;
     font-size: 18px;
     font-style: normal;
     font-weight: 500;
     line-height: normal;
 }
 
 .id-box {
     width: 100%;
     display: flex;
     flex-direction: column;
     align-items: center;
     padding: 70px 0px 120px 0px;
 }
 
 .id-box h2 {
     color: #000;
     font-family: sans-serif;
     font-size: 26px;
     font-style: normal;
     font-weight: bold;
     line-height: normal;
     margin: 0px;
     padding: 20px 0px 4px 0px;
 }
 
 .id-box h3 {color: #000;
     font-family: system-ui !important;
     font-size: 16px;font-style: normal;font-weight: 500;line-height: normal;}
 
 .titel-box {
     width: 100%;
     display: flex;
     justify-content: space-between;
     align-items: center;
     padding-bottom: 20px;
 }
 
 .id-titel {
     display: flex;
     align-items: center;
     width: 30%;
     justify-content: space-between;
 }
 
 .id-titel p {
     color: #000;
     font-family: system-ui !important;
     font-size: 16px;
     font-style: normal;
     font-weight: 500;
     line-height: normal;
     margin: 0px;
     white-space: nowrap;
     overflow: hidden;
     text-overflow: ellipsis;
 }
 .contact-box {
     width: 100%;
     display: none !important;
     justify-content: space-around;
     align-items: center;
     padding-bottom: 40px;
 }
 
 .contact {
     display: flex;
     align-items: center;
     justify-content: space-between;
     gap: 15px;
 }
 
 .contact p {
     color: #000;
     font-family: sans-serif;
     font-size: 16px;
     font-style: normal;
     font-weight: 400;
     line-height: normal;
     margin: 0px;
 }
 
 .para-box {
     width: 100%;
     border-top: 1px solid #F96;
     display: flex;
     flex-wrap: wrap;
     justify-content: center;
     align-items: center;
     flex-direction: column;
 }
 
 .para-box p {
     color: #000;
     text-align: center;
     font-family: system-ui !important;
     font-size: 16px;
     font-style: normal;
     font-weight: 500;
     line-height: 24px; /* 150% */
     margin: 0px;
     padding: 32px 0px 44px 0px;
 }
 
 .para-box button {
     border-radius: 6px;
     border: 1px solid #000;
     background: #F96;
     box-shadow: 2px 2px 0px 0px #1B1C1D;
     display: flex;
     width: 154.75px;
     height: 44px;
     padding: 10px 18px;
     justify-content: center;
     align-items: center;
     gap: 7.647px;
     flex-shrink: 0;
      /* 150% */
 }
 
 .para-box button p {
     color: #FFF;
     text-align: center;
     font-family: sans-serif;
     font-size: 16px;
     font-style: normal;
     font-weight: 700;
     line-height: 24px; /* 150% */
     padding: 0px;
 }
 
 .new-1 {
     width: 100%;
     display: flex;
     justify-content: space-between;
 }
 
 .new-2 {
     width: 100%;
     display: flex;
     align-items: center;
     justify-content: space-between;
 }
 
 .new-3 {
     width: 100%;
     display: flex;
     align-items: center;
     gap: 20px;
 }
 
 .rol-1 {
     border-radius: 20px;
     background: #FFF;
     box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
     flex-shrink: 0;
     width: 36%;
     padding: 32px;
 }
 
 .rol-1 p {
     color: #000;
     font-family: sans-serif;
     font-size: 16px;
     font-style: normal;
     font-weight: 500;
     line-height: 24px; /* 150% */
     margin: 0px;
     padding-bottom: 12px;
 }
 
 .rol-1 h2 {
     color: #1B1C1D;
     font-family: fantasy;
     font-size: 66px;
     font-style: normal;
     font-weight: bold;
     line-height: normal;
     letter-spacing: 3px;
     letter-spacing: 3px;
 }
 
 .new-btn-lid {
     width: 100%;
     display: flex;
     align-items: center;
     justify-content: space-between;
 }
 
 .new-btn-lid  button {
     border-radius: 6px;
     border: 1px solid #000;
     background: #F96;
     box-shadow: 2px 2px 0px 0px #1B1C1D;
     display: flex;
     width: 154.75px;
     height: 44px;
     padding: 10px 18px;
     justify-content: center;
     align-items: center;
     gap: 7.647px;
     flex-shrink: 0;
 }
 
 .new-btn-lid button p {
     margin: 0px;
     color: #FFF;
     text-align: center;
     font-family: sans-serif;
     font-size: 16px;
     font-style: normal;
     font-weight: 700;
     line-height: 24px;
     margin: 0px;
     padding: 0px;
 }
 
 .rol-3 {
     width: 62%;
     display: flex;
     flex-wrap: wrap;
     align-items: center;
     justify-content: space-between;
     padding-top: 24px;
 }
 
 .rol-3 p {
     margin: 0px;
     color: #000;
     font-family: sans-serif;
     font-size: 16px;
     font-style: normal;
     font-weight: 500;
     line-height: normal;
     width: 100%;
 }
 
 .rol-card {
     width: 48%;
     border-radius: 10px;
     background: #FFF;
     box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
     display: flex;
     align-items: center;
     justify-content: space-between;
     padding: 10px 15px;
     flex-wrap: wrap;
 }
 
 .rol-para h2 {
     color: #000;
     font-family: sans-serif;
     font-size: 16px;
     font-style: normal;
     font-weight: 500;
     line-height: normal;
     margin: 0px;
 }
 
 .rol-para {
     width: 84%;
 }
 
 .rol-para p {
     color: #000;
     font-family: sans-serif;
     font-size: 14px;
     font-style: normal;
     font-weight: 500;
     line-height: normal;
     margin: 0px;
 }
 
 .div-1 {
     width: 100%;
     display: flex;
     align-items: center;
     justify-content: space-around;
 }
 
 .div-1 h2 {
     color: #000;
     font-family: sans-serif;
     font-size: 16px;
     font-style: normal;
     font-weight: bold;
     line-height: normal;
     margin: 0px;
     width: 80%;
 }
 
 .div-1 p {
     width: 20%;
 }
 
 .div-2 {
     width: 100%;
     display: flex;
     align-items: center;
     justify-content: space-between;
     padding-top: 15px;
 }
 
 .Enrolled {
     display: flex;
     align-items: center;
     width: 58%;
 }
 
 .Enrolled {}
 
 .Reviews {
     width: 40%;
     display: flex;
     align-items: center;
 }
 
 .short-card {
     width: 24%;
     border-radius: 0px !important;
     background: #DED4A2 !important;
     box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25) !important;
     padding: 18px 25px;
 }
 
 .short-card p {
     color: #000;
     font-family: sans-serif;
     font-size: 16px;
     font-style: normal;
     font-weight: 500;
     line-height: 24px; /* 150% */
     margin: 0px;
 }
 
 .short-card h2 {
    color: #1B1C1D !important;
    font-family: Saol Display !important;
    font-size: 46px;
    font-style: normal;
    font-weight: 400 !important;
    line-height: normal;
    margin: 0px;
    padding: 12px 0px 5px 0px;
}
 
 .short-card h3 {
     color: #000;
     font-family: sans-serif;
     font-size: 16px;
     font-style: normal;
     font-weight: 400;
     line-height: normal;
     margin: 0px;
 }
 .dashbord-card {
    background: #DED4A2 !important;
     box-shadow: 4px 0px 24px 0px rgba(0, 0, 0, 0.25);
     height: 417px;
     flex-shrink: 0;
     width: 30% !important;
     border-radius: 0px 0px 0px 0px !important;
 }
 
 .conting-card {
     height: 417px;
     flex-shrink: 0;
     background: #DED4A2;
     box-shadow: 4px 0px 24px 0px rgba(0, 0, 0, 0.25);
     width: 68%;
     padding: 0px !important;
     display: flex;
     flex-wrap: wrap;
     align-items: center;
     justify-content: space-between;
     border-radius: 0px 0px 0px 0px !important;
 }
 
 .conting-card h2 {
     color: #000;
     font-family: sans-serif;
     font-size: 26px;
     font-style: normal;
     font-weight: 500;
     line-height: 24px; /* 92.308% */
     width: 100%;
     margin: 0px;
 }
 
 .divs {
     width: 48%;
 }
 
 .divs h2 {
     color: #F96;
     font-family: sans-serif;
     font-size: 21px;
     font-style: normal;
     font-weight: bold;
     line-height: 24px; /* 114.286% */
     margin: 0px;
 }
 .hello-bhai img {
    width: 100%;
}
 .divs h3 {
     color: #000;
     font-family: sans-serif;
     font-size: 41px;
     font-style: normal;
     font-weight: 700;
     line-height: 24px; /* 58.537% */
     margin: 0px;
     padding-top: 20px;
 }
 .btn-post button:hover svg {
  transform: translateX(80px);
  color: var(--hovered-color);
}
.btn-post{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
.btn-post button {
    background: transparent;
    border: none;
    align-items: center;
    display: flex;
    gap: 10px;
}




 
 @media screen and (max-width: 1600px){
    .chartsnew {
    padding: 0px 0px 50px 0px;
}
   .contanir {
     width: 100%;
     max-width: 1440px;
     margin: 0 auto;
 }
 .dashbord-card {
     background: #DED4A2 !important;
     box-shadow: 4px 0px 24px 0px rgba(0, 0, 0, 0.25);
     height: 400px;
     flex-shrink: 0;
     width: 64%;
     border-radius: 20px 0px 0px 20px;
 }
 .divs h2 {
     color: #F96;
     font-family: sans-serif;
     font-size: 18px;
     font-style: normal;
     font-weight: bold;
     line-height: 24px;
     margin: 0px;
 }
 .divs h3 {
     color: #000;
     font-family: sans-serif;
     font-size: 38px;
     font-style: normal;
     font-weight: 700;
     line-height: 24px;
     margin: 0px;
     padding-top: 12px;
 }
 .rol-1 h2 {
     color: #1B1C1D;
     font-family: fantasy;
     font-size: 55px;
     font-style: normal;
     font-weight: 1000;
     line-height: normal;
     text-align: center;
     letter-spacing: 3px;
 }
 .new-btn-lid button {
     border-radius: 6px;
     border: 1px solid #000;
     background: #F96;
     box-shadow: 2px 2px 0px 0px #1B1C1D;
     display: flex;
     width: 130px;
     height: 38px;
     padding: 10px 18px;
     justify-content: center;
     align-items: center;
     gap: 7.647px;
     flex-shrink: 0;
 }
 .new-btn-lid button p {
     margin: 0px;
     color: #FFF;
     text-align: center;
     font-family: sans-serif;
     font-size: 12px;
     font-style: normal;
     font-weight: 700;
     line-height: 24px;
     margin: 0px;
     padding: 0px;
 }
 .rol-1 {
     border-radius: 20px;
     background: #FFF;
     box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
     flex-shrink: 0;
     width: 36%;
     padding: 30px;
 }
 .rol-3 {
     width: 62%;
     display: flex;
     flex-wrap: wrap;
     align-items: center;
     justify-content: space-between;
     padding-top: 15px;
 }
 .rol-card svg {
     width: 26px;
     height: 25px;
 }
 
 .rol-3 p {
     margin: 0px;
     color: #000;
     font-family: sans-serif;
     font-size: 14px;
     font-style: normal;
     font-weight: 500;
     line-height: normal;
     width: 100%;
 }
 .rol-para p {
     color: #000;
     font-family: sans-serif;
     font-size: 12px;
     font-style: normal;
     font-weight: 500;
     line-height: normal;
     margin: 0px;
 }
 .pox-1 {
     width: 100%;
     display: flex;
     justify-content: space-between;
     align-items: center;
     padding: 12px;
     border-bottom: 1px solid #000;
 }
 .top-btn button {
     border: none;
     background: transparent;
     padding: 4px;
 }
 .yes {
     width: 50%;
     display: flex;
     align-items: center;
     gap: 2px;
 }
 .pox-3 h2 span {
     color: #000;
     font-family: sans-serif;
     font-size: 17px;
     font-style: normal;
     font-weight: 600;
     line-height: normal;
 }
 .div-1 p {
     width: 20%;
 }
 .short-card h2 {
     color: #000;
     font-family: sans-serif;
     font-size: 38px;
     font-style: normal;
     font-weight: 1000;
     line-height: normal;
     margin: 0px;
     padding: 5px 0px 0px 0px;
 }
 .conting-card {
     height: 400px;
     flex-shrink: 0;
     background: #FFF;
     box-shadow: 4px 0px 24px 0px rgba(0, 0, 0, 0.25);
     width: 35%;
     padding: 15px 25px;
     display: flex;
     flex-wrap: wrap;
     align-items: center;
     justify-content: space-between;
     border-radius: 0px 20px 20px 0px;
 }
 .id-box {
     width: 100%;
     display: flex;
     flex-direction: column;
     align-items: center;
     padding: 35px 0px 70px 0px;
 }
 .short-card {
     width: 24%;
     border-radius: 20px;
     background: #FFF;
     box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
     padding: 14px 20px;
 }
 .pox-3 p {
  
     color: #000;
     text-align: center;
     font-family: sans-serif;
     font-size: 14px;
     font-style: normal;
     font-weight: 600;
     line-height: 24px;
     width: 40%;
 }
 .pox-3 h2 {
     color: #000;
     font-family: sans-serif;
     font-size: 17px;
     font-style: normal;
     font-weight: 400;
     line-height: normal;
     padding: 0px 0px 0px 0px;
 }
 .btn-1 button {
     border-radius: 6px;
     border: 1px solid #000;
     background: #F96;
     box-shadow: 2px 2px 0px 0px #1B1C1D;
     display: flex;
     width: 154.75px;
     justify-content: center;
     align-items: center;
     gap: 7.647px;
     flex-shrink: 0;
     padding: 8px;
     color: #FFF;
     text-align: center;
     font-family: sans-serif;
     font-size: 16px;
     font-style: normal;
     font-weight: 700;
     line-height: 24px;
 }
 .btn-2 {
     display: flex;
     width: 50%;
     justify-content: space-between;
 }
 .id-titel {
     display: flex;
     align-items: center;
     width: 32%;
     justify-content: space-between;
 }
 .over-btn button {
     border-radius: 6px;
     border: 1px solid #000;
     background: #F96;
     box-shadow: 2px 2px 0px 0px #1B1C1D;
     display: inline-flex;
     padding: 8px 21.25px 8px 20px;
     justify-content: center;
     align-items: center;
     gap: 4.75px;
     color: #FFF;
     text-align: center;
     font-family: sans-serif;
     font-size: 16px;
     font-style: normal;
     font-weight: 700;
     line-height: 24px;
 }
 .Over-card h4 span {
     color: #000;
     font-family: sans-serif;
     font-size: 35px;
     font-style: normal;
     font-weight: 700;
     line-height: 24px;
     padding-left: 5px;
 }
 .Over-card h4 {
     color: #FF5757;
     font-family: sans-serif;
     font-size: 18px;
     font-style: normal;
     font-weight: 800;
     line-height: 24px;
     margin: 0px;
 }
 .para-box button {
     border-radius: 6px;
     border: 1px solid #000;
     background: #F96;
     box-shadow: 2px 2px 0px 0px #1B1C1D;
     display: flex;
     width: 154.75px;
     height: 42px;
     padding: 10px 18px;
     justify-content: center;
     align-items: center;
     gap: 7.647px;
     flex-shrink: 0;
 }
 button.Add {
     border-radius: 6px;
     border: 1px solid #000 !important;
     background: #F5F3EA !important;
     box-shadow: 2px 2px 0px 0px #1B1C1D !important; 
     color: #000 !important;
 }



 .sq240 {
    font-size: 20px;
}

.lorem {
    font-size: 12px;
}

.posted {
    font-size: 13px;
}

span.rights100 svg {
    width: 20px;
    height: 20px;
}

.rights {
    padding-right: 16px;
    font-size: 10px !important;
}

.rights100 {
    padding-right: 16px;
    font-size: 14px;
}

.inputclass {
    padding: 18px;
}

.setsvg {
    width: 28px;
    height: 28px;
}


 }
 
 @media screen and (max-width: 1440px){

    .chartsnew {
    padding: 0px 0px 50px 0px;
}
 
     .id-box h3 {
     color: #000;
     font-family: sans-serif;
     font-size: 14px;
     font-style: normal;
     font-weight: 500;
     line-height: normal;
 }
   .contanir {
     width: 100%;
     max-width: 1170px;
     margin: 0 auto;
 }
 .div-1 h2 {
     color: #000;
     font-family: sans-serif;
     font-size: 14px;
     font-style: normal;
     font-weight: bold;
     line-height: normal;
     margin: 0px;
     width: 80%;
 }
 .rol-para h2 {
     color: #000;
     font-family: sans-serif;
     font-size: 12px;
     font-style: normal;
     font-weight: 500;
     line-height: normal;
     margin: 0px;
 }
 
 .rol-3 p {
     margin: 0px;
     color: #000;
     font-family: sans-serif;
     font-size: 13px;
     font-style: normal;
     font-weight: 500;
     line-height: normal;
     width: 100%;
 }
 .rol-1 h2 {
     color: #1B1C1D;
     font-family: fantasy;
     font-size: 38px;
     font-style: normal;
     font-weight: 1000;
     line-height: normal;
     text-align: center;
     letter-spacing: 3px;
 }
 .new-btn-lid button {
     border-radius: 6px;
     border: 1px solid #000;
     background: #F96;
     box-shadow: 2px 2px 0px 0px #1B1C1D;
     display: flex;
     width: 110px;
     height: 34px;
     padding: 10px 0px;
     justify-content: center;
     align-items: center;
     gap: 4px;
     flex-shrink: 0;
 }
 .div-1 svg {
     width: 20px;
     height: 20px;
 }
 .div-1 p {
     width: 20%;
     font-size: 12px;
 }
 .rol-para p {
     color: #000;
     font-family: sans-serif;
     font-size: 10px;
     font-style: normal;
     font-weight: 500;
     line-height: normal;
     margin: 0px;
 }
 .Reviews p {
     font-size: 10px;
 }
 .Enrolled p {
     font-size: 10px;
 }
 .div-2 {
     width: 100%;
     display: flex;
     align-items: center;
     justify-content: space-between;
     padding-top: 3px;
 }
 .short-card p {
     color: #000;
     font-family: sans-serif;
     font-size: 15px;
     font-style: normal;
     font-weight: 500;
     line-height: 24px;
     margin: 0px;
 }
 .short-card h2 {
     color: #000;
     font-family: sans-serif;
     font-size: 30px;
     font-style: normal;
     font-weight: 1000;
     line-height: normal;
     margin: 0px;
     padding: 0px 0px 0px 0px;
 }
 .short-card {
     width: 24%;
     border-radius: 15px;
     background: #FFF;
     box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
     padding: 12px 20px;
 }
 .dashbord-card {
     background: #FFF;
     box-shadow: 4px 0px 24px 0px rgba(0, 0, 0, 0.25);
     height: 405px;
     flex-shrink: 0;
     width: 64%;
     border-radius: 20px 0px 0px 20px;
 }
 .conting-card {
    height: 405px;
     flex-shrink: 0;
     background: #FFF;
     box-shadow: 4px 0px 24px 0px rgba(0, 0, 0, 0.25);
     width: 35%;
     padding: 15px 25px;
     display: flex;
     flex-wrap: wrap;
     align-items: center;
     justify-content: space-between;
     border-radius: 0px 20px 20px 0px;
 }
 .box-1 {
     height: 100%;
     background: transparent;
     width: 65%;
     display: flex;
     flex-wrap: wrap;
     align-items: center;
     justify-content: space-between;
     gap: 30px;
 }
 .divs h2 {
     color: #F96;
     font-family: sans-serif;
     font-size: 16px;
     font-style: normal;
     font-weight: bold;
     line-height: 24px;
     margin: 0px;
 }
 .divs h3 {
     color: #000;
     font-family: sans-serif;
     font-size: 28px;
     font-style: normal;
     font-weight: 700;
     line-height: 24px;
     margin: 0px;
     padding-top: 10px;
 }
 .conting-card {
    height: 405px;
     flex-shrink: 0;
     background: #FFF;
     box-shadow: 4px 0px 24px 0px rgba(0, 0, 0, 0.25);
     width: 35%;
     padding: 12px 15px;
     display: flex;
     flex-wrap: wrap;
     align-items: center;
     justify-content: space-between;
     border-radius: 0px 20px 20px 0px;
 }
 .id-box {
     width: 100%;
     display: flex;
     flex-direction: column;
     align-items: center;
     padding: 40px 0px 65px 0px;
 }
 .rol-1 {
     border-radius: 20px;
     background: #FFF;
     box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
     flex-shrink: 0;
     width: 36%;
     padding: 20px;
 }
 .pox-2 h2 {
     color: #000;
     font-family: sans-serif;
     font-style: normal;
     font-weight: 600;
     line-height: 20px;
     padding: 12px 0px;
 }
 .Sponsorship {
     width: 100%;
     height: 100%;
     flex-shrink: 0;
     border-radius: 20px;
     background: #FFF;
     box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
     padding: 30px 20px;
 }
 .OverView {
     width: 100%;
     padding-top: 60px;
 }
 .OverView h2 {
     color: #000;
     font-family: sans-serif;
     font-size: 24px;
     font-style: normal;
     font-weight: 500;
     line-height: 24px;
     margin: 0px;
     padding-bottom: 20px;
 }
 .Over-card h4 {
     color: #FF5757;
     font-family: sans-serif;
     font-size: 16px;
     font-style: normal;
     font-weight: 800;
     line-height: 24px;
     margin: 0px;
 }
 .Over-card h4 span {
     color: #000;
     font-family: sans-serif;
     font-size: 28px;
     font-style: normal;
     font-weight: 700;
     line-height: 24px;
     padding-left: 0px;
 }
 .over-btn {
     width: 100%;
     display: flex;
     justify-content: center;
     padding: 40px 0px 0px 0px;
 }
 .over-btn button {
     border-radius: 6px;
     border: 1px solid #000;
     background: #F96;
     box-shadow: 2px 2px 0px 0px #1B1C1D;
     display: inline-flex;
     padding: 7px 16.25px 7px 15px;
     justify-content: center;
     align-items: center;
     gap: 4.75px;
     color: #FFF;
     text-align: center;
     font-family: sans-serif;
     font-size: 16px;
     font-style: normal;
     font-weight: 700;
     line-height: 24px;
 }
 .top-btn button {
     border: none;
     background: transparent;
     padding: 4px;
     display: flex;
     align-items: center;
 }
 .top-btn button svg {
     width: 15px;
     height: 15px;
 }
 .top-btn {
     width: 42%;
     display: flex;
     align-items: center;
 }
 .pox-1 {
     width: 100%;
     display: flex;
     justify-content: space-between;
     align-items: center;
     padding: 8px;
     border-bottom: 1px solid #000;
 }
 .top-btn button span {
     font-size: 12px;
 }
 .pox-1 h2 {
     color: #000;
     text-align: center;
     font-family: sans-serif;
     font-size: 14px;
     font-style: normal;
     font-weight: 800;
     line-height: 24px;
     margin: 0px;
     padding: 0px;
 }
 .pox-2 {
     width: 100%;
     padding: 10px;
 }
 .pox-2 p {
     color: #000;
     font-family: sans-serif;
     font-size: 16px;
     font-style: normal;
     font-weight: 400;
     line-height: normal;
     letter-spacing: -0.96px;
     margin: 0px;
 }
 .pox-3 h2 {
     color: #000;
     font-family: sans-serif;
     font-size: 14px;
     font-style: normal;
     font-weight: 400;
     line-height: normal;
     padding: 0px 0px 0px 0px;
     width: 58%;
 }
 .pox-3 {
     width: 100%;
     display: flex;
     justify-content: space-between;
     align-items: flex-end;
     padding: 15px 0px;
 }
 
 .pox-box {
     width: 100%;
     display: flex;
     flex-wrap: wrap;
     align-items: center;
     justify-content: space-between;
     gap: 5px 0px;
 }
 .cards {
     border-radius: 16px;
     border: 2px solid #000;
     background: #F96;
     box-shadow: 4px 4px 0px 2px #1B1C1D;
     width: 30%;
     height: 100%;
     flex-shrink: 0;
 }
 .yes p {
     font-size: 14px;
 }
 .pox-3 h2 span {
     color: #000;
     font-family: sans-serif;
     font-size: 15px;
     font-style: normal;
     font-weight: 600;
     line-height: normal;
 }
 .pox-3 p {
     color: #000;
     text-align: center;
     font-family: sans-serif;
     font-size: 12px;
     font-style: normal;
     font-weight: 600;
     line-height: 24px;
     width: 44%;
     margin: 0px;
     padding: 0px;
 }
 .btn-1 button {
     border-radius: 6px;
     border: 1px solid #000;
     background: #F96;
     box-shadow: 2px 2px 0px 0px #1B1C1D;
     display: flex;
     width: 130.75px;
     justify-content: center;
     align-items: center;
     gap: 7.647px;
     flex-shrink: 0;
     padding: 6px;
     color: #FFF;
     text-align: center;
     font-family: sans-serif;
     font-size: 14px;
     font-style: normal;
     font-weight: 700;
     line-height: 24px;
 }
 .btn-2 {
     display: flex;
     width: 52%;
     justify-content: space-between;
 }
 .Campaign {
     display: flex;
     align-items: center;
     gap: 8px;
     border-radius: 10px;
     background: #FFF;
     box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
     padding: 8px 10px;
 }
 .Campaign svg {
     width: 30px;
     height: 30px;
 }
 .id-box {
     width: 100%;
     display: flex;
     flex-direction: column;
     align-items: center;
     padding: 50px 0px 80px 0px;
 }
 /* .id-box img {
     width: 40%;
 } */
 
 .id-box img {
     width: 50%;
     border-radius: 50%;
    
     max-height: 150px;
     min-height: 150px;
     object-fit: cover;
 }
 .id-box h2 {
     color: #000;
     font-family: sans-serif;
     font-size: 24px;
     font-style: normal;
     font-weight: bold;
     line-height: normal;
     margin: 0px;
     padding: 15px 0px 2px 0px;
 }
 .contact {
     display: flex;
     align-items: center;
     justify-content: space-between;
     gap: 5px;
 }
 .contact p {
     color: #000;
     font-family: sans-serif;
     font-size: 12px;
     font-style: normal;
     font-weight: 400;
     line-height: normal;
     margin: 0px;
 }
 .id-titel p {
     color: #000;
     font-family: sans-serif;
     font-size: 10px;
     font-style: normal;
     font-weight: 500;
     line-height: normal;
     margin: 0px;
     white-space: nowrap;
     overflow: hidden;
     text-overflow: ellipsis;
 }
 .id-titel svg {
     width: 18px;
     height: 18px;
 }
 .contact-box {
     width: 100%;
     display: none;
     justify-content: space-around;
     align-items: center;
     padding-bottom: 15px;
 }
 .para-box p {
     color: #000;
     text-align: center;
     font-family: system-ui;
     font-size: 13px;
     font-style: normal;
     font-weight: 500;
     line-height: 24px;
     margin: 0px;
     padding: 25px 0px 25px 0px;
 }
 .para-box button {
     border-radius: 6px;
     border: 1px solid #000;
     background: #F96;
     box-shadow: 2px 2px 0px 0px #1B1C1D;
     display: flex;
     width: 144.75px;
     height: 38px;
     padding: 10px 18px;
     justify-content: center;
     align-items: center;
     gap: 7.647px;
     flex-shrink: 0;
 }
 .main {
     width: 100%;
     display: flex;
     justify-content: space-between;
     align-items: flex-start;
 }
 .box-2 {
     height: 100%;
     flex-shrink: 0;
     border-radius: 20px;
     background: #FFF;
     box-shadow: 0px 10px 54px 0px rgba(0, 0, 0, 0.25);
     width: 30%;
     padding: 24px;
 }


 .inputclass {
    padding: 14px;
}

.setsvg {
    width: 25px;
    height: 25px;
}

.box-2 {
    width: 32% !important;
}

.posted {
    font-size: 11px;
}
 }
 @media screen and (max-width: 1024px){
   .page-1 {
     width: 100%;
     background-color: #293857;
     padding: 40px;
 }
 .main {
     width: 100%;
     display: flex;
     justify-content: center;
     align-items: center;
     flex-wrap: wrap;
     gap: 55px 0px;
 }
 .box-1 {
   height: 100%;
     background: transparent;
     width: 100%;
 }
 .box-2 {
     height: 720px;
     flex-shrink: 0;
     border-radius: 20px;
     background: #FFF;
     box-shadow: 0px 10px 54px 0px rgba(0, 0, 0, 0.25);
     width: 50% !important;
     padding: 24px;
 }
 .btn-2 {
     display: flex;
     width: 44%;
     justify-content: space-between;
 }
 .setp{
    padding: 14px 0px 0px 0px;
}
 }
 @media screen and (max-width: 768px){
   .cards {
     border-radius: 16px;
     border: 2px solid #000;
     background: #F96;
     box-shadow: 4px 4px 0px 2px #1B1C1D;
     width: 44%;
     height: 100%;
     flex-shrink: 0;
 }
 .new-1 {
     width: 100%;
     display: flex;
     justify-content: space-between;
     flex-direction: column;
 }
 .rol-1 {
     border-radius: 20px;
     background: #FFF;
     box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
     flex-shrink: 0;
     width: 45%;
     padding: 20px;
 }
 .rol-3 {
     width: 75%;
     display: flex;
     flex-wrap: wrap;
     align-items: center;
     justify-content: space-between;
     padding-top: 15px;
     gap: 15px;
 }
 .card-box {
     width: 100%;
     display: flex;
     justify-content: center;
     flex-wrap: wrap;
     align-items: center;
     gap: 31px;
 }
 .btn-box {
     width: 100%;
     display: flex;
     align-items: stretch;
     justify-content: space-between;
     padding: 30px 0px 0px 0px ; 
     flex-direction: column;
     gap: 25px;
 }
 
 .btn-2 {
     display: flex;
     width: 60%;
     justify-content: space-between;
 }
 .box-2 {
     height: 720px;
     flex-shrink: 0;
     border-radius: 20px;
     background: #FFF;
     box-shadow: 0px 10px 54px 0px rgba(0, 0, 0, 0.25);
     width: 58%;
     padding: 24px;
 }
 .Sponsorship {
     width: 100%;
     height: 100%;
     flex-shrink: 0;
     border-radius: 20px;
     background: #FFF;
     box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
     padding: 30px 20px;
 }
 }
 @media screen and (max-width: 600px){
     .short-card h3 {
     color: #000;
     font-family: sans-serif;
     font-size: 12px;
     font-style: normal;
     font-weight: 400;
     line-height: normal;
     margin: 0px;
 }
 
 .id-titel p {
     color: #000;
     font-family: sans-serif;
     font-size: 8px;
     font-style: normal;
     font-weight: 500;
     line-height: normal;
     margin: 0px;
     white-space: nowrap;
     overflow: hidden;
     text-overflow: ellipsis;
 }
 .contact p {
     color: #000;
     font-family: sans-serif;
     font-size: 10px;
     font-style: normal;
     font-weight: 400;
     line-height: normal;
     margin: 0px;
 }
 
 .rol-1 p {
     color: #000;
     font-family: sans-serif;
     font-size: 13px;
     font-style: normal;
     font-weight: 500;
     line-height: 24px;
     margin: 0px;
     padding-bottom: 12px;
 }
 
 
   .page-1 {
     width: 100%;
     background-color: red;
     padding: 20px 0px;
 }
 .rol-card svg {
     width: 20px;
     height: 20px;
 }
 .yes {
     width: 50%;
     display: flex;
     align-items: center;
     gap: 2px;
     justify-content: center;
 }
 .cards {
     border-radius: 16px;
     border: 2px solid #000;
     background: #F96;
     box-shadow: 4px 4px 0px 2px #1B1C1D;
     width: 85%;
     height: 100%;
     flex-shrink: 0;
 }
 .btn-box {
     width: 100%;
     display: flex;
     padding: 30px 0px 0px 0px;
     flex-direction: column;
     gap: 25px ;
     align-content: center;
     align-items: center;
 }
 .btn-1 {
     width: 100%;
     display: flex;
     align-items: center;
     gap: 18px;
     justify-content: center;
 }
 .btn-2 {
     display: flex;
     width: 60%;
     flex-direction: column;
     gap: 12px;
 }
 .over-box {
     width: 100%;
     display: flex;
     flex-wrap: wrap;
     gap: 20px 0px;
 }
 .Over-card {
     width: 50%;
 }
 .OverView {
     width: 100%;
     padding-top: 40px;
 }
 .over-btn button {
     border-radius: 6px;
     border: 1px solid #000;
     background: #F96;
     box-shadow: 2px 2px 0px 0px #1B1C1D;
     display: inline-flex;
     padding: 6px 16.25px 6px 15px;
     justify-content: center;
     align-items: center;
     gap: 4.75px;
     color: #FFF;
     text-align: center;
     font-family: sans-serif;
     font-size: 14px;
     font-style: normal;
     font-weight: 700;
     line-height: 24px;
 }
 .over-btn {
     width: 100%;
     display: flex;
     justify-content: center;
     padding: 30px 0px 0px 0px;
 }
 .box-2 {
     height: 100%;
     flex-shrink: 0;
     border-radius: 20px;
     background: #FFF;
     box-shadow: 0px 10px 54px 0px rgba(0, 0, 0, 0.25);
     width: 90% !important;
 }
 .id-box {
     width: 100%;
     display: flex;
     flex-direction: column;
     align-items: center;
     padding: 30px 0px 50px 0px;
 }
 .rol-1 {
     border-radius: 20px;
     background: #FFF;
     box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
     flex-shrink: 0;
     width: 100%;
     padding: 20px;
 }
 .new-btn-lid {
     width: 100%;
     display: flex;
     align-items: center;
     justify-content: center;
     gap: 20px;
 }
 .rol-3 {
     width: 100%;
     display: flex;
     flex-wrap: wrap;
     align-items: center;
     justify-content: space-between;
     padding-top: 15px;
     gap: 10px;
 }
 .rol-card {
     width: 48%;
     border-radius: 10px;
     background: #FFF;
     box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
     display: flex;
     align-items: center;
     justify-content: space-between;
     padding: 12px 10px;
     flex-wrap: wrap;
 }
 .rol-para h2 {
     color: #000;
     font-family: sans-serif;
     font-size: 12px;
     font-style: normal;
     font-weight: 500;
     line-height: normal;
     margin: 0px;
 }
 .rol-para p {
     color: #000;
     font-family: sans-serif;
     font-size: 8px;
     font-style: normal;
     font-weight: 500;
     line-height: normal;
     margin: 0px;
 }
 .div-1 h2 {
     color: #000;
     font-family: sans-serif;
     font-size: 12px;
     font-style: normal;
     font-weight: bold;
     line-height: normal;
     margin: 0px;
     width: 80%;
 }
 .div-1 svg {
     width: 15px;
     height: 15px;
 }
 .Enrolled p {
     font-size: 7px;
 }
 .Reviews p {
     font-size: 7px;
 }
 .Enrolled svg {
     width: 18px;
     height: 18px;
 }
 .Reviews svg {
     width: 18px;
     height: 18px;
 }
 .new-2 {
     width: 100%;
     display: flex;
     align-items: center;
     justify-content: center;
     flex-wrap: wrap;
     gap: 15px;
 }
 .short-card {
     width: 42%;
     background: #FFF;
     box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
     padding: 12px 20px;
 }
 .new-3 {
     width: 100%;
     display: flex;

     flex-direction: column;
     align-items: center;
     gap: 28px;
 }
 .dashbord-card {
     background: #FFF;
     box-shadow: 4px 0px 24px 0px rgba(0, 0, 0, 0.25);
     height: 100%;
     flex-shrink: 0;
     width: 90%;
     border-radius: 20px;
 }
 .conting-card {
     height: 350px;
     flex-shrink: 0;
     background: #FFF;
     box-shadow: 4px 0px 24px 0px rgba(0, 0, 0, 0.25);
     width: 76%;
     padding: 12px 15px;
     display: flex;
     flex-wrap: wrap;
     align-items: center;
     justify-content: space-between;
     border-radius: 20px;
 }

 .byby-top {
    padding-top: 20px !important;
}
.colgap{
    display: flex;
    flex-direction: column;
    gap: 8px;
}


.colgap p {
    margin: 0px;
}
.main{
  
    gap: 15px 0px;
}
.byby-top p {
    margin: 0px;
}


.box-2 {
    width: 100% !important;
}

.inputclass {
    padding: 10px 60px 10px 10px ;
}

.setsvg {
    width: 20px;
    height: 20px;
}
.overview {
    font-size: 20px;
}

.sq240 {
    font-size: 18px;
}

 }
 </style>