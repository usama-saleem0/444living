<template>
  <div>
    <section class="black-screen">

    <div class="cloce-icon"  @click="goja">
      <svg xmlns="http://www.w3.org/2000/svg" width="27" height="50" viewBox="0 0 27 50" fill="none">
  <g clip-path="url(#clip0_13_2454)">
    <path d="M-0.691245 0.813965C-0.691245 3.37764 1.84133 7.20588 4.40501 10.4191C7.70116 14.5652 11.64 18.1827 16.1558 20.9433C19.5418 23.0129 23.6464 24.9996 26.9495 24.9996C23.6464 24.9996 19.5383 26.9863 16.1558 29.0559C11.64 31.8199 7.70116 35.4374 4.40501 39.5766C1.84133 42.7933 -0.691245 46.6285 -0.691245 49.1852" stroke="#DED4A2" stroke-width="6"/>
  </g>
  <defs>
    <clipPath id="clip0_13_2454">
      <rect width="49.7533" height="26.9497" fill="white" transform="matrix(0 1 -1 0 26.9495 0.123047)"/>
    </clipPath>
  </defs>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="28" height="50" viewBox="0 0 28 50" fill="none">
  <g clip-path="url(#clip0_13_2456)">
    <path d="M28.6666 49.0539C28.643 46.4903 26.0751 42.6856 23.4819 39.4962C20.1476 35.3807 16.1756 31.7997 11.6345 29.0809C8.22952 27.0427 4.10671 25.094 0.803785 25.1245C4.10671 25.094 8.19629 23.0695 11.5596 20.9687C16.0497 18.1631 19.9549 14.5094 23.2127 10.3399C25.7465 7.0997 28.2436 3.24133 28.22 0.684675" stroke="#DED4A2" stroke-width="6"/>
  </g>
  <defs>
    <clipPath id="clip0_13_2456">
      <rect width="49.7533" height="26.9497" fill="white" transform="translate(1.03345 50) rotate(-90.529)"/>
    </clipPath>
  </defs>
</svg>
    </div>

      <div class="black-post">

        <div class="black-id-tital">
        <div class="black-id-dp">
          <img src="/images/alexprofile.png" alt="">
        </div>
        <div class="black-id-h2">
          <h2>Alexander</h2>

          <p>12h</p>
        </div>
      </div>

        <img src="/images/salider.png" alt="">


        
      </div>

    </section>
  </div>
</template>

<script>


export default {
methods: {




  


  goja(){
      this.$router.push('/homepages')
  },

},
};

</script>


<style scoped>

section.black-screen {
    width: 100%;
    height: 100vh;
    background-color: #000000f7;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    position: relative;
}

.black-post {
    width: 30%;
    height: 90vh;
    border-radius: 20px;
    border: 1px solid #1d3047;
    padding: 20px;
    background: #10354f7a;
    backdrop-filter: blur(100px);
}
.black-id-tital {
    width: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    gap: 12px;
    left: 32px;
    top: 32px;
}

.black-id-dp {
    width: 40px;
    height: 40px;
    border-radius: 50px;
    background: #caa67c;
    object-fit: cover;
}

.black-id-dp img {
    border-radius: 100px !important;
    object-fit: cover !important;
}

.black-id-h2 {
    width: 30%;
    display: flex;
    align-items: center;
    gap: 8px;
}

.black-id-h2 h2 {
    font-size: 18px;
    margin: 0px;
    font-weight: 600;
    color: #fff;
}

.black-id-h2 p {
    font-size: 14px;
    margin: 0px;
    font-weight: 600;
    color: #998f8f;
}

.black-post img {
    height: 100%;
    object-fit: cover;
    width: 100%;
    border-radius: 20px;
    min-width: 100%;
    max-width: 100%;
    min-height: 100%;
    max-height: 100%;
}

.cloce-icon {
    position: absolute;
    z-index: 1;
    right: 20px;
    top: 20px;
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    cursor: pointer;
}

.cloce-icon svg {
    width: 100%;
    height: 100%;
}

@media screen and (max-width: 768px){
  .black-post {
    width: 65%;
}
}

@media screen and (max-width: 600px){
  .black-post {
    width: 100%;
    height: 85vh;
    margin-top: 35px;
}

.cloce-icon {
    height: 20px;
    right: 10px;
    top: 10px;
    width: 20px;
}
}

</style> 