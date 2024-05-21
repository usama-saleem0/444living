<template>
 
    <div class="page-1">
       
     <div class="contanir" >
        <div class="main">
        <div class="box-1">
            <div class="row" style="width: 100% ; margin-top: 20px; border-bottom: 1px solid #DED4A2;">
                <div class="col-6">
                    <h2 class="topreal">
                        Top Realtors
                    </h2>
                </div>

                <div class="col-6 text-right" style="    display: flex;
    align-content: center;
    justify-content: flex-end;
    align-items: center;
">
                    <span class="topspan">
                        By location
                    </span> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <path d="M11.25 19.6875C11.25 19.4389 11.3488 19.2004 11.5246 19.0246C11.7004 18.8488 11.9389 18.75 12.1875 18.75H17.8125C18.0611 18.75 18.2996 18.8488 18.4754 19.0246C18.6512 19.2004 18.75 19.4389 18.75 19.6875C18.75 19.9361 18.6512 20.1746 18.4754 20.3504C18.2996 20.5262 18.0611 20.625 17.8125 20.625H12.1875C11.9389 20.625 11.7004 20.5262 11.5246 20.3504C11.3488 20.1746 11.25 19.9361 11.25 19.6875ZM7.5 14.0625C7.5 13.8139 7.59877 13.5754 7.77459 13.3996C7.9504 13.2238 8.18886 13.125 8.4375 13.125H21.5625C21.8111 13.125 22.0496 13.2238 22.2254 13.3996C22.4012 13.5754 22.5 13.8139 22.5 14.0625C22.5 14.3111 22.4012 14.5496 22.2254 14.7254C22.0496 14.9012 21.8111 15 21.5625 15H8.4375C8.18886 15 7.9504 14.9012 7.77459 14.7254C7.59877 14.5496 7.5 14.3111 7.5 14.0625ZM3.75 8.4375C3.75 8.18886 3.84877 7.9504 4.02459 7.77459C4.2004 7.59877 4.43886 7.5 4.6875 7.5H25.3125C25.5611 7.5 25.7996 7.59877 25.9754 7.77459C26.1512 7.9504 26.25 8.18886 26.25 8.4375C26.25 8.68614 26.1512 8.9246 25.9754 9.10041C25.7996 9.27623 25.5611 9.375 25.3125 9.375H4.6875C4.43886 9.375 4.2004 9.27623 4.02459 9.10041C3.84877 8.9246 3.75 8.68614 3.75 8.4375Z" fill="#DED4A2"/>
                        </svg>
                        
                </div>

            </div>

            <div class="khasomai">

    <div class="nazar-ts" v-for="item in model">
        
        <div class="Realtor-card">
                <div class="Realtor-1-list">
                  <div class="Realtor-logo">
                    
                   
                    <img :src="'/profile/' + item.profile" alt="">

                  </div>

                  <span><h3>{{ item.username }}</h3>
                   <h5>@{{ item.username }}</h5>
                  </span>

                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
  <path d="M12.899 33.75L10.049 28.95L4.64902 27.75L5.17402 22.2L1.49902 18L5.17402 13.8L4.64902 8.25L10.049 7.05L12.899 2.25L17.999 4.425L23.099 2.25L25.949 7.05L31.349 8.25L30.824 13.8L34.499 18L30.824 22.2L31.349 27.75L25.949 28.95L23.099 33.75L17.999 31.575L12.899 33.75ZM16.424 23.325L24.899 14.85L22.799 12.675L16.424 19.05L13.199 15.9L11.099 18L16.424 23.325Z" fill="#293857"/>
                  </svg>

                </div>


                <div class="Realtor-2-list">

                  <div class="childe-Realtor">
                    <h2>120 </h2>
                    <p>Total Properties</p>
                  </div>


                  <div class="childe-Realtor fil-border">
                    <h2>120 </h2>
                    <p>Total Sold</p>
                  </div>



                  <div class="childe-Realtor">
                    <h2>4.5<span></span></h2>
                    <p>Rating</p>
                  </div>
                </div>

                <div class="Realtor-3-list">
                  <button  @click="contact(item)">Contact Realtor</button>
                  <svg xmlns="http://www.w3.org/2000/svg" width="46" height="34" viewBox="0 0 46 34" fill="none" @click="realtorprofile(item)" style="cursor: pointer;">
  <rect width="46" height="34" fill="#293857"/>
  <path d="M33 9C33 8.44772 32.5523 8 32 8L23 8C22.4477 8 22 8.44772 22 9C22 9.55229 22.4477 10 23 10L31 10L31 18C31 18.5523 31.4477 19 32 19C32.5523 19 33 18.5523 33 18L33 9ZM15.7071 26.7071L32.7071 9.70711L31.2929 8.29289L14.2929 25.2929L15.7071 26.7071Z" fill="#DED4A2"/>
</svg>



                </div>
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



 import Profile from "./investorprofilecard.vue";

 import { get , byMethod} from '../lib/api';
 export default {
     name: 'admin',
 
     components: {
    
    Profile,
   
   
 },
 
 
 
     data () {
             return {
                 method:'POST',
                 model:{},
                 model:'',
  
               
               
             }
         },
         created(){
         
         get('/toprealtor')
               .then((res) => {
                 
                  this.setData(res)
 
               })
           
         }, 
 
         methods:{

          realtorprofile(e){
                this.$router.push(`/realtorprofile/${e.id}`)
             },
 

          contact(e){
                console.log(e);

                
                this.$router.push({
            name: 'chats', 
            params: { id: JSON.stringify(e) },
            });
            

            },

             setData(res) {
         
               Vue.set(this.$data, 'model', res.data.data)
               console.log(res.data.data)
               
              
 
            
           },
 
             profile(){
                 this.$router.push('/admin/dashborad4')
             }
 
         }
 }
 
 </script>
 
 <style scoped>

 .khasomai{
  display: flex;
    flex-wrap: wrap;
    gap: 20px;
    width: 100%;
    height: 72vh;
    overflow-y: scroll;
 }
 span.topspan {
    color: #FFF;
    font-family: sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    line-height: 24px;
}

h2.topreal {
    color: #DED4A2;
    font-family: sans-serif;
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
 .nazar-ts {
    width: 32%;
}

.icon-box {
    width: 10%;
}

.page-1 {
    width: 100%;
    background-color: #293857 !important;
    padding: 30px;
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

.col-2.col-md-3.col-lg-2.col-xl-2.go-this-pic {}

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

.id-box {}
.setp {
    padding-left: 15px !important;
}


.imger h2 {
    color: #000;
    font-family: "Saol Display";
    font-size: 20px;
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
    
    justify-content: center;
    align-items: center;
}

.contac{
    background: #293857;
    display: flex;
    width: 100%;
    padding: 6px 10px 6px 10px;
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

.slide-card {
    width: 320px;
    height: 100% !important;
    border: 2px solid #293857 !important;
    background: #DED4A2 !important;
    box-shadow: none !important;
    border-radius: 0px !important;
    padding: 30px;
}

.contanir {
     width: 100%;
     max-width: 1600px;
     margin: 0 auto;
 }

 .main {
     width: 100%;
     gap: 24px;
     display: flex;
     justify-content: space-between;
     align-items: center !important;
   
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

 @media screen and (max-width: 1600px){

    .contanir {
     width: 100%;
     max-width: 1440px;
     margin: 0 auto;
 }

 }


 @media screen and (max-width: 1440px){

    .contanir {
     width: 100%;
     max-width: 1170px;
     margin: 0 auto;
 }
 .box-2{
  width: 32% !important;
 }
.main {
     width: 100%;
     display: flex;
     justify-content: space-between;
     align-items: flex-start !important;
 }
 .Realtor-3-list button {
    font-size: 10px;
    padding: 2px 0px;
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
 .nazar-ts {
    width: 30%;
}
 }

 @media screen and (max-width: 1366px){
  .khasomai{
  display: flex;
    flex-wrap: wrap;
    gap: 20px;
    width: 100%;
    height: 100vh;
    overflow-y: scroll;
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
    padding-top: 30px;
}
 }

 @media screen and (max-width: 1024px){

  .khasomai{
  display: flex;
    flex-wrap: wrap;
    gap: 20px;
    width: 100%;
    height: 72vh;
    overflow-y: scroll;
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
    width: 50% !important;
}

h2.topreal {
    font-size: 24px;
}

span.topspan {
    font-size: 16px;
}

 }


 @media screen and (max-width: 768px){
  h2.topreal {
    font-size: 20px;
}

span.topspan {
    font-size: 14px;
}

.Realtor-3-list svg {
    width: 40px;
    height: 40px;
}

.box-1 {
    gap: 24px;
}
 }

 @media screen and (max-width: 600px){
  .nazar-ts {
    width: 100%;
}

.box-2 {
    width: 100% !important;
}

.main {
    gap: 15px 0px;
}
 }
</style>