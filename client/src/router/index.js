import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/database',
    name: 'Database',
    component: () => import('../views/Database.vue')
  },
  {
    path: '/create',
    name: 'Create',
    component: () => import('../views/Create.vue')
  },
  {
    path: '/games',
    name: 'Games',
    component: () => import('../views/games/index.vue')
  },
  {
    path: '/games',
    name: 'Games',
    component: () => import('../views/games/index.vue')
  },
  {
    path: '/games/add',
    name: 'AddGame',
    component: () => import('../views/games/add.vue')
  },
  {
    path: '/games/:slug',
    name: 'Game',
    component: () => import('../views/games/slug.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
