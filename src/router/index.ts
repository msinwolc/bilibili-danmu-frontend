// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../components/HomePage.vue'
import RankDetail from '../components/RankDetail.vue'
import OtherTest from '../components/OtherTest.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/rank',
    name: 'Rank',
    component: RankDetail
  },
  {
    path: '/other',
    name: 'Other',
    component: OtherTest
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
