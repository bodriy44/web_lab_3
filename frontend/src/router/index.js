import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Authorization from "@/components/Authorization";
import Header from '@/components/Header'
import Content from '@/components/ContentPage'

Vue.component('app-about', Authorization)
Vue.component('app-authorization', Authorization)
Vue.component('app-content', Content)
Vue.component('app-header', Header)
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      default: Home
    },
    meta: {
      requiredAuth: true
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    components: {
      header: Header
    }
  },
  {
    path: '/authorization',
    name: 'Authorization',
    components: {
      default: Authorization
    },
  },
  {
    path: '/content',
    name: 'Content',
    components: {
      default: Content
    }
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
