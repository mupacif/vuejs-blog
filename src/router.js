import Vue from 'vue'
import Router from 'vue-router'
import NotFound from './views/NotFound.vue'
import Carousel from './views/Carousel.vue'
import Welcome from './views/Welcome.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/vuejs-blog',
  routes: [
    {
      path: '/',
      redirect: { name: 'blog-home' }
    },
    {
      path: '/blog',
      name: 'blog-home',
      component: Welcome
    },
    {
      path: '/blog/:uid',
      name: 'carousel',
      component: Carousel
    },
    {
      path: '/not-found',
      name: 'not-found',
      component: NotFound
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
