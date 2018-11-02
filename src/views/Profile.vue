<template>
  <div class="container">
    <aside class="sidebar">
      <img class="avatar w3-animate-top" alt="Display picture" src="../assets/avatar/avatar7.png" width="200px">
      <div class="accounts">
        <p class="title">Linked Accounts:</p>
        <span class="w3-tag w3-padding-small w3-round w3-center carousell-color">
          Carousell
        </span>
        <span class="w3-tag w3-padding-small w3-round w3-center grab-color">
          Grab
        </span>
        <span class="w3-tag w3-padding-small w3-round w3-center shopee-color">
          Shopee
        </span>
      </div>
    </aside>
    <main>
      <input type="text">
    </main>
  </div>
</template>

<script>
export default {
  name: 'profile'
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  padding: 1em;
  border: 1px solid black;
  width: 70%;
  height: 100%;
}
.sidebar {
  display: flex;
  flex-direction: column;
  width: 23%
}
.accounts {
  margin-top: 10px;
}
.title {
  padding: 5px;
}
.accounts span {
  margin-top: 5px;
  margin-right: 5px;
  width: 94px;
  cursor: pointer;
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
main {
  background-color: blue;

}
</style>
