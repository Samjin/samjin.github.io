import firebase from "firebase";

// Cloud Storage for Firebase stores your data in Google Cloud Storage
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


// export default {
//   methods:{
//     fileBtn:function(file, e){
//         e.preventDefault();
//       const uploader = document.getElementById('uploader');
//       //get file
//       let getFile = e.target.files[0];
//       //set storage ref
//       let storageRef = firebase.storage().ref('test/'+getFile.name);
//       //upload file
//       let task = storageRef.put(getFile);
//       task.on('state_changed',
//        function progress(snapshot){
//         let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) *100;
//         uploader.value = percentage;
//       },
//       function error(err){
//         console.log(err);
//       },
//       function complete(){
//          console.log('complete upload');
//       }
//       );
//     }
//   }
// }