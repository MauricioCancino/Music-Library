import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from "@/views/AboutView"
import KpopView from "@/views/KpopView"
import AnimeView from '@/views/AnimeView'
import SoloistView from '@/views/SoloistView'
import ErrorView from '@/views/ErrorView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    
  },
  {
    path: '/kpop',
    name: 'Kpop',
    component: KpopView
  },
  {
    path: '/anime',
    name: 'Anime',
    component: AnimeView
  },
  {
    path: '/soloist',
    name: 'Soloist',
    component: SoloistView
  },
  {
    path: '*',
    name: 'error',
    component: ErrorView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
