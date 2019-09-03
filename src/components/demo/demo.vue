<template>
  <div class="demo">
    <div class="demo-content">
      <p style="font-weight:700">测试大屏分辨率</p>
      <div style="font-size: 12px;">
        测试大屏分辨率字体12px
      </div>
      <div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'demo'
};
</script>

<style lang="scss" scoped>
.demo {
  width: 100%;
  height: 100%;
  position: relative;
  .demo-content {
    width: 2400px;
    height: 880px;
    background: orange;
    transform: scale(0.8, 1.22727);
    top: 100px;
    position: absolute;
    left: -240px;

    > div {
      //   width: calc(100px * 0.8);
      //   height: calc(100px * 1.2);
      margin: 100px auto;
      height: 100px;
      width: 100px;
      background-color: red;
    }
  }
}
</style>

