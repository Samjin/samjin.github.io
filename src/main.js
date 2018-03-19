import Vue from 'vue'
import App from './App.vue'
import router from './router'
import style from './scss/app.scss'
import {firebaseApp} from './firebaseConfig'

Vue.config.productionTip = false

const storageRef = firebaseApp.storage().ref();
storageRef.child('desktop-images/20dollar.jpg').getDownloadURL().then(function(url) {
    console.log(url);
}).catch(function(error) {
    console.warn(error);
});


new Vue({
  router,
  style,
  render: h => h(App)
}).$mount('#app')
