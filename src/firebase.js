import firebase from 'firebase/app'
import 'firebase/database'

firebase.initializeApp({
  databaseURL: 'https://prestige-reviews.firebaseio.com'
});

export const db = firebase.database();
