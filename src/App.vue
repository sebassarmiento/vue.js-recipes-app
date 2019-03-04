<template>
  <div id="app">
    <AppMenu />
    <router-view></router-view>
  </div>
</template>

<script>
import AppMenu from './components/AppMenu.vue'
import Feed from './components/Feed.vue'

export default {
  name: 'app',
  components: {
    AppMenu
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
  background-image: linear-gradient(to top, #fddb92 0%, #d1fdff 100%);
  height: 100vh;
  width: 100vw;
  overflow: scroll;
}
</style>
