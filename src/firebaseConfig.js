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

// Original rule
// service firebase.storage {
//   match /b/{bucket}/o {
//     match /{allPaths=**} {
//       allow read, write: if request.auth != null;
//     }
//   }
// }
export const firebaseApp = firebase.initializeApp(fb_config)