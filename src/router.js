import Vue from 'vue'
import Router from 'vue-router'
import Parent from './views/Parent.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'parent',
      component: Parent
    },
    {
      path: '/m-hub',
      name: 'm-hub',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/MutationHub.vue')
    }
  ]
})
