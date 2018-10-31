<template>
  <div class="platform">
    <div class="carousell w3-animate-top">
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
      <button class="w3-button w3-round-large w3-hover-red" @click="open('carousell')">Write a new review</button>
      <div class="w3-modal">
        <div class="w3-modal-content w3-animate-left">
          <header class="w3-container">
            <h5>Write a new review</h5>
            <span class="close" @click="close('carousell')">&times;</span>
          </header>
          <div class="w3-container">
            <span class="w3-button w3-tag w3-padding-small w3-round-xxlarge w3-white w3-border w3-center" @click="populate('carousell', 'Pleasant transaction! ')">
              Pleasant transaction!
            </span>
            <span class="w3-button w3-tag w3-padding-small w3-round-xxlarge w3-white w3-border w3-center" @click="populate('carousell', 'Great deal. ')">
              Great deal.
            </span>
            <span class="w3-button w3-tag w3-padding-small w3-round-xxlarge w3-white w3-border w3-center" @click="populate('carousell', 'Awesome! ')">
              Awesome!
            </span>
            <textarea></textarea>
          </div>
          <footer class="w3-container">
            <button class="w3-button w3-round-large w3-hover-red" @click="open('carousell')">Submit</button>
          </footer>
        </div>
      </div>
    </div>
    <div class="grab w3-animate-opacity">
      <h2>Grab</h2>
      <ul class="w3-ul w3-large">
        <li class="w3-bar">
          <span onclick="this.parentElement.style.display='none'" class="w3-bar-item w3-button w3-xlarge w3-right">...</span>
          <img src="../assets/avatar/img_avatar2.png" class="w3-bar-item w3-circle" style="width:85px">
          <div class="w3-bar-item">
            <span class="w3-large">I love this super fast driver.</span><br>
            <span class="w3-small">haha5005</span>
          </div>
        </li>
        <li class="w3-bar">
          <span onclick="this.parentElement.style.display='none'" class="w3-bar-item w3-button w3-xlarge w3-right">...</span>
          <img src="../assets/avatar/img_avatar1.png" class="w3-bar-item w3-circle" style="width:85px">
          <div class="w3-bar-item">
            <span class="w3-large">Thank you!</span><br>
            <span class="w3-small">nothingtosay</span>
          </div>
        </li>
      </ul>
      <button class="w3-button w3-round-large w3-hover-green" @click="open('grab')">Write a new review</button>
      <div class="w3-modal">
        <div class="w3-modal-content w3-animate-zoom">
          <header class="w3-container">
            <h5>Write a new review</h5>
            <span class="close" @click="close('grab')">&times;</span>
          </header>
          <div class="w3-container">
            <span class="w3-button w3-tag w3-padding-small w3-round-xxlarge w3-white w3-border w3-center" @click="populate('grab', 'Pleasant transaction! ')">
              Pleasant transaction!
            </span>
            <span class="w3-button w3-tag w3-padding-small w3-round-xxlarge w3-white w3-border w3-center" @click="populate('grab', 'Great deal. ')">
              Great deal.
            </span>
            <span class="w3-button w3-tag w3-padding-small w3-round-xxlarge w3-white w3-border w3-center" @click="populate('grab', 'Awesome! ')">
              Awesome!
            </span>
            <textarea></textarea>
          </div>
          <footer class="w3-container">
            <button class="w3-button w3-round-large w3-hover-green" @click="open('grab')">Submit</button>
          </footer>
        </div>
      </div>
    </div>
    <div class="shopee w3-animate-bottom">
      <h2>Shopee</h2>
      <ul class="w3-ul w3-large">
        <li class="w3-bar">
          <span onclick="this.parentElement.style.display='none'" class="w3-bar-item w3-button w3-xlarge w3-right">...</span>
          <img src="../assets/avatar/img_avatar3.png" class="w3-bar-item w3-circle" style="width:85px">
          <div class="w3-bar-item">
            <span class="w3-large">Great seller to deal with.</span><br>
            <span class="w3-small">cookiemonster</span>
          </div>
        </li>
        <li class="w3-bar">
          <span onclick="this.parentElement.style.display='none'" class="w3-bar-item w3-button w3-xlarge w3-right">...</span>
          <img src="../assets/avatar/img_avatar4.png" class="w3-bar-item w3-circle" style="width:85px">
          <div class="w3-bar-item">
            <span class="w3-large">Very friendly. Thank you :)</span><br>
            <span class="w3-small">elmo</span>
          </div>
        </li>
      </ul>
      <button class="w3-button w3-round-large w3-hover-orange" @click="open('shopee')">Write a new review</button>
      <div class="w3-modal">
        <div class="w3-modal-content w3-animate-right">
          <header class="w3-container">
            <h5>Write a new review</h5>
            <span class="close" @click="close('shopee')">&times;</span>
          </header>
          <div class="w3-container">
            <span class="w3-button w3-tag w3-padding-small w3-round-xxlarge w3-white w3-border w3-center" @click="populate('shopee', 'Pleasant transaction! ')">
              Pleasant transaction!
            </span>
            <span class="w3-button w3-tag w3-padding-small w3-round-xxlarge w3-white w3-border w3-center" @click="populate('shopee', 'Great deal. ')">
              Great deal.
            </span>
            <span class="w3-button w3-tag w3-padding-small w3-round-xxlarge w3-white w3-border w3-center" @click="populate('shopee', 'Awesome! ')">
              Awesome!
            </span>
            <textarea></textarea>
          </div>
          <footer class="w3-container">
            <button class="w3-button w3-round-large w3-hover-orange" @click="open('shopee')">Submit</button>
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'platform',
  methods: {
    open(platform) {
      document.querySelector(`.${platform} .w3-modal`).style.display = 'block';
      document.querySelector(`.${platform} .w3-modal textarea`).focus();
    },
    close(platform) {
      document.querySelector(`.${platform} .w3-modal`).style.display = 'none';
      document.querySelector(`.${platform} .w3-modal textarea`).value = '';
    },
    populate(platform, text) {
      document.querySelector(`.${platform} .w3-modal textarea`).value += text;
      document.querySelector(`.${platform} .w3-modal textarea`).focus();
    },
  },
  mounted() {
    window.onclick = function(event) {
      if (event.target.classList.contains('w3-modal')) {
          event.target.style.display = 'none';
          event.target.querySelector('textarea').value = '';
      }
    }
  }
};
</script>

<style scoped>
button {
  border: none;
  outline: none;
}
textarea {
  margin-top: 1em;
  padding: 0.5em;
  outline: none;
  resize: none;
  width: 350px;
  height: 100px;
}
.platform {
  display: flex;
  flex-wrap: wrap;
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
  text-align: center;
  margin: 0 !important;
}
.platform > div > button {
  position: absolute;
  left: 20%;
  bottom: 7px;
  width: 250px;
}
.platform > div > h2,
.platform > div button,
.platform > div header {
  color: #ffffff;
}
.carousell,
.grab,
.shopee {
  min-width: 420px;
}
.carousell h2,
.carousell button,
.carousell header {
  background-color: #d2232a;
}
.grab h2,
.grab button,
.grab header {
  background-color: green;
}
.shopee h2,
.shopee button,
.shopee header {
  background-color: #ff5722;
}
.w3-modal-content {
  width: 30%;
  height: 265px;
}
.w3-tag {
  margin-top: 1em;
  margin-right: 5px;
}
.close {
  position: absolute;
  color: #ffffff;
  top: 8px;
  right: 15px;
  font-size: 1.5em;
}
.close:hover,
.close:focus {
  color: #aaa;
  text-decoration: none;
  cursor: pointer;
}
</style>
