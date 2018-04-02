import Vue from 'vue'
import App from './App.vue'
import router from './router'
import style from './scss/app.scss'
import {firebaseApp} from './firebaseConfig'

Vue.config.productionTip = false

const storage = firebaseApp.storage();
const storageRef = storage.ref();
let imgName = '20dollar.jpg'
let DesktopImgPath = 'desktop-images/' + imgName;
// let MobileImgPath = 'mobile-images/' + imgName;

storageRef.child(DesktopImgPath).getDownloadURL()
.then(function(url) {
    console.log(url);

}).catch(function(error) {
    switch (error.code) {
        case 'storage/object_not_found':
            // File doesn't exist
            break;

        case 'storage/unauthorized':
            // User doesn't have permission to access the object
            break;

        case 'storage/canceled':
            // User canceled the upload
            break;

        case 'storage/unknown':
            // Unknown error occurred, inspect the server response
            break;
    }
});



new Vue({
  router,
  style,
  render: h => h(App)
}).$mount('#app')
