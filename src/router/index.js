import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: {
      title: '首页'
    }
  },
  {
    path: '/timeline',
    name: "Timeline",
    component: () => import('../views/Timeline.vue'),
    meta: {
      title: "时间轴"
    }
  },
  {
    path: '/website',
    name: "Website",
    component: () => import('../views/website.vue'),
    meta: {
      title: "常用网站"
    }
  },
  {
    path: '/classification',
    name: "classification",
    component: () => import('../views/classification.vue'),
    meta: {
      title: "分类"
    }
  },
  {
    path: '/version',
    name: "version",
    component: () => import('../views/version.vue'),
    meta: {
      title: "版本更新记录"
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      title: '关于我'
    }
  }, {
    path: '/classificationDetail',
    name: 'classificationDetail',
    component: () => import('../views/classificationDetail.vue'),
    meta: {
      title: "分类详情"
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

export default router