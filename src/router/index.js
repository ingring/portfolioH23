import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProcessView from '../views/ProcessView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '/',
      component: HomeView
    },
    {
      path: '/:project',
      name: 'process',
      component: ProcessView,
      props: true 
    }
  ]
})

export default router
