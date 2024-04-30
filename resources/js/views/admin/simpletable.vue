<template>
    <div style="height: 100% !important; width: 100% !important;">
   

               
                            <div class="table-responsive">
                                <table width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>Top Realtor</th>
                                            <th>Property Name</th>
                                            <th>Allocation</th>
                                            <th>Remaining</th>
                                            <th>Status</th>
                                           
                                        </tr>
                                    </thead>
                                  
                                  
                                    <tbody>
                                        <tr>
                                            <td>
                                                <img src="/images/khasomaaro.png" style="padding-right: 5px;"/>Christiana Adams</td>
                                            <td>Lakefront Villas</td>
                                            <td>150</td>
                                            <td>10</td>
                                           <td style="color: #293857; font-weight: bold; text-decoration: underline 1px solid #293857;">
                                                Pending
                                            </td>
                                            
                                        </tr>

                                        <tr>
                                            <td><img src="/images/khasomaaro.png" style="padding-right: 5px;"/>Christiana Adams</td>
                                            <td>Lakefront Villas</td>
                                            <td>150</td>
                                            <td>10</td>
                                           <td style="color: #293857; font-weight: bold; text-decoration: underline 1px solid green;">
                                                Success
                                            </td>
                                            
                                        </tr>

                                        <tr>
                                            <td><img src="/images/khasomaaro.png" style="padding-right: 5px;"/>Christiana Adams</td>
                                            <td>Lakefront Villas</td>
                                            <td>150</td>
                                            <td>10</td>
                                           <td style="color: #293857; font-weight: bold; text-decoration: underline 1px solid #293857;">
                                                Pending
                                            </td>
                                            
                                        </tr>

                                        <tr>
                                            <td><img src="/images/khasomaaro.png" style="padding-right: 5px;"/>Christiana Adams</td>
                                            <td>Lakefront Villas</td>
                                            <td>150</td>
                                            <td>10</td>
                                           <td style="color: #293857; font-weight: bold; text-decoration: underline 1px solid green;">
                                                Success
                                            </td>
                                            
                                        </tr>

                                        <tr>
                                            <td><img src="/images/khasomaaro.png" style="padding-right: 5px;"/>Christiana Adams</td>
                                            <td>San Diego, Ca</td>
                                            <td>150</td>
                                            <td>10</td>
                                           <td style="color: #293857; font-weight: bold; text-decoration: underline 1px solid #293857;">
                                                Pending
                                            </td>
                                            
                                        </tr>

                                        <tr>
                                            <td><img src="/images/khasomaaro.png" style="padding-right: 5px;"/>Christiana Adams</td>
                                            <td>San Diego, Ca</td>
                                            <td>150</td>
                                            <td>10</td>
                                           <td style="color: #293857; font-weight: bold; text-decoration: underline 1px solid green;">
                                                Success
                                            </td>
                                            
                                        </tr>

                                        <tr>
                                            <td><img src="/images/khasomaaro.png" style="padding-right: 5px;"/>Christiana Adams</td>
                                            <td>San Diego, Ca</td>
                                            <td>150</td>
                                            <td>10</td>
                                           <td style="color: #293857; font-weight: bold; text-decoration: underline 1px solid #293857;">
                                                Pending
                                            </td>
                                            
                                        </tr>

                                        <tr>
                                            <td><img src="/images/khasomaaro.png" style="padding-right: 5px;"/>Christiana Adams</td>
                                            <td>San Diego, Ca</td>
                                            <td>150</td>
                                            <td>10</td>
                                           <td style="color: #293857; font-weight: bold; text-decoration: underline 1px solid green;">
                                                Success
                                            </td>
                                            
                                        </tr>


                                        <tr>
                                            <td><img src="/images/khasomaaro.png" style="padding-right: 5px;"/>Christiana Adams</td>
                                            <td>San Diego, Ca</td>
                                            <td>150</td>
                                            <td>10</td>
                                            <td style="color: #293857; font-weight: bold; text-decoration: underline 1px solid #293857;">
                                                Pending
                                            </td>
                                            
                                        </tr>

                                        <tr>
                                            <td><img src="/images/khasomaaro.png" style="padding-right: 5px;"/>Christiana Adams</td>
                                            <td>San Diego, Ca</td>
                                            <td>150</td>
                                            <td>10</td>
                                            <td style="color: #293857; font-weight: bold; text-decoration: underline 1px solid green;">
                                                Success
                                            </td>
                                            
                                        </tr>
                                       
                                      
                                    </tbody>
                                </table>
                            </div>
                      
    </div>
</template>



<script>
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"

export default {
    name: 'Tables',
    mounted(){
        $('#dataTable').DataTable();
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