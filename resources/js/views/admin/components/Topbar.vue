<template>
  <div
    class="
      navbar navbar-expand navbar-light
     
      topbar
      
      static-top
      
    "
 style="background: transparent !important;" >
    <!-- Sidebar Toggle (Topbar) -->
    <!-- <button
      id="sidebarToggleTop"
      class="btn btn-link d-md-none rounded-circle mr-3 "
      @click="toggleTopbar"
    >
      <i class="fa fa-bars"></i>
    </button> -->
   
      

    <!-- Topbar Search -->
   <img class="images" src="/images/logo.png"/>
   <h2 class="heads">Welcome Alex!! Resume Your Buyer Journey</h2>
  

  <ul class="ul-list" >
    <li>
      <router-link class="nav-link" to="/investordashoard">
          <!-- <i class="fas fa-fw fa-tachometer-alt"></i> -->
          <a href="#">Dashboard</a></router-link
        >
      </li>
   
      <li >
      
      <router-link class="nav-link" to="/homepages">
          <!-- <i class="fas fa-fw fa-tachometer-alt"></i> -->
          <a href="#">Explore</a></router-link
        >
      </li>
    <li>
      <router-link class="nav-link" to="/toprealtors">
          <!-- <i class="fas fa-fw fa-tachometer-alt"></i> -->
          <a href="#">Top Realtors</a></router-link
        >
      
    </li>

    <li>
      <router-link class="nav-link" to="/pastpost">
          <!-- <i class="fas fa-fw fa-tachometer-alt"></i> -->
          <a href="#">Recent Post</a></router-link
        >
      
    </li>
   

     

  </ul>


  <ul  class=" listing dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
          aria-labelledby="searchDropdown">
    <li>
      <router-link class="nav-link" to="/investordashoard">
          <!-- <i class="fas fa-fw fa-tachometer-alt"></i> -->
          <a href="#">Dashboard</a></router-link
        >
      </li>
   
      <li >
      
      <router-link class="nav-link" to="/homepages">
          <!-- <i class="fas fa-fw fa-tachometer-alt"></i> -->
          <a href="#">Explore</a></router-link
        >
      </li>
    <li>
      <router-link class="nav-link" to="/toprealtors">
          <!-- <i class="fas fa-fw fa-tachometer-alt"></i> -->
          <a href="#">Top Realtors</a></router-link
        >
      
    </li>

    <li>
      <router-link class="nav-link" to="/pastpost">
          <!-- <i class="fas fa-fw fa-tachometer-alt"></i> -->
          <a href="#">Recent Post</a></router-link
        >
      
    </li>
   

     

  </ul>
    <!-- Topbar Navbar -->
    <ul class="navbar-nav">
      <!-- Nav Item - Search Dropdown (Visible Only XS) -->

      <li class="nav-item dropdown no-arrow d-sm-none">
        <a
          class="nav-link dropdown-toggle btn btn-link d-md-none rounded-circle mr-3"
          href="#"
          id="searchDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
        <i class="fas fa-bars fa-fw"></i>

        </a>
        <!-- Dropdown - Messages -->
        <div
          class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
          style="background-color: #ded4a2;"
          aria-labelledby="searchDropdown"
        >
        <ul style="padding: 10px;">
    <li>
      <router-link class="nav-link" to="/investordashoard">
          <!-- <i class="fas fa-fw fa-tachometer-alt"></i> -->
          <a href="#" class="nava">Dashboard</a></router-link
        >
      </li>
   
      <li >
      
      <router-link class="nav-link" to="/homepages">
          <!-- <i class="fas fa-fw fa-tachometer-alt"></i> -->
          <a href="#" class="nava">Explore</a></router-link
        >
      </li>
    <li>
      <router-link class="nav-link" to="/toprealtors">
          <!-- <i class="fas fa-fw fa-tachometer-alt"></i> -->
          <a href="#" class="nava">Top Realtors</a></router-link
        >
      
    </li>

    <li>
      <router-link class="nav-link" to="/pastpost">
          <!-- <i class="fas fa-fw fa-tachometer-alt"></i> -->
          <a href="#" class="nava">Recent Post</a></router-link
        >
      
    </li>
   

     

  </ul>
        </div>
      </li>


      <li class="nav-item dropdown no-arrow d-sm-none">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="searchDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <i class="fas fa-search fa-fw"></i>
        </a>
        <!-- Dropdown - Messages -->
        <div
          class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
          style="background-color: #ded4a2;"
          aria-labelledby="searchDropdown"
        >
          <form class="form-inline mr-auto w-100 navbar-search">
            <div class="input-group">
              <input
                type="text"
                class="form-control bg-light border-0 small"
                placeholder="Search for..."
                aria-label="Search"
                aria-describedby="basic-addon2"
              />
              <div class="input-group-append">
                <button class="btn btn-primary" type="button">
                  <i class="fas fa-search fa-sm"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </li>

      <!-- Nav Item - Alerts -->
      <li class="nav-item dropdown no-arrow mx-1">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="alertsDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M0 24.6904C0 24.4611 0 24.2319 0 24.0027C0.145878 23.3902 0.448903 22.8841 0.926606 22.4583C2.96639 20.6389 3.98503 18.3498 3.99818 15.6166C4.00444 14.3672 3.99004 13.1171 4.00256 11.8676C4.04138 8.01906 6.52757 4.52936 10.152 3.24858C10.7461 3.03878 11.3647 2.89974 11.9977 2.71999C11.9977 2.37992 12.0177 2.01541 11.9933 1.65341C11.9382 0.829839 12.2681 0.269306 13.0595 0C13.2467 0 13.4345 0 13.6217 0C14.4225 0.289348 14.7349 0.878064 14.6704 1.70289C14.6573 1.86823 14.6867 2.03859 14.6635 2.20205C14.6416 2.35925 14.611 2.53398 14.5258 2.66175C13.5335 4.14105 12.8905 5.75313 12.7358 7.53118C12.3871 11.5426 13.8233 14.7968 17.0107 17.2412C18.8051 18.6172 20.8737 19.2848 23.1389 19.3324C23.2603 19.3349 23.4475 19.3969 23.4895 19.4859C24.0742 20.7209 24.9201 21.7437 25.9274 22.658C26.5974 23.2656 26.8046 24.0597 26.5729 24.9396C26.2837 26.0369 25.374 26.6757 24.1325 26.6757C16.9369 26.6763 9.74126 26.6763 2.54566 26.6757C2.45175 26.6757 2.35784 26.6763 2.26455 26.6707C1.2121 26.6043 0.386921 25.963 0.0945389 24.9866C0.0644868 24.8864 0.0313043 24.7887 0 24.6904Z" fill="#DED4A2"/>
  <path d="M24.0574 0C24.7141 0.144674 25.3884 0.236739 26.0258 0.44279C29.7541 1.6459 32.234 5.29468 31.9823 9.16518C31.7244 13.129 28.8676 16.4108 25.0096 17.1736C20.1882 18.1274 15.5376 14.8657 14.7606 9.98437C13.9918 5.15627 17.5223 0.557401 22.3807 0.0551138C22.4615 0.046972 22.5404 0.0187888 22.6205 0C23.0994 0 23.5784 0 24.0574 0ZM22.6668 7.32638C22.6668 7.4936 22.6668 7.60633 22.6668 7.71969C22.6668 9.0205 22.6631 10.3219 22.6693 11.6228C22.6725 12.2202 23.0857 12.6549 23.6416 12.6699C24.1832 12.6849 24.6553 12.2478 24.6597 11.6635C24.6734 9.88354 24.6728 8.10361 24.659 6.32369C24.6553 5.80574 24.3078 5.39301 23.8126 5.35919C23.1608 5.31473 22.5015 5.31222 21.8504 5.35857C21.3139 5.39677 20.9601 5.88528 20.9983 6.40886C21.0352 6.91178 21.4466 7.30321 21.9706 7.32513C22.1866 7.3339 22.4032 7.32638 22.6668 7.32638Z" fill="#DED4A2"/>
  <path d="M18.1988 28.0239C17.9209 29.7732 16.2336 31.9007 13.5182 31.9971C11.0665 32.0842 8.84826 30.3324 8.45508 28.0239C11.6976 28.0239 14.9376 28.0239 18.1988 28.0239Z" fill="#DED4A2"/>
</svg>
          <!-- Counter - Alerts -->
          <!-- <span class="badge badge-danger badge-counter">3+</span> -->
        </a>
        <!-- Dropdown - Alerts -->
        <div
          class="
            dropdown-list dropdown-menu dropdown-menu-right
            shadow
            animated--grow-in
          "
          style="background-color: #ded4a2;"
          aria-labelledby="alertsDropdown"
        >
          <h6 class="dropdown-header">Alerts Center</h6>
          <a class="dropdown-item d-flex align-items-center" href="#">
            <div class="mr-3">
              <div class="icon-circle bg-primary">
                <i class="fas fa-file-alt text-white"></i>
              </div>
            </div>
            <div>
              <div class="small text-gray-500">December 12, 2019</div>
              <span class="font-weight-bold"
                >A new monthly report is ready to download!</span
              >
            </div>
          </a>
          <a class="dropdown-item d-flex align-items-center" href="#">
            <div class="mr-3">
              <div class="icon-circle bg-success">
                <i class="fas fa-donate text-white"></i>
              </div>
            </div>
            <div>
              <div class="small text-gray-500">December 7, 2019</div>
              $290.29 has been deposited into your account!
            </div>
          </a>
          <a class="dropdown-item d-flex align-items-center" href="#">
            <div class="mr-3">
              <div class="icon-circle bg-warning">
                <i class="fas fa-exclamation-triangle text-white"></i>
              </div>
            </div>
            <div>
              <div class="small text-gray-500">December 2, 2019</div>
              Spending Alert: We've noticed unusually high spending for your
              account.
            </div>
          </a>
          <a class="dropdown-item text-center small text-gray-500" href="#"
            >Show All Alerts</a
          >
        </div>
      </li>

    

      <div class="topbar-divider d-none d-sm-block"></div>

      <!-- Nav Item - User Information -->
      <li class="nav-item dropdown no-arrow">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="userDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
         
          <img 
          class="img-profile new_image"
            
            src="images/character.png"
          />
          <div>
            <span class="fonts">
            Alex Smith
          </span>
          <p>
            Buyer
          </p>
          
          </div>
          
          <img v-if="user && user.auth_type === 'Influencer'" class="img-profile rounded-circle" :src="'/uploads/' + user.image" alt="">
        </a>
        <!-- Dropdown - User Information -->
        <div
          class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
          style="background-color: #ded4a2;"
          aria-labelledby="userDropdown"
        >

        <a class="dropdown-item"  @click="back"  v-if="user && user.auth_type === 'Influencer'">
            <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
            Profile
          </a>


          <div class="dropdown-divider"></div>
          <a class="dropdown-item"  @click="backs"  v-if="user && user.auth_type === 'Brand'">
            <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
            Profile
          </a>
         
          <a class="dropdown-item"  @click="assign"  v-if="user && user.auth_type === 'Influencer'">
            <i class="fas fa-box fa-sm fa-fw mr-2 text-gray-400"></i>
            Assign Product
          </a>
          <div class="dropdown-divider"></div>
          <a
            class="dropdown-item"
            href="javascript:void(0)"
            @click="logout"
            data-toggle="modal"
            data-target="#logoutModal"
          >
            <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
            Logout
          </a>
        </div>
      </li>
    </ul>

    
  </div>
  
  
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Topbar",
  data() {
    return {
      isTopbarVisible: false
    };
  },
 

  computed: {
    ...mapGetters(["user"]),
  },
  methods: {

    toggleTopbar() {
      this.isTopbarVisible = !this.isTopbarVisible;
    },
    logout() {
      localStorage.removeItem("token");
      this.$store.dispatch("user", null);
      this.$router.push("/");
    },

    chats(){
      // this.$router.push('/chat')
    },

    back(){
      // this.$router.push('/influncer/dashborad');
    },

    backs(){
      // this.$router.push('/Branddashoboard');
    },
    assign(){
      // this.$router.push('/assign_product');

    }
  },
};
</script>


<style scoped>

.listing{
  display: none
}

.show{
  display: block;
}

.fonts{
  color: #FFF;
font-family: "Saol Display";
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px; /* 150% */
}

.new_image{
    height: 5rem !important;
    width: 5rem !important;

}


.topbar .dropdown-list .dropdown-header {
    background-color: #DED4A2 !important;
    border: 1px solid #DED4A2 !important;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    color: #fff;
}
.heads{
  /* color: rgb(0, 0, 0);
    font-family: fantasy;
    font-size: 26px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 20px; */
    padding: 15px;

    color: #DED4A2 !important;
    font-family: "Saol Display" !important;
    font-size: 26px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

}
.topbar {
    height: 6.375rem !important;
   
    padding-left: 140px !important;
    padding-right: 140px !important;
}
ul.ul-list {
    display: flex;
    justify-content: flex-end;
    width: 30%;
    gap: 20px;
    margin: 0px;
}

ul.ul-list li {
    list-style: none;
}

ul.ul-list li a {
   
    font-family: sans-serif;
   
    
    
    padding: 0px !important; /* 150% */

    color: #FFF !important;

font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 24px; /* 133.333% */
}

.navbar.navbar-expand.navbar-light.topbar.static-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 20px !important;
    padding-bottom: 20px !important;
    border-bottom: 1px solid  #ded4a2;
}

h2.heads {
    width: 54% !important;
    margin: 0px !important;
}

img.images {
    padding-top: 0px !important;
    width: 5% !important;
}
@media screen and (max-width: 1600px){
  .heads{
    color: rgb(0, 0, 0);
    font-family: fantasy;
    font-size: 24px !important;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 20px;
    padding: 10px;
 
}

ul.ul-list li a {
    
    font-size: 15px;
  
}


.topbar {

    padding-left: 10px !important;
    padding-right: 10px !important;
}
}
@media screen and (max-width: 1440px){

  a#alertsDropdown {
    width: 90%;
}
  .topbar {
    height: 4.375rem !important;
   
    padding-left: 10px !important;
    padding-right: 10px !important;
}

ul.ul-list li a{
    color: #000;
    color: #222;
    font-family: sans-serif;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
}

.images{
  padding-top: 5px;
    width: 17%;
}
ul.ul-list[data-v-7bfd2830] {
    display: flex;
    justify-content: flex-end;
    width: 30%;
    gap: 15px;
    margin: 0px ;
}
.heads[data-v-7bfd2830] {
    color: rgb(0, 0, 0);
    font-family: fantasy;
    font-size: 22px !important;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 20px;
    padding: 10px;
}
}

@media screen and (max-width: 1024px){
  .images{
    width: 30%;
    padding-bottom: 12px;
}
h2.heads {
    width: 60% !important;
    margin: 0px !important;
}
ul.ul-list {
    display: flex;
    justify-content: flex-end;
    width: 30%;
    gap: 8px !important;
    margin: 0px;
}
ul.ul-list li a{
    color: #000;
    color: #222;
    font-family: sans-serif;
    font-size: 12px !important;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    padding: 0px !important;
}
.navbar.navbar-expand.navbar-light.topbar.static-top{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 20px !important;
    padding-bottom: 20px !important;
    padding-left: 10px !important;
    padding-right: 10px !important;
}
.heads[data-v-7bfd2830][data-v-7bfd2830] {
    color: rgb(0, 0, 0);
    font-family: fantasy;
    font-size: 16px !important;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 20px;
    padding: 10px;
}
}

@media screen and (max-width: 768px){

  .heads{
    display: none;
  }

  .images{
   display: none;
}

 
}

@media screen and (max-width: 600px){
  ul.ul-list {
    display: none !important;
}

.nava{
  color: #293857;
    font-size: 18px;
    font-weight: bold;
}

}

</style>
