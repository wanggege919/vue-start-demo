import router from 'vue-router'
import Vue from 'vue'
import HelloWorld from '../components/HelloWorld'
import HelloEarth from '../components/HelloEarth'
Vue.use(router)
//配置路由
export default new router({
    routes: [{
        name: 'HelloWorld',
      path: '/helloworld',//指定要跳转的路径
      component: HelloWorld//指定要跳转的组件
    },{
        name: 'HelloEarth',
        path:'/helloearth',
        component:HelloEarth
    }]
  })