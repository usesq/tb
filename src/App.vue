<template>
  <div id="app">
    <router-view></router-view>
    <tabbar></tabbar>
  </div>
</template>

<script>
import tabbar from '@/components/tab-bar/tab-bar'

export default {
  name: 'App',
  components: {
    tabbar
  }
}
</script>

<style>
@import '~../public/css/normalize.css';

body{
  /*background: no-repeat linear-gradient(white,rgb(207,200,200));*/
}
</style>
