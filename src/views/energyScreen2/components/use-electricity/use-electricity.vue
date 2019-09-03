<template>
  <div class="use-electricity">
    <div>
      <div class="title">用电数据统计</div>
      <div class="echarts">
        <div class="detail">
          <div class="text-center">6月用电总量</div>
          <div class="img">
            <div class="img-src"></div>
            <div class="value">
              <div>30</div>
              <div>kw·h</div>
            </div>
          </div>
          <div class="text-center">同比
            <span class="ert-color">9.1%
              <i class="fa fa-arrow-up"></i>
            </span>
          </div>
        </div>
        <div class="detail">
          <div class="text-center">本年用电总量</div>
          <div class="img">
            <div class="img-src"></div>
            <div class="value">
              <div>268</div>
              <div>kw·h</div>
            </div>
          </div>
          <div class="text-center">同比
            <span class="ert-color">9.1%
              <i class="fa fa-arrow-up"></i>
            </span>
          </div>
        </div>
        <div class="detail">
          <div class="text-center">漏损率</div>
          <div class="img">
            <e-vue-echartsjs style="width: 100%; height: 100%;" :options="pieOptions" @ready="onPieEChartsReady($event)"></e-vue-echartsjs>
          </div>
          <div class="text-center">漏损状态：
            <span class="ert-color">正常</span>
          </div>
        </div>
        <div class="detail">
          <div class="text-center">今日预警统计</div>
          <div class="waring">
            <div class="waring-list">
              <span>水利部大厦二楼电表</span>
              <span>19:00</span>
            </div>
            <div class="waring-list">
              <span>水利部大厦二楼电表</span>
              <span>19:00</span>
            </div>
            <div class="waring-list">
              <span>水利部大厦二楼电表</span>
              <span>19:00</span>
            </div>
            <div class="waring-list">
              <span>水利部大厦二楼电表</span>
              <span>19:00</span>
            </div>
            <div class="waring-list">
              <span>水利部大厦二楼电表</span>
              <span>19:00</span>
            </div>
            <div class="waring-list">
              <span>水利部大厦二楼电表</span>
              <span>19:00</span>
            </div>
            <div class="waring-list">
              <span>水利部大厦二楼电表</span>
              <span>19:00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="screen-title">今日用电情况</div>
      <e-vue-echartsjs style="width: 100%; height: calc(100% - 41px);" :options="options" @ready="onEChartsReady($event)"></e-vue-echartsjs>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
import Bus from '@/global/bus.js';
export default {
  name: 'use-electricity',
  data() {
    return {
      pieOptions: {
        title: {
          text: '20%',
          x: 'center',
          y: 'center',
          textStyle: {
            fontWeight: 'normal',
            fontSize: 17,
            color: '#00eeff'
          } // 标题
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        color: ['#004A70', '#7AFF00'],
        series: [
          {
            name: '漏损状态',
            type: 'pie',
            radius: ['60%', '90%'],
            center: ['50%', '50%'],
            label: {
              normal: {
                show: false,
                position: 'center'
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 280, name: '水利部大厦' },
              { value: 80, name: '漏损状态' }
            ]
          }
        ]
      },
      echartsIntance: '',
      pieEchartsIntance: '',
      options: {
        legend: {
          top: '0',
          right: '2%',
          textStyle: {
            color: '#2BFAFF'
          },
          data: ['单位：10kw/h']
        },
        xAxis: {
          type: 'category',
          data: [
            'Mon',
            'Tue',
            'Wed',
            'Thu',
            'Fri',
            'Sat',
            'Sun',
            'Mon',
            'Tue',
            'Wed',
            'Thu',
            'Fri',
            'Sat',
            'Sun'
          ],
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
        yAxis: {
          type: 'value',
          color: '#000',
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
        grid: {
          top: '20%',
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        series: [
          {
            // For shadow
            type: 'bar',
            itemStyle: {
              normal: {
                color: 'rgba(15,51,146,0.5)',
                barBorderRadius: [10, 10, 0, 0]
              }
            },
            barGap: '-100%',
            barCategoryGap: '40%',
            data: [
              200,
              200,
              200,
              200,
              200,
              200,
              200,
              200,
              200,
              200,
              200,
              200,
              200,
              200
            ],
            animation: false
          },
          {
            name: '单位：10kw/h',
            itemStyle: {
              normal: {
                color: 'rgb(4,187,255,1)'
              }
            },
            data: [
              120,
              200,
              150,
              80,
              70,
              110,
              130,
              120,
              200,
              150,
              80,
              70,
              110,
              130
            ],
            type: 'bar'
          }
        ]
      }
    };
  },
  mounted() {
    Bus.$on('windowOnresize', () => {
      this.pieEchartsIntance.resize();
      this.echartsIntance.resize();
    });
  },
  methods: {
    onEChartsReady(evt) {
      this.echartsIntance = evt.echartsIntance;
    },
    onPieEChartsReady(evt) {
      this.pieEchartsIntance = evt.echartsIntance;
    }
  }
};
</script>

<style lang="scss" scoped>
.use-electricity {
  height: 100%;
  width: 100%;
  > div {
    width: 100%;
    height: 50%;
    .title {
      font-size: 18px;
      color: #26bcf8;
      padding: 10px 20px;
    }
    .echarts {
      height: calc(100% - 40px);
      display: flex;
      justify-content: space-around;
      > div {
        border: 1px solid rgba(5, 164, 182, 1);
        width: calc(100% / 4.8);
        padding: 10px 0;

        &.detail {
          height: 100%;
          color: #0be3f5;
          padding: 10px 0;
          .ert-color {
            color: #e9e830;
          }
          .waring {
            height: calc(100% - 18px);
            padding: 2px 3px;
            .waring-list {
              padding: 2px 0;
              > span {
                display: inline-block;
                padding: 2px 0;
                font-size: 12px;
                &:first-of-type {
                  color: #ff7e00;
                }

                &:last-of-type {
                  color: #cecfcf;
                  float: right;
                  margin-top: 2px;
                }
              }
            }
          }
          .img {
            position: relative;
            padding: 6px 0;
            height: calc(100% - 36px);
          }
          .value {
            position: absolute;
            top: 40%;
            left: 0;
            text-align: center;
            width: 100%;
          }
          .img-src {
            width: 100%;
            height: 100%;
            background: url("~@/assets/images/monitoring/ele.png") center
              no-repeat;
            animation: move 2s linear infinite;
          }
          @keyframes move {
            0% {
              transform: rotate(0deg);
            }

            25% {
              transform: rotate(90deg);
            }

            50% {
              transform: rotate(180deg);
            }

            75% {
              transform: rotate(270deg);
            }

            100% {
              transform: rotate(360deg);
            }
          }
        }
      }
    }

    .bottom-echarts {
      height: calc(100% - 41px);
      width: 100%;
    }
  }
}
</style>
