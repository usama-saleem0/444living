<template>
 <div style="width: 1200px; height: 100vh;">
    <img src="/images/Background.png" style="width: 20%;"/>
    <a href="https://milled.com/TJMaxx/more-made-in-italy-amore-bli4BYNAzXUd0xi1"></a>

    <!-- <iframe src="https://milled.com/TJMaxx/more-made-in-italy-amore-bli4BYNAzXUd0xi1" width="100%" height="100%" frameborder="0"></iframe> -->
 </div>
  
 </template>
 
 <script>
 import Vue from 'vue'
 import chartBarDemo from "../../chart/demo/chart-bar-demo";

 import Tables from "../admin/simpletable.vue"

 import Profile from "./investorprofilecard.vue";
 import Header from "../admin/components/Topbar.vue";
 import { get , byMethod} from '../lib/api';
 export default {
     name: 'admin',
 
     components: {
    
    Profile,
    Header,
    Tables,
   
 },
 
     mounted() {
    
     chartBarDemo();
   },
 
 
     data () {
             return {
                 method:'POST',
                 model:{},
                 model:'',
                 email:'',
  
               
               
             }
         },


         created(){
         
         get('/emails')
               .then((res) => {
                 
                  this.setData(res)
 
               })
           
         }, 

         methods:{
             setData(res) {
         
               Vue.set(this.$data, 'model', res.data.data)
                this.email = res.data.data.emails; 
               console.log(this.email)
               
              
 
             //   console.log(res.data)
           },
        }
 
         
 
 }
 </script>
 
 