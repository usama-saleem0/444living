<template>
    
    <div>
        <!-- <Header/> -->
        <hr style="    width: 85%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    background-color: #DED4A2;">

  
 
   <div class="page-1">
   
    <div class="contanir">
       <div class="main">
        <div class="roll-1"></div>
        <div class="roll-2">
            <div class="list-1">
                <!-- <img src="/images/user.png" alt=""> -->
                <img :src="'/profile/' + user.profile" alt="">

              
                <div class="list-titel">
                   <span><h2>{{ user.username ?  user.username :'Profile' }}</h2></span>
<div class="list-id">
<h2>{{ user.email ? user.email : '' }}</h2>

</div>
                </div>
                <div class="list-btn">
                    <div class="buttons">
       

                     
                        
                    </div>


                   
                    <div class="btn-ides">
                        <span><h2>Profile Type: {{ user.type ? user.type :'' }}</h2></span>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <path d="M3.54 2C3.6 2.89 3.75 3.76 3.99 4.59L2.79 5.79C2.38 4.59 2.12 3.32 2.03 2H3.54ZM13.4 14.02C14.25 14.26 15.12 14.41 16 14.47V15.96C14.68 15.87 13.41 15.61 12.2 15.21L13.4 14.02ZM4.5 0H1C0.45 0 0 0.45 0 1C0 10.39 7.61 18 17 18C17.55 18 18 17.55 18 17V13.51C18 12.96 17.55 12.51 17 12.51C15.76 12.51 14.55 12.31 13.43 11.94C13.3307 11.904 13.2256 11.887 13.12 11.89C12.86 11.89 12.61 11.99 12.41 12.18L10.21 14.38C7.37543 12.9304 5.06961 10.6246 3.62 7.79L5.82 5.59C6.1 5.31 6.18 4.92 6.07 4.57C5.69065 3.41806 5.49821 2.2128 5.5 1C5.5 0.45 5.05 0 4.5 0Z" fill="#DED4A2"/>
</svg>
<h2>{{ user.number ? user.number:  ''}}</h2></span>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path opacity="0.3" d="M20 8L12 13L4 8V18H20V8ZM20 6H4L12 10.99L20 6Z" fill="#DED4A2"/>
  <path d="M4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20ZM20 6L12 10.99L4 6H20ZM4 8L12 13L20 8V18H4V8Z" fill="#DED4A2"/>
</svg>
                            <h2>{{ user.email? user.email : '' }}</h2></span>
                    </div>
                </div>
            </div>
            <div class="list-2">
                
                <div class="more-card" >
                    <div  class="cards" >
                <div class="pox-1">
                  <h2>Profile Information</h2>
                  <div>
                    <button class="godashboard">
                        <span class="pr-2">
                            Go to dashboard
                        </span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
  <path d="M1.76254 5.42269C2.30034 5.41318 2.78631 5.3856 3.26895 5.46881C3.31983 5.47737 3.37879 5.44932 3.43253 5.43315C3.69738 5.35326 3.96319 5.34233 4.2328 5.41128C4.46723 5.47119 4.70642 5.41983 4.9437 5.43743C5.30983 5.46453 5.67408 5.36563 6.03785 5.38417C6.33408 5.39939 6.63366 5.39463 6.928 5.44076C7.07731 5.46406 7.21852 5.47214 7.37116 5.43363C7.53711 5.39226 7.70164 5.49164 7.87378 5.49164C8.06304 5.49164 8.24943 5.53919 8.43108 5.5934C8.63459 5.65379 8.68594 5.83828 8.53759 5.98807C8.31124 6.21679 8.01549 6.31712 7.70926 6.36182C7.45581 6.39891 7.19713 6.4203 6.94178 6.43362C6.67169 6.44741 6.3997 6.54061 6.1258 6.45026C6.07873 6.43457 6.02025 6.43124 5.97269 6.44408C5.6541 6.53158 5.32268 6.47261 5.00171 6.53538C4.90281 6.55487 4.79438 6.54822 4.69357 6.53253C4.55377 6.51065 4.41968 6.51446 4.28654 6.5582C4.11631 6.61431 3.94704 6.54299 3.77632 6.54631C3.60371 6.54964 3.43253 6.55582 3.26895 6.59719C3.0117 6.66281 2.75588 6.6262 2.50528 6.59957C2.27894 6.5758 2.06068 6.59577 1.83767 6.60147C1.62702 6.60718 1.40686 6.62525 1.19954 6.58864C0.964165 6.54679 0.861929 6.33186 0.775862 6.13547C0.698829 5.95954 0.807247 5.82972 0.925648 5.70324C1.10015 5.51636 1.30129 5.4165 1.56045 5.4341C1.64509 5.4398 1.73116 5.42411 1.76397 5.42221L1.76254 5.42269Z" fill="#DED4A2"/>
  <path d="M8.38513 9.81531C8.08651 9.81769 7.85731 9.55093 7.90724 9.24089C7.94005 9.03595 8.01518 8.84432 8.14833 8.67789C8.25056 8.54998 8.35422 8.42112 8.43839 8.28132C8.73177 7.79202 9.05322 7.32412 9.43838 6.90187C9.47214 6.86478 9.49972 6.81675 9.51637 6.7692C9.61575 6.48437 9.81499 6.26801 10.0095 6.04928C10.1279 5.91614 10.1383 5.81723 10.0033 5.69931C9.8245 5.54286 9.68469 5.36407 9.58531 5.14819C9.51494 4.99603 9.36658 4.90758 9.25816 4.78633C9.10743 4.61752 9.01043 4.41115 8.90439 4.21667C8.75745 3.94706 8.5449 3.73213 8.37229 3.48581C8.19825 3.2376 8.05227 2.97417 7.94671 2.68934C7.92294 2.62514 7.90629 2.55667 7.89964 2.48867C7.88775 2.36029 7.96573 2.2804 8.06607 2.21811C8.16069 2.15915 8.2458 2.18387 8.32949 2.24616C8.49497 2.36932 8.67043 2.47441 8.79882 2.64749C8.96287 2.86813 9.21299 3.01411 9.35517 3.25757C9.72987 3.47107 9.91008 3.85528 10.1659 4.17435C10.3162 4.3617 10.4997 4.52385 10.6761 4.68838C10.8183 4.82104 10.9343 4.96607 10.9857 5.15675C11.0156 5.26754 11.0822 5.35694 11.144 5.45157C11.2914 5.67743 11.2819 5.90758 11.1374 6.13297C10.9239 6.46583 10.747 6.82246 10.5049 7.13724C10.2539 7.46392 10.0875 7.85003 9.79501 8.14865C9.61717 8.33029 9.52302 8.56377 9.41318 8.78868C9.26149 9.09919 9.08222 9.39401 8.82782 9.63366C8.68755 9.76538 8.55917 9.81436 8.38656 9.81578L8.38513 9.81531Z" fill="#DED4A2"/>
</svg>
</button>
                  </div>
                 
                </div>
                <hr style="    width: 95%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    background-color: #293857;">
                <div class="pox-2">
                  <p>Bio:</p>
                 <p class="ptag">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi justo odio, pretium eget tincidunt a, sollicitudin a mi. Praesent odio dui, porttitor nec massa ut, dapibus volutpat enim. Vivamus id velit eros. Cras pellentesque elit posuere tempor lacinia. Vivamus viverra leo a metus vehicula, vitae laoreet justo pellentesque. 
                 </p>
                
                 <hr style="    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    background-color: #293857;">
    <br>
    <div class="row">
        <div class="col tops">

      

  

                  <div class="pox-box" style="padding-bottom: 3%;">
                    <div class="yes">
       
 <p class="newp">First Name: {{ user.first_name ? user.first_name : ''}}</p>
                    </div>
                  
                  
                  </div>

                  <div class="pox-box" style="padding-bottom: 3%;">
                    <div class="yes">
       
<p class="newp">Last: {{ user.last_name ? user.last_name : ''}}</p>
                    </div>
                  
                  
                  </div>
                

                  <div class="pox-box" style="padding-bottom: 3%;">
                    <div class="yes">
      
 <p class="newp">Email: {{ user.email ?  user.email : ''}}</p>
                    </div>
                    
                  
                  </div>
                

                  <div class="pox-box" style="padding-bottom: 1%;">
                    <div class="yes">
     
 <p class="newp">Phone: {{ user.number ? user.number: '' }}</p>
                    </div>
                    
                  
                  </div>
                </div>

                <div class="col">
                    <div class="carder ">
                        <div class="row">

                        
                        <div class="col">
                            <span class="member">
                                Membership Type:
                            </span>
                        </div>
                        <div class="col text-right">
                            <span class="since">
                                Since:19 oct 2024
                            </span>
                        </div>
                    </div>
                    <br>
                    <div class="row">
                        <div class="col">
                            <span class="basic">
                                Basic
                            </span>
                        </div>

                        <div class="col text-right" style="display: flex;
    justify-content: flex-end;
    align-items: center;">
                            <button class="upgardebutton">
                                Upgrade Plan
                            </button>
                        </div>
                    </div>
                        
                        </div>

                </div>
                </div>
                </div>
                    </div>

                  

                   
                </div>
            
                
                <div class="salider-card">
                    <div class="col">
                        <span class="trust">Preferred Location</span>

                    </div>
                    <div class="mine-card">
                        <img class="imgss" src="/images/map.png"/>
                       
                       
                    </div>
                    <div class="col pt-2">
                        <span class="trust">Trusted Realtors</span>

                    </div>

                    <div class="run-card">
                       
                        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner" style="    display: flex;
    flex-direction: row;">
    <div class="carousel-item active" >
        <div class="slide-card">
            <div class="imger">
                <!-- <img src="/images/alex.png" alt=""> -->
                <img :src="'/profile/' + one.profile" alt="">

                <h2>{{ one.username }}</h2>
                <div class="icon-box">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
  <path d="M12.899 33.75L10.049 28.95L4.64902 27.75L5.17402 22.2L1.49902 18L5.17402 13.8L4.64902 8.25L10.049 7.05L12.899 2.25L17.999 4.425L23.099 2.25L25.949 7.05L31.349 8.25L30.824 13.8L34.499 18L30.824 22.2L31.349 27.75L25.949 28.95L23.099 33.75L17.999 31.575L12.899 33.75ZM16.424 23.325L24.899 14.85L22.799 12.675L16.424 19.05L13.199 15.9L11.099 18L16.424 23.325Z" fill="#293857"/>
</svg>
                </div>
               
            </div>
            <div class="row pt-4  sharo-bhai">

           
<div class="col-7">
    <button class="contac" @click="contact(one)">
    Contact Realtor
</button>
</div>
<div class="col-4">
    <svg xmlns="http://www.w3.org/2000/svg" width="46" height="34" viewBox="0 0 46 34" fill="none" @click="realtorprofile(one)"  style="cursor: pointer;">
  <rect width="46" height="34" fill="#293857"/>
  <path d="M33 9C33 8.44772 32.5523 8 32 8L23 8C22.4477 8 22 8.44772 22 9C22 9.55229 22.4477 10 23 10L31 10L31 18C31 18.5523 31.4477 19 32 19C32.5523 19 33 18.5523 33 18L33 9ZM15.7071 26.7071L32.7071 9.70711L31.2929 8.29289L14.2929 25.2929L15.7071 26.7071Z" fill="#DED4A2"/>
</svg>
</div>
</div>
        </div>

        

        
    </div>

    <div class="carousel-item " v-for="item in model">
        <div class="slide-card">
            <div class="imger">
                <!-- <img src="/images/alex.png" alt=""> -->
                <img :src="'/profile/' + item.profile" alt="">

                <h2>{{ item.username }}</h2>
                <div class="icon-box">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
  <path d="M12.899 33.75L10.049 28.95L4.64902 27.75L5.17402 22.2L1.49902 18L5.17402 13.8L4.64902 8.25L10.049 7.05L12.899 2.25L17.999 4.425L23.099 2.25L25.949 7.05L31.349 8.25L30.824 13.8L34.499 18L30.824 22.2L31.349 27.75L25.949 28.95L23.099 33.75L17.999 31.575L12.899 33.75ZM16.424 23.325L24.899 14.85L22.799 12.675L16.424 19.05L13.199 15.9L11.099 18L16.424 23.325Z" fill="#293857"/>
</svg>
                </div>
               
            </div>
            <div class="row pt-4  sharo-bhai">

           
<div class="col-7">
    <button class="contac" @click="contact(item)">
    Contact Realtor
</button>
</div>
<div class="col-4">
    <svg xmlns="http://www.w3.org/2000/svg" width="46" height="34" viewBox="0 0 46 34" fill="none" @click="realtorprofile(item)" style="cursor: pointer;">
  <rect width="46" height="34" fill="#293857"/>
  <path d="M33 9C33 8.44772 32.5523 8 32 8L23 8C22.4477 8 22 8.44772 22 9C22 9.55229 22.4477 10 23 10L31 10L31 18C31 18.5523 31.4477 19 32 19C32.5523 19 33 18.5523 33 18L33 9ZM15.7071 26.7071L32.7071 9.70711L31.2929 8.29289L14.2929 25.2929L15.7071 26.7071Z" fill="#DED4A2"/>
</svg>
</div>
</div>
           
           
        </div>

        

        
    </div>

    </div>

    


    
  </div>
 
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
// import chartBarDemo from "../../chart/demo/chart-bar-demo";
// import { get , byMethod} from '../admin/components/lib/api';
// import Edit from "./entreform.vue";
import { mapGetters } from "vuex";
import { get , byMethod} from '../lib/api';
import Header from "../admin/components/Topbar.vue"

export default {
    name: 'admin',

    components: {
        Header
  },

   

    data () {
            return {
                isModalOpen:true,
                method:'POST',
                model:{},
                ancd:[],

                model:'',
                count:0,
                one:{}

               
               
              
              
              
            }
        },

        computed: {
    ...mapGetters(["user"]),
  },

     
        created(){


         
                get('/toprealtor')
              .then((res) => {
                
                 this.setData(res)

              })



              this.ontrealtor()
         
        
       
          
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


            ontrealtor(){
                get('/onerealtor')
              .then((res) => {
                Vue.set(this.$data, 'one', res.data.data)
                
                

              })
         

            },

            setData(res) {
        
              Vue.set(this.$data, 'model', res.data.data)
      
             
            
            
          },

          

        }
    }
</script>

<style scoped>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

.imgss{
width: 100%;
}

.godashboard{
    display: flex;
    width: 100%;
    height: 40px;

    padding: 8px 48px 8px 49px;
    justify-content: center;
    align-items: center;
    background: #293857;
    color: #DED4A2;
text-align: center;
font-family: sans-serif;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px; /* 150% */

}

.upgardebutton{
    background: #DED4A2;
    display: flex;
width: 172px;
height: 48px;
padding: 12px 29px;
justify-content: center;
align-items: center;
flex-shrink: 0;
color: #293857;
}


.trust{
    color: #DED4A2;
    font-family: AktivGrotesk-Regular;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
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

.arrow::after{
    position: relative;
    left: 0px;
}
.arrow{
    background: #293857;
    width: 100%;
    justify-content: center;
    align-items: center;
    border:none;
}
button::after{

    left: 0px;
}
button{
    border:none;
}

.member{
    color: #DED4A2;
font-family: sans-serif;
font-size: 25px;
font-style: italic;
font-weight: 400;
line-height: normal;
}

.basic{
    color: #DED4A2;
font-family: "Saol Display";
font-size: 65px;
font-style: normal;
font-weight: 400;
line-height: normal;
}

.since{
    color: #DED4A2;
font-family: sans-serif;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
.carousel-item {
  width: 100%;
  min-width: 100%;
  max-width: 100%;
}
.carder{
    width: 515px;
    height: 177px;
    flex-shrink: 0;
    background: #293857;
    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
    padding: 25px;

}

.newp{
    font-size: 22px !important;
    font-weight: 400 !important;

}
.ptag{
    color: #5C5C5C !important;
    font-family: sans-serif !important;
    font-size: 18px !important;
    font-style: normal !important;
    font-weight: 400 !important;
    line-height: normal !important;
    padding-bottom: 15px !important;
    padding-top: 5px !important;

}
.page-1 {
    width: 100%;
    background-color: #293857;
    padding: 30px;
}

.contanir {
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
}

.main {
    width: 100%;
    height: 871px;
    flex-shrink: 0;
    gap: 24px;
    border-radius: 0px !important;
    background: #293857 !important;
    /* box-shadow: 0px 10px 54px 0px rgba(0, 0, 0, 0.25); */
    box-shadow: none !important;
}

.roll-1 {
    width: 100%;
    height: 250px;
    flex-shrink: 1;
    background-image: url(/images/bgimg.png);
    /* border-radius: 20px 20px  0px 0px; */
    border-radius: 0px !important;
}

.roll-2 {
    width: 100%;
    padding: 0px 0px !important;
}

.list-1 {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 25px 0px 15px 0px;
    /* border-bottom: 2px solid #f96; */
    border-bottom: 2px solid #DED4A2 !important;

}

.list-1 img {
    width: 12%;
    min-width: 12%;
    max-width: 12%;
    position: relative;
    z-index: 1;
    margin-top: -125px;
    margin-left: 20px;
   height: 150px;
    max-height: 150px;
    min-height: 150px;
    border-radius: 0px !important;
    -o-object-fit: cover;
    object-fit: contain !important;
}


.list-titel {
    width: 48%;
}

.list-titel span {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
}

.list-titel span h2 {
    color: #DED4A2 !important;
    font-family: Saol Display !important;
    font-size: 50px;
    font-style: normal;
    font-weight: 400 !important;
    line-height: normal;
    margin: 0px;
}

.list-id {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 5px 0px 8px 0px;
}

.list-id h2 {
    color: #DED4A2 !important;
    font-family: sans-serif;
    font-style: normal;
    font-weight: 400 !important;
    line-height: normal;
    font-size: 18px;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    gap: 10px;
    margin: 0px;
}

.list-titel p {
    color: #000;
    font-family: 'Nunito';
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 150% */
    margin: 0px;
    padding-right: 50px;
}

.btn-ides {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 45px;
}

.buttons {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 20px;
    padding-top: 10px;
}

.list-btn {
    width: 34%;
}

.btn-ides span {
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: center;
}



.btn-ides h2 {
    color: #DED4A2 !important;
    font-family: sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400 !important;
    line-height: normal;
    margin: 0px;
}

.buttons button {
    display: flex;
    width: 154.75px;
    height: 44px;
    padding: 10px 18px;
    justify-content: center;
    align-items: center;
    gap: 7.647px;
    flex-shrink: 0;
    border-radius: 6px;
    border: 1px solid #000;
    background: #F5F3EA;
    box-shadow: 2px 2px 0px 0px #1B1C1D;
    color: #000;
    text-align: center;
    font-family: sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 150% */
}

button.Hire {
    border-radius: 6px;
    border: 1px solid #000;
    background: #F96;
    box-shadow: 2px 2px 0px 0px #1B1C1D;
    color: #fff;
}
.pox-1 {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    /* border-bottom: 1px solid #000; */
    border: none !important;
}

.pox-1 h2 {
    color: #293857 !important;
    text-align: center;
    font-family: Saol Display !important;
    font-size: 35px;
    font-style: normal;
    font-weight: 400 !important;
    line-height: normal; 
    margin: 0px;
    padding: 0px;
}

.top-btn {
    width: 49%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
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
    /* color: #000;
    font-family: sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.96px;
    margin: 0px; */
    color: #293857;
font-family: sans-serif;
font-size: 25px;
font-style: normal;
font-weight: 600;
line-height: normal;
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
    width: 100%;
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
    margin: 0px;
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


.carousel-control-prev, .carousel-control-next {
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 1;
    display: flex;
    width: 5% !important;
    color: #fff;
    text-align: center !important;
    opacity: 0.5;
    transition: opacity 0.15s ease;
    justify-content: center !important;
    align-items: center !important;
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
.cards {
    /* border-radius: 16px; */
    /* border: 2px solid #000; */
    background: #DED4A2 !important;
    /* box-shadow: 4px 4px 0px 2px #1B1C1D; */
    width: 100% !important;
    height: 100% !important;
    flex-shrink: 0;
    border-radius: 0px !important;
    border: none !important;
    box-shadow: none !important;

}
.more-card {
    width: 70%;
    display: flex;
    justify-content: space-between;
    padding-top: 15px
}
.more-card {
    width: 70%;
    display: flex;
    justify-content: space-between;
}

.salider-card {
    height: 445px;
    flex-shrink: 0;
    /* border-left: 2px solid #F96; */
    border-left: 2px solid #DED4A2 !important;

    width: 28%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 20px 10px;
}

.list-2 {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.mine-card {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.Jobs-card {
    display: inline-flex;
    height: 144px;
    padding: 17px 15px 17px 16px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 9px;
    flex-shrink: 0;
    border-radius: 20px;
    background: #FFF;
    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
}

.Jobs-card p {
    color: #000;
    font-family: sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 150% */
    margin: 0px;
}
.Jobs-card p span {
    color: green;
}
.Jobs-card h2 {
    color: #000;
    font-family: sans-serif;
    font-size: 46px;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
    margin: 0px;
}
.Jobs-cards {
    display: inline-flex;
    height: 144px;
    padding: 17px 46px 17px 16px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 9px;
    flex-shrink: 0;
    border-radius: 20px;
    background: #FFF;
    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
}

.Jobs-cards p {
    color: #000;
    font-family: sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 150% */
    margin: 0px;
}
.run-card h2 {
    color: #000;
    font-family: sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: bold;
    line-height: 24px;
}
.Jobs-cards h2 {
    color: #000;
    font-family: sans-serif;
    font-size: 46px;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
    margin: 0px;
}
.slide-card {
    width: 320px;
    height: 100% !important;
    border: 2px solid #293857 !important;
    background: #DED4A2 !important;
    box-shadow: none !important;
    border-radius: 0px !important;
    padding:30px;
}

.run-card {
    width: 100% !important;

    display: flex;
    justify-content: center;
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

.id-box {}

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
.sharo-bhai {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
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
@media screen and (max-width: 1600px){

    .member {
   
    font-size: 23px;
 
}

.basic {
 
    font-size: 60px;
   
}

.newp {
    font-size: 20px !important;
    font-weight: 400 !important;
}
    .cards {
    border-radius: 16px;
    border: 2px solid #000;
    background: #F96;
    box-shadow: 4px 4px 0px 2px #1B1C1D;
    width: 30%;
    height: 315px;
    flex-shrink: 0;
}
    .contanir {
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
}

.roll-1 {
    width: 100%;
    height: 200px;
    flex-shrink: 1;
    background-image: url(/images/bgimg.png);
    border-radius: 20px 20px 0px 0px;
}
.list-titel p {
    color: #000;
    font-family: 'Nunito';
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    margin: 0px;
    padding-right: 0px;
}
.list-id h2 {
    color: #000;
    font-family: sans-serif;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    font-size: 15px;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    gap: 5px;
    margin: 0px;
}
.btn-ides span {
    display: flex;
    align-items: center;
    gap: 5px;
    justify-content: center;
}
.list-titel span h2 {
    color: #000;
    font-family: sans-serif;
    font-size: 35px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    margin: 0px;
}
.list-titel span svg {
    width: 35px;
    height: 35px;
}
.pox-1 {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    border-bottom: 1px solid #000;
}
.pox-2 h2 {
    color: #000;
    font-family: sans-serif;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    padding: 10px 0px;
    font-size: 22px;
}
.pox-3 h2 span {
    color: #000;
    font-family: sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}
.pox-3 h2 {
    color: #000;
    font-family: sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding: 0px 0px 0px 0px;
    margin: 0px;
}
.pox-3 {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 10px 0px 0px 0px;
}
.mine-card {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 18px;
}
.Jobs-card {
    display: inline-flex;
    height: 130px;
    padding: 15px 12px 15px 12px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 5px;
    flex-shrink: 0;
    border-radius: 20px;
    background: #FFF;
    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
}
.Jobs-cards {
    display: inline-flex;
    height: 130px;
    padding: 15px 35px 15px 15px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 9px;
    flex-shrink: 0;
    border-radius: 20px;
    background: #FFF;
    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
}
.main {
    width: 100%;
    height: 100%;
    flex-shrink: 0;
    border-radius: 20px;
    background: #FFF;
    box-shadow: 0px 10px 54px 0px rgba(0, 0, 0, 0.25);
}
}

@media screen and (max-width: 1440px){

    .tops{
        padding-top: 20px;
    }

    .member {
    font-size: 20px;
}

.basic {
    font-size: 50px;
}

    .newp {
        font-size: 18px !important;
    font-weight: 400 !important;
    color: #293857 !important;
}

    .pox-1 h2 {
    color: #000;
    text-align: center;
    font-family: sans-serif;
    font-size: 30px;
    font-style: normal;
    font-weight: 800;
    line-height: 24px;
    margin: 0px;
    padding: 10px;
}

    .cards {
    border-radius: 16px;
    border: 2px solid #000;
    background: #F96;
    box-shadow: 4px 4px 0px 2px #1B1C1D;
    width: 30%;
    height: 280px;
    flex-shrink: 0;
}

    .btn-ides h2 {
    color: #000;
    font-family: sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin: 0px;
    
}
    .contanir {
    width: 100%;
    max-width: 1170px;
    margin: 0 auto;
}
.roll-2 {
    width: 100%;
    padding: 0px 25px;
}
.list-titel span h2 {
    color: #000;
    font-family: sans-serif;
    font-size: 30px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    margin: 0px;
}
.list-titel {
    width: 40%;
}
.list-id span svg {
    width: 20px;
    height: 20px;
}
.list-btn {
    width: 44%;
}
.list-titel p {
    color: #000;
    font-family: 'Nunito';
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px;
    margin: 0px;
    padding-right: 11px;
}
.btn-ides {
    width: 100%;
    display: flex;
    align-items: center;
    padding-top: 45px;
    justify-content: flex-end;
    gap: 4px;
}
.btn-ides span svg {
    width: 20px;
    height: 20px;
}
.list-1 img {
    width: 11%;
    min-width: 11%;
    max-width: 11%;
    position: relative;
    z-index: 1;
    margin-top: -80px;
    height: 120px;
    margin-top: -80px;
    border-radius: 50%;
    max-height: 120px;
    min-height: 120px;

    object-fit: cover;
}
.list-titel p {
    color: #000;
    font-family: 'Nunito';
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    margin: 0px;
    padding-right: 20px;
}
.list-id h2 {
    color: #000;
    font-family: sans-serif;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    font-size: 15px;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    gap: 5px;
    margin: 0px;
    font-size: 13px;
}
.buttons {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 15px;
    padding-top: 0px;
}
.buttons button {
    display: flex;
    width: 130px;
    height: 35px;
    padding: 10px 18px;
    justify-content: center;
    align-items: center;
    gap: 4.647px;
    flex-shrink: 0;
    border-radius: 6px;
    border: 1px solid #000;
    background: #F5F3EA;
    box-shadow: 2px 2px 0px 0px #1B1C1D;
    color: #000;
    text-align: center;
    font-family: sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
}
.pox-1 {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
    border-bottom: 1px solid #000;
}
.top-btn button svg {
    width: 15px;
    height: 15px;
}
.top-btn {
    width: 49%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 5px;
}
.pox-2 p {
    color: #293857;
    font-family: sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.96px;
    margin: 0px;
}
.pox-2 {
    width: 100%;
    padding: 15px;
}
.pox-2 h2 {
    color: #000;
    font-family: sans-serif;
    font-style: normal;
    font-weight: 600;
    line-height: 10px;
    padding: 15px 0px;
    font-size: 18px;
    margin: 0px;
}
.pox-3 h2 {
    color: #000;
    font-family: sans-serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding: 0px 0px 0px 0px;
    margin: 0px;
}
.pox-3 h2 span {
    color: #000;
    font-family: sans-serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}


.carder {
    width: 470px;
    height: 160px;
    flex-shrink: 0;
    background: #293857;
    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
    padding: 25px;
}
div#carouselExampleControls {
    width: 100%;
}
.yes svg {
    width: 20px;
    height: 20px;
}
.Jobs-card {
    display: inline-flex;
    height: 115px;
    padding: 8px 12px 8px 12px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 0px;
    flex-shrink: 0;
    border-radius: 15px;
    background: #FFF;
    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
}
.Jobs-card p {
    color: #000;
    font-family: sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    margin: 0px;
}
.Jobs-card h2 {
    color: #000;
    font-family: sans-serif;
    font-size: 30px;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
    margin: 0px;
}

.Jobs-cards {
    display: inline-flex;
    height: 115px;
    padding: 8px 30px 8px 12px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 0px;
    flex-shrink: 0;
    border-radius: 15px;
    background: #FFF;
    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
}
.Jobs-cards p {
    color: #000;
    font-family: sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    margin: 0px;
}
.Jobs-cards h2 {
    color: #000;
    font-family: sans-serif;
    font-size: 30px;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
    margin: 0px;
}
.slide-card {
    border-radius: 16px;
    border: 2px solid #000;
    background: #FFF;
    box-shadow: 4px 4px 0px 2px #1B1C1D;
    width: 100%;
    height: 184px;
    flex-shrink: 0;
    padding:30px;
}
.imger h2 {
    color: #000;
    font-family: sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0px;
}
.imger img {
    width: 34%;
}
.slide-card p {
    color: #000;
    font-family: sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.96px;
    margin: 0px;
    padding: 20px 30px 20px 0px;
}
/* .slide-card {
    border-radius: 16px;
    border: 2px solid #000;
    background: #FFF;
    box-shadow: 4px 4px 0px 2px #1B1C1D;
    width: 100%;
    height: 145px;
    flex-shrink: 0;
    padding: 10px;
} */
.salider-card {
    height: 100%;
    flex-shrink: 0;
    border-left: 2px solid #F96;
    width: 28%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 20px 10px;
}
}

@media screen and (max-width: 1366px){
    .upgardebutton {
  
    width: 160px;
    height: 40px;
    padding: 9px 7px;
    font-size: 14px;
   
}

    .carder{
        width: 460px;
    height: 150px;
    flex-shrink: 0;
    background: #293857;
    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
    padding: 25px;

}
.godashboard{
    font-size: 14px;

}
.btn-ides {

    gap: 20px;
}

.basic {
    font-size: 45px;
}
    .ptag {
  
    font-size: 15px !important;
 
}
.since {
   
    font-size: 13px;
   
}
.member {
    font-size: 17px;
}
.newp {
    font-size: 16px !important;
    font-weight: 400 !important;
    color: #293857 !important;
}

}
@media screen and (max-width: 1024px){
    .buttons {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    padding-top: 0px;
}
.btn-ides {
    width: 100%;
    display: flex;
    align-items: center;
    padding-top: 20px;
    justify-content: flex-end;
    gap: 4px;
}
.list-btn {
    width: 38%;
    padding-top: 20px;
}

.btn-ides h2 {
    color: #000;
    font-family: sans-serif;
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin: 0px;
    white-space: nowrap; /* Prevent text from wrapping */
    overflow: hidden; /* Hide overflowed text */
    text-overflow: ellipsis;
}
.list-1 {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 25px 0px 15px 0px;
    border-bottom: 2px solid #f96;
}
.list-titel span h2 {
    color: #000;
    font-family: sans-serif;
    font-size: 28px;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
    margin: 0px;
}
.list-titel {
    width: 62%;
}
.list-titel p {
    color: #000;
    font-family: 'Nunito';
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px;
    margin: 0px;
    padding-right: 0px;
}
.pox-1 {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #000;
}
.pox-1 h2 {
    color: #000;
    text-align: center;
    font-family: sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 800;
    line-height: 24px;
    margin: 0px;
    padding: 10px;
}
.top-btn button span {
    font-size: 12px;
}
.pox-2 p {
    color: #000;
    font-family: sans-serif;
    font-size: 13px;
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
    line-height: 10px;
    padding: 10px 0px;
    font-size: 15px;
    margin: 0px;
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
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}
.pox-2 {
    width: 100%;
    padding: 10px;
}
.pox-3 h2 {
    color: #000;
    font-family: sans-serif;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding: 0px 0px 0px 0px;
    margin: 0px;
}
.pox-2 p {
    color: #000;
    font-family: sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.96px;
    margin: 0px;
}
.page-1 {
    width: 100%;
    background-color: #F5F3EA;
    padding: 0px 15px;
}
.roll-2 {
    width: 100%;
    padding: 0px 20px;
}




.Jobs-card {
    display: inline-flex;
    height: 88px;
    padding: 6px 8px 6px 8px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 0px;
    flex-shrink: 0;
    border-radius: 15px;
    background: #FFF;
    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
}
.Jobs-card p {
    color: #000;
    font-family: sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    margin: 0px;
}
.Jobs-card h2 {
    color: #000;
    font-family: sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
    margin: 0px;
}


.Jobs-cards {
    display: inline-flex;
    height: 88px;
    padding: 6px 8px 6px 8px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 0px;
    flex-shrink: 0;
    border-radius: 15px;
    background: #FFF;
    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
}
.Jobs-cards p {
    color: #000;
    font-family: sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    margin: 0px;
}
.Jobs-cards h2 {
    color: #000;
    font-family: sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
    margin: 0px;
}
.icon-box svg {
    width: 15px;
    height: 15px;
}
}
@media screen and (max-width: 768px){
    .list-titel p {
    color: #000;
    font-family: 'Nunito';
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px;
    margin: 0px;
    padding-right: 80px;
}
    .salider-card{
    height: 100%;
    flex-shrink: 0;
    border: 2px solid #F96;
    width: 68%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 20px 10px;
    align-content: center;
    border-radius: 15px;
}
.more-card{
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.list-2{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 30px;
    padding: 20px 0px;
}
.mine-card{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 18px;
}
.Jobs-cards{
    display: inline-flex;
    height: 88px;
    padding: 6px 30px 6px 8px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 0px;
    flex-shrink: 0;
    border-radius: 15px;
    background: #FFF;
    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
}
.run-card h2{
    color: #000;
    font-family: sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: bold;
    line-height: 24px;
    padding: 20px 0px 10px 0px;
}
}

@media screen and (max-width: 425px){
    .more-card{
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    gap: 20px;
}

.list-titel{
    width: 100%;
    padding-top: 18px;
}
.list-btn{
    width: 100%;
    padding-top: 20px;
}
.list-1 img{
    width: 30%;
    min-width: 30%;
    max-width: 30%;
    position: relative;
    z-index: 1;
    margin-top: -85px;
   height: 100px;
    position: relative;
    z-index: 1;
    margin-top: -80px;
    border-radius: 50%;
    max-height: 100px;
    min-height: 100px;
    object-fit: cover;
}
.list-1{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 25px 0px 15px 0px;
    border-bottom: 2px solid #f96;
    flex-direction: column;
}
.list-id{
    width: 100%;
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 0px 0px 5px 0px;
}
.cards{
    border-radius: 16px;
    border: 2px solid #000;
    background: #F96;
    box-shadow: 4px 4px 0px 2px #1B1C1D;
    width: 65%;
    height: 100%;
    flex-shrink: 0;
}
.salider-card{
    height: 100%;
    flex-shrink: 0;
    border: 2px solid #F96;
    width: 98%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 20px 10px;
    align-content: center;
    border-radius: 15px;
}
}
</style>