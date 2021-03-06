import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Photo from '@/views/Photo.vue'
import Page404 from '@/views/404.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'HomeRoute', component: () => import('@/views/Home.vue') },
  {
    path: '/photos/:id',
    name: 'PhotoRoute',
    component: () => import('@/views/Photo.vue'),
  },
  { path: '*', component: () => import('@/views/404.vue') },
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition

    return { x: 0, y: 0 }
  },
})

export default router
