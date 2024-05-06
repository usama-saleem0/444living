<template>
  <div>


    <section class="comment">
      <div class="main-comment">

        <div class="comment-svg-icon "  @click="backhome">
          <img class="images" src="/images/loging-close-go.png"/>
        </div>

        <div class="comment-save">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="48" viewBox="0 0 26 48" fill="none">
  <path d="M26.6667 47.333C26.6667 44.8597 24.2233 41.1663 21.75 38.0663C18.57 34.0663 14.77 30.5763 10.4133 27.913C7.14667 25.9163 3.18667 23.9997 0 23.9997C3.18667 23.9997 7.15 22.083 10.4133 20.0863C14.77 17.4197 18.57 13.9297 21.75 9.93634C24.2233 6.83301 26.6667 3.13301 26.6667 0.66634" stroke="#293857" stroke-width="5"/>
</svg>
 Back
        </div>

        <div class="comment-box-main">
          <div class="comment-para">
            <h2>Favorite posts</h2>
          </div>

          <div class="main-comment-boxing">

            <div class="comment-card">
              <div class="comment-id">
                <img class="images" src="/images/p3.png"/>
                <P>Alex</P>
              </div>
              <img class="images" src="/images/salider.png"/>
            </div>

            <div class="comment-card">
              <div class="comment-id">
                <img class="images" src="/images/p3.png"/>
                <P>Alex</P>
              </div>
              <img class="images" src="/images/salider.png"/>
            </div>

            <div class="comment-card">
              <div class="comment-id">
                <img class="images" src="/images/p3.png"/>
                <P>Alex</P>
              </div>
              <img class="images" src="/images/salider.png"/>
            </div>

            <div class="comment-card">
              <div class="comment-id">
                <img class="images" src="/images/p3.png"/>
                <P>Alex</P>
              </div>
              <img class="images" src="/images/salider.png"/>
            </div>

            <div class="comment-card">
              <div class="comment-id">
                <img class="images" src="/images/p3.png"/>
                <P>Alex</P>
              </div>
              <img class="images" src="/images/salider.png"/>
            </div>

            <div class="comment-card">
              <div class="comment-id">
                <img class="images" src="/images/p3.png"/>
                <P>Alex</P>
              </div>
              <img class="images" src="/images/salider.png"/>
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
        this.$router.push('/homepages')
    },
    registering(){
      this.$router.push('/register')
    }
  },
};
</script>


<style scoped>

section.comment {
    width: 100%;
    background-color: #DED4A2;
    padding: 3%;
}

.main-comment {
    width: 100%;
}

.comment-save {
    width: 100%;
}

.comment-box-main {
    width: 100%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 14px;
}

.comment-para {
    width: 100%;
}

.comment-para h2 {
    color: #293857;
    font-size: 32px;
    font-weight: 700;
    margin: 0px;
}

.main-comment-boxing {
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 24px 0px;
}
.comment-svg-icon {
    position: absolute;
    top: 28px;
    right: 28px;
    width: 2%;
    cursor: pointer;
}

.comment-svg-icon img {
    width: 100%;
}
.comment-save svg {
    width: 28px;
    height: 28px;
}

.comment-save {
    font-size: 20px;
    color: #293857;
    font-weight: 600;
    font-family: sans-serif;
    display: flex;
    align-items: center;
    gap: 5px;
    padding-bottom: 34px;
    cursor: pointer;
}

.comment-card {
    width: 32%;
    position: relative;
}

.comment-card img {
    width: 100%;
    object-fit: cover;
    border-radius: 8px;
}

.comment-id {
  width: 12%;
    position: absolute;
    border-radius: 50%;
    top: 12px;
    left: 12px;
    display: flex;
    align-items: center;
    gap: 15px;

}

.comment-id p {
    margin: 0px;
    font-size: 24px;
    color: #FFF;
    font-weight: 600;
}

.comment-id img {
  width: 100%;object-fit: none;border-radius: 50%;display: flex;
}

</style>