<template>
  <div class="hello">
    <h2>我是axios-app,用来发送请求，拦截响应</h2>
    <button @click='getData'>发送请求</button>
    <ul>
      <li v-for='item in items'>
        {{item.title}}
      </li>
    </ul>
  </div>
</template>

<script>

Vue.prototype.$http = axios
import axios from 'axios'
import Vue from 'vue'
import qs from 'qs'
export default {
  name: 'HelloWorld',
  data () {
    return {
      items:[]
    }
  },
  methods:{
    getData(){
      this.$http.get('https://cnodejs.org/api/v1/topics',
      {params:{
        page:1,
        limit:10
      }})
      .then((res)=>{
        this.items=res.data.data
        console.log(res.data.data)
      })
      .catch((err)=>{
        console.log(err)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
