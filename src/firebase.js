import firebase from 'firebase/app'
import 'firebase/database'

firebase.initializeApp({
  databaseURL: 'https://prestige-reviews.firebaseio.com' //'https://is5003-platform.firebaseio.com/'
});

export const db = firebase.database();
