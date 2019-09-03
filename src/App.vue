<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import 'vue-transition.css';
export default {
  name: 'app'
};
</script>

<style>
#app {
  overflow: hidden;
}
</style>
