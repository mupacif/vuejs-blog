import Vue from 'vue'
import Router from 'vue-router'
import NotFound from './views/NotFound.vue'
import Carousel from './views/Carousel.vue'
import Welcome from './views/Welcome.vue'
import Information from './views/Information.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: { name: 'blog-home' }
    },
    {
      path: '/information',
      redirect: { name: 'information' }
    },
    {
      path: '/vuejs-blog',
      name: 'blog-home',
      component: Welcome
    },
    {
      path: '/vuejs-blog/:uid',
      name: 'carousel',
      component: Carousel
    },
    {
      path: '/vuejs-blog/not-found',
      name: 'not-found',
      component: NotFound
    },
    {
      path: '/vuejs-blog/information',
      name: 'information',
      component: Information
    },
    {
      path: '*',
      redirect: { name: 'not-found' }
    }
  ],
  scrollBehavior () {
    return { x: 0, y: 50 }
  }  
})
