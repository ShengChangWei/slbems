<template>
  <div class="use-water-analysis">
    <div class="use-year-als">
      <div class="left">
        <div class="screen-title">近半年用水量分析</div>
        <e-vue-echartsjs style="width: 100%; height: calc(100% - 41px);" :options="options" @ready="onEChartsReady($event)"></e-vue-echartsjs>
      </div>
      <div class="right">
        <div class="top-panel">
          <div>
            <span class="text">漏损率：</span>
            <span class="value">3%</span>
            <span class="text two">漏损率状态：</span>
            <span class="value">正常</span>
          </div>
        </div>
        <div class="today-waring">
          <div class="screen-title ert">今日预警统计</div>
          <div class="waring-content">
            <div class="waring-content-son">
              <div v-for="(item, index) in waringList" :key="index" class="waring-text">
                <span class="dot"></span>
                <span class="text">{{ item.label }}</span>
                <span class="time">{{ item.time }}</span>
              </div>
              <div v-for="(item, index) in waringList" :key="index + 10" class="waring-text">
                <span class="dot"></span>
                <span class="text">{{ item.label }}</span>
                <span class="time">{{ item.time }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="water-meter-status">
      <div class="screen-title">水表运行状态</div>
      <el-carousel height="100%" :interval="6000">
        <el-carousel-item v-for="(list, index) in newStatusList" :key="index">
          <div class="status-content">
            <div v-for="(list, x) in list" :key="x" class="status-panel">
              <div class="title">表一{{ list }}</div>
              <div class="text">
                <span>运行</span>
                <span>流量</span>
                <span>漏损</span>
              </div>
              <div class="value">
                <span>
                  <span class="dot"></span>
                </span>
                <span>20m³/s</span>
                <span>
                  <span class="dot"></span>
                </span>
              </div>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
import Bus from '@/global/bus.js';
export default {
  name: 'use-water-analysis',
  data() {
    return {
      echartsIntance: '',
      waringList: [
        {
          label: '测试内容',
          time: '06-12'
        },
        {
          label: '绝对是发送到发放',
          time: '06-12'
        },
        {
          label: '的分级黄菲菲',
          time: '06-12'
        },
        {
          label: '个百分点报辅导班',
          time: '06-12'
        },
        {
          label: '分完分为的',
          time: '06-12'
        },
        {
          label: '葛根粉为人父',
          time: '06-12'
        },
        {
          label: '测试结尾',
          time: '06-12'
        }
      ],
      statusList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      newStatusList: [],
      options: {
        legend: {
          top: '0',
          right: '2%',
          textStyle: {
            color: '#2BFAFF'
          },
          data: ['用水量（吨）']
        },
        tooltip: {
          trigger: 'axis'
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisLabel: {
            color: '#65C6E7'
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          }
        },
        grid: {
          top: '20%',
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            color: '#65C6E7'
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: ['#65C6E7'],
              width: 1,
              type: 'solid'
            }
          }
        },
        series: [
          {
            name: '用水量（吨）',
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            symbolSize: 6,
            itemStyle: {
              normal: {
                color: '#2BFAFF',
                lineStyle: {
                  color: '#00FEFF'
                }
              }
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: '#00FEFF'
                  },
                  {
                    offset: 1,
                    color: '#4390FA'
                  }
                ])
              }
            }
          }
        ]
      }
    };
  },
  mounted() {
    Bus.$on('windowOnresize', () => {
      this.echartsIntance.resize();
    });
    this.newStatusList = [];
    for (var i = 0; i < this.statusList.length; i += 5) {
      this.newStatusList.push(this.statusList.slice(i, i + 5));
    }

    // if (this.echartsIntance) {
    //   window.onresize = () => {
    //     this.echartsIntance.resize();
    //      console.log(1222);
    //     //myChart1.resize();    //若有多个图表变动，可多写
    //   };
    // }
  },
  methods: {
    onEChartsReady(evt) {
      this.echartsIntance = evt.echartsIntance;
      //   console.log(this.echartsIntance.graphic);
    }
  }
};
</script>

<style lang="scss" scoped>
.use-water-analysis {
  height: 100%;
  width: 100%;
  .use-year-als {
    width: 100%;
    height: 60%;
    border: 1px solid #05a4b6;
    .left {
      width: 60%;
      height: 100%;
      float: left;
    }
    .right {
      width: 40%;
      height: 100%;
      float: left;
      padding: 10px 10px 10px 0;
      .top-panel {
        height: 20%;
        width: 100%;
        background: url("~@/assets/images/index/zs-panel.png") center no-repeat;
        background-size: 100% 100%;
        // text-align: center;
        position: relative;
        > div {
          width: 80%;
          //   height: 50%;
          position: absolute;
          top: 50%;
          left: 50%;
          text-align: center;
          transform: translate(-50%, -50%);
        }
        .text {
          display: inline-block;
          color: #a9ddee;
          font-size: 13px;
          &.two {
            margin-left: 10px;
          }
        }
        .value {
          display: inline-block;
          color: #d6ff1f;
          font-size: 16px;
          margin-left: 10px;
        }
      }
      .today-waring {
        height: 80%;
        width: 100%;
        .ert {
          padding-left: 0;
        }
        .waring-content {
          height: calc(100% - 34px);
          overflow: hidden;
          &:hover {
            .waring-text {
              animation-play-state: paused;
            }
          }
          .waring-content-son {
            width: 100%;
            height: 100% * 2;
          }
          .waring-text {
            height: calc(100% / 14);
            animation: suibian 5s infinite linear;
          }
          /*定义动画集*/
          @keyframes suibian {
            from {
            }
            to {
              transform: translate(0, -168px);
            }
          }
          .dot {
            display: inline-block;
            width: 11px;
            height: 11px;
            background-color: #ff7e00;
            margin-right: 12px;
          }
          .text {
            color: #ff7e00;
            font-size: 13px;
          }

          .time {
            float: right;
            color: #cecfcf;
            font-size: 13px;
          }
        }
      }
    }
  }
  .water-meter-status {
    width: 100%;
    height: 40%;
    .status-content {
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: space-around;
      .status-panel {
        text-align: center;
        width: calc(100% / 6);
        height: 100%;
        padding: 16px 4px;
        // float: left;
        background: url("~@/assets/images/index/wr-ele-panel.png") center
          no-repeat;
        background-size: 100% 100%;
        > div {
          height: calc(100% / 3);
          &.title {
            color: #a9ddee;
            font-size: 13px;
          }
          &.text {
            > span {
              text-align: center;
              display: inline-block;
              width: calc(100% / 3);
              color: #01d4f9;
              font-size: 13px;
            }
          }

          &.value {
            > span {
              display: inline-block;
              text-align: center;
              width: calc(100% / 3);
              height: 100%;
              color: rgba(0, 255, 0, 1);
              font-size: 12px;
              .dot {
                display: inline-block;
                width: 6px;
                height: 6px;
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
</style>

<style lang="scss">
.el-carousel {
  &.el-carousel--horizontal {
    width: 100%;
    height: calc(100% - 41px);
  }
  .el-carousel__indicators--horizontal {
    visibility: hidden;
  }
  .el-carousel__arrow {
    background-color: rgba(0, 0, 0, 0.7);
  }
}
</style>

