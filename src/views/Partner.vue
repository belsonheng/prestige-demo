<template>
  <span>
    <div id="prompt" class="w3-modal">
      <div class="w3-modal-content w3-animate-top">
        <header class="w3-container w3-blue">
          <h1>What's your name?</h1>
        </header>
        <div class="w3-container">
          <input class="w3-input w3-border" type="text">
        </div>
        <footer class="w3-container">
          <button class="w3-button w3-round-large w3-blue w3-hover-blue" @click="setName">Submit</button>
        </footer>
      </div>
    </div>
    <div class="platform">
      <div class="carousell w3-animate-top">
        <h2>Carousell</h2>
        <ul class="w3-ul w3-large">
          <li class="w3-bar" v-for="review in getCarousellReviews()">
            <img :src="require(`@/assets/avatar/${review['avatar']}`)" class="w3-bar-item w3-circle">
            <div class="w3-bar-item w3-padding-small">
              <span class="w3-large">{{ review['review'] }}</span><br>
              <span class="w3-small">{{ review['author'] }}</span>
            </div>
            <span onclick="this.parentElement.style.display='none'" class="w3-bar-item w3-button w3-xlarge w3-right">...</span>
          </li>
        </ul>
        <div class="button">
          <button class="w3-button w3-round-large w3-hover-red" @click="open('carousell')">Write a new review</button>
        </div>
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
              <button class="w3-button w3-round-large w3-hover-red" @click="addReview('carousell')">Submit</button>
            </footer>
          </div>
        </div>
      </div>
      <div class="grab w3-animate-opacity">
        <h2>Grab</h2>
        <ul class="w3-ul w3-large">
          <li class="w3-bar" v-for="review in getGrabReviews()">
            <img :src="require(`@/assets/avatar/${review['avatar']}`)" class="w3-bar-item w3-circle">
            <div class="w3-bar-item w3-padding-small">
              <span class="w3-large">{{ review['review'] }}</span><br>
              <span class="w3-small">{{ review['author'] }}</span>
            </div>
            <span onclick="this.parentElement.style.display='none'" class="w3-bar-item w3-button w3-xlarge w3-right">...</span>
          </li>
        </ul>
        <div class="button">
          <button class="w3-button w3-round-large w3-hover-green" @click="open('grab')">Write a new review</button>
        </div>
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
              <button class="w3-button w3-round-large w3-hover-green"  @click="addReview('grab')">Submit</button>
            </footer>
          </div>
        </div>
      </div>
      <div class="shopee w3-animate-bottom">
        <h2>Shopee</h2>
        <ul class="w3-ul w3-large">
          <li class="w3-bar" v-for="review in getShopeeReviews()">
            <img :src="require(`@/assets/avatar/${review['avatar']}`)" class="w3-bar-item w3-circle">
            <div class="w3-bar-item w3-padding-small">
              <span class="w3-large">{{ review['review'] }}</span><br>
              <span class="w3-small">{{ review['author'] }}</span>
            </div>
            <span onclick="this.parentElement.style.display='none'" class="w3-bar-item w3-button w3-xlarge w3-right">...</span>
          </li>
        </ul>
        <div class="button">
          <button class="w3-button w3-round-large w3-hover-orange" @click="open('shopee')">Write a new review</button>
        </div>
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
              <button class="w3-button w3-round-large w3-hover-orange" @click="addReview('shopee')">Submit</button>
            </footer>
          </div>
        </div>
      </div>
    </div>
  </span>
</template>

<script>
import { db } from '../firebase';

var reviewsRef = db.ref('reviews');

export default {
  name: 'platform',
  data() {
    return {
      username: null,
      reviews: []
    }
  },
  firebase: {
    reviews: reviewsRef
  },
  methods: {
    setName() {
      this.username = document.querySelector("span > .w3-modal input").value.trim() || "anonymous";
      document.querySelector("span > .w3-modal").style.display = "none";
    },
    open(platform) {
      document.querySelector(`.${platform} .w3-modal`).style.display = "block";
      document.querySelector(`.${platform} .w3-modal textarea`).focus();
    },
    close(platform) {
      document.querySelector(`.${platform} .w3-modal`).style.display = "none";
      document.querySelector(`.${platform} .w3-modal textarea`).value = "";
    },
    populate(platform, text) {
      document.querySelector(`.${platform} .w3-modal textarea`).value += text;
      document.querySelector(`.${platform} .w3-modal textarea`).focus();
    },
    addReview(platform) {
      var review = document.querySelector(`.${platform} .w3-modal textarea`).value.trim();
      var author = this.username;
      reviewsRef.push({
        'review': review,
        'author': author,
        'avatar': `img_avatar${Math.floor(Math.random() * 5) + 1}.png`,
        'platform': platform,
        'timestamp': + new Date()
      });
      this.close(platform);
    },
    getCarousellReviews() {
      return this.reviews.filter(function (review) {
        console.log(review)
        return review.platform == 'carousell'
      });
    },
    getGrabReviews() {
      return this.reviews.filter(function (review) {
        return review.platform == 'grab'
      });
    },
    getShopeeReviews() {
      return this.reviews.filter(function (review) {
        return review.platform == 'shopee'
      });
    },
  },
  mounted() {
    setTimeout(function() {
      document.querySelector("span > .w3-modal").style.display = "block";
      document.querySelector("span > .w3-modal input").focus()
    }, 1000)
    window.onclick = function(event) {
      if (event.target.classList.contains("w3-modal") && event.target.id !== 'prompt') {
          event.target.style.display = "none";
          event.target.querySelector("textarea").value = "";
      }
    };
  }
};
</script>

<style scoped>
li {
  display: block;
}
li > div:nth-child(2) {
  width: 70%;

}
button {
  border: none;
  outline: none;
}
textarea {
  margin-top: 1em;
  padding: 0.5em;
  outline: none;
  resize: none;
  width: 100%;
  height: 145px;
  border: 1px solid #000000;
}
.platform {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  height: 100%;
}
span > .w3-modal > .w3-modal-content {
  width: 30%;
  height: 45%;
}
span > .w3-modal header {
  text-align: center;
}
span > .w3-modal input,
span > .w3-modal button {
  margin-top: 1.2em;
}
span > .w3-modal button:hover {
  opacity: 0.8;
}
.platform > div {
  position: relative;
  flex: 1;
  flex-direction: column;
  background-color: #f0f0f0;
  border: 1px solid #000000;
}
.platform > div > h2 {
  padding: 7px;
  text-align: center;
  margin: 0 !important;
}
.button {
  position: absolute;
  bottom: 7px;
  width: 100%;
  text-align: center;
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
  min-height: 500px;
}
.carousell ul,
.grab ul,
.shopee ul {
  overflow: auto;
  max-width: 99%;
  max-height: 81%;
}
img.w3-circle {
  width: 85px;
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
.carousell .w3-modal-content,
.grab .w3-modal-content,
.shopee .w3-modal-content {
  width: 30%;
  height: 65%;
  min-width: 325px;
  min-height: 355px;
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
