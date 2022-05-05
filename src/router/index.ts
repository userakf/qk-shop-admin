import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import AppLayout from '@/layout/AppLayout.vue'
import ProductRoutes from './modules/product'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: AppLayout,
        meta: {
            title: '首页'
        },
        children: [
            {
                path: '',
                name: 'home',
                component: () => import('@/views/home/index.vue')
            },
            ProductRoutes
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/login/index.vue')
    }
]
const router = createRouter({
    history: createWebHashHistory(), // 路由模式
    routes // 路由规则
})
// 全局前置守卫
router.beforeEach(() => {
    nprogress.start() // 开始加载进度条
    // return false // 取消导航
})
// 全局后置守卫
router.afterEach(() => {
    nprogress.done() // 结束进度条
})
export default router