<template>
  <div class="ammeter-status">
    <div class="screen-title title">电表状态监视</div>
    <div class="content">
      <div class="ammeter-status-content">
        <div v-for="(item , index) in ammeterList" :key="index" class="ammeter-panel">
          <div class="text-center title">电表一</div>
          <div class="text-center status">
            <span>运行及通讯状态</span>&nbsp;&nbsp;
            <span></span>
          </div>
          <div class="three">
            <div class="left floatLeft ">
              <div>电压</div>
              <div class="value">20kw</div>
            </div>
            <div class="right floatLeft ">
              <div>电镀</div>
              <div class="value">380w</div>
            </div>
          </div>
          <div class="three">
            <div class="left floatLeft">
              <div>电度</div>
              <div class="value">20kw</div>
            </div>
            <div class="right floatLeft ">
              <div>预警状态</div>
              <div class="value dot"></div>
            </div>
          </div>
        </div>

      </div>
      <div class="ammeter-status-content">
        <div v-for="(item , index) in ammeterList" :key="index" class="ammeter-panel">
          <div class="text-center title">电表一</div>
          <div class="text-center status">
            <span>运行及通讯状态</span>&nbsp;&nbsp;
            <span></span>
          </div>
          <div class="three">
            <div class="left floatLeft ">
              <div>电压</div>
              <div class="value">20kw</div>
            </div>
            <div class="right floatLeft ">
              <div>电镀</div>
              <div class="value">380w</div>
            </div>
          </div>
          <div class="three">
            <div class="left floatLeft">
              <div>电度</div>
              <div class="value">20kw</div>
            </div>
            <div class="right floatLeft ">
              <div>预警状态</div>
              <div class="value dot"></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ammeter-status',
  data() {
    return {
      ammeterList: [{}, {}, {}]
    }
  }
}
</script>

<style lang="scss" scoped>
.ammeter-status {
  height: 100%;
  width: 100%;
  .title {
    margin-left: 15px;
  }
  .content {
    height: calc(100% - 41px);
    width: 100%;
    padding-bottom: 10px;
    .ammeter-status-content {
      height: calc(100% / 2);
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding: 5px;
      // flex-wrap: wrap;
      .ammeter-panel {
        width: calc(100% / 4);
        height: 100%;
        background: url("~@/assets/images/index/am-panel.png") center no-repeat;
        background-size: 100% 100%;
        font-size: 12px;
        padding: 5px 0;
        > div {
          height: calc(100% / 4);
          color: #a9ddee;
          &.title {
            font-size: 17px;
            color: #a9ddee;
          }
          &.status {
            > span {
              display: inline-block;
              &:last-of-type {
                width: 5px;
                height: 5px;
                background: rgba(0, 255, 0, 1);
                border-radius: 50%;
              }
            }
          }
          &.three {
            padding-left: 8px;
            > div {
              width: calc(100% / 2);
              .value {
                color: rgba(0, 255, 0, 1);
                padding: 3px 0;
                &.dot {
                  margin-top: 6px;
                  width: 5px;
                  height: 5px;
                  background: rgba(0, 255, 0, 1);
                  border-radius: 50%;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
