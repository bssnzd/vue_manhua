import Vue from 'vue'
import Router from 'vue-router'
import global from "@/core/global"
// console.log(global.getParam())
Vue.use(Router)

 const routers=new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: resolve => require(['@/components/home'], resolve),
      // 重定向 如果是/ 显示info页
      redirect: "index",
      children:[
        {
          path:"index",
          name: 'index',
          meta:{
            keepAlive:true
          },
          //keepAlive true 禁止重复加载  false不禁止
          component: resolve => require(['@/components/main/index'], resolve)
        },
        {
          path:"rank",
          name: 'rank',
          component: resolve => require(['@/components/main/rank'], resolve),
        },
        {
          path:"category",
          name: 'category',
          component: resolve => require(['@/components/main/category'], resolve)
        },
        {
          path:"search",
          name: 'search',
          component: resolve => require(['@/components/main/search'], resolve)
        },
        {
          path:"catelist",
          name: 'catelist',
          component: resolve => require(['@/components/main/catelist'], resolve)
        },
      ]
    }
  ]
})

export default routers
