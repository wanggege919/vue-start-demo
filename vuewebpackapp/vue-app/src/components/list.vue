<template>
  <ul>
      <router-link :to="{name: 'HelloEarth',params:{earthmsg: '你好世界'}}">HELLO EARTH</router-link>
      <router-link :to="{name: 'HelloWorld',params:{worldmsg: '你好地球'}}">HELLO WORD</router-link>
  </ul>
 </template>

<script>
export default {
  name: 'list',
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>

</style>
