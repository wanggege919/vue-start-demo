<template>
  <div>
    <span>我是子组件</span>
    -------{{msg}}
    <br>
    ---我是全局属性 {{getNum}}
    <button @click="toparentMsg">点击我向父组件传递数据</button>
    <button @click="sadd">子组件改变状态按钮</button>
    <button @click="saddaction">子组件改变状态按钮(action)</button>
  </div>
</template>

<script>
//import parent from "./parent"; 不用引入，因为这边没有用到parent
export default {
  name: "son",
  props: {
    msg: {
      type: String,
      default: ""
    }
  },
  data: () => {
    return {
      wife: 2
    };
  },
  methods: {
    toparentMsg() {
      this.wife += 1;
      this.$emit("change", this.wife);
    },
    sadd() {
      this.$store.commit("increase");
    },
    saddaction() {
      this.$store.dispatch("decreaseAction");
    }
  },
  computed: {
    getNum() {
      //return this.$store.state.num;
      return this.$store.getters.getCount
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>