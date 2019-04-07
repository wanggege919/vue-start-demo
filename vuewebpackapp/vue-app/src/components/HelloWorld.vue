<template>
  <div class="hello">
    <h1>HELLO WORD</h1>
    <h2>Essential Links</h2>
    <h3>{{$route.params.worldmsg}}</h3>
    <hr>
  </div>
</template>

<script>
export default {
 // name: 'HelloWorld',//名字写不写都行，只要路由里面有名字就行
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
h1{
  color: blue
}
</style>
