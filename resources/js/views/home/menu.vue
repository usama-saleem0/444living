

<link href="https://fonts.googleapis.com/css2?family=Saol+Display&display=swap" rel="stylesheet"/>
<template>
  <div>


<div class="menu">
  <div class="contanir">
   <div class="main-menu">
    <div class="menu-list">
      <h2  @mouseover="handleMouseOver1"
      @mouseleave="handleMouseLeave1"><a href="#">Home</a></h2>
      <h2  @mouseover="handleMouseOver1"
      @mouseleave="handleMouseLeave1"><a href="#">Buyers Posts</a></h2>
      <h2  @mouseover="handleMouseOver1"
      @mouseleave="handleMouseLeave1"><a href="#">For Buyers</a></h2>
      <h2  @mouseover="handleMouseOver1"
      @mouseleave="handleMouseLeave1"><a href="#">For Realtors</a></h2>
      <h2  @mouseover="handleMouseOver1"
      @mouseleave="handleMouseLeave1"><a href="#">About Us</a></h2>
    </div>

    <div class="menu-btn">
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="25" viewBox="0 0 13 25" fill="none">
  <g clip-path="url(#clip0_265_133)">
    <path d="M-0.333333 0.833008C-0.333333 2.06967 0.888333 3.91634 2.125 5.46634C3.715 7.46634 5.615 9.21134 7.79333 10.543C9.42667 11.5413 11.4067 12.4997 13 12.4997C11.4067 12.4997 9.425 13.458 7.79333 14.4563C5.615 15.7897 3.715 17.5347 2.125 19.5313C0.888333 21.083 -0.333333 22.933 -0.333333 24.1663" stroke="#293857" stroke-width="2"/>
  </g>
  <defs>
    <clipPath id="clip0_265_133">
      <rect width="24" height="13" fill="white" transform="matrix(0 1 -1 0 13 0.5)"/>
    </clipPath>
  </defs>
</svg>
        Contact</button>
    </div>

    <div class="fade-in">
      <img v-if="img" class="first_image fade-in" src="/images/Rectangle1.png"/>
      <img v-if="img" class="second_image fade-in" src="/images/Rectangle2.png"/>
      <img v-if="img" class="third_image fade-in" src="/images/Rectangle3.png"/>


    </div>
   </div>
  </div>
</div>
   


  </div>
</template>
<script>
import { method } from 'lodash';



export default {
  name: "Home",
  components: {
  
  },
  name: 'SampleComponent',

  data() {
    return {
      img:false
   
      
    };

   
  },

  methods:{
    handleMouseOver1(){
        console.log('enter')
        this.img = true
      
    },

    handleMouseLeave1(){
        console.log('leave')
        this.img = false
    },
  }
};
</script>

<style scoped>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.first_image{
  width: 25%;
    position: absolute;
    top: 0;
    left: 40%;
    /* opacity: 0;
  transition: opacity 0.5s ease; */

}
/* .first_image.visible {
  opacity: 1;
} */

.second_image{
  width: 25%;
    position: absolute;
    right: 4%;
    bottom: 25%;
}

.fade-in {
  animation: fadeIn 1.5s !important;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}


/* img {
  position: absolute;
  opacity: 0;
  transition: opacity 0.5s ease; 
}

.img.visible {
  opacity: 1 !important;
} */





.third_image{
  width: 25%;
    position: absolute;
    left: 40%;
    bottom: 5%;

}
.menu-btn button:hover svg {
  transform: translateX(140px);
  color: var(--hovered-color);
}
.menu {
    width: 100%;
    height: 100vh;
    background-color: #DED4A2;
    display: flex;
    align-items: center;
}

.contanir {
    width: 100%;
    max-width: 1700px;
    margin: 0 auto;
}
button svg {
  transition: 0.9s;
  position: relative;
  width: 15px;
  transition-delay: 0.2s;
}
.main-menu {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.menu-list {
    width: 80%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 40px;
}

.menu-list h2 a {
    color: #293857;
    text-align: center;
    font-family: "Saol Display";
    font-size: 90px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration: none;
    transition: 1s;
}

.menu-list h2:hover {
    transform: translateX(75px);
}

.menu-list h2 {
    transition: 1s;
}

.menu-btn {
    width: 20%;
    border-left: 2px solid #293857;
    height: 100vh;
    display: flex;
    align-items: center;
    position: relative;
}

.menu-btn button {
    background-color: #ded4a2;
    border: none;
    position: absolute;
    left: -95px;
    color: #293857;
    text-align: center;
    font-family: sans-serif;
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding: 24px;
    transition: 0.5s;
    border-radius: 50%;
}
.menu-btn button:hover {
    padding: 124px 104px 124px 52px;
    border-radius: 50%;
    border: 1px solid;
    transform: translateY(21px);
    margin-left: -40px;
}

@media screen and (max-width: 1600px){
  .menu-list h2 a {
    color: #293857;
   
    font-size: 70px;
    
}

.contanir {
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
}
}

@media screen and (max-width: 1440px){
  .menu-list h2 a {
    color: #293857;
   
    font-size: 60px;
    
}

.contanir {
    width: 100%;
    max-width: 1170px;
    margin: 0 auto;
}
}


@media screen and (max-width: 1024px){
  .menu-list h2 a {
    color: #293857;
   
    font-size: 50px;
    
}

.contanir {
    width: 100%;
    max-width: 768px;
    margin: 0 auto;
}
}

@media screen and (max-width: 600px){
  .menu {
    padding: 20px;
}

.menu-list h2 a {
    color: #293857;
    font-size: 30px;
}

.menu-btn button {
   
    font-size: 18px;
   
}

button svg {
    transition: 0.9s;
    position: relative;
    width: 8px;
    transition-delay: 0.2s;
}

.menu-btn button:hover {
    padding: 44px 20px 43px 15px;
    border-radius: 50%;
    border: 1px solid;
    transform: translateY(10px);
    margin-left: 34px;
}
button::after {
    position: absolute;
    content: "";
    width: 0;
    left: 0px;
    bottom: 0px;
    background: #DED4A2;
    height: 0px;
    transition: 0.3s ease-out;
}

.menu-btn button:hover svg {
  transform: translateX(80px);
  color: var(--hovered-color);
}
}




</style>
