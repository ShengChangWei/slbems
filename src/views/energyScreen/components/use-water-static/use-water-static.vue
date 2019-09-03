<template>
  <div class="use-water-static">
    <div class="use-title">
      用水数据统计
    </div>
    <div class="main">
      <div class="left-main floatLeft">
        <div class="left-main-top">
          <div class="content">
            <today-warning></today-warning>
          </div>
        </div>
        <div class="left-main-bottom">
          <div class="content">
            <today-use></today-use>
          </div>
        </div>
      </div>
      <div class="right-main floatLeft">
        <div class="right-main-top">
          <div class="content">
            <total-water></total-water>
          </div>
        </div>
        <div class="right-main-bottom">
          <div class="content">
            <water-mete-status></water-mete-status>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import todayWarning from './components/today-warning';
import totalWater from './components/total-water';
import waterMeteStatus from './components/water-mete-status';
import todayUse from './components/today-use';
export default {
  name: 'use-water-static',
  components: {
    todayWarning,
    totalWater,
    waterMeteStatus,
    todayUse
  }
};
</script>

<style lang="scss" scoped>
.use-water-static {
  position: relative;
  width: 100%;
  height: 100%;
  .use-title {
    font-size: 18px;
    color: #26bcf8;
    padding: 10px 20px;
  }
  .main {
    height: calc(100% - 42px);
    > div {
      width: 50%;
      height: 100%;
      &.left-main {
        .left-main-top {
          height: 30%;
          padding: 0 5px 5px 16px;
          .content {
            border: 1px solid #05a4b6;
            height: 100%;
          }
        }
        .left-main-bottom {
          height: 70%;
          padding: 5px 5px 15px 16px;
          .content {
            border: 1px solid #05a4b6;
            height: 100%;
          }
        }
      }
      &.right-main {
        .right-main-top {
          height: 50%;
          padding: 0px 16px 5px 5px;
          .content {
            height: 100%;
            border: 1px solid #05a4b6;
          }
        }
        .right-main-bottom {
          height: 50%;
          padding: 5px 16px 15px 5px;
          .content {
            height: 100%;
            border: 1px solid #05a4b6;
          }
        }
      }
    }
  }
}
</style>

