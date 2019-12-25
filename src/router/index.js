import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Projects from '../views/Projects.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/documentary',
    name: 'documentary',
    component: Projects,
  },
  {
    path: '/commercial',
    name: 'commercial',
    component: Projects,
  },
  {
    path: '/music',
    name: 'music',
    component: Projects,
  },
  {
    path: '/art',
    name: 'art',
    component: Projects,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
