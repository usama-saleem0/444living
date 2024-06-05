<template>
    <div style="height: 100% !important; width: 100% !important;">



                            <div class="table-responsive">
                                <table width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Phone Number</th>
                                            <th>Register Date</th>
                                            <th>Membership</th>
                                            <th>Discount Voucher</th>


                                        </tr>
                                    </thead>


                                    <tbody>
                                        <tr v-for="item in data" :key="item.id">
                                            <td>
                                                <img src="/images/khasomaaro.png" style="padding-right: 5px;"/>{{ item.username }}</td>
                                            <td>{{ item.email }}</td>
                                            <td>{{ item.number }}</td>
                                            <td>{{ dated(item.created_at) }}</td>

                                            <td>{{ item.membership == null ? 'Free Trail' :  item.membership}}</td>
                                           <td>
                                            <button style="    background-color: transparent;
                                            margin: 5px;
                                            padding: 0px 10px 0px 10px;">
                                                Generate Voucher
                                            </button>

                                            </td>

                                        </tr>




                                    </tbody>
                                </table>
                            </div>

    </div>
</template>



<script>
import moment from 'moment';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import { data } from "jquery";

export default {
    name: 'Tables',

    data () {
    return {

        data:[]




             }
            },


    props: {
      data: Array,
    },
    mounted(){
        $('#dataTable').DataTable();
    },
    methods:{
        dated(e){
            let formattedDate = moment(e).format("h:mma, DD dddd");
            return formattedDate
        }
    }
}
</script>


<style scoped>

.table-responsive {

    height: 370px;
}
tbody {
    line-height: 45px;
    color: #000;
    font-family: sans-serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
}
th {
    padding: 8px;
}

td {
    padding-left: 10px;
    padding-right: 10px;
}
thead {
    background-color: #293857;
    color: #FFF;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}


@media screen and (max-width: 1440px){
    td {
    padding-left: 10px;
    padding-right: 10px;
    font-size: 12px;
}
}



@media screen and (max-width: 600px){
    th {
    padding: 5px;
    font-size: 10px;
}

td {
    padding-left: 5px;
    padding-right: 5px;
    font-size: 10px;
}

td img {
    width: 24%;
}

tbody {
    line-height: 30px;
}
}
</style>
