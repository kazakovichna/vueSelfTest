<template>
  <div id="app">
    <div class="main">
      <v-main-wrap/>
    </div>
  </div>
</template>

<script>
import VMainWrap from "./components/v-main-wrap"

export default {
  name: 'App',
    components: {
        VMainWrap
    },
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
