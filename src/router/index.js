// 配置路由
// 下载 引入 注册 配置路由规则 生成路由对象 (router) 导出router
import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout'
import Home from '@/views/Home'
import Search from '@/views/Search'

Vue.use(VueRouter)
const routes = [
  // 配置路由规则
  {
    path: '/',
    redirect: '/layout/home',
  },
  {
    path: '/layout',
    component: Layout,
    children: [
      {
        path: '/layout/home',
        meta: {
          title: '首页',
        },
        component: Home,
      },
      {
        path: '/layout/search',
        meta: {
          title: '搜索',
        },
        component: Search,
      },
    ],
  },
]
const router = new VueRouter({
  routes,
})
export default router
