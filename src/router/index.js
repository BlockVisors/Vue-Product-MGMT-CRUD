import Vue from 'vue'
import Router from 'vue-router'
import Products from '@/components/Products'
import ProductPage from '@/components/ProductPage'
import Pricing from '@/components/Pricing'
import Contact from '@/components/Contact'
import About from '@/components/About'
import Features from '@/components/Features'

Vue.use(Router)

export default new Router({
  mode: 'history',
  hash: false,
  routes: [
    {
      path: '/',
      name: 'Products',
      component: Products
    },
    {
      path: '/product/:id',
      name: 'ProductPage',
      component: ProductPage
    },
    {
      path: '/pricing',
      name: 'Pricing',
      component: Pricing
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/features',
      name: 'Features',
      component: Features
    }
  ]
})
