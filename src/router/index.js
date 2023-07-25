import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/login.vue')
  },
  {
    path: '/add',
    name: 'add',
    component: () => import(/* webpackChunkName: "about" */ '../views/add.vue')
  },
  {
    path: '/bj',
    name: 'bj',
    component: () => import(/* webpackChunkName: "about" */ '../views/bj.vue')
  },
  {
    path: '/xq',
    name: 'xq',
    component: () => import(/* webpackChunkName: "about" */ '../views/xq.vue')
  },
  {
    path: '/index',
    name: 'index',
    component: () => import(/* webpackChunkName: "about" */ '../views/index.vue'),
    children: [
      {
        path: '/users',
        name: 'users',
        component: () => import(/* webpackChunkName: "about" */ '../views/users.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})
// 全局导航守卫
router.beforeEach((to, from, next) => {
  if (sessionStorage.getItem("access_token")) {
    next()
  } else {
    if (to.path == "/login") {
      next()
    } else {
      next('/login')
    }
  }
})

export default router
