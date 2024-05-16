<link href="https://fonts.googleapis.com/css2?family=Saol+Display&display=swap" rel="stylesheet"/>


<template>
  <div>

 

<div v-if="showing">
  
      
    <header class="header">
    <div class="contanair">
      <nav>
        <div class="logo">
          <img src="/images/logo-header.png"  alt=""/>
        </div>

        <div class="maxwidths">
            <input type="text" placeholder="What are you looking for..."class="inputtype" v-model="form.looking"/>
            <svg @click="explorenow" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" class="setsvgleft" style="cursor: pointer;">
  <path d="M30.0518 27.6952L37.1902 34.8318L34.8318 37.1902L27.6952 30.0518C25.0397 32.1805 21.7368 33.3383 18.3335 33.3335C10.0535 33.3335 3.3335 26.6135 3.3335 18.3335C3.3335 10.0535 10.0535 3.3335 18.3335 3.3335C26.6135 3.3335 33.3335 10.0535 33.3335 18.3335C33.3383 21.7368 32.1805 25.0397 30.0518 27.6952ZM26.7085 26.4585C28.8237 24.2833 30.0049 21.3675 30.0002 18.3335C30.0002 11.8885 24.7785 6.66683 18.3335 6.66683C11.8885 6.66683 6.66683 11.8885 6.66683 18.3335C6.66683 24.7785 11.8885 30.0002 18.3335 30.0002C21.3675 30.0049 24.2833 28.8237 26.4585 26.7085L26.7085 26.4585Z" fill="#293857"/>
</svg>
          </div>

        <div class="zerowidth">
            <p class="godashborad" @click="investor_profile">
              Dashboard
            </p>
          </div>

        <div class="header-list">
          
          <div class="loging-btn">
            <img src="/images/circum_login.png"  alt="" @click="login_page" style="cursor: pointer;">
          </div>


         
     
        <div class="header-menu" @click="menus" style="z-index: 1;"    
          id="userDropdown"
          
          data-toggle="dropdown">
            <label class="hamburger">
  <input type="checkbox">
  <svg viewBox="0 0 32 32">
    <path class="line line-top-bottom" style="stroke: #293857;" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
    <path class="line" style="stroke: #293857;" d="M7 16 27 16"></path>
  </svg>
</label>
          </div>
          
       
       
       
      
        <div
          class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
          style="background-color: #ded4a2;"
          aria-labelledby="userDropdown"
        >


        <a
            class="dropdown-item"
            href="javascript:void(0)"
           @click="$router.push('/comment')"
            data-toggle="modal"
            data-target="#logoutModal"
          >
          <i class="fas fa-heart fa-sm fa-fw mr-2 text-black"></i>
            Favorites
          </a>
          <hr>
       
         
          <a
            class="dropdown-item"
            href="javascript:void(0)"
           @click="logout"
            data-toggle="modal"
            data-target="#logoutModal"
          >
            <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-black"></i>
            Logout
          </a>
        </div>
      
    


          <!-- <div class="header-menu" @click="menus" style="z-index: 1;" >
            <label class="hamburger">
  <input type="checkbox">
  <svg viewBox="0 0 32 32">
    <path class="line line-top-bottom" style="stroke: #293857;" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
    <path class="line" style="stroke: #293857;" d="M7 16 27 16"></path>
  </svg>
</label>
          </div> -->
         
        </div>
      </nav>
    </div>
    </header>
  


<salider/>

    <section class="TopListing">
        <div class="contanirz">


          <div class="main-TopListing">
          <div class="TopListing-tital">
            <div class="contact-form-btn hello-bu">
      <button @click="scrollToBottom">
              <svg width="13" height="25" viewBox="0 0 13 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M-0.333333 0.833496C-0.333333 2.07016 0.888333 3.91683 2.125 5.46683C3.715 7.46683 5.615 9.21183 7.79333 10.5435C9.42667 11.5418 11.4067 12.5002 13 12.5002C11.4067 12.5002 9.425 13.4585 7.79333 14.4568C5.615 15.7902 3.715 17.5352 2.125 19.5318C0.888333 21.0835 -0.333333 22.9335 -0.333333 24.1668" stroke="#DED4A2" stroke-width="2"/>
</svg>

Top Listing’s
      </button>


    </div>

    <h2>Explore with Us!!</h2>
    <p>Your Ultimate Real Estate Hub. We're dedicated to simplifying the real estate experience by seamlessly connecting buyers, realtors, and investors. Our platform offers intuitive tools for posting requirements, browsing listings, and discovering lucrative investment opportunities. Join us to unlock a world of possibilities in real estate."</p>
          </div>


          
        <div class="TopListing-boxing">
            <div class="Looking-input">
              <input type="text" placeholder="What Are You Looking For" v-model="form.looking">
            </div>


            <div class="type-input">
              <select name="cars" id="cars"  v-model="form.selectedlocation">
  <option value="" disabled>Location</option>
  <option v-for="(option, index) in locations" :key="index" :value="option">{{ option }}</option>
  
  <!-- <option value="audi">Buyers</option>
  <option value="saab">Investors</option>
  <option value="mercedes">Realtors</option> -->
</select>
            </div>


            <div class="type-input">
              <select name="cars" id="cars"  v-model="form.types">
  <option value="" disabled>Type</option>
  <option value="Buyers">Buyers</option>
  <option value="Investors">Investors</option>
  <option value="Realtors">Realtors</option>
</select>
            </div>

            <div class="Explore-btn">
              <button @click="explorenow">Explore Now </button>
            </div>
          </div>
        </div>



        </div>

      
    </section>
    
    <section class="George">
        <div class="contanirzs">


        <div class="main-George">
          
          <div class="George-box">

            <div class="George-card facebook-card">
              <div class="facebook-dp">
               
                <img  v-if="!imageUrl" :src="'/profile/' + user.profile"/>
                <!-- <img v-if="imageUrl" :src="imageUrl" > -->

                <img v-if="fileType === 'image'" :src="imageUrl" alt="Selected Image">
            <video v-else-if="fileType === 'video'" :src="imageUrl" controls autoplay loop muted style="width: 100%;">
              Your browser does not support the video tag.
            </video>
            </div>
              <button @click="openFileDialog" v-if="!imageUrl">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
              </button>

              <button @click="poststories(user.id)" v-if="imageUrl">
                <svg  xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 512 512" style="fill: rgb(222, 212, 162); height: 20px; width: 20px;"><path data-v-0a6bebac="" d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"></path></svg>
              </button>
              <div class="facebook-paa">
                <p style="color: #202d46;" v-if="!imageUrl">{{ user.username }}</p>
              </div>

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


            <input id="file-input" type="file" accept="image/*, video/*" @change="handleFileChange" style="position: absolute; bottom: 0; left: 0; opacity: 0; width: 0%;">

            <!-- <input type="file" id="file-input" style="position: absolute; bottom: 0; left: 0; opacity: 0; width: 0%;" @change="handleFileChange" accept="image/*"> -->

     <div class="George-card" v-for="store in stories" @click="showstory(store)" style="cursor: pointer;">
              <!-- <img src="/images/exportimg.png" alt="" class="Walker"> -->
              <div style="border-radius: 50px;">

                <img :src="'/profile/' + store.user.profile" alt="" class="Walker">
              </div>

              <!-- <img src="/images/cardbg.png" alt="" class="George"> -->
              <video v-if="store.file_type === 'mp4'" :src="'/story/' + store.story" controls autoplay loop muted  style="max-width: 100%; max-height: 100%;">
      Your browser does not support the video tag.
    </video>
              <img v-else  :src="'/story/' + store.story" alt="" class="George">




              <p>{{ store.user.username }}</p>
            </div>


    



          </div>
        </div>

      </div>
    </section>

    <section class="id-detail">
        <div class="contanirzs">
          <div class="main-id-detail">
            <div class="detail-box-1">

              
              <div class="detail-card-box" v-for="posting in getposter">

                <div class="id-list-1">
                  <span>
                    <img :src="'/profile/' + posting.user.profile" alt="" style="max-width: 70px; cursor: pointer;
    min-width: 70px;" @click="profilepage(posting.user.id)" >
                    <p>
                    <span style="padding-bottom: 10px; gap: 5px; cursor: pointer" @click="profilepage(posting.user.id)">{{posting.user ? posting.user.username:''}} <span style="color: #a2a2a4;
    font-size: 15px;">
                    {{posting.user ? posting.user.type:''}}
                  </span>
                </span> <span class="hero-black" style="    font-size: 15px;
    color: #A2A2A4;">{{ dated(posting.created_at) }}</span></p></span>

                  <span>


                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" @click="favourite(posting)" style="cursor: pointer;">
  <path d="M15.9998 28.4667L14.0665 26.7067C7.19984 20.48 2.6665 16.36 2.6665 11.3333C2.6665 7.21333 5.89317 4 9.99984 4C12.3198 4 14.5465 5.08 15.9998 6.77333C17.4532 5.08 19.6798 4 21.9998 4C26.1065 4 29.3332 7.21333 29.3332 11.3333C29.3332 16.36 24.7998 20.48 17.9332 26.7067L15.9998 28.4667Z" fill="#DED4A2"/>
                    </svg>

                  

                  </span>
                </div>

                <p class="id-list-2">{{posting.postdetails}}
                </p>


                <div class="id-list-3" @click="openModal(posting)" style="cursor: pointer">
                  <!-- <img src="/images/manigar.png" alt=""> -->
                  <img :src="'/post/' + posting.postpic" alt="">

                </div>


          

                <div class="id-list-5">
                <p>{{ posting.counts }} Comments</p>
              </div>

              <div class="id-list-6" style="cursor: pointer;">
                <div class="favourites-card" @click="favourite(posting)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="29" height="26" viewBox="0 0 29 26" fill="none">
  <path d="M14.5 26L12.3975 24.1297C4.93 17.5128 0 13.1346 0 7.79292C0 3.41471 3.509 0 7.975 0C10.498 0 12.9195 1.14768 14.5 2.94714C16.0805 1.14768 18.502 0 21.025 0C25.491 0 29 3.41471 29 7.79292C29 13.1346 24.07 17.5128 16.6025 24.1297L14.5 26Z" fill="#DED4A2"/>
</svg>
<p >Add To favourites</p>
                </div>

                <div class="favourites-card  add-border" @click="showcomments(posting.id)" >
                  <svg xmlns="http://www.w3.org/2000/svg" width="31" height="27" viewBox="0 0 31 27" fill="none">
  <path d="M26.35 9.40852C27.5833 9.40852 28.766 9.90414 29.638 10.7864C30.5101 11.6686 31 12.8651 31 14.1128V18.817C31 20.0647 30.5101 21.2612 29.638 22.1434C28.766 23.0257 27.5833 23.5213 26.35 23.5213V25.0361C26.35 26.6982 24.4342 27.6062 23.1725 26.5414L19.5889 23.5213H15.5C14.2667 23.5213 13.084 23.0257 12.212 22.1434C11.3399 21.2612 10.85 20.0647 10.85 18.817V14.1128C10.85 12.8651 11.3399 11.6686 12.212 10.7864C13.084 9.90414 14.2667 9.40852 15.5 9.40852H26.35ZM21.7 0C22.9333 0 24.116 0.495626 24.988 1.37785C25.8601 2.26006 26.35 3.45661 26.35 4.70426V6.27234H13.95C12.3057 6.27234 10.7287 6.93318 9.56594 8.10947C8.40321 9.28576 7.75 10.8812 7.75 12.5447V18.817C7.75 20.4541 8.37 21.9469 9.3868 23.0634L7.75 24.3053C6.4728 25.2744 4.65 24.3524 4.65 22.7372V20.3851C3.41674 20.3851 2.234 19.8895 1.36195 19.0073C0.489909 18.1251 0 16.9285 0 15.6809V4.70426C0 3.45661 0.489909 2.26006 1.36195 1.37785C2.234 0.495626 3.41674 0 4.65 0H21.7Z" fill="#DED4A2"/>
</svg>
<p>Comment</p>
                </div>

                <div class="favourites-card">
                  <svg xmlns="http://www.w3.org/2000/svg" width="31" height="26" viewBox="0 0 31 26" fill="none">
  <path d="M18.9444 6.93333V0L31 12.1333L18.9444 24.2667V17.3333C10.3333 17.3333 4.30556 19.9333 0 26L1.37778 20.8L1.72222 20.1067C3.10355 16.524 5.44407 13.3964 8.48411 11.0711C11.5241 8.74578 15.1448 7.31355 18.9444 6.93333Z" fill="#DED4A2"/>
</svg>
                  <p>Share</p>
                </div>

              
              </div>
             <div style="width: 100%; margin-bottom: 10px;" v-if="comment_section && key_index == posting.id" class="hello-buddy">

              <input type="text" placeholder="Add Comments" v-model="form.commit">

              <svg data-v-0eb19326="" xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 15 24" fill="none" style="cursor: pointer;" @click="postcomments(posting.id , posting.user.id)"><path data-v-0eb19326="" d="M1.66667 0C1.66667 1.23667 2.88833 3.08333 4.125 4.63333C5.715 6.63333 7.615 8.37833 9.79333 9.71C11.4267 10.7083 13.4067 11.6667 15 11.6667C13.4067 11.6667 11.425 12.625 9.79333 13.6233C7.615 14.9567 5.715 16.7017 4.125 18.6983C2.88833 20.25 1.66667 22.1 1.66667 23.3333" stroke="#DED4A2" stroke-width="2"></path></svg>
              </div>


              </div>




</div>

           
            <div class="detail-box-2">



              <div class="tital-2-box">
                <h2>Top Realtors</h2>
              </div>

              <div class="ahtishamchoro">
               


              <div class="Realtor-card" v-for="item1 in realtor">
                <div class="Realtor-1-list">
                  <div class="Realtor-logo">
                    
                    <!-- <img src="/images/alex.png" alt=""> -->
                    <img :src="'/profile/' + item1.profile" alt="" style="border-radius: 50px;">

                  </div>

                  <span><h3>{{item1.username}}</h3>
                   <h5>@{{item1.username}}</h5>
                  </span>

                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
  <path d="M12.899 33.75L10.049 28.95L4.64902 27.75L5.17402 22.2L1.49902 18L5.17402 13.8L4.64902 8.25L10.049 7.05L12.899 2.25L17.999 4.425L23.099 2.25L25.949 7.05L31.349 8.25L30.824 13.8L34.499 18L30.824 22.2L31.349 27.75L25.949 28.95L23.099 33.75L17.999 31.575L12.899 33.75ZM16.424 23.325L24.899 14.85L22.799 12.675L16.424 19.05L13.199 15.9L11.099 18L16.424 23.325Z" fill="#293857"/>
                  </svg>

                </div>


                <div class="Realtor-2-list">

                  <div class="childe-Realtor">
                    <h2>120 <span>+</span></h2>
                    <p>Total Properties</p>
                  </div>


                  <div class="childe-Realtor fil-border">
                    <h2>120 <span>+</span></h2>
                    <p>Total Sold</p>
                  </div>



                  <div class="childe-Realtor">
                    <h2>4.5<span></span></h2>
                    <p>Rating</p>
                  </div>
                </div>

                <div class="Realtor-3-list">
                  <button @click="contact(item1)">Contact Realtor</button>
                  <svg xmlns="http://www.w3.org/2000/svg" width="46" height="34" viewBox="0 0 46 34" fill="none">
  <rect width="46" height="34" fill="#293857"/>
  <path d="M33 9C33 8.44772 32.5523 8 32 8L23 8C22.4477 8 22 8.44772 22 9C22 9.55229 22.4477 10 23 10L31 10L31 18C31 18.5523 31.4477 19 32 19C32.5523 19 33 18.5523 33 18L33 9ZM15.7071 26.7071L32.7071 9.70711L31.2929 8.29289L14.2929 25.2929L15.7071 26.7071Z" fill="#DED4A2"/>
</svg>



                </div>
              </div>
            </div>



           

              <div class="Realtor-bt">
                <button>Explore Now </button>
              </div>






              
              <div class="tital-2-box">
                <h2>Top Investor</h2>
              </div>

              <div class="ahtishamchoro">
                

              <div class="Realtor-card" v-for="item2 in investor">
                <div class="Realtor-1-list">
                  <div class="Realtor-logo">
                    
                    <!-- <img src="/images/alex.png" alt=""> -->
                    <img :src="'/profile/' + item2.profile" alt="">

                  </div>

                  <span><h3>{{item2.username}}</h3>
                   <h5>{{item2.username}}</h5>
                  </span>

                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
  <path d="M12.899 33.75L10.049 28.95L4.64902 27.75L5.17402 22.2L1.49902 18L5.17402 13.8L4.64902 8.25L10.049 7.05L12.899 2.25L17.999 4.425L23.099 2.25L25.949 7.05L31.349 8.25L30.824 13.8L34.499 18L30.824 22.2L31.349 27.75L25.949 28.95L23.099 33.75L17.999 31.575L12.899 33.75ZM16.424 23.325L24.899 14.85L22.799 12.675L16.424 19.05L13.199 15.9L11.099 18L16.424 23.325Z" fill="#293857"/>
                  </svg>

                </div>


                <div class="Realtor-2-list">

                  <div class="childe-Realtor">
                    <h2>120 <span>+</span></h2>
                    <p>Total Properties</p>
                  </div>


                  <div class="childe-Realtor fil-border">
                    <h2>120 <span>+</span></h2>
                    <p>Total Sold</p>
                  </div>



                  <div class="childe-Realtor">
                    <h2>4.5<span></span></h2>
                    <p>Rating</p>
                  </div>
                </div>

                <div class="Realtor-3-list">
                  <button @click="contact(item2)">Contact Investor</button>
                  <svg xmlns="http://www.w3.org/2000/svg" width="46" height="34" viewBox="0 0 46 34" fill="none">
  <rect width="46" height="34" fill="#293857"/>
  <path d="M33 9C33 8.44772 32.5523 8 32 8L23 8C22.4477 8 22 8.44772 22 9C22 9.55229 22.4477 10 23 10L31 10L31 18C31 18.5523 31.4477 19 32 19C32.5523 19 33 18.5523 33 18L33 9ZM15.7071 26.7071L32.7071 9.70711L31.2929 8.29289L14.2929 25.2929L15.7071 26.7071Z" fill="#DED4A2"/>
</svg>



                </div>
              </div>
            </div>



           
              <div class="Realtor-bt">
                <button>Explore Now </button>
              </div>
            </div>

          </div>
        </div>

       
      </section>


     
      <div id="bottom"></div>
    <section class="Townhomes">
        <div class="contanirzs">
          <div class="main-Townhomes">

            <div class="Townhomes-tital">
            <h2>Top Listing</h2>
            </div>
            <div class="Townhomes-card-box" >
              <div class="Townhomes-card-1" v-for="listin in getlistings">


                <div class="Townhomes-img">
                  <!-- <img src="/images/Townhomes.png" alt=""> -->
                  <img :src="'/post/' + listin.postpic" />
                </div>
                <div class="ts-si">
                  <div class="Townhomes-rs">


<span>
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M15.833 5.83268H9.16634V11.666H2.49967V4.16602H0.833008V16.666H2.49967V14.166H17.4997V16.666H19.1663V9.16602C19.1663 8.28196 18.8152 7.43411 18.19 6.80899C17.5649 6.18387 16.7171 5.83268 15.833 5.83268ZM5.83301 10.8327C6.49605 10.8327 7.13194 10.5693 7.60078 10.1004C8.06962 9.63161 8.33301 8.99572 8.33301 8.33268C8.33301 7.66964 8.06962 7.03376 7.60078 6.56492C7.13194 6.09607 6.49605 5.83268 5.83301 5.83268C5.16997 5.83268 4.53408 6.09607 4.06524 6.56492C3.5964 7.03376 3.33301 7.66964 3.33301 8.33268C3.33301 8.99572 3.5964 9.63161 4.06524 10.1004C4.53408 10.5693 5.16997 10.8327 5.83301 10.8327Z" fill="#DED4A2"/>
</svg>
<p>4 Bedroom</p>
</span>



<span>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
<path d="M4.49854 0C4.77408 0.0881757 5.06591 0.14292 5.32183 0.270377C5.9514 0.585052 6.34593 1.10658 6.52128 1.789C6.54549 1.88345 6.5814 1.92398 6.67784 1.94739C7.72282 2.20147 8.4576 3.13337 8.4672 4.20903C8.46845 4.36407 8.4672 4.51953 8.4672 4.68334C6.90161 4.68334 5.34813 4.68334 3.7959 4.68334C3.64685 3.4773 4.23886 2.3026 5.57524 1.93109C5.48632 1.48645 5.0371 1.0322 4.53611 0.979544C4.05808 0.929397 3.56628 0.915606 3.08992 0.97035C2.3852 1.05142 1.90801 1.64609 1.90592 2.35985C1.90216 3.746 1.90467 5.13216 1.90467 6.51831C1.90467 6.58016 1.90467 6.64201 1.90467 6.71472C1.59238 6.71472 1.28887 6.71472 0.966982 6.71472C0.966982 6.65747 0.966982 6.60189 0.966982 6.54631C0.966982 5.1706 0.966565 3.7949 0.966982 2.41919C0.9674 1.17721 1.75061 0.24405 2.97511 0.0254915C2.99432 0.0221484 3.01143 0.00877578 3.02939 0C3.5191 0 4.00882 0 4.49854 0Z" fill="#DED4A2"/>
<path d="M15.9997 8.75844C15.9128 8.92184 15.8473 9.10195 15.7346 9.24487C15.5843 9.43585 15.3617 9.53322 15.1183 9.53614C14.4787 9.54366 13.8391 9.53823 13.1991 9.5374C13.1899 9.5374 13.1808 9.53029 13.1641 9.52319C13.1641 8.91348 13.1641 8.30085 13.1641 7.66356C13.2154 7.66356 13.2701 7.66356 13.3244 7.66356C13.8341 7.66356 14.3443 7.67986 14.8532 7.65896C15.3709 7.63765 15.816 7.80773 15.9997 8.44544C15.9997 8.54991 15.9997 8.65439 15.9997 8.75844Z" fill="#DED4A2"/>
<path d="M13.1502 10.4863C13.7852 10.4863 14.3981 10.4863 15.0089 10.4863C15.016 10.4968 15.0268 10.5051 15.0268 10.5135C15.021 11.0919 15.0523 11.6736 14.9989 12.2473C14.9016 13.2929 14.3664 14.0911 13.4942 14.6669C13.4596 14.6899 13.4241 14.7121 13.3894 14.7346C13.3853 14.7376 13.3828 14.7426 13.3702 14.7576C13.5685 14.9436 13.7681 15.1304 13.9568 15.3076C13.7113 15.5533 13.4955 15.7698 13.2679 15.9975C13.0174 15.7447 12.7482 15.4768 12.4847 15.2035C12.4163 15.1321 12.3545 15.1137 12.2539 15.1291C12.0697 15.158 11.881 15.1697 11.694 15.1701C9.23039 15.1726 6.76678 15.1726 4.30317 15.1697C4.10611 15.1693 3.90947 15.1367 3.712 15.1304C3.65438 15.1287 3.57924 15.1488 3.53916 15.1872C3.29451 15.4217 3.05821 15.664 2.81857 15.9035C2.78266 15.9394 2.74467 15.9737 2.71628 16.0004C2.49627 15.781 2.28293 15.5679 2.05289 15.3389C2.24869 15.1584 2.44951 14.9728 2.65909 14.7794C2.4708 14.6419 2.30965 14.5378 2.16436 14.4158C1.40536 13.7768 1.00332 12.9578 0.972425 11.9661C0.956978 11.4776 0.96992 10.9878 0.96992 10.4893C3.47111 10.4893 5.96227 10.4893 8.46555 10.4893C8.46555 10.9519 8.46555 11.4086 8.46555 11.8762C10.0311 11.8762 11.5846 11.8762 13.1502 11.8762C13.1502 11.4178 13.1502 10.9611 13.1502 10.4863Z" fill="#DED4A2"/>
<path d="M8.4572 9.54083C8.40459 9.54083 8.36368 9.54083 8.32235 9.54083C5.87502 9.54083 3.42727 9.54124 0.979939 9.54041C0.413822 9.54041 -0.0070089 9.12753 8.84459e-05 8.58677C0.00635081 8.09867 0.398792 7.69081 0.886004 7.66573C0.922325 7.66406 0.959065 7.66406 0.995386 7.66406C3.43228 7.66406 5.86959 7.66406 8.30648 7.66406C8.35283 7.66406 8.39917 7.66406 8.45678 7.66406C8.4572 8.2884 8.4572 8.90521 8.4572 9.54083Z" fill="#DED4A2"/>
<path d="M12.2164 10.9422C11.275 10.9422 10.3503 10.9422 9.41383 10.9422C9.41132 10.887 9.40673 10.8369 9.40673 10.7868C9.40631 9.77043 9.4059 8.75411 9.40673 7.7378C9.40715 7.1143 9.79667 6.72649 10.4221 6.72566C10.7189 6.72524 11.0157 6.72022 11.3126 6.72775C11.7906 6.73986 12.2064 7.1214 12.2127 7.59697C12.2265 8.70564 12.2164 9.81557 12.2164 10.9422Z" fill="#DED4A2"/>
</svg>
<p>3 Bathroom</p>
</span>

<h4>$7000</h4>

</div>

<div class="Townhomes-para">
<h2>{{listin.posttitle}}</h2>
<p>{{listin.postdetails}} </p>
</div>


<div class="Realtor-3-list">
<button class="white" @click="contact(listin.user)">Contact Realtor</button>
<svg xmlns="http://www.w3.org/2000/svg" width="46" height="41" viewBox="0 0 46 41" fill="none">
<rect width="46" height="41" fill="#DED4A2"/>
<path d="M33 13C33 12.4477 32.5523 12 32 12L23 12C22.4477 12 22 12.4477 22 13C22 13.5523 22.4477 14 23 14L31 14L31 22C31 22.5523 31.4477 23 32 23C32.5523 23 33 22.5523 33 22L33 13ZM15.7071 30.7071L32.7071 13.7071L31.2929 12.2929L14.2929 29.2929L15.7071 30.7071Z" fill="#202D46"/>
</svg>



</div>
                </div>

              </div>



 


            </div>
          </div>
        </div>
    </section>
    
    <footer>
      <div class="contanair">
        <div class="main-footer-1">
          <div class="footer-box-1">
            <h2>Our Exclusive Properties directly to your inbox.</h2>



            <div class="input-groups">
              <input type="email" placeholder="Email">

              <button><svg xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 15 24" fill="none">
  <path d="M1.66667 0C1.66667 1.23667 2.88833 3.08333 4.125 4.63333C5.715 6.63333 7.615 8.37833 9.79333 9.71C11.4267 10.7083 13.4067 11.6667 15 11.6667C13.4067 11.6667 11.425 12.625 9.79333 13.6233C7.615 14.9567 5.715 16.7017 4.125 18.6983C2.88833 20.25 1.66667 22.1 1.66667 23.3333" stroke="#DED4A2" stroke-width="2"/>
</svg></button>
            </div>
          </div>

          <div class="footer-box-2">
            <div class="footer-list1">
              <div class="footer-number">
                <a href="mailto">info@444living.com</a>
                <a href="tel:111-222-33323233">111-222-33323233</a>
              </div>

              <div class="footer-img">
                <img src="/images/logo.png" alt="">
              </div>
            </div>
            <div class="footer-list2">
              <ul class="ul-1">
                <li>Listings</li>
                <li>For Buyers</li>
                <li>For Realtors</li>
                <li>For Investor</li>
                <li>About Us</li>
                <li>Contact Us</li>
              </ul>

              <ul class="ul-2">
                <li>Are you a buyer</li>
                <li>Become a realtor</li>
                <li>Become a investor</li>
                
              </ul>



              
              <ul class="ul-3">
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Linkedin</li>
                
              </ul>
            </div>
          </div>


        </div>
      </div>
      <div class="boeder-footer-bottom">
        <div class="contanair">
          <div class="main-bottom-side">
            <p>444living 2024,  All rights reserved</p>


            <div class="main-list-bottom">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms And Services</a>
            </div>
          </div>
        </div>
      </div>
    </footer>

    <div id="popup-box" class="modal" v-if="isModalOpen" >
      <div style="display: flex;
    padding-left: 0px;
    justify-content: space-evenly;">

        <Add :Feeds="Feeds"   @cancel="closeModals"/>
      </div>
      
    </div>
  
</div>


<div v-if="storys">
  <Stories :storyData ="storyData" @cancel="closeModal"/>
</div>
</div>
</template>


<script>

import Menu from '../home/menu.vue'
import Slider from '../home/slider.vue'
import dashboard from './dashboard.vue';
import Stories from './black.vue';
import Add from '../admin/add.vue'
import { mapGetters } from "vuex";
import { get , byMethod} from '../lib/api';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

export default {
  name: "Home",
  components: {
    Menu,
    Slider,
    Stories,
    Add
  
  
  },
  data() {
    return {
        first : true,
        fourth: false,
        third:false,
        second:false,
        start:true,
        end:false,
        cross:false,
        endicon:false,
        starticon:true,
        logo:true,
        realtor:[],
        investor:[],
        getposter:[],
        getlistings:[],
        hoursDifference:0,
        addcomments:'',
        comment_section:false,
        key_index:0,
        form:{},
        method:'POST',
        imageUrl: '',
        stories:[],
        showing:true,
        storys:false,
        story_data:"",
        fileType: null,
        loaders:false,
        locations:[],
        isModalOpen:true,
        Feeds:{}

    };
  },
  name: 'SampleComponent',

  computed: {
    ...mapGetters(["user"]),
  },

  created(){
         
       

               this.Investors();

               this.Realtors();

               this.Getposting();
               this.Getlisting();
               this.getstories();
               this.getlocation();
           
         }, 
 


  methods:{

    scrollToBottom() {
      const element = document.getElementById('bottom');
      element.scrollIntoView({ behavior: 'smooth' });
    },

    openModal(e) {
      this.Feeds = e
      console.log(e);
     
     $('#popup-box').modal('show');
     
   },
   closeModals() {
   console.log('avcd');

   this.shows = false;
   $('#popup-box').modal('hide');
     
    
   },

    logout() {
      localStorage.removeItem("token");
      this.$store.dispatch("user", null);
      this.$router.push("/");
    },


    profilepage(e){
      this.$router.push(`/profile/${e}`)

    },


    explorenow(){

      

      console.log(this.form)


      byMethod(this.method, '/filterpost' , this.form)
                                .then((res) => {
                                
                                    console.log(res)
                                    if(res.data) {
                                      Vue.set(this.$data, 'getposter', res.data.data)
                                      
                                    }
                                })
                                .catch((error) => {
                                    if(error.response.status === 422) {
                                        this.errors = error.response.data.errors
                                    }
                                    this.isProcessing = false
                                })

    },


    getlocation(){

      get('/listlocation')
               .then((res) => {

                //  console.log(res.data.data)
                Vue.set(this.$data, 'locations', res.data.data)
 
               })


    },


    closeModal(){

      this.showing = true;
      this.storys = false

    },


    showstory(e){


      this.storyData = e;

      this.showing = false;
      this.storys = true

    },

    favourite(e){
      console.log(e)


      get('/addfavorite?post_id=' + e.id + '&user_id=' + e.user_id)
               .then((res) => {
                
                Swal.fire({
      title: "Successfully Add to you Favorite list",
      width: 600,
      padding: "3em",
      color: "#202d46",
      background: "#ded4a2",
      backdrop: `
      rgb(0 0 0 / 84%)

    
      `
    });
 
               })


     

    },


    getstories(){

      get('/getstory')
               .then((res) => {
                Vue.set(this.$data, 'stories', res.data.data)
                 
 
               })

    },


    handleFileChange(event) {
    const file = event.target.files[0];
    const type = file.type.split('/')[0]; // Get the type of file (image or video)

    if (type === 'image' || type === 'video') {
      this.file = file;
      this.imageUrl = URL.createObjectURL(file);
      this.fileType = type;
    } else {
      // Handle invalid file type
      alert('Please select an image or a video file.');
    }
  },

  //   handleFileChange(event) {
  //     this.file = event.target.files[0];
  //   this.imageUrl = URL.createObjectURL(this.file);
  // },
  openFileDialog() {
    document.getElementById('file-input').click();
  },
     


                  poststories(e){
                    this.loaders = true

                const formData = new FormData();

                formData.append('image', this.file); 

                formData.append('user_id', e);
               

                console.log(formData);



                            
                byMethod(this.method, '/poststory' , formData)
                                .then((res) => {
                                
                                    console.log(res)
                                    if(res.data && res.data.saved) {
                                        this.imageUrl  ='';
                                        this.fileType = null;
                                        this.loaders = false;
                                      

                                        let message =
                "Successfully Post Stories.";
                let toast = Vue.toasted.show(message, {
                theme: "toasted-primary",
                position: "top-right",
                duration: 5000,
                });


                get('/getstory')
               .then((res) => {
                Vue.set(this.$data, 'stories', res.data.data)
                 
 
               })

               
                                    
                                    }
                                })
                                .catch((error) => {
                                    if(error.response.status === 422) {
                                        this.errors = error.response.data.errors
                                    }
                                    this.isProcessing = false
                                })

                },


    postcomments(e, user){
      this.form.commit_id = e
      this.form.user_id = user

      byMethod(this.method, '/postcommit' , this.form)
                            .then((res) => {
                            
                                console.log(res)
                                if(res.data && res.data.saved) {
                                   this.Getposting()
                                    
                                    this.form = {};
                                    this.comment_section = false

                                    let message =
            "Successfully Post Comments.";
          let toast = Vue.toasted.show(message, {
            theme: "toasted-primary",
            position: "top-right",
            duration: 5000,
          });

                                
                                }
                            })
                            .catch((error) => {
                                if(error.response.status === 422) {
                                    this.errors = error.response.data.errors
                                }
                                this.isProcessing = false
                            })

    },

    showcomments(e){
      this.key_index = e
      this.comment_section = ! this.comment_section
    

    },


    dated(e){
      // const createdAtDate = new Date(e);
        
      //   const now = new Date();
        
      //   const timeDiffInHours = (now - createdAtDate) / (1000 * 60 * 60);
        
      //    let hoursDifference = Math.floor(timeDiffInHours);
      //           return hoursDifference

      const createdAtDate = new Date(e);
  // Get the current time
  const now = new Date();
  // Calculate the difference in milliseconds between now and the created_at time
  const timeDiffInMilliseconds = now - createdAtDate;
  // Convert milliseconds to hours
  const hoursDifference = Math.floor(timeDiffInMilliseconds / (1000 * 60 * 60));
  // Calculate the remaining minutes
  const remainingMinutes = Math.floor((timeDiffInMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
  // Format the time
  const formattedTime = `${hoursDifference} hours and ${remainingMinutes} minutes ago`;
  console.log(formattedTime)

  const moment = require('moment');
                let formattedDate = moment(e).format("h:mma, DD dddd");
                console.log(formattedDate)
  // Return an object containing the hours difference and formatted time
  
  if(hoursDifference > 0 && hoursDifference < 24){

    return hoursDifference + ' hours ago'
  }

  if(hoursDifference < 1 ){

    return remainingMinutes + ' minutes ago'
    }
    else {
      return formattedDate

    }
   
  
            },


    
    investorprofile(e){
                this.$router.push(`/profile/${e.id}`)
             },
 

          contact(e){
                console.log(e);

                
                this.$router.push({
            name: 'chats', 
            params: { id: JSON.stringify(e) },
            });
            

            },

    Getlisting(){
      get('/getlisting')
               .then((res) => {
                Vue.set(this.$data, 'getlistings', res.data.data)
                 
                 
 
               })
    },

    Getposting(){
      get('/getposts')
               .then((res) => {
                Vue.set(this.$data, 'getposter', res.data.data)
                 
                 
 
               })
    },

    Investors(){
      
         
         get('/exploreinvestor')
               .then((res) => {
                Vue.set(this.$data, 'investor', res.data.data)
                 
                 
 
               })

          
    },


    Realtors(){
      
         
      get('/explorerealtor')
            .then((res) => {

              Vue.set(this.$data, 'realtor', res.data.data)
              
              

            })


        },

    menus(){
        this.start = false
        this.end = true
        this.logo = false
        setTimeout(() => {
        console.log('ssss');
        this.endicon = true;
        this.starticon = false;

      }, 200);
    },



    login_page(){
        this.$router.push('login')
    },
    dashboards(){
      this.$router.push('investordashoard')
    },

    investor_profile(){

     
        this.$router.push('profilescreen')
     


   
    }

  
  }
};
</script>


<style scoped>

.spinner {
  position: absolute;
    width: 15px;
    height: 15px;
    bottom: 67px;
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

.ahtishamchoro{
 width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

input.inputtype {
    border: 1px solid #293857 !important;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-right: 70px;
    width: 90%;
}

p.godashborad {
    color: #293857;
    font-family: sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    cursor: pointer !important;
}

.hello-buddy {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end ;  
}

.hello-buddy svg {
    position: absolute !important;
    right: 24px !important; 
}

.zerowidth{
  width: 0%;
  padding-top: 10px

}

.facebook-card button::after {
    position: absolute;
    content: "";
    width: 0;
    left: 0px;
    bottom: 0px;
    background:transparent;
    height: 0px;
    transition: 0.3s ease-out;
}

svg.setsvgleft {
    position: absolute;
    right: 120px;
}

.maxwidths{
  width:65%;
  position: relative;
  display: flex;
    align-items: center;
}

header.header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative !important;
    padding: 16px 0px 0px 0px !important;
    background-color: #DED4A2 !important;
}

img.Walker {
  z-index: 1;
    position: absolute;
    top: 10px;
    width: 20%;
    min-width: 20%;
    max-width: 20%;
    border-radius: 50px;
    object-fit: cover;
}

.George-card {
    border: 4px solid #202d46 !important;
    border-radius: 10px ;
}

.George-card p {
    z-index: 1;
    position: absolute;
    bottom: 44px;
    text-align: center;
    width: 100%;
}

img.George {
    width: 100% !important;
    height: 100%;
}

.George-box {  
    display: flex !important;
    
   
    justify-content: flex-start !important;
    gap: 20px !important;
}

.facebook-card {
    /* width: 24%;
    height: 510px; */
    display: flex;
    align-items: center;
    position: relative;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 10px;
    background-color: transparent;
    border: 4px solid #202d46;
}

.facebook-paa {
    height: 34%;
    background: #ded4a2;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.facebook-dp {
    width: 100%;
    height: 66%;
}

.facebook-dp img {
    width: 100%;
    height: 100%;
    max-width: 100%;
    min-width: 100%;
    max-height: 100%;
    min-height: 100%;
    object-fit: none;
}

.facebook-card button {
    position: absolute;
    top: 61%;
    padding: 20px 21px;
    border-radius: 50px;
    background-color: #293857;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #ded4a2;
}


.facebook-card button svg {
    font-size: 15px;
    fill: #ded4a2;
    width: 22px;
    height: 22px;
}


.boeder-footer-bottom {
    width: 100%;
    border-top: 1px solid #DED4A2;
}

.main-bottom-side {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3% 0px;
}

.main-list-bottom {
    width: 20%;
    display: flex;
    justify-content: flex-end;
    gap: 30px;
}

.main-bottom-side p {
    color: #DED4A2;
    font-family: sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.main-list-bottom a {
    color: #DED4A2;
    font-family: sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration-line: underline;
}
@media screen and (max-width: 1600px){
  .contanirz {
    max-width: 1440px;
}

.contanirzs {
    max-width: 1200px;
}

.TopListing-tital h2 {
    font-size: 58px;
    padding: 5px 0px 18px 0px;
}

.hello-bu:hover svg {
    transform: translateX(170px);
}

.TopListing-tital p {
    font-size: 18px;
}

.TopListing-boxing {
    width: 83%;
    padding: 25px;
}

input {
    padding: 10px;
    font-size: 20px;
}

.type-input select {
    padding: 10px;
    font-size: 20px;
}

.Explore-btn button {padding: 12px 0px;font-size: 18px;}

.TopListing-tital {
    padding: 110px 60px;
}

section.TopListing {
    padding: 60px 0px;
}

.George-search input {
    padding: 25px 30px;
}

.George-search svg {
    right: 30px;
    width: 28px;
    height: 28px;
}

.George-box {
    padding: 30px 0px;
}

.George-card {
    height: 400px;
    padding:0px;
}
.facebook-card button {
    top: 55%;
    padding: 12px 12px;
}

.George-card p {
    margin: 0px;
    font-size: 32px;
}

section.George {
    padding: 40px 0px;
}

.detail-card-box {
    gap: 20px;
    padding: 30px 30px 0px 30px;
}

p.id-list-2 {
    font-size: 18px;
}

.id-list-1 span p {
    font-size: 22px;
}

.id-list-1 span svg {
    width: 28px;
    height: 28px;
}

.id-list-1 span {
    gap: 15px;
}

.id-list-5 p {
    font-size: 18px;
}

.favourites-card p {
    font-size: 18px;
}

.favourites-card svg {
    width: 25px;
    height: 25px;
}

.favourites-card {
    gap: 15px;
    padding: 30px 0px;
}

.detail-box-1 {
    gap: 20px;
}

.tital-2-box h2 {
    font-size: 25px;
}

.detail-box-2 {
    gap: 20px;
}

.Realtor-card {
    padding: 20px 25px;
}

.Realtor-logo {
    width: 25%;
}

.Realtor-1-list span h3 {
    font-size: 18px;
}

.Realtor-1-list span h5 {
    font-size: 14px;
    margin: 0px;
}

.Realtor-1-list svg {
    width: 30px;
    height: 30px;
}

.childe-Realtor h2 {
    font-size: 25px;
}

.Realtor-3-list button {
    font-size: 14px;
    padding: 8px 0px;
}

.Realtor-3-list svg {
    width: 50px;
    height: 50px;
}

.Realtor-bt button {
    font-size: 18px;
    padding: 12px 0px;
}

.tital-2-box {
    padding: 20px 0px 12px 0px;
}

.Townhomes-tital h2 {
    font-size: 38px;
}

.Townhomes-rs h4 {
    font-size: 24px;
}

.Townhomes-rs span svg {
    width: 15px;
    height: 15px;
}

.Townhomes-rs span {
    gap: 5px;
}

input.inputtype {
    padding-top: 15px;
    padding-bottom: 15px;
    font-size: 16px;
}

p.godashborad {
    font-size: 16px;
}

svg.setsvgleft {
    width: 28px;
    height: 28px;
}

.Townhomes-para h2 {
    font-size: 25px;
}

.Townhomes-para p {
    font-size: 14px;
}

.Townhomes-para {
    padding: 12px 0px;
}

.Realtor-3-list svg {
    width: 45px;
    height: 45px;
}

section.Townhomes {
    padding: 65px 0px;
}
.spinner div {
    width: 18%;
    height: 90%;
}

.spinner {
    bottom: 42px;
}
}
@media screen and (max-width: 1440px){
  .contanirz {
    max-width: 1300px;
}

.contanirzs {
    max-width: 1100px;
}
.TopListing-boxing{
  bottom: -40px;
}
.TopListing-boxing {
    width: 85%;
    padding: 20px;
}

.TopListing-tital h2 {
    font-size: 48px;
    padding: 5px 0px 14px 0px;
}

.TopListing-tital p {
    font-size: 16px;
}


input.inputtype {
    padding-top: 12px;
    padding-bottom: 12px;
    font-size: 14px;
}

p.godashborad {
    font-size: 14px;
}

svg.setsvgleft {
    width: 25px;
    height: 25px;
}




















.TopListing-tital {
    padding: 80px 55px;
}

input {
    padding: 10px;
    font-size: 14px;
}

.type-input select {
    font-size: 14px;
}

.Explore-btn button {
    padding: 10px 0px;
    font-size: 14px;
}

section.TopListing {
    padding: 40px 0px;
}

.George-search input {
    padding: 15px 50px 15px 15px;
}

.George-search svg {
    right: 25px;
    width: 24px;
    height: 24px;
}

section.George {
    padding: 50px 0px 40px 0px;
}

.George-box {
    padding: 24px 0px;
}

.George-card {
    height: 320px;
    padding: 0px;
}

.George-card img {
    width: 32%;
}

.George-card p {
    font-size: 28px;
}

.detail-card-box {
    gap: 15px;
    padding: 25px 25px 0px 25px;
}

p.id-list-2 {
    font-size: 16px;
}

.id-list-1 span p {
    font-size: 20px;
}

.id-list-1 span svg {
    width: 24px;
    height: 24px;
}

.id-list-1 span {
    gap: 10px;
}

.favourites-card p {
    font-size: 16px;
}

.favourites-card svg {
    width: 22px;
    height: 22px;
}

.favourites-card {
    gap: 10px;
    padding: 24px 0px;
}

.Townhomes-tital h2 {
    font-size: 32px;
}

.Townhomes-card-box {
    padding: 24px 0px;
}

.Townhomes-rs h4 {
    font-size: 20px;
}

.Townhomes-para h2 {
    font-size: 20px;
}

.Realtor-3-list button {
    font-size: 12px;
    padding: 5px 0px;
}

.Realtor-3-list svg {
    width: 41px;
    height: 41px;
}

.childe-Realtor p {
    font-size: 8px;
}

.Realtor-bt button {
    font-size: 14px;
    padding: 10px 0px;
}
}
@media screen and (max-width: 1024px){
  .contanirz {
    max-width: 900px;
}

.contanirzs {
    max-width: 770px;
}

.TopListing-tital h2 {
    font-size: 42px;
}

.TopListing-tital p {
    font-size: 14px;
    width: 50%;
}

.TopListing-tital {
    padding: 70px 35px;
}

.Explore-btn button {
    padding: 8px 0px;
    font-size: 12px;
}

.type-input select {
    font-size: 12px;
    padding:  8px;
}

input {
    padding: 8px;
    font-size: 12px;
}

section.George {
    padding: 40px 0px 30px 0px;
}

.George-card {
    height: 255px;
    padding:0px;
}

.George-card p {
    font-size: 24px;
}

p {}

.detail-card-box {
    gap: 14px;
    padding: 20px 20px 0px 20px;
}

.favourites-card p {
    font-size: 14px;
}

.id-list-5 p {
    font-size: 16px;
}

.favourites-card svg {
    width: 20px;
    height: 20px;
}

.detail-box-2 {
    width: 27%;
}

.Realtor-card {
    padding: 10px 10px;
}

.childe-Realtor h2 {
    font-size: 20px;
}

.Realtor-3-list button {
    font-size: 10px;
    padding: 5px 0px;
    width: 72%;
}

.Realtor-3-list svg {
    width: 46px;
    height: 46px;
}

.Realtor-1-list span h3 {
    font-size: 16px;
}

.Realtor-1-list span h5 {
    font-size: 12px;
}

.Realtor-1-list svg {
    width: 25px;
    height: 25px;
}

.Realtor-bt button {
    font-size: 12px;
    padding: 8px 0px;
}

.tital-2-box {
    padding: 15px 0px 10px 0px;
}

.Townhomes-tital h2 {
    font-size: 30px;
    margin: 0px;
    padding-bottom: 6px;
}

.Townhomes-card-1 {
    width: 32%;
}

.ts-si {
    padding: 12px 10px;
}

.Townhomes-rs h4 {
    font-size: 15px;
}

.Townhomes-rs span p {
    font-size: 12px;
}

.Townhomes-para h2 {
    font-size: 18px;
}

.Townhomes-para p {
    font-size: 12px;
}

.Realtor-3-list svg {
}

button.white {
    padding: 7px 0px;
}

section.Townhomes {
    padding: 40px 0px;
}
}
@media screen and (max-width: 768px){

  .header-menu {
    width: 50%;
    display: none;
}

header.header nav {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
}

svg.setsvgleft {
    position: absolute;
    right: 35px;
}

  .ahtishamchoro{
 width: 100%;
    display: flex;
    flex-direction: row;
    gap: 20px;
    overflow-x: scroll
}

  .George-box {
    padding: 24px 0px;
    overflow-x: scroll;
}
  section {
    padding-right: 30px !important;
    padding-left: 30px !important;
}

.TopListing-tital h2 {
    font-size: 34px;
}

.TopListing-tital p {
    font-size: 12px;
    width: 55%;
}

.TopListing-tital {
    padding: 55px 25px;
}

.TopListing-boxing {
    padding: 15px;
    bottom: -30px;
}

section.George {
    padding: 25px 0px 25px 0px;
}

.George-search input {
    padding: 12px 39px 12px 12px;
    font-size: 12px;
}

.George-card {
    height: 230px;
    padding: 0px;
}

.George-card p {
    font-size: 20px;
}

.facebook-card button svg {
    width: 15px;
    height: 15px;
}

.facebook-card button {
    top: 55%;
    padding: 8px 8px;
}
.tital-2-box h2 {
    font-size: 20px;
}

.main-id-detail {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    gap: 20px 0px;
}

.detail-box-1 {
    width: 75%;
}

.detail-box-2 {
    width: 75%;
}

.Realtor-card {
    padding: 20px 25px;
    width: 100%;
    min-width: 300px;
    max-width: 300px;
}

.Townhomes-tital h2 {
    font-size: 24px;
}

.Townhomes-card-box {
    flex-direction: row;
    gap: 20px;
    overflow-x: scroll;
}

.Townhomes-card-1 {
  width: 100%;
    min-width: 365px;
    max-width: 365px 
}

img {}
}
@media screen and (max-width: 600px){
  .logo img {
    width: 90%;
}
.George-search svg {
    fill: rgb(41, 56, 87);
    height: 15px !important;
    width: 15px !important;
    cursor: pointer !important;
}
section {
    padding-right: 15px !important;
    padding-left: 15px !important;
}

.zerowidth {
    width: 0%;
    padding-top: 13px;
}

  header.header nav {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 10px 5px 10px;
}
  .TopListing-boxing {
    width: 100%;
    bottom: -114px;
    flex-wrap: wrap;
    gap: 12px 0px;
    border: 2px solid #293857;
}

.TopListing-tital p {
    width: 100%;
}

.Looking-input {
    width: 48%;
}

.Location-input {
    width: 48%;
}

.type-input {
    width: 48%;
}

.Explore-btn {
    width: 48%;
}

section.TopListing {
    padding: 40px 0px 130px 0px;
}

.George-box {
  flex-direction: row;
    gap: 12px;
    padding: 20px 0px;
    overflow-x: scroll;

}

.George-card {
    width: 100%;
    padding:0px;
    max-width: 225px !important;
    min-width: 225px;
}

.detail-box-1 {
    width: 100%;
    gap: 12px;
}

.favourites-card p {
    font-size: 10px;
}

.favourites-card {
    width: 32%;
    gap: 5px;
    padding: 18px 0px;
}

.favourites-card svg {
    width: 15px;
    height: 15px;
}

.id-list-5 p {
    font-size: 12px;
}

p.id-list-2 {
    font-size: 12px;
}

.id-list-1 span p {
    font-size: 18px;
}

.id-list-1 span svg {
    width: 20px;
    height: 20px;
}

.id-list-1 span {
    gap: 5px;
}

.detail-box-2 {
    width: 100%;
}

.main-id-detail {
    gap: 15px 0px;
}

section.Townhomes {
    padding: 25px 0px;
}

.Townhomes-tital h2 {
    font-size: 22px;
}

.Townhomes-card-box {
  gap: 15px;
    padding: 20px 0px;
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
}

.Townhomes-card-1 {
    /* width: 75%; */
    width: 100%;
    min-width: 365px;
    max-width: 365px;
}

button.white {
    padding: 7px 0px;
    font-size: 12px;
}
}
</style>

