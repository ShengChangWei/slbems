<template>
  <div class="e-panel">
    <div class="panel-title">
      {{ title }}
    </div>
    <div class="slot-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'left-panel',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.e-panel {
  height: 100%;
  width: 100%;
  background: url("~@/assets/images/monitoring/panel.png") center no-repeat;
  background-size: 100% 100%;
  position: relative;
  .panel-title {
    position: absolute;
    font-size: 18px;
    font-family: Adobe Heiti Std R;
    font-weight: 700px;
    left: 30px;
    top: 14px;
    color: rgba(0, 255, 255, 1);
    &::before {
      display: inline-block;
      content: "";
      font-size: 18px;
      margin-right: 10px;
      width: 4px;
      height: 16px;
      vertical-align: middle;
      background: rgba(0, 255, 255, 1);
    }
  }
  .slot-content {
    position: absolute;
    top: 34px;
    height: calc(100% - 34px);
    color: #fff;
    width: 100%;
    position: relative;
  }
}
</style>
