<template>
  <div id="app">
    <AppMenu />
    <Feed />
  </div>
</template>

<script>
import AppMenu from './components/AppMenu.vue'
import Feed from './components/Feed.vue'

export default {
  name: 'app',
  components: {
    AppMenu,
    Feed
  }
}
</script>

<style>
*{
  margin: 0px;
  box-sizing: border-box;
}

body{
  margin: 0px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: gray;
  height: 100vh;
  width: 100vw;
}
</style>
