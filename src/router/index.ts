import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import AppLayout from '@/layout/AppLayout.vue'
import ProductRoutes from './modules/product'
const routes:RouteRecordRaw[] = [
    {
        path:'/',
        component:AppLayout,
        children:[
            {
                path:'',
                name:'home',
                component:() => import('@/views/home/index.vue')
            },
            ProductRoutes
        ]
    },
    {
        path:'/login',
        name:'login',
        component:() => import('../views/login/index.vue')
    }
]
const router = createRouter({
    history:createWebHashHistory(), // 路由模式
    routes // 路由规则
})

export default router