import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'Home',
      component: () => import('../components/Home')
    },
    {
      path: '/market',
      name: 'Market',
      component: () => import('../components/Market')
    }
  ]
})
