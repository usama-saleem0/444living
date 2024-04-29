<template>
  <div class="box-2">
         <h2>Profile</h2>
         <div class="id-box">
           <!-- <img src="/images/alexprofile.png" alt=""> -->
           <img :src="'/profile/' + user.profile" alt="">

           <div class="col-6">

             <h2>{{ user.username }}</h2>
             <p class="pragraphok">
              @{{ user.username }}
             </p>
             <p class="pragraph">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path opacity="0.3" d="M20 8L12 13L4 8V18H20V8ZM20 6H4L12 10.99L20 6Z" fill="#293857"/>
  <path d="M4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20ZM20 6L12 10.99L4 6H20ZM4 8L12 13L20 8V18H4V8Z" fill="#293857"/>
</svg>
{{ user.email }}
             </p>
           </div>

           <div class="col-4">
            <button class="investorbutton" @click="profilepage">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
  <g clip-path="url(#clip0_201_1191)">
    <path d="M5.01536 13.125L3.90703 11.2583L1.80703 10.7917L2.0112 8.63333L0.582031 7L2.0112 5.36667L1.80703 3.20833L3.90703 2.74167L5.01536 0.875L6.9987 1.72083L8.98203 0.875L10.0904 2.74167L12.1904 3.20833L11.9862 5.36667L13.4154 7L11.9862 8.63333L12.1904 10.7917L10.0904 11.2583L8.98203 13.125L6.9987 12.2792L5.01536 13.125ZM6.3862 9.07083L9.68203 5.775L8.86536 4.92917L6.3862 7.40833L5.13203 6.18333L4.31536 7L6.3862 9.07083Z" fill="#DED4A2"/>
  </g>
  <defs>
    <clipPath id="clip0_201_1191">
      <rect width="14" height="14" fill="white"/>
    </clipPath>
  </defs>
</svg>
              {{user.type}}
            </button>
            <div class="toppadding">
             
              <img class="socailimg" src="/images/facebook.png" alt="" />
              <img class="socailimg"  src="/images/insta.png" alt="" />

              <img class="socailimg"  src="/images/linkedin.png" alt="" />

            </div>
           </div>
       
         </div>

        

         <div class="titel-box">

          


         </div>

         <div class="para-box">
         <p>
          Preferred Location
         </p>
         <div style="width: 100%;">
           <img style="width: 100%;" src="/images/profilemap.png" alt="" />

         </div>

            
         </div>
         <br>
        

         <div class="para-boxs">
         <p>
          Upcoming Realtor Requests
         </p>
         <div class="scrollheight">

        
            <div style="width: 100%; background-color: #293857; margin-bottom: 10px;"  v-for="items in recentchats">
          <div class="row" style="padding-top: 5px">
            <div class="col-2 col-md-3 col-lg-2 col-xl-2 go-this-pic" >
              <!-- <img src=/images/requestprofile.png alt=""/> -->
              <img :src="'/profile/' + items.profile"/>

            </div> 
            <div class="col-7 col-md-6 col-lg-7 col-xl-7 setp">
              <span class="Christiana">
                {{ items.username }}
              </span>
              <p class="requesttext">
               New Message from Alexendera
              </p>

      </div>
      <div class="col-3 col-md-3">
        <p class="requesttext" style="color: #DED4A2 !important;">
          22min Ago
        </p>

      </div>
     


          </div>
          <hr style="width: 95%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    background-color: #ded4a2;">
          
          <div class="row rowpadding">
            <div class="col-6">
              <p class="requesttext" style="color: #DED4A2 !important;">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
  <g clip-path="url(#clip0_201_1214)">
    <path d="M4.3 11.25L3.35 9.65L1.55 9.25L1.725 7.4L0.5 6L1.725 4.6L1.55 2.75L3.35 2.35L4.3 0.75L6 1.475L7.7 0.75L8.65 2.35L10.45 2.75L10.275 4.6L11.5 6L10.275 7.4L10.45 9.25L8.65 9.65L7.7 11.25L6 10.525L4.3 11.25ZM5.475 7.775L8.3 4.95L7.6 4.225L5.475 6.35L4.4 5.3L3.7 6L5.475 7.775Z" fill="#DED4A2"/>
  </g>
  <defs>
    <clipPath id="clip0_201_1214">
      <rect width="12" height="12" fill="white"/>
    </clipPath>
  </defs>
</svg>
                Verified Realtor
  </p>

            </div>
            <div class="col-6">
              <div class="row">

              <div class="col-8">

              
            
             <button class="chatbutton">
             <span class="spanchat" @click="contact(items)">
              Chat
             </span> 
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
  <path d="M1.76254 5.42318C2.30034 5.41367 2.78631 5.38609 3.26895 5.4693C3.31983 5.47786 3.37879 5.44981 3.43253 5.43364C3.69738 5.35375 3.96319 5.34282 4.2328 5.41177C4.46723 5.47168 4.70642 5.42032 4.9437 5.43792C5.30983 5.46502 5.67408 5.36612 6.03785 5.38466C6.33408 5.39988 6.63366 5.39512 6.928 5.44125C7.07731 5.46455 7.21852 5.47263 7.37116 5.43412C7.53711 5.39275 7.70164 5.49213 7.87378 5.49213C8.06304 5.49213 8.24943 5.53968 8.43108 5.59389C8.63459 5.65428 8.68594 5.83877 8.53759 5.98856C8.31124 6.21728 8.01549 6.31761 7.70926 6.36231C7.45581 6.3994 7.19713 6.42079 6.94178 6.43411C6.67169 6.4479 6.3997 6.5411 6.1258 6.45075C6.07873 6.43506 6.02025 6.43173 5.97269 6.44457C5.6541 6.53207 5.32268 6.4731 5.00171 6.53587C4.90281 6.55536 4.79438 6.54871 4.69357 6.53302C4.55377 6.51114 4.41968 6.51495 4.28654 6.55869C4.11631 6.6148 3.94704 6.54348 3.77632 6.5468C3.60371 6.55013 3.43253 6.55631 3.26895 6.59768C3.0117 6.6633 2.75588 6.62669 2.50528 6.60006C2.27894 6.57629 2.06068 6.59626 1.83767 6.60196C1.62702 6.60767 1.40686 6.62574 1.19954 6.58913C0.964165 6.54728 0.861929 6.33235 0.775862 6.13596C0.698829 5.96003 0.807247 5.83021 0.925648 5.70373C1.10015 5.51685 1.30129 5.41699 1.56045 5.43459C1.64509 5.44029 1.73116 5.4246 1.76397 5.4227L1.76254 5.42318Z" fill="#293857"/>
  <path d="M8.38513 9.81531C8.08651 9.81769 7.85731 9.55093 7.90724 9.24089C7.94005 9.03595 8.01518 8.84432 8.14833 8.67789C8.25056 8.54998 8.35422 8.42112 8.43839 8.28132C8.73177 7.79202 9.05322 7.32412 9.43838 6.90187C9.47214 6.86478 9.49972 6.81675 9.51637 6.7692C9.61575 6.48437 9.81499 6.26801 10.0095 6.04928C10.1279 5.91614 10.1383 5.81723 10.0033 5.69931C9.8245 5.54286 9.68469 5.36407 9.58531 5.14819C9.51494 4.99603 9.36658 4.90758 9.25816 4.78633C9.10743 4.61752 9.01043 4.41115 8.90439 4.21667C8.75745 3.94706 8.5449 3.73213 8.37229 3.48581C8.19825 3.2376 8.05227 2.97417 7.94671 2.68934C7.92294 2.62514 7.90629 2.55667 7.89964 2.48867C7.88775 2.36029 7.96573 2.2804 8.06607 2.21811C8.16069 2.15915 8.2458 2.18387 8.32949 2.24616C8.49497 2.36932 8.67043 2.47441 8.79882 2.64749C8.96287 2.86813 9.21299 3.01411 9.35517 3.25757C9.72987 3.47107 9.91008 3.85528 10.1659 4.17435C10.3162 4.3617 10.4997 4.52385 10.6761 4.68838C10.8183 4.82104 10.9343 4.96607 10.9857 5.15675C11.0156 5.26754 11.0822 5.35694 11.144 5.45157C11.2914 5.67743 11.2819 5.90758 11.1374 6.13297C10.9239 6.46583 10.747 6.82246 10.5049 7.13724C10.2539 7.46392 10.0875 7.85003 9.79501 8.14865C9.61717 8.33029 9.52302 8.56377 9.41318 8.78868C9.26149 9.09919 9.08222 9.39401 8.82782 9.63366C8.68755 9.76538 8.55917 9.81436 8.38656 9.81578L8.38513 9.81531Z" fill="#293857"/>
</svg>
             </button>
            </div>
            <div class="col-4">

           

             <button class="chatbutton arrowpadding">
             
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 1C18 0.447716 17.5523 2.86857e-07 17 3.39762e-08L8 8.34766e-07C7.44771 4.97592e-07 7 0.447716 7 1C7 1.55229 7.44772 2 8 2L16 2L16 10C16 10.5523 16.4477 11 17 11C17.5523 11 18 10.5523 18 10L18 1ZM1.70711 17.7071L17.7071 1.70711L16.2929 0.292894L0.292893 16.2929L1.70711 17.7071Z" fill="#293857"/>
</svg>

             </button>
            </div>
            </div> 

</div>



          </div>


         </div>

      

        
        </div>
        

            
         </div>
       </div>
</template>

<script>
import Vue from 'vue'


import { get , byMethod} from '../lib/api';
import { mapGetters } from "vuex";
export default {
   name: 'profile',



   data () {
           return {
               method:'POST',
               model:{},
               model:'',
               recentchats:[]

              
              
             
             
             
           }
       },

       computed: {
   ...mapGetters(["user"]),
 },
       created(){
       
          this.influncer()
         
       }, 

       methods:{



         contact(e){
                console.log(e);

                
                this.$router.push({
            name: 'chats', 
            params: { id: JSON.stringify(e) },
            });
            

            },


         influncer(){
                 console.log('abbbb');
 
                 get('/recentchat')
               .then((res) => {
 
                
                 Vue.set(this.$data, 'recentchats', res.data.data)
                 console.log(this.recentchats)
                
 
                 
                
 
               })
             },

         profilepage(){
            this.$router.push('/profilescreen')




         },


           setData(res) {
       
             Vue.set(this.$data, 'model', res.data.data)
             console.log(res.data.data)
             
            

           //   console.log(res.data)
         },

           profile(){
               this.$router.push(`/admin/dashborad4/${this.user.id}`)
           }

       }
}
</script>

<style scoped>

span.Christiana {
    color: #DED4A2;
    font-family: "Saol Display";
    /* font-size: 16px; */
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
.arrowpadding{
  padding: 5px 10px 5px 10px !important;
}

.scrollheight{
  height: 300px;
  overflow-y: scroll;
  overflow-x: hidden;
  width:100% !important
}

.chatbutton{
  display: flex;
    width: 100%;
    height: 34px;
    padding: 5px 24px 5px 25px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    background: #DED4A2;
}
.spanchat{
  color: #293857;
text-align: center;
font-family: AktivGrotesk-Regular;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px; 
padding-right: 5px;

}
.rowpadding {
  padding: 10px 20px 10px 20px;

}


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


.requesttext{
  text-align: left !important;
    color: #D9D9D9 !important;
    font-family: sans-serif !important;
    font-size: 12px !important;
    font-style: normal !important;
    font-weight: 400 !important;
    line-height: 10px !important;
    margin: auto 0 !important;
    padding-top: 5px !important ;
}

.toppadding{
  padding-top: 30px;
}

.socailimg{
  width: 27% !important;
    max-height: 100% !important;
    min-height: 100% !important;
}
.investorbutton{
  display: flex;
    width: 100%;
    height: 34px;
    padding: 5px 15px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    background: #293857;
    color: #DED4A2;
    gap: 5px;
}

.pragraph{
  color: #000;
    font-family: sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 0px !important;
    padding-top: 8px;

}
p.pragraphok {
    margin: 0px;
    font-size: 20px !important;
    color:  #000 !important;
}
.pragraph svg {
    width: 15px;
    min-width: 15px;
    max-width: 15px;
    height: 15px;
    min-height: 15px;
    max-height: 15px;
}

p.pragraph {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
}
.id-box img {
  width: 25%;
    border-radius: 0% !important;
    max-height: 110px;
    min-height: 110px;
  
   
    object-fit: cover;
}
.page-1 {
   width: 100%;
   background-color: #F5F3EA;
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
   gap: 24px;
   justify-content: space-between;
 
}

.box-1 {
   height: 100%;
   background: transparent;
   width: 67%;
   display: flex;
   flex-wrap: wrap;
   align-items: center;
   justify-content: space-between;
   gap: 38px;
}

.box-2 {
   height: 100% !important;
   flex-shrink: 0;
   border-radius: 0px !important;
 
   width: 35% !important;
   padding: 20px;
  
   background: #DED4A2 !important;
  box-shadow: 0px 10px 54px 0px rgba(0, 0, 0, 0.25) !important;

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
   flex-direction: row !important;
   align-content: flex-start  !important;
   padding: 20px 30px 0px 0px;
}

.id-box h2 {
  color: #000;
    font-family: "Saol Display" !important;
    font-size: 26px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
   margin: 0px;
   padding: 4px 0px 4px 0px;
}
button{
   border: none;
}

button::after{
   left: 0PX;
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
   display: flex;
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
   border-top: 1px solid #293857;
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   align-items: flex-start !important;
   flex-direction: column;
}

.para-boxs {
   width: 100%;
   
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   align-items: flex-start !important;
   flex-direction: column;
}

.para-box p {
   color: #000;
   text-align: center;
   font-family: system-ui !important;
   font-size: 20px;
   font-style: normal;
   font-weight: 700;
   line-height: 24px; /* 150% */
   margin: 0px;
   padding: 20px 0px 10px 0px;
}

.para-boxs p {
   color: #000;
   text-align: center;
   font-family: system-ui !important;
   font-size: 20px;
   font-style: normal;
   font-weight: 700;
   line-height: 24px; /* 150% */
   margin: 0px;
   padding: 20px 0px 10px 0px;
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
   justify-content: space-between;
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
   font-family: sans-serif;
   font-size: 66px;
   font-style: normal;
   font-weight: bold;
   line-height: normal;
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
   border-radius: 20px;
   background: #FFF;
   box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
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
   color: #000;
   font-family: sans-serif;
   font-size: 42px;
   font-style: normal;
   font-weight: 1000;
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
   background: #FFF;
   box-shadow: 4px 0px 24px 0px rgba(0, 0, 0, 0.25);
   height: 417px;
   flex-shrink: 0;
   width: 64%;
   border-radius: 20px 0px 0px 20px;
}

.conting-card {
   height: 417px;
   flex-shrink: 0;
   background: #FFF;
   box-shadow: 4px 0px 24px 0px rgba(0, 0, 0, 0.25);
   width: 35%;
   padding: 42px 40px;
   display: flex;
   flex-wrap: wrap;
   align-items: center;
   justify-content: space-between;
   border-radius: 0px 20px 20px 0px;
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
@media screen and (max-width: 1600px){
   .box-2 {
   height: 100%;
   flex-shrink: 0;
   border-radius: 20px;
   background: #FFF;
   box-shadow: 0px 10px 54px 0px rgba(0, 0, 0, 0.25);
   width: 30%;
   padding: 30px;
   /* min-height: 810px; */
}
 .contanir {
   width: 100%;
   max-width: 1440px;
   margin: 0 auto;
}
.dashbord-card {
   background: #FFF;
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
   font-family: sans-serif;
   font-size: 55px;
   font-style: normal;
   font-weight: 1000;
   line-height: normal;
   text-align: center;
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

   padding: 25px 0px 25px 0px;
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
}

@media screen and (max-width: 1440px){

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
.go-this-pic img{
   width: 100%;
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
   font-family: sans-serif;
   font-size: 38px;
   font-style: normal;
   font-weight: 1000;
   line-height: normal;
   text-align: center;
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
p.pragraphok {
    margin: 0px;
    font-size: 16px !important;
    color:  #000 !important;
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
   font-size: 25px;
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
   height: 350px;
   flex-shrink: 0;
   width: 64%;
   border-radius: 20px 0px 0px 20px;
}
.conting-card {
   height: 350px;
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
   width: 67%;
   display: flex;
   flex-wrap: wrap;
   align-items: center;
   justify-content: space-between;
   gap: 35px;
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
   height: 350px;
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

.chatbutton{
  display: flex;
    width: 100%;
    height: 34px;
    padding: 5px 14px 5px 15px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    background: #DED4A2;
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
   padding: 25px 0px 25px 0px;
}
.pragraph {
    color: #000;
    font-family: sans-serif;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 0px !important;
    padding-top: 4x;
}

.id-box img {
   width: 20%;
   border-radius: 50%;
  
   max-height: 110px;
   min-height: 110px;
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
   font-size: 12px;
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
   display: flex;
   justify-content: space-around;
   align-items: center;
   padding-bottom: 15px;
}
.para-box p {
   color: #000;
   text-align: center;
   font-family: sans-serif;
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
   height: 100% !important;
   flex-shrink: 0;
   border-radius: 20px;
   background: #FFF;
   box-shadow: 0px 10px 54px 0px rgba(0, 0, 0, 0.25);
   width: 30%;
   padding: 24px;
   /* min-height: 730px; */
}
.col-2.col-md-3.go-this-pic {
    padding-right: 0px;
}

.setp {
    padding: 0px;
}
.p.requesttext{
   padding: 10px 0px 0px 0px  !important
}
}
@media screen and (max-width: 1024px){
 .page-1 {
   width: 100%;
   background-color: #F5F3EA;
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
   height: 100% !important;
   flex-shrink: 0;
   border-radius: 20px;
   background: #FFF;
   box-shadow: 0px 10px 54px 0px rgba(0, 0, 0, 0.25);
   width: 60% !important;
   padding: 24px;
}

.box-2 {
    width: 55% !important;
}
.btn-2 {
   display: flex;
   width: 44%;
   justify-content: space-between;
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
   height: 100% !important;
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
p.pragraph {
    display: flex;
    align-items: center;
}

}
@media screen and (max-width: 425px){
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
   background-color: #F5F3EA;
   padding: 20px;
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
   height: 100% !important;
   flex-shrink: 0;
   border-radius: 20px;
   background: #FFF;
   box-shadow: 0px 10px 54px 0px rgba(0, 0, 0, 0.25);
   width: 90%;
}
.id-box {
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 10px 0px 10px 0px;
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
   gap: 30px;
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
   justify-content: space-between;
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
}


@media screen and (max-width: 375px){
   .id-box h2{

    font-size: 18px;

}
.pragraph{

    font-size: 9px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}


p.pragraph svg {
    width: 10px;
    height: 10px;
}

.para-box p {
    padding: 10px 0px 10px 0px;
}

.para-boxs p {
    padding: 10px 0px 10px 0px;
    font-size: 15px;
}

.id-box img {
    max-height: 60px;
    min-height: 60px;
}

.investorbutton {
    height: 30px;
    padding: 5px 8px;
}

.investorbutton {
    height: 20px;
    padding: 5px 5px;
    font-size: 8px;
    gap: 2px;
}

.toppadding {
    padding-top: 10px;
}

.box-2 {
    padding: 10px;
}

span {}

.col-7.col-md-6.setp span {
    font-size: 14px;
}

.para-boxs p {
}

.col-7.col-md-6.setp span p {}

p.requesttext {
    font-size: 10px !important;
    padding-top: 0px !important;
}

.chatbutton {
    height: 20px;
    padding: 3px 5px 5px 5px;
}

.spanchat {
    font-size: 10px;
}

.chatbutton svg {
    width: 10px;
    height: 10px;
}

button.chatbutton.arrowpadding {
    padding: 0px !important;
}

p.requesttext {
    font-size: 8px !important;
}

.rights100{
    padding-right: 16px;
    font-size: 10px;
}
span.rights100 svg {
    width: 15px;
    height: 15px;
}
}
</style>
