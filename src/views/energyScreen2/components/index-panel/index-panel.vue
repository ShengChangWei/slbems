<template>
  <div class="index-panel">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'index-panel'
}
</script>
<style lang="scss" scoped>
.index-panel {
  height: 100%;
  width: 100%;
  background: url("~@/assets/images/index/panel.png") center no-repeat;
  background-size: 100% 100%;
  position: relative;
}
</style>
