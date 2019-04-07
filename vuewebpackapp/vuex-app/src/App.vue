<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <hr>
    <outter />
  </div>
</template>

<script>
import outter from './components/outter'
export default {
  name: 'App',
  components:{
    outter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
