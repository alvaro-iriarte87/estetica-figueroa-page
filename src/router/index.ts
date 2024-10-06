import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Products from '../views/Products.vue'
import Treatments from '../views/Treatments.vue'
import Contacts from '../views/Contacts.vue'


const router = createRouter({
  history: createWebHistory('#'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/products',
      name: 'products',
      component: Products
    },
    {
      path: '/treatments',
      name: 'treatments',
      component: Treatments
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contacts
    },
  ]
})

export default router
