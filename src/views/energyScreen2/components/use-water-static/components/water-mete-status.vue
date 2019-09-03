<template>
  <div class="water-mete">
    <div class="screen-title">
      远传水表运行状态
    </div>
    <div class="water-main">
      <el-carousel trigger="click"
                   direction="vertical">
        <el-carousel-item v-for="(item) in statusList"
                          :key="item.addressCode">
          <el-row style="height: 100%;width: 100%;">
            <el-col v-for="(ite) in item"
                    :key="ite.addressCode"
                    :span="12">
              <div class="panpel">
                <div class="status-content">
                  <div class="status-panel">
                    <div class="title">{{ ite.meterName }}</div>
                    <div class="text">
                      <span>运行状态</span>
                      <span>电压</span>
                    </div>
                    <div class="value">
                      <span>
                        <span class="dot"
                              :class="{'active': ite.curStatus !== '在线'}"></span>
                      </span>
                      <span>
                        <span>{{ ite.celVal }}v</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
import uwService from '@/api/use-water-static.js';
export default {
  name: 'water-mete',
  data() {
    return {
      timer: null,
      statusList: []
    };
  },
  mounted() {
    this.getAllWaterStatus();
    this.timer = setInterval(() => {
      this.getAllWaterStatus();
    }, 60 * 60 * 1000);
  },
  destroyed() {
    clearInterval(this.timer);
    this.timer = null;
  },
  methods: {
    getAllWaterStatus() {
      uwService.getAllWaterStatus().then(res => {
        this.statusList = [];
        const data = res.result;
        for (var i = 0; i < data.length; i += 6) {
          this.statusList.push(data.slice(i, i + 6));
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.water-mete {
  position: relative;
  width: 100%;
  height: 100%;
  .water-main {
    height: calc(100% - 41px);
  }
  .status-content {
    height: 100%;
    width: 100%;
    float: left;
    padding: 2px;
    .status-panel {
      text-align: center;
      width: 100%;
      height: 100%;
      padding: 16px 4px;
      // float: left;
      background: url('~@/assets/images/index/wr-ele-panel.png') center
        no-repeat;
      background-size: 100% 100%;
      > div {
        height: calc(100% / 3);
        &.title {
          color: #a9ddee;
          font-size: 12px;
        }
        &.text {
          > span {
            text-align: center;
            display: inline-block;
            width: calc(100% / 2);
            color: #01d4f9;
            font-size: 12px;
          }
        }

        &.value {
          > span {
            display: inline-block;
            text-align: center;
            width: calc(100% / 2);
            height: 100%;
            color: rgba(0, 255, 0, 1);
            font-size: 12px;
            .dot {
              display: inline-block;
              width: 8px;
              height: 8px;
              background: rgba(0, 255, 0, 1);
              border-radius: 50%;
              &.active {
                background: rgb(255, 0, 0);
              }
            }
          }
        }
      }
    }
  }
}
</style>

<style lang="scss">
.el-carousel {
  height: 100%;
  .el-carousel__container {
    height: 100%;
    .el-col {
      height: calc(100% / 3);

      .panpel {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>

