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
  },
  {
    path: '/games/edit/:slug',
    name: 'Edit Game',
    component: () => import('../views/games/edit.vue')
  },
  {
    path: '/tools/:slug',
    name: 'Tool',
    component: () => import('../views/tools/slug.vue')
  },
  {
    path: '/tools/edit/:slug',
    name: 'EditTool',
    component: () => import('../views/tools/edit.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
