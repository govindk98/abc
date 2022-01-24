import Vue from 'vue'
import Router from 'vue-router'

import Homepage from '@/components/Homepage'
import categorycigrateep1 from '@/components/categorycigrateep1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/categorycigrateep1',
      name: 'categorycigrateep1',
      component: categorycigrateep1
    }
  ]
})
