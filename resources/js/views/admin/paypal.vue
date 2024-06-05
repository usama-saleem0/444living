
<template>
  <!-- 404 Error Text -->
  <div class="text-center">
    <div class="error mx-auto" data-text="Paypal">PayPal</div>
    <button @click="save">Pay Now</button>

    <router-link to="/admin">&larr; Back to Dashboard</router-link>
  </div>
</template>

<script>
import { get , byMethod} from '../lib/api'

export default {
    name: 'PageNotFound',

    data () {
            return {


            }
        },

        methods:{
          save(){
            console.log('sbsbs');
            this.id = 1;
            get('/process-transaction?id='+this.id)
              .then((res) => {
                if(res.data){
                  window.open(res.data, '_blank');
                }
                console.log(res.data)



              })
          }
        }
}
</script>
