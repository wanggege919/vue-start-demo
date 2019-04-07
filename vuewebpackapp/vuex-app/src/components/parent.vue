<template>
  <div>
    <span>我是父组件</span> <br>
    <span>我有{{total}}个老婆</span>
    <button @click='padd'>父组件改变状态按钮</button>
    <button @click='paddaction'>父组件改变状态按钮(action)</button>
    <hr>
    <son :msg = 'tosonMsg' @change='handleTotal'></son> 
  </div>
</template>

<script>
import son from './son'
export default {
  name: 'parent',
  components:{
      son
  },
  data:()=>{
      return {
          tosonMsg:'你是我爸爸',
          total: 2
      }
  },
  methods:{
      handleTotal(value){
          this.total = value
      },
      padd(){
          this.$store.commit('increase')
      },
      paddaction(){
          this.$store.dispatch('decreaseAction')
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
