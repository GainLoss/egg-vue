<template>
  <div id="app">
      <BQmain/>
  </div>
</template>

<script>
import './assets/css/common.css'
import BQmain from './components/main.vue'
export default {
  name: 'app',
  components: {
    BQmain,
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

}
</style>
