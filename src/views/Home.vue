<template>
  <div class="main">
    <img class="w3-animate-bottom" alt="Prestige logo" src="../assets/prestige.png">
    <div class="links">
      <router-link to="/platform" target="_blank">
        <h1 id="platform" class="w3-animate-right">goto: Platform demo</h1>
      </router-link>
      <router-link to="/profile" target="_blank">
        <h1 id="profile" class="w3-animate-left">goto: Profile demo</h1>
      </router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
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
.main {
  background-color: #020202;
}
.links {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: fixed;
  top: 50px;
  right: 0px;
  width: 100%;
}
#platform {
  width: 400px;
  background-color: #FFD700;
}
#profile {
  width: 370px;
  background-color: red;
}
#platform,
#profile {
  align-self: flex-end;
  padding-left: 40px;
  padding-right: 20px;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  transition: width 0.2s ease;
}
#platform:hover,
#profile:hover
{
  transition: width 0.3s ease;
  width: 450px;
}
</style>
