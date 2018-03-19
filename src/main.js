import {firebaseApp} from './firebaseConfig'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import style from './scss/app.scss'

Vue.config.productionTip = false

const storageRef = firebaseApp.storage().ref();
// storageRef.child("").put(data).then(function(snapshot) {
//     console.log();
// });
new Vue({
  router,
  style,
  render: h => h(App)
}).$mount('#app')
