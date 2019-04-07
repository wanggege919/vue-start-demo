<template>
  <div>
      我是outter组件中拿到的全局状态--{{getNum}} <br>
      <button @click='oadd'>outter组件改变状态按钮</button>
      <button @click='oaddaction'>outter组件改变状态按钮(action)</button>
  </div>
</template>

<script>

export default {
  name: "son",
  computed:{
      getNum(){
          return this.$store.state.num
      }
  },
  methods:{
      oadd(){
          this.$store.commit('increase')
      },
      oaddaction(){
          this.$store.dispatch('decreaseAction')
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>