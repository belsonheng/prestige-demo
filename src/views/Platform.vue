<template>
  <div class="platform">
    <div class="carousell">
      Carousell
    </div>
    <div class="grab">
      Grab
    </div>
    <div class="shoppee">
      Shoppee
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
  flex: 1;
  flex-direction: column;
}
.carousell {
  background-color: red;
}
.grab {
  background-color: green;
}
.shoppee {
  background-color: orange;
}
</style>
