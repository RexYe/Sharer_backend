import Vue from 'vue'
import Router from 'vue-router'

const Index = resolve => require(['@/pages/Index/Index.vue'], resolve)
const todo = resolve => require(['@/pages/todo/todo.vue'], resolve)
const TestVuex = resolve => require(['@/pages/TestVuex/TestVuex.vue'], resolve)
const Publish = resolve => require(['@/pages/Publish/Publish.vue'], resolve)
const Me = resolve => require(['@/pages/Me/Me.vue'], resolve)
const BookDetail = resolve => require(['@/pages/BookDetail/BookDetail.vue'], resolve)
const OrderDetail = resolve => require(['@/pages/OrderDetail/OrderDetail.vue'], resolve)
const AboutUs = resolve => require(['@/pages/AboutUs/AboutUs.vue'], resolve)
const Register = resolve => require(['@/pages/Register/Register.vue'], resolve)
const Login = resolve => require(['@/pages/Login/Login.vue'], resolve)
const avatarUpload = resolve => require(['@/pages/avatarUpload/avatarUpload.vue'], resolve)
Vue.use(Router)

 const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      meta:{ requireAuth: true} //进入这个路由是需要登录
    },
    {
    	path:'/todo',
    	component:todo
    },
    {
      path:'/vuex',
      component:TestVuex
    },
    {
      path:'/publish',
      component:Publish,
      meta:{ requireAuth: true}
    },
    {
      path:'/me',
      component:Me,
      meta:{ requireAuth: true}
    },
    {
      path:'/bookdetail',
      component:BookDetail,
      meta:{ requireAuth: true}
    },
    {
      path:'/orderdetail',
      component:OrderDetail,
      meta:{ requireAuth: true}
    },
    {
      path:'/aboutus',
      component:AboutUs
    },
    {
      path:'/register',
      component:Register
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/avatarupload',
      component:avatarUpload,
      meta:{ requireAuth: true}
    }
  ]
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(r => r.meta.requireAuth )) {
        if (window.sessionStorage.tel) {
            next();
        }
        else {
            next({
                path: '/login',
                query: {redirect: to.fullPath}
            })
        }
    }
    else {
        next();
    }
})

export default router
