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
            <img src="/images/loging-close.png" alt="">
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
</style>