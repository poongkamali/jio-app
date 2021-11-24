import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const routes = [
    {
        path: '/',
        name: 'dashboard',
        component: () => import('@/components/pages/dashboard'),
    },
    {
        path: '/prepaid',
        name: 'prepaid',
        component: () => import('@/components/pages/prepaid'),
    },
    {
        path: '/postpaid',
        name: 'postpaid',
        component: () => import('@/components/pages/postpaid'),
    },
    {
        path: '/apps',
        name: 'apps',
        component: () => import('@/components/pages/app'),
    },
    {
        path: '/recharge',
        name: 'recharge',
        component: () => import('@/components/pages/recharge'),
    },
    {
        path: '/customer',
        name: 'customer',
        component: () => import('@/components/pages/customer'),
    },
    {
        path: '/signin',
        name: 'signin',
        component: () => import('@/components/pages/signin'),
    },
]
export default new Router({
    mode: 'history',
    routes: routes,
});