<template>
  <div>
    <div class="tagline">
      <span class="w3-animate-top">Your <u>prestige</u>, Our <i>business</i>.</span>
    </div>
    <div class="container">
      <aside class="sidebar">
        <img class="avatar w3-animate-zoom" alt="Display picture" src="../assets/avatar/avatar7.png" width="200px">
        <div class="accounts w3-animate-bottom">
          <span class="w3-tag w3-padding-small w3-round w3-center carousell-color" @click="option='Carousell'">
            Carousell
          </span>
          <span class="w3-tag w3-padding-small w3-round w3-center grab-color" @click="option='Grab'">
            Grab
          </span>
          <span class="w3-tag w3-padding-small w3-round w3-center shopee-color" @click="option='Shopee'">
            Shopee
          </span>
        </div>
      </aside>
      <main>
        <div>
          <h1>{{ option }} Review(s):</h1>
          <select class="w3-select" name="option" v-model="option">
            <option value="All" selected>View All</option>
            <option value="Carousell">Carousell</option>
            <option value="Grab">Grab</option>
            <option value="Shopee">Shopee</option>
          </select>
        </div>
        <div class="reviews">
          <div class="w3-card-4 w3-animate-opacity review w3-bar" v-for="review in prestigeReviews">
            <img :src="require(`@/assets/avatar/${review['avatar']}`)" class="w3-bar-item w3-circle">
            <div class="w3-bar-item w3-padding-small">
              <span class="w3-large">{{ review['review'] }}</span><br>
              <span class="w3-small">{{ review['author'] }} at {{ (new Date(review['timestamp'])).toLocaleString() }}</span><br/>
              <span class="w3-tag w3-padding-small w3-round w3-center" v-bind:class="getPlatformColor(review['platform'])">
                {{ review['platform'] }}
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import { db } from "../firebase";

export default {
  name: "profile",
  data() {
    return {
      option: "All"
    };
  },
  computed: {
    prestigeReviews: function() {
      return this.option == "Carousell"
        ? this.getCarousellReviews()
        : this.option == "Grab"
          ? this.getGrabReviews()
          : this.option == "Shopee"
            ? this.getShopeeReviews()
            : this.getAllReviews();
    }
  },
  firebase() {
    return {
      reviews: db.ref("reviews")
    };
  },
  methods: {
    filter() {
      this.$forceUpdate();
    },
    getAllReviews() {
      var reviews = this.reviews.filter(function(review) {
        return (
          review.platform == "grab" ||
          review.platform == "carousell" ||
          review.platform == "shopee"
        );
      });
      return reviews.sort(function(a, b) {
        return b.timestamp - a.timestamp;
      });
    },
    getCarousellReviews() {
      var reviews = this.reviews.filter(function(review) {
        return review.platform == "carousell";
      });
      return reviews.sort(function(a, b) {
        return b.timestamp - a.timestamp;
      });
    },
    getGrabReviews() {
      var reviews = this.reviews.filter(function(review) {
        return review.platform == "grab";
      });
      return reviews.sort(function(a, b) {
        return b.timestamp - a.timestamp;
      });
    },
    getShopeeReviews() {
      var reviews = this.reviews.filter(function(review) {
        return review.platform == "shopee";
      });
      return reviews.sort(function(a, b) {
        return b.timestamp - a.timestamp;
      });
    },
    getPlatformColor(platform) {
      return [`${platform}-color`];
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  margin: 10px auto;
  padding: 1em;
  width: 70%;
  height: 100%;
}
.sidebar {
  display: flex;
  flex-direction: column;
  width: 23%;
}
.accounts {
  margin-top: 10px;
}
.accounts span {
  margin-top: 5px;
  margin-right: 5px;
  width: 94px;
  cursor: pointer;
}
.reviews {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
}
.review {
  margin: 1em;
  padding: 1em;
}
.review .w3-tag {
  font-size: 10px;
  cursor: default;
}
.carousell-color {
  background-color: #d2232a;
}
.grab-color {
  background-color: green;
}
.shopee-color {
  background-color: #ff5722;
}
.w3-select {
  height: 3em;
}
.tagline {
  width: 100%;
  height: 50%;
  text-align: center;
  font-size: 80px;
}
@media screen and (max-device-width: 480px) {
  .tagline {
    font-size: 2em !important;
  }
}
main {
  flex-grow: 1;
}
main > div {
  display: flex;
  align-items: flex-end;
}
main > div > h1 {
  flex-grow: 1;
}
main > div > select {
  width: 150px;
}
select {
  outline: none;
}
aside {
  text-align: center;
}
aside img {
  margin: 0 auto;
}
img.w3-circle {
  width: 85px;
}
</style>
