import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import About from '@/views/About.vue'
import store from '@/store'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    // redirect: '/login',
    meta: {
      // keepAlive: false,
      hidden: true,
      title: '登录'
    },
    component: ()=> import('../views/login/index.vue')
  },
  {
    path: '/',
    name: 'Home',
    meta:{
      hidden: true,
      title:'首页'
    },
    component: ()=> import('../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    meta:{
      hidden: true,
      title:'介绍页'
    },
    component: About
  },
  {
    path: '/user',
    name: '用户管理',
    meta:{
      hidden: true,
      title:'用户管理'
    },
    component: () => import('../views/userInfo/user.vue'),
    children:[
      {
        path: '/user',
        name: '用户信息',
        meta:{
          hidden: true,
          title:'用户信息'
        },
        component: () => import('../views/userInfo/user.vue'),
      }
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 守卫模式
router.beforeEach(function (to, from, next) {
  console.log("store:", store)
  const userName = store.getters.getUserName
  // 判断当前url是否要求验证
  if (to.matched.some(v => v.meta.requiresAuth)) {
    // 判断用户是否登陆，以及是否记录用户信息
    if (userName === '') {
      // 跳转到登录界面
      next('/login')
    } else {
      // 保留在当前url
      next()
    }
  } else {
    next()
  }
})

export default router
