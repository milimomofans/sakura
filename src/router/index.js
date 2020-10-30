import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)


const routes = [
    {
        name:'helloMio',
        path:'/hello-Mio',
        component:() => import('../views/Home/Home.vue')
    },
    {
        name:'article',
        path:'/Article',
        component:()=>import('../views/Article/Article')
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