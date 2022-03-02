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
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import AmazingSales from '../views/AmazingSales.vue'
import SearchResult from '../views/SearchResult.vue'
import NotFound from '../views/NotFound.vue'
import UserPanel from '../views/UserPanel.vue'
import SingleBlog from '../views/SingleBlog.vue'
import TokenShow from '../views/TokenShow.vue'


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
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/token-show',
    name: 'TokenShow',
    component: TokenShow

  },
  {
    path: '/amazing-sales',
    name: 'AmazingSales',
    component: AmazingSales
  },
  {
    path: '/user-panel',
    name: 'UserPanel',
    component: UserPanel
  },
  {
    path: '/search-result',
    name: 'SearchResult',
    props: true,
    component: SearchResult
  },
  {
    path: '/single-blog',
    name: 'SingleBlog',
    props: true,
    component: SingleBlog
  },

  {
    path: '/404', name: 'NotFound', component: NotFound
  },
  {
    path: '/:catchAll(.*)', redirect: '404'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
