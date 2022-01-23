import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('@/views/Home')
const News = () => import('@/views/News')
const GO_Walk = () => import('@/views/Go_Walk')
const Personal = () => import('@/views/Personal')
const Shopping_Cart = () => import('@/views/Shopping_Cart')
const Recommend = () => import('@/views/Home/Recommend/Recommend')
const Subscribe = () => import('@/views/Home/Subscribe/Subscribe')

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/news',
    component:News
  },
  {
    path:'/go_walk',
    component:GO_Walk
  },
  {
    path:'/personal',
    component:Personal
  },
  {
    path:'/shopping_cart',
    component:Shopping_Cart
  },
  {
    path:'/home/recommend',
    component:Recommend
  },
  {
    path:'/home/subscribe',
    component:Subscribe
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
