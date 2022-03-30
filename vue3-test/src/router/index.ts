import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    meta:{
      title:'首页'
    },
    component: ()=> import('../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    meta:{
      title:'介绍页'
    },
    component: () => import('../views/About.vue')
  },
  {
    path: '/user',
    name: '用户管理',
    meta:{
      title:'用户管理'
    },
    component: () => import('../views/userInfo/user.vue'),
    children:[
      {
        path: '/user',
        name: '用户信息',
        meta:{
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

export default router
