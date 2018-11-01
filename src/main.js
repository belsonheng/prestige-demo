import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueFire from 'vuefire';
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.use(VueFire);
export const db = firebase.initializeApp({
  databaseURL: 'https://is5003-platform.firebaseio.com/'
}).database();

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
