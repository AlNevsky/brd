// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import BootstrapVue from 'bootstrap-vue'
import BuyModalComponent from '@/components/Shared/BuyModal'
import store from './store'
import * as fb from 'firebase'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vuetify/dist/vuetify.min.css'
import './stylus/main.styl'
// import colors from 'vuetify/es5/util/colors'

Vue.use(BootstrapVue)
Vue.use(Vuetify)

Vue.component('app-buy-modal', BuyModalComponent)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    fb.initializeApp({
      apiKey: 'AIzaSyCAOAOMLaB5aq_7qkkGi1YpAAFBcDDjV4g',
      authDomain: 'c-shop88.firebaseapp.com',
      databaseURL: 'https://c-shop88.firebaseio.com',
      projectId: 'c-shop88',
      storageBucket: 'c-shop88.appspot.com',
      messagingSenderId: '215625804796'
    })

    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })
    this.$store.dispatch('fetchAds')
  }
})
