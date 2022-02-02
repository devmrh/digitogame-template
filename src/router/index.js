import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ContactUs from '../views/ContactUs.vue'
import Faq from '../views/Faq.vue'
import Purchase from '../views/PurchaseScreen.vue'
import Terms from '../views/Terms.vue'
import Blogs from '../views/Blogs.vue'
import CatProduct from '../views/CatProduct.vue'
import SingleProduct from '../views/SingleProduct.vue'
import Cart from '../views/Cart.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contact-us',
    name: 'Contact Us',
    component: ContactUs
  },
  {
    path: '/faq',
    name: 'Faq',
    component: Faq
  },
  {
    path: '/purchase',
    name: 'Purchase',
    component: Purchase
  },
  {
    path: '/terms',
    name: 'Terms',
    component: Terms
  },
  {
    path: '/blogs',
    name: 'Blogs',
    component: Blogs
  },
  {
    path: '/cat-product',
    name: 'CatProduct',
    component: CatProduct
  },
  {
    path: '/single-product',
    name: 'SingleProduct',
    component: SingleProduct
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
