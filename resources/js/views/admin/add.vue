<template>
  <div>

    <section class="add">

      <div class="cloce-add " @click="$router.go(-1);">
        <img class="images" src="/images/loging-close.png"/>
      </div>
      <div class="main-add-comment">

        <div class="add-comment-post">
          <img class="images" src="/images/salider.png"/>
        </div>

        <div class="add-comment-tital">

            <div class="add-cm-box">

<div class="add-cm-id">
  <img class="images" src="/images/p3.png"/>
  <h4>Alex</h4>
</div>

<div class="add-cm-commment">
  <p>hello buddy</p>
</div>

<div class="last-seen">
  <p>30 min</p>
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
section.add {
    width: 100%;
    background-color: #202D46;
    height: 100vh;
    padding: 4% 3%;
}

.main-add-comment {
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 100%;
    border: 1px solid #DED4A2;
    border-radius: 10px;
}
.cloce-add {
    width: 3%;
    position: absolute;
    right: 5px;
    top: 5px;
    cursor: pointer;
}

.cloce-add img {
    width: 100%;
}
.add-comment-post {
    width: 48%;
    height: 100%;
    object-fit: cover;
}

.add-comment-post img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px 0px 0px 10px;
}

.add-comment-tital {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    overflow-y: scroll;
    padding: 20px 0px;
}

.add-cm-box {
    width: 100%;
    border-bottom: 1px solid #DED4A2;
    padding-bottom: 10px;
}

.add-cm-id {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 15px;
}

.add-cm-id img {
    width: 5%;
    object-fit: none;
    border-radius: 50%;
    max-width: 5%;
    min-width: 5%;
}

.add-cm-id h4 {
    margin: 0px;
    font-size: 18px;
    font-weight: 600;
    color: #DED4A2;
}

.add-cm-commment {
    width: 100%;
}

.add-cm-commment p {
    margin: 0px;
    color: #d1cdcd;
    font-size: 12px;
    padding-top: 5px;
}

.last-seen {
    width: 100%;
}

.last-seen p {
    margin: 0px;
    font-size: 12px;
    color: gray;
}
</style>