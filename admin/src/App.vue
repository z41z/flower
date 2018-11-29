<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
::-webkit-scrollbar{
  width: 0px;
  height: 0px;
}
html,
body,
#app {
  height: 100%;
  width: 100%;
  overflow: hidden;
  margin: 0;
  color: #333;
  background: #eee;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif,"Microsoft Yahei";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 0;
}

</style>
