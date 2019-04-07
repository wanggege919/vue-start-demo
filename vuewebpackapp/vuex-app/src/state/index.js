import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

//创建状态仓库
export default new Vuex.Store({
    state:{
      num:88
    },
    mutations:{
      //定义我们的状态改变函数
      increase(state){
        state.num++
      },
      decrease(state){
        state.num=state.num-20
      },
    },
    actions:{
      //context是上下文对象
      decreaseAction(context){
        //actions只能对mutations中的方法进行操作
        //setTimeout(function(){
          context.commit('decrease')
        //},1000)
        
      }
    },
    getters:{
      getCount(state){
        return state.num>0?state.num:0
      }
    }
  })