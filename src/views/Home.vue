<template>
  <main>
    <img class="logo w3-animate-top" alt="Prestige logo" src="../assets/logo-black.png">
    <div class="links">
      <router-link to="/platform" target="_blank">
        <h1 id="platform" class="w3-animate-right">Sample Partners</h1>
      </router-link>
      <router-link to="/profile" target="_blank">
        <h1 id="profile" class="w3-animate-left">My Profile</h1>
      </router-link>
      <a href="https://platformproject.herokuapp.com/api-docs/" target="_blank">
        <h1 id="api" class="w3-animate-right">API Specifications</h1>
      </a>
    </div>
    <div class="tagline">
      <span class="w3-animate-bottom">Your <u>prestige</u>, Our <i>business</i>.</span>
    </div>
  </main>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.links a {
  color: #000000;
  text-decoration: none;
  align-self: flex-end;
}
.links {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: fixed;
  top: 70px;
  right: 0px;
  width: 100%;
}
.logo {
  width: 270px;
  height: 45px;
}
.tagline {
  position: absolute;
  top: 50%;
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
#platform {
  width: 350px;
  background-color: #ffd700;
}
#profile {
  width: 320px;
  background-color: red;
}
#api {
  width: 380px;
  background-color: #007fff;
}
#platform,
#profile,
#api {
  align-self: flex-end;
  padding-left: 40px;
  padding-right: 20px;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  transition: width 0.2s ease;
}
#platform:hover,
#profile:hover,
#api:hover {
  transition: width 0.3s ease;
  width: 420px;
}
</style>
