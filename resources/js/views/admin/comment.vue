<template>
  <div>


    <section class="comment">
      <div class="main-comment">

        <div class="comment-svg-icon "  @click="backhome">
          <img class="images" src="/images/loging-close-go.png"/>
        </div>

      <br>
        <div class="comment-box-main">
          <div class="comment-para">
            <h2>Favorite posts</h2>
          </div>

          <div class="comment-para" style="    width: 100%;
    display: flex !important;
    flex-direction: row !important;
    justify-content: center !important;
    border-bottom: 1px solid;">
            <h2>Buyer Posts</h2>
          </div>
 

          <div class="main-comment-boxing" >

            <div class="comment-card" v-for="item in buyers" v-if="item.buyers">
              <div class="comment-id" >
                <img class="images" src="/images/p3.png"/>
                <P>{{ item.user.username  ? item.user.username:'' }}</P>
              </div>
              <img class="images" :src="'/post/' + item.buyers.postpic"/>
            </div>
          </div>
     

            <br>


            
          <div class="comment-para" style="    width: 100%;
    display: flex !important;
    flex-direction: row !important;
    justify-content: center !important;
    border-bottom: 1px solid;">
            <h2>Investor Posts</h2>
          </div>


          
          <div class="main-comment-boxing" >

<div class="comment-card" v-for="items in investors" v-if="items.investors">
  <div class="comment-id" >
    <img class="images" src="/images/p3.png"/>
    <P>{{ items.user.username  ? items.user.username:'' }}</P>
  </div>
  <img class="images" :src="'/post/' + items.investors.postpic"/>
</div>
</div>
 <!-- <div v-for="items in investors">



          <div class="main-comment-boxing" >

            <div class="comment-card" v-if="items.investors">
              <div class="comment-id">
                <img class="images" src="/images/p3.png"/>
                <P>{{ item.user.username ?  item.user.username:'' }}</P>
              </div>
              <img class="images" :src="'/post/' + item.investors ? item.investors.postpic:''"/>
            </div>
          </div>


          </div>   -->

       
        </div>

      </div>
    </section>

  </div>
</template>


<script>
import axios from "axios";
import * as notify from "../../utils/notify.js";
import Loader from "../admin/loader.vue";
import { get , byMethod} from '../lib/api';
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
        favorite:[],
        buyers:[],
        investors:[]
       
      
    };
  },

  created(){
    this.getaddress()

  },
    
 

  methods: {


    getaddress(){

      get('/favoritelists')
              .then((res) => {

                
                Vue.set(this.$data, 'buyers', res.data.data)
                Vue.set(this.$data, 'investors', res.data.data1)

              })


      },

  
    mainpage(){
      this.first = false
        this.second = true
      setTimeout(() => {
       

         
        this.$router.push('/homepages')
        }, 3000);

    },
    


    backhome(){
        this.$router.push('/homepages')
    },
   
  },
};
</script>


<style scoped>



section.comment {
    width: 100%;
    background-color: #DED4A2;
    padding: 3%;
    height: 100%;
    min-height: 100vh;
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
    overflow-x: scroll;
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