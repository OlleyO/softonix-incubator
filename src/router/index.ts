import { createRouter, createWebHistory } from 'vue-router'

import AboutUs from '@/views/AboutUs.vue'
import Blog from '@/views/Blog.vue'
import Destinations from '@/views/Destinations.vue'
import Home from '@/views/Home.vue'
import Tours from '@/views/Tours.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [{
    path: '/',
    component: Home
  }, {
    path: '/about-us',
    component: AboutUs
  }, {
    path: '/blog',
    component: Blog
  },
  {
    path: '/destinations',
    component: Destinations
  },
  {
    path: '/tours',
    component: Tours
  }]
})

export default router
