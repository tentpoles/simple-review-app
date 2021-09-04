import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
      path: '/',
      name: 'review.index',
      component: () => import("../views/Index.vue")
  },
  {
      path: '/edit/:id',
      name: 'review.edit',
      component: () => import("../views/Edit.vue")
  },
  {
      path :'/:pathMatch(.*)*',
      name: 'review.not',
      component: () => import("../views/NotFound.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
