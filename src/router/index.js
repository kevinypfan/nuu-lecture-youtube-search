import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Profile from '../components/Profile.vue'
import Search from '../components/Search.vue'



Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: Home },
    { path: '/search/:term', component: Search },
    { path: '/about', component: About },
    { path: '/profile', component: Profile },
    { path: '/*', redirect: '/' }
  ],
  mode: 'history'
})
