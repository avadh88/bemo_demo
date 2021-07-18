<template>
  <div id="app">
    <Column/>
  </div>
</template>

<script>
import Column from './components/Column.vue'

export default {
  name: 'App',
  components: {
    Column
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
