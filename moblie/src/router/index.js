import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: () => import('../views/index/index.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/about/about.vue'),
    meta: {
      title: '关于'
    }
  },
  {
    path: '/modular',
    name: 'Modular',
    component: () => import('../views/modular/modular.vue')
  },
  {
    path: '/you',
    name: 'You',
    component: () => import('../views/you/index.vue'),
    meta: {
      title: '我想说'
    }
  },
  {
    path: '*',
    name: '404',
    component: () => import('../views/404.vue'),
    meta: {
      title: '你在抓梦脚'
    }
  }
]

const router = new VueRouter({
  // mode: 'history',
  // scrollBehavior: () => ({
  //   y: 0
  // }),
  routes
})

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
export default router