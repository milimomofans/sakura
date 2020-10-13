import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

const home = () => import('../views/Home/Home.vue');

const routes = [
    {
        name:'helloMio',
        path:'/hello-Mio',
        component:home
    } 
]

const router = new VueRouter({
    mode:'history',
    base:'',
    routes: [
        {
            path:'/',
            redirect:'/hello-Mio',
            name:'首页'
        },
        ...routes
    ]
})
export default router