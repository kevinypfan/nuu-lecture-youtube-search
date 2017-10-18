import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Profile from '../components/Profile.vue'
import Search from '../components/Search.vue'
import Signup from '../components/Signup.vue'



Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: Home },
    { path: '/search/:term', component: Search },
    { path: '/about', component: About },
    { path: '/profile', component: Profile, meta: { requiresAuth: true } },
    { path: '/signup', component: Signup },
    { path: '/*', redirect: '/' }
  ],
  mode: 'history'
})
