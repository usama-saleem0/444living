<template>
  <div>
    <header class="loging-header">
    <div class="contanir">
      <nav class="logaing-nav">
        <div class="loging-logo">
          <img src="/images/logo-header.png" alt="">
        </div>

        <div class="loging-close-btn">
          <button>
            <svg width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_206_2853)">
<g clip-path="url(#clip0_206_2853)">
<path d="M13.3088 10.814C13.3088 13.3776 15.8413 17.2059 18.405 20.4191C21.7012 24.5652 25.64 28.1827 30.1558 30.9433C33.5418 33.0129 37.6464 34.9996 40.9495 34.9996C37.6464 34.9996 33.5383 36.9863 30.1558 39.0559C25.64 41.8199 21.7012 45.4374 18.405 49.5766C15.8413 52.7933 13.3088 56.6285 13.3088 59.1852" stroke="#DED4A2" stroke-width="6"/>
</g>
<g clip-path="url(#clip1_206_2853)">
<path d="M64.6666 59.0539C64.643 56.4903 62.0751 52.6856 59.4819 49.4962C56.1476 45.3807 52.1756 41.7997 47.6345 39.0809C44.2295 37.0427 40.1067 35.094 36.8038 35.1245C40.1067 35.094 44.1963 33.0695 47.5596 30.9687C52.0497 28.1631 55.9549 24.5094 59.2127 20.3399C61.7465 17.0997 64.2436 13.2413 64.22 10.6847" stroke="#DED4A2" stroke-width="6"/>
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

<section class="loging-page">
   <div class="contanir">
    <div class="main-loging">
  <div class="loging-form">
    <div class="form-LogIn">
      <h2>Sign Up</h2>

      <div class="Login-btn-box">
        <button>As  Buyer</button>
        <button>As Realtor</button>
        <button>As Realtor</button>
      </div>


      
      <div class="loging-input-group">
        <input type="email" placeholder="Enter your email address*" >
      </div>

      <div class="loging-input-groups">
        <input type="text" placeholder="Username" >

        <input type="number" placeholder="Contact Number" >
      </div>
      <div class="loging-input-group">
        <input type="password" placeholder="Enter your password*" >
      </div>

      <div class="loging-input-group">
        <input type="password" placeholder="Re-enter your password" >
      </div>
      

      <div class="btn-loging-long">
        <button>Next</button>
      </div>






      <p>New to 444Living ? Sign Up</p>



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
   </div>
</section>


  </div>
</template>
<script>
import axios from "axios";
import * as notify from "../../utils/notify.js";
export default {
  methods: {
    async login() {
      try {
        const response = await axios.post("login", {
          email: this.email,
          password: this.password,
        });
        localStorage.setItem("token", response.data.token);
        this.$store.dispatch("user", response.data.user);
        this.$router.push("/admin");
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
    }
  },
};
</script>
<style scoped>
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
input:-internal-autofill-selected {
    background-color: transparent !important;
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

.loging-close-btn button {
    background: transparent;
    border: none;
    outline: none;
    width: 100%;
}

.loging-close-btn button img {
    width: 100%;
}

section.loging-page {
    width: 100%;
    background-color: #DED4A2;
    padding: 0px 0px 0px 100px;
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

.OR-list {width: 100%;}
.loging-close-btn svg {
    width: 100%;
    height: 80px;
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


.loging-input-groups input {
    width: 48%;
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

.loging-input-groups {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
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

.loging-input-groups input {
    width: 48%;
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
    width: 41%;
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
.loging-close-btn svg[data-v-72911c7d] {
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

.loging-input-groups input{
    width: 48%;
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
header.loging-header[data-v-72911c7d] {
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
.loging-close-btn[data-v-72911c7d] {
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

@media screen and (max-width: 425px){
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
.loging-close-btn[data-v-72911c7d] {
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


.loging-input-groups input {
    width: 48%;
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
}
}
</style>