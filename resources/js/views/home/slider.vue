<template>
  <div class="carousel">

    <div class="carousel-btn-box">

      <div class="carousel-btn-list-1">
        <span> <img src="/images/Line 7.png" alt=""/><p>Featured Listings</p></span>
        <h2>Ocean View</h2>
      </div>
      <div class="carousel-btn-list-2">
        <div class="carousel-btns prev-btns" @click="prevImage"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="48" viewBox="0 0 26 48" fill="none">
  <path d="M26.6667 47.3335C26.6667 44.8602 24.2233 41.1668 21.75 38.0668C18.57 34.0668 14.77 30.5768 10.4133 27.9135C7.14667 25.9168 3.18667 24.0002 0 24.0002C3.18667 24.0002 7.15 22.0835 10.4133 20.0868C14.77 17.4202 18.57 13.9302 21.75 9.93683C24.2233 6.8335 26.6667 3.13349 26.6667 0.666828" stroke="#DED4A2" stroke-width="5"/>
</svg></div>



    <div class="carousel-btns next-btns" @click="nextImage"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="48" viewBox="0 0 26 48" fill="none">
  <g clip-path="url(#clip0_6_971)">
    <path d="M-0.666666 0.666504C-0.666666 3.13984 1.77667 6.83317 4.25 9.93317C7.43 13.9332 11.23 17.4232 15.5867 20.0865C18.8533 22.0832 22.8133 23.9998 26 23.9998C22.8133 23.9998 18.85 25.9165 15.5867 27.9132C11.23 30.5798 7.43 34.0698 4.25 38.0632C1.77667 41.1665 -0.666666 44.8665 -0.666666 47.3332" stroke="#DED4A2" stroke-width="5"/>
  </g>
  <defs>
    <clipPath id="clip0_6_971">
      <rect width="48" height="26" fill="white" transform="matrix(0 1 -1 0 26 0)"/>
    </clipPath>
  </defs>
</svg></div>
      </div>
    </div>

    <div class="image-container" :style="{ transform: 'translateX(' + translateValue + ')' }">
      <div class="image-row" v-for="(row, rowIndex) in imageRows" :key="rowIndex">
        <div class="image-item" v-for="(image, colIndex) in row" :key="colIndex">
          <img class="mobile" :src="image" :alt="'Image ' + (rowIndex * 3 + colIndex + 1)" :style="{ height: colIndex === currentIndex ? '120%' : '100%' , opacity: image == '/images/Rectangle4.png' ? '0' : '1'}">
          <span v-if="colIndex===0 &&  image !== '/images/Rectangle4.png'"> <h2>House in the center of Los Angelas</h2>
           <p>12,916 Sq,ft<span><img src="/images/dotspoint.png" alt=""/></span>2 Bathrooms <span><img src="/images/dotspoint.png" alt=""/></span>12,916 Sq,ft</p>
          </span>
          <span v-if="colIndex===1 &&  image !== '/images/Rectangle4.png'"><h2>House in the center of Los Angelas</h2>
           <p>12,916 Sq,ft<span><img src="/images/dotspoint.png" alt=""/></span>2 Bathrooms <span><img src="/images/dotspoint.png" alt=""/></span>12,916 Sq,ft</p></span>
          <span v-if="colIndex===2 &&  image !== '/images/Rectangle4.png'"><h2>House in the center of Los Angelas</h2>
           <p>12,916 Sq,ft<span><img src="/images/dotspoint.png" alt=""/></span>2 Bathrooms <span><img src="/images/dotspoint.png" alt=""/></span>12,916 Sq,ft</p></span>
        
         
        </div>
      </div>
    </div>
    <div class="Process-btn-box">
    <button class="long-btn-box" @click="resisteralter">
                            <svg width="13" height="25" viewBox="0 0 13 25" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M-0.333333 0.833496C-0.333333 2.07016 0.888333 3.91683 2.125 5.46683C3.715 7.46683 5.615 9.21183 7.79333 10.5435C9.42667 11.5418 11.4067 12.5002 13 12.5002C11.4067 12.5002 9.425 13.4585 7.79333 14.4568C5.615 15.7902 3.715 17.5352 2.125 19.5318C0.888333 21.0835 -0.333333 22.9335 -0.333333 24.1668"
                                    stroke="#DED4A2" stroke-width="2" />
                            </svg>

                            See All Properties
                        </button>
                      </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
export default {
  data() {
    return {
      currentIndex: 0,
      imageindex:0,
      
      images:[
        "/images/Rectangle1.png",
        "/images/Rectangle2.png",
        "/images/Rectangle3.png",
        "/images/Rectangle4.png" ,
        "/images/Rectangle4.png",




      ],

      
    };
  },
  computed: {
    translateValue() {
      return -this.currentIndex * 730 + "px"; 
    },
    imageRows() {
      const rows = [];
      const totalImages = this.images.length;

      for (let i = 0; i < totalImages; i += 3) {
        rows.push(this.images.slice(i, i + 3));
      }

      return rows;
    },
  },
  methods: {


    resisteralter(){
    //         Swal.fire({
    //   title: "Successfully Add to you Favorite list",
    //   width: 600,
    //   padding: "3em",
    //   color: "#202d46",
    //   background: "#ded4a2",
    //   backdrop: `
    //   rgb(0 0 0 / 84%)

    
    //   `
      
    // });

    Swal.fire({
  title: "<strong>Please <u>Register</u></strong>",
  icon: "info",
  color: "#202d46",
  background: "#ded4a2",
  backgroundColor: "#ded4a2 !important",
  backdrop: `
      rgb(0 0 0 / 84%)

    
       `,
  html: `
    If you want Search or see more features 
    please register first
  `,
  showCloseButton: true,
  showCancelButton: true,
  focusConfirm: false,
  confirmButtonText: `
    <i class="fa fa-thumbs-up"></i> Register!
  `,
  confirmButtonAriaLabel: "Thumbs up, great!",
  cancelButtonText: `
    <i class="fa fa-thumbs-down"></i> Cancel
  `,
  cancelButtonAriaLabel: "Thumbs down",
  customClass: {
    popup: 'custom-swal-background' // Apply the custom background class
  },
  preConfirm: () => {
    this.$router.push('/register'); 
  }
});



    
 

        },
    nextImage() {
      const totalRows = this.imageRows.length;
      this.currentIndex = (this.currentIndex + 1) % (totalRows + 1); 
      this.imageindex  ++
      console.log(this.currentIndex);
    },
    prevImage() {
      console.log('abcdcd');
      const totalRows = this.imageRows.length;
      this.currentIndex = (this.currentIndex - 1 + totalRows) % (totalRows + 1); 
    },
  },
};
</script>

<style scoped>
.carousel {
  width: 100%; /* Adjust the width based on the number of images and their width */
  overflow: hidden;
  position: relative;
}

.image-container {
  display: flex;
  transition: transform 0.5s ease-in-out;
  /* gap: 810px !important; */
}

.image-row {
  flex: 0 0 195%;
  display: flex;
}

.image-item {
  flex: 0 0 20.3333%;
  height: 55%;
  box-sizing: border-box;
}



.prev-btn {
  left: 0;
}



.Process-btn-box button:hover svg {
    transform: translateX(150px);
    color: var(--hovered-color);
}

.Process-btn-box {
    width: 100%;
    padding-top: 0px !important;
    display: flex;
    align-items: center;
    justify-content: flex-start !important;
}
.next-btn {
  right: 0;
}
.carousel-btn-box {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 60px;
    
}


.carousel-btn-list-1 {
    width: 51%;
}

.carousel-btn-list-2 {
    width: 11%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
}

.carousel {
    padding: 140px 100px  140px 100px;
    background-color: #293857;
}

.carousel-btn-list-1 span {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 12px;
}

.carousel-btn-list-1 span p {
    color: #DED4A2;
    font-family: sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0px;
}

.carousel-btn-list-1 h2 {
    color: #FFF;
    text-align: center;
    font-family: "Saol Display";
    font-size: 170px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0px;
}

.image-row {
    width: 100%;
}
.carousel-btns {
  border: 1px solid #ded4a2;
    border-radius: 50%;
    padding: 30px 30px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.carousel-btns.prev-btns svg {
    width: 30px;
    height: 30px;
}

.carousel-btns.next-btns svg {
    width: 30px;
    height: 30px;
}
.image-row {
    gap: 50px;
}
.image-item span h2 {
    color: #DED4A2;
    font-family: sans-serif;
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0px;
    padding-top: 30px;
}

.image-item span p {
    color: #A2A2A4;
    font-family: sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0px;
    padding-top: 12px;
}


button.long-btn-box:hover svg[data-v-77bbf362] {
    transform: translateX(290px);
    color: var(--hovered-color);
}


.image-item span p span {
    padding: 0px 10px;
}

@media screen and (max-width: 1600px){
  .carousel-btn-list-1 h2{
    font-size: 120px;
  }
}

@media screen and (max-width: 1440px){

  .carousel-btn-list-2 {
    width: 17%;
    display: flex;
    align-items: center;
    justify-content: center;
   
}
  .carousel-btn-list-1 h2 {
    
    font-size: 100px;
  
}

.carousel-btns {
    border: 1px solid #ded4a2;
    border-radius: 50%;
    padding: 20px 20px;
    margin-right: 10px;
}

.image-item {
    flex: 0 0 20.3333%;
    height: 50%;
    box-sizing: border-box;
}
.image-row {
    gap: 100px;
}

.carousel {
    background-color: #293857;
    padding: 60px 10px 60px 100px;
}
}

@media screen and (max-width: 1024px){
  .carousel-btn-list-1 h2 {
    font-size: 80px;
}

svg {
    width: 20px;
}

.carousel-btns {
    border: 1px solid #ded4a2;
    border-radius: 50%;
    padding: 18px 18px;
    margin-right: 10px;
}

.carousel-btn-list-2 {
    width: 20%;
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
}
}

@media screen and (max-width: 768px){
  .carousel-btn-list-1 h2 {
    font-size: 65px;
}

.image-item {
    flex: 0 0 30.3333%;
    height: 38%;
    box-sizing: border-box;
    width: 100%;
}

.carousel-btns {
    border: 1px solid #ded4a2;
    border-radius: 50%;
    padding: 20px 20px;
    
}

svg {
    width: 15px;
}
}

@media screen and (max-width: 600px){

  .carousel {
    background-color: #293857;
    padding: 50px 10px 0px 10px;
}

.carousel-btn-list-1 h2 {
    font-size: 35px;
}

.carousel-btn-list-1 span p{
   
    font-size: 11px;
   
}

svg {
    width: 10px;
    height: 20px;
}

.image-item span p {
  
    font-size: 14px;
  
}

.image-item span h2 {
   
    font-size: 18px;
 
}

.carousel-btns {
    border: 1px solid #ded4a2;
    border-radius: 50%;
    padding: 12px 12px;
}
.carousel-btn-list-2{
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.carousel-btn-list-1 span {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 6px;
}

.mobile{
 
    opacity: 1;
   
    object-fit: cover;
    width: 400px;

}

.image-item {
    flex: 0 0 30.3333%;
    height: 52%;
    box-sizing: border-box;
    width: 62%;
}

.image-row {
    gap: 330px;
}

.carousel-btn-box {
 
    padding-bottom: 10px;
}

}



</style>
