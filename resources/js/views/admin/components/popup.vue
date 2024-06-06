<template>
  <div class="Discount">
    <div class="main-Discount">

      <div class="main-Discount-sv">
      <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none" @click="$emit('cancel')">
  <path d="M34.4266 37.0876L22.5016 25.1438L10.5766 37.0876L7.91406 34.4251L19.8578 22.5001L7.91406 10.5751L10.5766 7.9126L22.5016 19.8563L34.4266 7.93135L37.0703 10.5751L25.1453 22.5001L37.0703 34.4251L34.4266 37.0876Z" fill="#293857"/>
</svg>
</div>
      <h2>Discount Voucher</h2>
      <div class="main-Discount-in-box">
      <input type="email" placeholder="Enter Email" v-model="data.email">
      <input type="text" placeholder="Discount Percentage" v-model="percent">
    </div>
      <button @click="voucher">
        Send Voucher
      </button>


      <div class="spinner" v-if="loaders">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
    </div>
  </div>
</template>

<script>
import { method } from 'lodash';
import moment from 'moment';
import { get , byMethod} from '../../lib/api';




export default {
    name: 'Tables',





    data () {
    return {

        data:[],
        percent:'',
        method: 'POST',
        form:{},
        loaders:false





             }
            },


    props: {
      data: String,
    },

    methods:{
        voucher(){


           this.loaders = true
            this.form.email = this.data.email
            this.form.percent = this .percent
            this.form.id = this.data.id



    byMethod(this.method, '/generate_tokan ' , this.form)
                     .then((res) => {

                         if(res.data && res.data.saved) {

                             this.loaders = false
                            this.$emit('cancel')

                         }
                     })
                     .catch((error) => {
                         if(error.response.status === 422) {
                             this.errors = error.response.data.errors
                         }

                     })


        }
    }


}
</script>




<style scoped>


.spinner {
  position: absolute;
    width: 15px;
    height: 15px;
    bottom: 325px;
    right: 290px
}

.spinner div {
  position: absolute;
  width: 50%;
  height: 150%;
  background: gray;
  transform: rotate(calc(var(--rotation) * 1deg)) translate(0, calc(var(--translation) * 1%));
  animation: spinner-fzua35 1s calc(var(--delay) * 1s) infinite ease;
}

.George-search svg {
    fill: rgb(41, 56, 87);
    height: 35px !important;
    width: 35px !important;
    cursor: pointer !important;
}

.spinner div:nth-child(1) {
  --delay: 0.1;
  --rotation: 36;
  --translation: 150;
}

.spinner div:nth-child(2) {
  --delay: 0.2;
  --rotation: 72;
  --translation: 150;
}

.spinner div:nth-child(3) {
  --delay: 0.3;
  --rotation: 108;
  --translation: 150;
}

.spinner div:nth-child(4) {
  --delay: 0.4;
  --rotation: 144;
  --translation: 150;
}

.spinner div:nth-child(5) {
  --delay: 0.5;
  --rotation: 180;
  --translation: 150;
}

.spinner div:nth-child(6) {
  --delay: 0.6;
  --rotation: 216;
  --translation: 150;
}

.spinner div:nth-child(7) {
  --delay: 0.7;
  --rotation: 252;
  --translation: 150;
}

.spinner div:nth-child(8) {
  --delay: 0.8;
  --rotation: 288;
  --translation: 150;
}

.spinner div:nth-child(9) {
  --delay: 0.9;
  --rotation: 324;
  --translation: 150;
}

.spinner div:nth-child(10) {
  --delay: 1;
  --rotation: 360;
  --translation: 150;
}

@keyframes spinner-fzua35 {
  0%, 10%, 20%, 30%, 50%, 60%, 70%, 80%, 90%, 100% {
    transform: rotate(calc(var(--rotation) * 1deg)) translate(0, calc(var(--translation) * 1%));
  }

  50% {
    transform: rotate(calc(var(--rotation) * 1deg)) translate(0, calc(var(--translation) * 1.5%));
  }
}


.Discount {
  background-color: transparent;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.main-Discount {
    width: 600px;
    height: 407px;
    background: #DED4A2;
    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
    padding: 20px 38px;
}

.main-Discount-sv {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.main-Discount h2 {
    color: #293857;
    font-family: "Saol Display";
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;
    margin: 0px;
    padding: 20px 0px 30px 0px;
}

.main-Discount-in-box {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding-bottom: 40px;
}

.main-Discount-in-box input {
    border: 1px solid #293857;
    padding: 15px;
    color: #293857;
    font-family: "Saol Display";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 95%;
}

.main-Discount button {
    width: 100%;
    background: #293857;
    border: 1px solid #293857;
    padding: 14px 0px;
    color: #DED4A2;
    text-align: center;
    font-family: "Saol Display";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
}

.main-Discount-sv svg {
    width: 45px;
    height: 45px;
    cursor: pointer;
}

button::after {
    position: absolute;
    content: "";
    width: 0;
    left: 0px !important;
    bottom: 0px;
    background: #DED4A2;
    height: 2px;
    transition: 0.3s ease-out;
}







@media screen and (max-width: 600px){
  .main-Discount {
    padding: 15px 15px;
    width: 350px;
    height: 350px;
}

.main-Discount h2 {
    font-size: 30px;
}

.main-Discount-in-box {}

.main-Discount-in-box {
    gap: 10px;
    padding-bottom: 20px;
}

.main-Discount-sv svg {
    width: 32px;
    height: 32px;
}
}
</style>



