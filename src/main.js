import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'

Vue.use(VueAxios, axios)

router.beforeEach((to, from, next) => {
  var token = window.localStorage.getItem("token");
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!token) {
      next('/signup')
    } else {
      next()
    }
  } else {
    next() // 确保一定要调用 next()
  }
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
