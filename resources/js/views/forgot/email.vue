<template>
  <div>

    <section class="email-sine">
  <div class="contanir">

    <div class="main-email">
 <div class="email-logo">
  <img class="images" src="/images/logo.png"/>
 </div>
      <div class="email-tital">
        <span><svg xmlns="http://www.w3.org/2000/svg" width="92" height="69" viewBox="0 0 92 69" fill="none">
<g clip-path="url(#clip0_808_806)">
  <rect width="91.635" height="68.66" fill="#293857"/>
  <path d="M0 61.3519C0 47.3349 0 33.3179 0 19.3009C0.133 19.3589 0.279 19.3969 0.398 19.4759C12.795 27.7409 25.19 36.0089 37.585 44.2759C42.988 47.8789 48.588 47.9059 53.966 44.3249C66.217 36.1669 78.461 27.9969 90.708 19.8329C90.969 19.6589 91.238 19.4949 91.617 19.2539C91.617 19.5869 91.617 19.7849 91.617 19.9829C91.617 33.3419 91.621 46.7009 91.605 60.0599C91.604 60.7969 91.517 61.5539 91.337 62.2689C90.347 66.1969 87.024 68.6509 82.716 68.6529C70.52 68.6589 58.324 68.6549 46.128 68.6549C33.723 68.6549 21.319 68.6499 8.914 68.6589C6.484 68.6609 4.349 67.9459 2.565 66.2559C1.146 64.9129 0.441 63.2039 0 61.3519Z" fill="#DED4A2"/>
  <path d="M0 7.31201C0.147 6.80101 0.276 6.28401 0.445 5.78101C1.614 2.30901 4.752 0.0710112 8.557 0.0130112C10.316 -0.0129888 12.076 0.00801125 13.835 0.00801125C36.767 0.00801125 59.699 0.0120112 82.631 0.00201125C85.3 0.00101125 87.614 0.798011 89.428 2.81101C92.847 6.60601 92.234 12.281 88.01 15.153C82.441 18.94 76.813 22.639 71.21 26.376C64.541 30.823 57.872 35.271 51.202 39.716C47.365 42.273 44.263 42.271 40.431 39.717C28.678 31.883 16.947 24.015 5.154 16.241C2.638 14.583 0.619 12.699 0 9.63801C0 8.86301 0 8.08701 0 7.31201Z" fill="#DED4A2"/>
</g>
<defs>
  <clipPath id="clip0_808_806">
    <rect width="91.635" height="68.66" fill="white"/>
  </clipPath>
</defs>
</svg></span>

<h2>Confirm Your Email</h2>

<p>Verifying your email give you acess to more features on unlayer, Click the button <br> bellow to join our worldwide community of learners.</p>

<button>
Confirm Email
</button>
      </div>
    </div>
  </div>
    </section>
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

section.email-sine {
    width: 100%;
    background: #293857;
    height: 100vh;
    padding: 50px 100px;
}

.main-email {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
}

.email-logo {
    width: 100%;
    padding-bottom: 80px;
}

.email-logo img {
    width: 6%;
}

.email-tital {
    width: 84%;
    background-color: #DED4A2;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 75px 0px 140px 0px;
}

.email-tital span {
    background-color: #293857;
    padding: 22px 20px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.email-tital span svg {
    width: 54px;
    height: 50px;
}

.email-tital h2 {
    color: #293857;
    text-align: center;
    font-family: sans-serif;
    font-size: 70px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0px;
}

.email-tital p {
    color: #000;
    text-align: center;
    font-family: sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0px;
    padding: 30px 0px 40px 0px;
}

.email-tital button {
    background: #293857;
    padding: 20px 80px;
    color: #FFF;
    font-family: sans-serif;
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    border: none;
    line-height: normal;
}

.email-tital button::after {
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
  .email-logo {
    padding-bottom: 40px;
}

.email-tital {
    padding: 50px 0px 60px 0px;
}

.email-tital span {
    padding: 14px 14px;
}

.email-tital span svg {
    width: 38px;
    height: 38px;
}

.email-tital h2 {
    font-size: 52px;
}

.email-tital p {
    font-size: 18px;
    padding: 18px 0px 28px 0px;
}

.email-tital button {
    padding: 14px 60px;
    font-size: 20px;
}
}

@media screen and (max-width: 1440px){
  
  .email-tital h2 {
    font-size: 42px;
}

.email-tital span svg {
    width: 32px;
    height: 32px;
}

.email-tital span {
    padding: 10px 11px;
}

.email-tital p {
    font-size: 16px;
    padding: 12px 0px 20px 0px;
}

.email-tital {
    padding: 38px 0px 52px 0px;
}

.email-tital button {
    padding: 12px 50px;
    font-size: 15px;
}

section.email-sine {
    padding: 30px 70px;
}
}

@media screen and (max-width: 1024px){
    .email-tital h2 {
    font-size: 28px;
}

.email-tital p {
    font-size: 14px;
    padding: 8px 0px 12px 0px;
}

.email-tital button {
    padding: 10px 32px;
    font-size: 12px;
}

.email-tital {
    padding: 30px 0px 32px 0px;
}

section.email-sine {
    padding: 24px 40px;
}



.email-logo {
    padding-bottom: 30px;
}

.email-tital h2 {
    font-size: 24px;
}

.email-tital h2 {
    font-size: 20px;
}

.email-tital button {
    padding: 8px 28px;
    font-size: 10px;
}

.email-tital {
    padding: 24px 0px 28px 0px;
}
}

@media screen and (max-width: 600px){

  .email-tital {
    width: 100%;
    padding: 20px 20px 24px 20px;
}

.email-tital h2 {
    font-size: 18px;
}

.email-tital p {
    font-size: 12px;
    padding: 8px 0px 12px 0px;
}

.email-logo img {
    width: 14%;
}

.email-tital span svg {
    width: 20px;
    height: 20px;
}

.email-tital span {
    padding: 8px 8px;
}
}

</style>