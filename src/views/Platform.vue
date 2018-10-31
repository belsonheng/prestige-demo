<template>
  <div class="platform">
    <div class="carousell">
      <h2>Carousell</h2>
      <ul class="w3-ul w3-large">
        <li class="w3-bar">
          <span onclick="this.parentElement.style.display='none'" class="w3-bar-item w3-button w3-xlarge w3-right">...</span>
          <img src="../assets/avatar/img_avatar1.png" class="w3-bar-item w3-circle" style="width:85px">
          <div class="w3-bar-item">
            <span class="w3-large">Great seller to deal with.</span><br>
            <span class="w3-small">cookiemonster</span>
          </div>
        </li>
        <li class="w3-bar">
          <span onclick="this.parentElement.style.display='none'" class="w3-bar-item w3-button w3-xlarge w3-right">...</span>
          <img src="../assets/avatar/img_avatar4.png" class="w3-bar-item w3-circle" style="width:85px">
          <div class="w3-bar-item">
            <span class="w3-large">Pleasant transaction!</span><br>
            <span class="w3-small">bigbird</span>
          </div>
        </li>
        <li class="w3-bar">
          <span onclick="this.parentElement.style.display='none'" class="w3-bar-item w3-button w3-xlarge w3-right">...</span>
          <img src="../assets/avatar/img_avatar5.png" class="w3-bar-item w3-circle" style="width:85px">
          <div class="w3-bar-item">
            <span class="w3-large">Very friendly. Thank you :)</span><br>
            <span class="w3-small">elmo</span>
          </div>
        </li>
      </ul>
      <button class="w3-button w3-round-large">Write a new review</button>
    </div>
    <div class="grab">
      <h2>Grab</h2>
    </div>
    <div class="shopee">
      <h2>Shopee</h2>
    </div>
  </div>
</template>

<style scoped>
.platform {
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 100%;
}
.platform > div {
  position: relative;
  flex: 1;
  flex-direction: column;
  background-color: #f0f0f0;
  border: 1px solid black;
}
.platform > div > h2 {
  padding: 7px;
  color: #ffffff;
  text-align: center;
  margin: 0 !important;
}
.platform > div > button {
  position: absolute;
  left: 20%;
  bottom: 7px;
  width: 250px;
  color: #ffffff;
}
.carousell h2,
.carousell button {
  background-color: #d2232a;
}
.grab h2,
.grab button {
  background-color: green;
}
.shopee h2,
.shopee button {
  background-color: #ff5722;
}
</style>
