import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Products from '../views/Products.vue';
import Treatments from '../views/Treatments.vue';
import Contacts from '../views/Contacts.vue';

const router = createRouter({
  history: createWebHashHistory(), // Cambiado a createWebHashHistory
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'), // Lazy loading
    },
    {
      path: '/products',
      name: 'products',
      component: Products,
    },
    {
      path: '/treatments',
      name: 'treatments',
      component: Treatments,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contacts,
    },
  ],
});

export default router;
