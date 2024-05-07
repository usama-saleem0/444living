<template>
    <div>

   
  <div class="fade-in" v-if="first">
    <header class="loging-header">
    <div class="contanir">
      <nav class="logaing-nav">
        <div class="loging-logo">
          <img src="/images/logo-header.png" alt="">
        </div>

        <div class="loging-close-btn">
          <button @click="backhome">
            <svg class="svgsizeing" width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_206_2853)">
<g clip-path="url(#clip0_206_2853)">
<path class="svgcolor" d="M13.3088 10.814C13.3088 13.3776 15.8413 17.2059 18.405 20.4191C21.7012 24.5652 25.64 28.1827 30.1558 30.9433C33.5418 33.0129 37.6464 34.9996 40.9495 34.9996C37.6464 34.9996 33.5383 36.9863 30.1558 39.0559C25.64 41.8199 21.7012 45.4374 18.405 49.5766C15.8413 52.7933 13.3088 56.6285 13.3088 59.1852" stroke="#DED4A2" stroke-width="6"/>
</g>
<g clip-path="url(#clip1_206_2853)">
<path class="svgcolor" d="M64.6666 59.0539C64.643 56.4903 62.0751 52.6856 59.4819 49.4962C56.1476 45.3807 52.1756 41.7997 47.6345 39.0809C44.2295 37.0427 40.1067 35.094 36.8038 35.1245C40.1067 35.094 44.1963 33.0695 47.5596 30.9687C52.0497 28.1631 55.9549 24.5094 59.2127 20.3399C61.7465 17.0997 64.2436 13.2413 64.22 10.6847" stroke="#DED4A2" stroke-width="6"/>
</g>
</g>
<defs>
<filter id="filter0_d_206_2853" x="-0.000244141" y="0" width="77.9822" height="78" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="7"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_206_2853"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_206_2853" result="shape"/>
</filter>
<clipPath id="clip0_206_2853">
<rect width="49.7533" height="26.9497" fill="white" transform="matrix(0 1 -1 0 40.9495 10.123)"/>
</clipPath>
<clipPath id="clip1_206_2853">
<rect width="49.7533" height="26.9497" fill="white" transform="translate(37.0334 60) rotate(-90.529)"/>
</clipPath>
</defs>
</svg>

          </button>
        </div>
      </nav>
    </div>
    </header>

<section class="loging-page fade-in">
  
    <div class="main-loging">
  <div class="loging-form">
    <div class="form-LogIn">
      <h2>Log In </h2>

      <!-- <div class="Login-btn-box">
        <button :style="{ backgroundColor: buttonColor,   color:textcolor }" @click="setcolor(1)">As  Buyer</button>
        <button :style="{ backgroundColor: buttonColor1,   color:textcolor1 }" @click="setcolor(2)">As Realtor</button>
        <button :style="{ backgroundColor: buttonColor2,   color:textcolor2 }" @click="setcolor(3)">As Investor</button>
      </div> -->

      <div class="loging-input-group">
        <input type="email" placeholder="Email *" v-model="email">
      </div>

      <div class="loging-input-group">
        <input type="password" placeholder="Your Password *" v-model="password">
      </div>

      <div class="Forgot-box">
        <button @click="forgot">Forgot Password ?</button>
      </div>

      <div class="btn-loging-long">
        <button @click="login">Log In</button>
      </div>

      <!-- <div class="OR-list">
        <p>OR</p>
      </div> -->

<!-- 
      <div class="Google-btn">
        <button>    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
  <g clip-path="url(#clip0_265_483)">
    <path d="M10.4508 0.986913C7.45335 2.02676 4.86834 4.00043 3.07548 6.61801C1.28262 9.23559 0.376419 12.3591 0.489976 15.5298C0.603533 18.7005 1.73087 21.7512 3.70638 24.2338C5.6819 26.7164 8.40148 28.5001 11.4657 29.3229C13.9499 29.9639 16.5526 29.992 19.05 29.4049C21.3125 28.8967 23.4042 27.8096 25.1203 26.2502C26.9065 24.5776 28.2029 22.4498 28.8703 20.0955C29.5955 17.5353 29.7246 14.843 29.2477 12.2252H15.2977V18.0119H23.3766C23.2151 18.9349 22.8691 19.8157 22.3593 20.6018C21.8495 21.3879 21.1863 22.0631 20.4094 22.5869C19.423 23.2397 18.3109 23.6788 17.1446 23.876C15.9749 24.0935 14.7752 24.0935 13.6055 23.876C12.4199 23.6311 11.2984 23.1418 10.3125 22.4393C8.72851 21.318 7.53912 19.725 6.9141 17.8877C6.27868 16.0159 6.27868 13.9868 6.9141 12.115C7.359 10.803 8.09449 9.60848 9.06566 8.62051C10.177 7.46913 11.5841 6.64612 13.1324 6.24178C14.6808 5.83743 16.3106 5.86738 17.843 6.32832C19.0402 6.69564 20.1349 7.33772 21.0399 8.20332C21.9508 7.29707 22.8602 6.38848 23.768 5.47754C24.2368 4.98769 24.7477 4.52129 25.2094 4.01973C23.8278 2.73422 22.2063 1.73388 20.4375 1.07598C17.2165 -0.0935799 13.6922 -0.125011 10.4508 0.986913Z" fill="#293857"/>
    <path d="M10.4504 0.986587C13.6915 -0.126092 17.2158 -0.0954888 20.4371 1.07331C22.2062 1.73568 23.827 2.74084 25.2066 4.03112C24.7379 4.53268 24.2434 5.00143 23.7652 5.48893C22.8559 6.39674 21.9473 7.30143 21.0395 8.20299C20.1345 7.3374 19.0398 6.69531 17.8426 6.32799C16.3106 5.86543 14.6809 5.83376 13.1322 6.23645C11.5834 6.63914 10.1755 7.46064 9.06289 8.61081C8.09172 9.59878 7.35623 10.7933 6.91133 12.1053L2.05273 8.34362C3.79182 4.89493 6.80293 2.25696 10.4504 0.986587Z" fill="#E33629"/>
    <path d="M0.764007 12.0703C1.02496 10.776 1.45852 9.52264 2.05307 8.34375L6.91166 12.1148C6.27625 13.9866 6.27625 16.0157 6.91166 17.8875C5.29291 19.1375 3.67338 20.3938 2.05307 21.6563C0.565141 18.6945 0.111349 15.3199 0.764007 12.0703Z" fill="#F8BD00"/>
    <path d="M15.2979 12.2227H29.2479C29.7248 14.8405 29.5958 17.5328 28.8706 20.093C28.2032 22.4472 26.9067 24.575 25.1206 26.2477C23.5526 25.0242 21.9776 23.8102 20.4096 22.5867C21.187 22.0624 21.8505 21.3865 22.3604 20.5995C22.8702 19.8126 23.216 18.9308 23.3768 18.007H15.2979C15.2956 16.0805 15.2979 14.1516 15.2979 12.2227Z" fill="#587DBD"/>
    <path d="M2.05078 21.6564C3.67109 20.4064 5.29062 19.1502 6.90937 17.8877C7.53564 19.7257 8.72673 21.3187 10.3125 22.4393C11.3014 23.1386 12.4254 23.6239 13.6125 23.8643C14.7822 24.0818 15.9819 24.0818 17.1516 23.8643C18.3179 23.6671 19.43 23.228 20.4164 22.5752C21.9844 23.7986 23.5594 25.0127 25.1273 26.2361C23.4115 27.7964 21.3197 28.8843 19.057 29.3932C16.5596 29.9803 13.9569 29.9521 11.4727 29.3111C9.50789 28.7865 7.67268 27.8617 6.08203 26.5947C4.39858 25.2579 3.02352 23.5734 2.05078 21.6564Z" fill="#319F43"/>
  </g>
  <defs>
    <clipPath id="clip0_265_483">
      <rect width="30" height="30" fill="white"/>
    </clipPath>
  </defs>
</svg>
Sign In With Google</button>
      </div> -->


      <p>New to 444Living?<span style="cursor: pointer;" @click="registering">Sign Up</span> </p>



    </div>
  </div>




  <div class="loging-salider">
    <div id="carouselExampleIndicators" class="carousel slide carousel-fade" data-ride="carousel" data-interval="3000">
                    <div >
                      <ol class="carousel-indicators">
     <img src="/images/p1.png" alt="" data-target="#carouselExampleIndicators" data-slide-to="0" class="active">
     <img src="/images/p2.png" alt="" data-target="#carouselExampleIndicators" data-slide-to="1">
     <img src="/images/p3.png" alt="" data-target="#carouselExampleIndicators" data-slide-to="2">
     <img src="/images/p4.png" alt="" data-target="#carouselExampleIndicators" data-slide-to="3">
  </ol>
                    </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="/images/salider.png" alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" s src="/images/salider1.png" alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100"  src="/images/salider2.png" alt="Third slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100"  src="/images/salider3.png" alt="fourth slide">
    </div>
  </div>
</div>
  </div>
</div>
 
</section>


  </div>

  <Loader v-if="second"/>
</div>


</template>
<script>
import axios from "axios";
import * as notify from "../../utils/notify.js";
import Loader from "../admin/loader.vue"
export default {
  components: {
   
    Loader
  
  
  },
  data() {
    return {
        first : true,
      
        second:false,
        email:'',
        password:'',
        buttonColor:'#ded4a2',
        textcolor:'#293857',
        buttonColor1:'#ded4a2',
        textcolor1:'#293857',
        buttonColor2:'#ded4a2',
        textcolor2:'#293857'
      
    };
  },


    
  mounted() {
    this.$nextTick(() => {
      this.$refs.fadeContainer.classList.add('fade-in');
    });
  },

  methods: {

    forgot(){
      this.$router.push('/forget')
    },

    setcolor(e){
      if(e == 1){
        this.buttonColor = '#293857'
        this.textcolor = '#ded4a2'

        this.buttonColor1 = '#ded4a2'
        this.textcolor1 = '#293857'

        this.buttonColor2 = '#ded4a2'
        this.textcolor2 = '#293857'

      }


      if(e == 2){
        this.buttonColor1 = '#293857'
        this.textcolor1 = '#ded4a2'

        this.buttonColor = '#ded4a2'
        this.textcolor = '#293857'

        this.buttonColor2 = '#ded4a2'
        this.textcolor2 = '#293857'

      }


      if(e == 3){
        this.buttonColor2 = '#293857'
        this.textcolor2 = '#ded4a2'

        this.buttonColor = '#ded4a2'
        this.textcolor = '#293857'

        this.buttonColor1 = '#ded4a2'
        this.textcolor1 = '#293857'

      }
    },

    mainpage(){
      this.first = false
        this.second = true
      setTimeout(() => {
       

         
        this.$router.push('/homepages')
        }, 3000);

    },
    
    async login() {
      // console.log('ghemdy');
      try {
        const response = await axios.post("login", {
          email: this.email,
          password: this.password,
        });
        localStorage.setItem("token", response.data.token);
        this.$store.dispatch("user", response.data.user);
        this.first = false
        this.second = true
        // this.$router.push("/homepages");
        setTimeout(() => {
       

         
       this.$router.push('/homepages').then(() => {
    window.location.reload();
});
       }, 3000);
      } catch (error) {
        notify.authError(error);
      }
    },
    startImageSlideshow() {
      setInterval(() => {
        const totalImages = this.images.length;
        const currentImage = this.activeImage;
        const nextImage = (currentImage + 1) % totalImages;
        // Hide the current image
        this.images[currentImage].isActive = false;
        // After a delay, show the next image
        setTimeout(() => {
          this.activeImage = nextImage;
          this.images[nextImage].isActive = true;
        }, 1000); // Adjust the delay as needed
      }, 8000);
    },

    backhome(){
        this.$router.push('/')
    },
    registering(){
      this.$router.push('/register')
    }
  },
};
</script>
<style scoped>

.fade-in {
  animation: fadeIn 1s !important;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease-in-out !important; /* Define the transition */
}
.fade-enter, .fade-leave-to {
  opacity: 0 !important; /* Initially set opacity to 0 */
}

header.loging-header {
    width: 100%;
    padding: 30px 100px;
    position: absolute;
}

.contanir {
    width: 100%;
}

nav.logaing-nav {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.loging-logo {
    width: 7%;
}

.loging-logo img {
    width: 100%;
}

.loging-close-btn {
    width: 5%;
    z-index: 999;
}
.carousel-item {
  width: 100%;
  min-width: 100%;
  max-width: 100%;
}
.loging-close-btn button {
    background: transparent;
    border: none;
    outline: none;
    width: 100%;
}
.loging-close-btn svg {
    width: 100%;
    height: 80px;
}
.loging-close-btn button img {
    width: 100%;
}

section.loging-page {
    width: 100%;
    background-color: #DED4A2;
    padding: 0px 0px 0px 100px;
    height: 100%;
}

div#carouselExampleIndicators {
    height: 100% !important;
}

.carousel-inner {
    height: 100% !important; 
}


.main-loging {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.loging-salider {
    width: 52%;
}

.loging-salider img {
    width: 100%;
}


.loging-form {
    width: 40%;
}

.form-LogIn {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    align-items: center;
}

.form-LogIn h2 {
    color: #293857;
    font-family: "Saol Display";
    font-size: 70px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0px;
    text-align: center;
    width: 100%;
}

.Login-btn-box {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.Login-btn-box button {
    color: #293857;
    font-family: sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: inline-flex;
    padding: 22px 62px 22px 63px;
    justify-content: center;
    border: 1px solid #293857;
    background: transparent;
    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
    align-items: center;
    transition: 0.3s;
}

.loging-input-group {
    width: 100%;
}

.loging-input-group input {
    width: 100%;
    color: #293857 !important;
    font-family: sans-serif;
    font-size: 22px;
    font-style: normal;
    outline: none;
    border: none;
    font-weight: 400;
    padding: 22px 0px;
    line-height: normal;
    background-color: transparent;
    border-bottom: 1px solid #5C5C5C;
}

.Forgot-box {
    width: 100%;
}

.Forgot-box button {
    background: transparent;
    border: none;
    color: #293857;
    font-family: sans-serif;
    font-size: 22px;
    font-weight: 600;
    line-height: normal;
    font-style: italic;
}

.btn-loging-long {
    width: 100%;
}

.btn-loging-long button {
    width: 100%;
    background: #293857;
    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
    color: #FFF;
    font-family: sans-serif;
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding: 18px;
    border: 1px solid #293857;
}

.btn-loging-long button::after {
    position: absolute;
    content: "";
    width: 0;
    left: 0px;
    bottom: 0px;
    background: #DED4A2;
    height: 2px;
    transition: 0.3s ease-out;
}

.OR-list {
    width: 100%;
}
    
.OR-list p {
    width: 100%;
    text-align: center;
    color: #293857;
    font-family: sans-serif;
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    background: #5C5C5C;
    height: 1px;
    margin: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.Google-btn {
    width: 100%;
}

.Google-btn button {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 18px 30px;
    justify-content: center;
    gap: 20px;
    background: transparent;
    border: 1px solid #5C5C5C;
    color: #293857;
    font-family: sans-serif;
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
}

.form-LogIn p {
    color: #293857;
    font-family: sans-serif;
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;
    width: 100%;
}

.Login-btn-box button:hover {
    background: #293857;
    color: #ded4a2;
}


.Login-btn-box button::after {
    position: absolute;
    content: "";
    width: 0;
    left: 0px;
    bottom: 0px;
    background: #DED4A2;
    height: 2px;
    transition: 0.3s ease-out;
}
ol.carousel-indicators img {
    width: 100% !important;
}

ol.carousel-indicators {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 0px;
    left: -70px;
    width: 14%;
    margin: 0px !important;
}

  .loging-close-btn button::after {
    position: absolute;
    content: "";
    width: 0;
    left: 25px;
    bottom: 0px;
    background: #DED4A2;
    height: 2px;
    transition: 0.3s ease-out;
}




@media screen and (max-width: 1600px){
  .form-LogIn h2 {
    color: #293857;
    font-family: "Saol Display";
    font-size: 58px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    margin: 0px;
    text-align: center;
    width: 100%;
}
.Login-btn-box button {
    color: #293857;
    font-family: sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: inline-flex;
    padding: 14px 44px 14px 44px;
    justify-content: center;
    border: 1px solid #293857;
    background: transparent;
    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
    align-items: center;
    transition: 0.3s;
}
.loging-input-group input {
    width: 100%;
    color: #293857 !important;
    font-family: sans-serif;
    font-size: 16px;
    font-style: normal;
    outline: none;
    border: none;
    font-weight: 400;
    padding: 16px 0px;
    line-height: normal;
    background-color: transparent;
    border-bottom: 1px solid #5C5C5C;
}
.Forgot-box button {
    background: transparent;
    border: none;
    color: #293857;
    font-family: sans-serif;
    font-size: 18px;
    font-weight: 600;
    line-height: normal;
    font-style: italic;
}
.btn-loging-long button {
    width: 100%;
    background: #293857;
    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
    color: #FFF;
    font-family: sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding: 14px;
    border: 1px solid #293857;
}
.OR-list p {
    width: 100%;
    text-align: center;
    color: #293857;
    font-family: sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    background: #5C5C5C;
    height: 1px;
    margin: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.Google-btn button {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 14px 30px;
    justify-content: center;
    gap: 18px;
    background: transparent;
    border: 1px solid #5C5C5C;
    color: #293857;
    font-family: sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
}
.form-LogIn p {
    color: #293857;
    font-family: sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;
    width: 100%;
    margin: 0px;
}
.form-LogIn {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
    align-items: center;
}
.loging-salider{

    
    width: 52%;
    height: 100vh;
}
.loging-logo{
    width: 5%;
}
header.loging-header{
    width: 100%;
    padding: 15px 100px;
    position: absolute;
}
ol.carousel-indicators{

    
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 0px;
    left: -44px;
    width: 14%;
    margin: 0px !important;
}
}



@media screen and (max-width: 1440px){
  .Login-btn-box button{
    color: #293857;
    font-family: sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: inline-flex;
    padding: 12px 42px 12px 42px;
    justify-content: center;
    border: 1px solid #293857;
    background: transparent;
    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
    align-items: center;
    transition: 0.3s;
}
.loging-close-btn svg {
    width: 100%;
    height: 42px;
}
.loging-input-group input{
    width: 100%;
    color: #293857 !important;
    font-family: sans-serif;
    font-size: 14px;
    font-style: normal;
    outline: none;
    border: none;
    font-weight: 400;
    padding: 14px 0px;
    line-height: normal;
    background-color: transparent;
    border-bottom: 1px solid #5C5C5C;
}
.Forgot-box button{
    background: transparent;
    border: none;
    color: #293857;
    font-family: sans-serif;
    font-size: 14px;
    font-weight: 600;
    line-height: normal;
    font-style: italic;
}
.btn-loging-long button{
    width: 100%;
    background: #293857;
    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
    color: #FFF;
    font-family: sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding: 12px;
    border: 1px solid #293857;
}
.Google-btn button{
    width: 100%;
    display: flex;
    align-items: center;
    padding: 12px 30px;
    justify-content: center;
    gap: 18px;
    background: transparent;
    border: 1px solid #5C5C5C;
    color: #293857;
    font-family: sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
}
.Google-btn button svg {
    width: 20px;
    height: 20px;
}
.form-LogIn p{
    color: #293857;
    font-family: sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;
    width: 100%;
    margin: 0px;
}
.form-LogIn{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    align-items: center;
}
.form-LogIn h2{
    color: #293857;
    font-family: "Saol Display";
    font-size: 42px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px;
    margin: 0px;
    text-align: center;
    width: 100%;
}
}


@media screen and (max-width: 1024px){
  .loging-salider {
    width: 47%;
}
section.loging-page {
    width: 100%;
    background-color: #DED4A2;
    padding: 0px 0px 0px 45px;
    height: 100vh;
}
header.loging-header {
    width: 100%;
    padding: 12px 45px;
    position: absolute;
}
.Login-btn-box button {
    color: #293857;
    font-family: sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: inline-flex;
    padding: 12px 30px 12px 30px;
    justify-content: center;
    border: 1px solid #293857;
    background: transparent;
    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
    align-items: center;
    transition: 0.3s;
}
.btn-loging-long button{
    width: 100%;
    background: #293857;
    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
    color: #FFF;
    font-family: sans-serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding: 10px;
    border: 1px solid #293857;
}
.Google-btn button{
    width: 100%;
    display: flex;
    align-items: center;
    padding: 10px 30px;
    justify-content: center;
    gap: 18px;
    background: transparent;
    border: 1px solid #5C5C5C;
    color: #293857;
    font-family: sans-serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
}
.form-LogIn{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 18px;
    align-items: center;
}
.form-LogIn p{
    color: #293857;
    font-family: sans-serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;
    width: 100%;
    margin: 0px;
}
.Forgot-box button{
    background: transparent;
    border: none;
    color: #293857;
    font-family: sans-serif;
    font-size: 12px;
    font-weight: 600;
    line-height: normal;
    font-style: italic;
}
.form-LogIn h2{
    color: #293857;
    font-family: "Saol Display";
    font-size: 38px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px;
    margin: 0px;
    text-align: center;
    width: 100%;
}
}



@media screen and (max-width: 768px){
  section.loging-page{
    width: 100%;
    background-color: #DED4A2;
    padding: 70px 60px 0px 60px;
    height: 100%;
}
.main-loging{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 24px;
}
.loging-form{
    width: 75%;
}
.loging-close-btn {
    width: 8%;
    z-index: 999;
}
.loging-salider{
    width: 100%;
}

ol.carousel-indicators{
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 0px;
    left: -32px;
    width: 10%;
    margin: 0px !important;
}
.loging-logo{
    width: 10%;
}
}

@media screen and (max-width: 600px){

  .loging-salider {
    width: 100%;
    height: 100%;
    padding-bottom: 15px;
}
  section.loging-page{
    width: 100%;
    background-color: #DED4A2;
    padding: 70px 35px 0px 35px;
    height: 100%;
}
.loging-form {
    width: 100%;
}
.loging-logo {
    width: 15%;
}
header.loging-header{
    width: 100%;
    padding: 15px 35px;
    position: absolute;
}
.Login-btn-box button {
    color: #293857;
    width: 31%;
    font-family: sans-serif;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: inline-flex;
    padding: 10px 0px;
    justify-content: center;
    border: 1px solid #293857;
    background: transparent;
    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
    align-items: center;
    transition: 0.3s;
}
.loging-close-btn {
    width: 14%;
    z-index: 999;
}
.loging-input-group input {
    width: 100%;
    color: #293857 !important;
    font-family: sans-serif;
    font-size: 12px;
    font-style: normal;
    outline: none;
    border: none;
    font-weight: 400;
    padding: 12px 0px;
    line-height: normal;
    background-color: transparent;
    border-bottom: 1px solid #5C5C5C;
}
.Forgot-box button {
    background: transparent;
    border: none;
    color: #293857;
    font-family: sans-serif;
    font-size: 10px;
    font-weight: 600;
    line-height: normal;
    font-style: italic;
}
.btn-loging-long button {
    width: 100%;
    background: #293857;
    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
    color: #FFF;
    font-family: sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding: 10px;
    border: 1px solid #293857;
}
.Google-btn button {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 10px 30px;
    justify-content: center;
    gap: 18px;
    background: transparent;
    border: 1px solid #5C5C5C;
    color: #293857;
    font-family: sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
}
.form-LogIn p {
    color: #293857;
    font-family: sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;
    width: 100%;
    margin: 0px;
}
.Google-btn button svg {
    width: 18px;
    height: 18px;
}
ol.carousel-indicators {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 0px;
    left: -20px;
    width: 12%;
    margin: 0px !important;
    display: none;
}

.svgcolor{
  stroke: #293857;
}

.svgsizeing{
  width: 40px !important;
}




  /* .carousel-inner {
    height: 100px !important;
} */

}


</style>