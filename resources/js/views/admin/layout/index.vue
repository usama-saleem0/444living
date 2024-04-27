<template>
  <!-- Page Wrapper -->
  <div id="wrapper">
    <!-- Sidebar -->
    <!-- <Sidebar /> -->

    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">
      <!-- Main Content -->
      <div id="content">
        <!-- Start of Topbar -->
        <Topbar />
        <!-- End of Topbar -->

        <!-- Begin Page Content -->
        <div>
          <router-view></router-view>
        </div>
        <!-- /.container-fluid -->
      </div>
  
    </div>
    <!-- End of Content Wrapper -->
  </div>
 
</template>

<script>
import sbadmin2 from "../../../sb-admin-2.js";
import axios from "axios";
import { mapGetters } from "vuex";
import Topbar from "../components/Topbar";


import Sidebar from "../components/Sidebar";

export default {
  name: "AdminLayout",
  components: {
    Topbar,
    Sidebar
  },
  mounted() {
    sbadmin2.init();
  },
  computed: {
    ...mapGetters(["user"]),
  },
};
</script>


<style scoped>

#wrapper #content-wrapper {
    background-color: #293857 !important;
    width: 100%;
    overflow-x: hidden;
}
</style>
