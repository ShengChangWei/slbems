<template>
    <div class="operation-container">
        <div class="left-content">
            <div class="left-nav">
                <div :class="{'active': letTab === 0}"
                     @click="changeLeftTab(0)">用水监管</div>
                <div :class="{'active': letTab === 1}"
                     @click="changeLeftTab(1)">用电监管</div>
                <div :class="{'active': letTab === 2}"
                     @click="changeLeftTab(2)">新风系统监管</div>
            </div>
            <div class="left-main">
                <use-water></use-water>
            </div>
        </div>
        <div class="right-content">
            <div class="right-title">
                监测预警列表
            </div>
            <div class="right-tab clearfix">
                <div :class="{'active': curTab === 0}"
                     @click="changeTab(0)">用水预警(110)</div>
                <div :class="{'active': curTab === 1}"
                     @click="changeTab(1)">用电预警(5)</div>
                <div :class="{'active': curTab === 2}"
                     @click="changeTab(2)">全部</div>
            </div>
            <div class="right-list">
                <el-scrollbar style="height: 100%;">
                    <div class="list clearfix">
                        <img src="@/assets/images/pc/sjb.png"
                             alt="">
                        <div class="list-text">
                            <div class="title">xxx水表</div>
                            <div>水表口径：DNSO</div>
                            <div>水表编号：01-001-01</div>
                            <div class="warning">
                                <span class="dot"></span>
                                <span>运行状态异常</span>
                            </div>
                        </div>
                    </div>
                    <div class="list clearfix">
                        <img src="@/assets/images/pc/sjb.png"
                             alt="">
                        <div class="list-text">
                            <div class="title">xxx水表</div>
                            <div>水表口径：DNSO</div>
                            <div>水表编号：01-001-01</div>
                            <div class="warning">
                                <span class="dot"></span>
                                <span>运行状态异常</span>
                            </div>
                        </div>
                    </div>
                </el-scrollbar>
            </div>
        </div>
    </div>
</template>

<script>
import useWater from './components/use-water.vue';
export default {
  name: 'operation-monitorn',
  components: {
    useWater
  },
  data() {
    return {
      curTab: 0,
      letTab: 0
    };
  },
  methods: {
    changeTab(item) {
      this.curTab = item;
    },
    changeLeftTab(item) {
      this.letTab = item;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';
.operation-container {
  position: relative;
  height: 100%;
  width: 100%;
  background-color: rgb(233, 238, 244);
  display: flex;
  padding-top: 10px;

  .left-content {
    flex: 1;
    background-color: rgb(243, 248, 252);
    margin-right: 10px;
    position: relative;
    .left-nav {
      position: absolute;
      left: 0;
      top: 20px;
      z-index: 1;
      > div {
        float: left;
        font-size: 14px;
        background-color: #fff;
        padding: 8px 0;
        text-align: center;
        width: 116px;
        cursor: pointer;
        box-shadow: 5px 4px 8px #ccc;
        margin-left: 20px;
        border-radius: 3px;
        &:hover,
        &.active {
          background-color: $primary;
          color: #fff;
        }
      }
    }
    .left-main {
      position: relative;
      height: 100%;
      width: 100%;
    }
  }
  .right-content {
    padding: 20px;
    width: 340px;
    background-color: #fff;
    // box-shadow: -10px 10px 16px rgb(0, 6, 12);
    .right-title {
      font-weight: 700;
      position: relative;
      padding-left: 20px;
      letter-spacing: 3px;
      &::before {
        position: absolute;
        content: '';
        background-color: $primary;
        width: 6px;
        left: 0;
        height: 18px;
        border-radius: 2px;
      }
    }
    .right-tab {
      margin-top: 20px;
      > div {
        float: left;
        font-size: 14px;
        background-color: rgb(229, 235, 253);
        padding: 8px 0;
        text-align: center;
        width: calc(100% / 3);

        $radius: 7px;
        cursor: pointer;
        &:first-of-type {
          border-top-left-radius: $radius;
          border-bottom-left-radius: $radius;
          border-right: 1px solid #ccc;
        }
        &:last-of-type {
          border-top-right-radius: $radius;
          border-bottom-right-radius: $radius;
          border-left: 1px solid #ccc;
        }
        &:hover,
        &.active {
          background-color: $primary;
          color: #fff;
        }
      }
    }
    .right-list {
      height: calc(100% - 70px);
      .list {
        padding: 20px 0;
        border-bottom: 1px dotted #ccc;
        img {
          float: left;
        }

        .list-text {
          float: left;
          margin-left: 10px;
          > div {
            margin-bottom: 10px;
            font-size: 14px;
            &.title {
              font-weight: 700;
              font-size: 16px;
            }
            &:last-of-type {
              margin-bottom: 0;
              span {
                display: inline-block;
                color: $danger;
                &.dot {
                  width: 12px;
                  height: 12px;
                  border-radius: 50%;
                  background-color: $danger;
                  margin-right: 5px;
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

