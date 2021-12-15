<template>
  <div id="app">

 <BlogHome />

  </div>
</template>

<script>
import BlogHome from './views/BlogHome.vue'
export default {
  name: 'App',
  components: {
    BlogHome
  }
}
</script>

<style>
@import "./assets/css/resetr.css";
@import "./assets/css/common.css";
</style>