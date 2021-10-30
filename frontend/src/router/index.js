import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Authorization from "@/components/Authorization";
import Header from '@/components/Header'
import Content from '@/components/ContentPage'
import Product from '@/components/Product'
import MainPage from '@/components/MainPage'
import About from '@/components/About'

Vue.component('app-about', Authorization)
Vue.component('app-authorization', Authorization)
Vue.component('app-content', Content)
Vue.component('app-product', Product)
Vue.component('app-header', Header)
Vue.component('app-mainpage', MainPage)
Vue.component('app-about', About)
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
    components: {
      default: About
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
    path: '/content/:id',
    name: 'Content',
    components: {
      default: Content
    }
  },
  {
    path: '/product',
    name: 'Product',
    components: {
      default: Product
    }
  },
  {
    path: '/mainpage',
    name: 'MainPage',
    components: {
      default: MainPage
    }
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
