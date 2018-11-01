<template>
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
</template>

<script>
export default {
  name: 'review',
  methods: {
    addReview(platform) {
      return true;
    },
    close(platform) {
      return false;
    },
    populate(platform, text) {
      return true;
    }
  }
}
</script>
