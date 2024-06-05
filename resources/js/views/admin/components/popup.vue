<template>
  <div class="Discount">
    <div class="main-Discount">

      <div class="main-Discount-sv">
      <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
  <path d="M34.4266 37.0876L22.5016 25.1438L10.5766 37.0876L7.91406 34.4251L19.8578 22.5001L7.91406 10.5751L10.5766 7.9126L22.5016 19.8563L34.4266 7.93135L37.0703 10.5751L25.1453 22.5001L37.0703 34.4251L34.4266 37.0876Z" fill="#293857"/>
</svg>
</div>
      <h2>Discount Voucher</h2>
      <div class="main-Discount-in-box">
      <input type="email" placeholder="Enter Email">
      <input type="text" placeholder="Discount Percentage">
    </div>
      <button>
        Generate
      </button>
    </div>
  </div>
</template>


<style scoped>

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
<script>

export default {
    name: 'Sidebar'
}
</script>



