import firebase from "firebase";

// Initialize Firebase
const fb_config = {
  apiKey: "AIzaSyCX_MbaWgTAz3XHsvZccldXvhAGi_RnVpE",
  authDomain: "portfolio-shan.firebaseapp.com",
  databaseURL: "https://portfolio-shan.firebaseio.com",
  projectId: "portfolio-shan",
  storageBucket: "portfolio-shan.appspot.com",
  messagingSenderId: "266683601941"
};

export const firebaseApp = firebase.initializeApp(fb_config)