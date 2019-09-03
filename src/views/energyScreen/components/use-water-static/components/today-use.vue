<template>
  <div class="today-use">
    <div class="screen-title title">
      当日用水漏损分析
      <span>（00:00 ~ 当前）</span>
    </div>
    <div class="main">
      <div class="echarts">
        <div class="echarts-title">
          <div class="echarts-title-top">
            <span></span>
            <span>损耗量</span>
          </div>
          <div class="echarts-title-bottom">
            {{ Math.abs(shValue.toFixed(2)) }} ({{ rate }}%)
          </div>
        </div>
        <e-vue-echartsjs style="width: 100%; height: 100%;"
                         :options="options"
                         @ready="onEChartsReady($event)"></e-vue-echartsjs>
      </div>
      <div class="bottom">
        <div class="top-panel">
          <div>
            <span class="text">漏损率：</span>
            <span class="value"
                  :class="{'active': rate > 3}">{{ rate }}%</span>
            <span class="text two">漏损率状态：</span>
            <span class="value"
                  :class="{'active': rate > 3}"> {{ rate > 3? '不正常' : '正常' }}</span>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Bus from '@/global/bus';
import uwService from '@/api/use-water-static.js';
export default {
  name: 'today-use',
  data() {
    return {
      options: {
        title: {
          text: '0吨',
          subtext: '总用水量',
          x: 'center',
          y: '40%',
          textStyle: {
            fontWeight: 'normal',
            fontSize: 22,
            color: '#00eeff'
          }, // 标题
          subtextStyle: {
            fontWeight: 'normal',
            fontSize: 17,
            color: '#00eeff'
          } // 副标题
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          bottom: 10,
          left: 12,
          data: [
            '上善若水市政水表水量',
            '上善若水增压水表水量',
            '水务大厦市政水表水量',
            '水务大厦增压水表水量',
            '食堂、空调水表水量\xa0\xa0\xa0',
            '损耗量'
          ],
          textStyle: {
            // 图例文字的样式
            color: '#0BE3F5'
          }
        },
        color: [
          '#4e1ae1',
          '#ba6409',
          '#a2e11a',
          '#24d1f0',
          '#079bff',
          '#ff181b'
        ],
        series: [
          {
            name: '用水信息',
            type: 'pie',
            radius: ['50%', '70%'],
            center: ['50%', '46%'],
            data: [
              // { value: 135, name: '上善若水市政水表水量' },
              // { value: 335, name: '上善若水增压水表水量' },
              // { value: 310, name: '水务大厦市政水表水量' },
              // { value: 234, name: '水务大厦增压水表水量' },
              // { value: 135, name: '食堂、空调水表水量\xa0\xa0\xa0' },
              // { value: 135, name: '损耗量' }
            ],
            itemStyle: {
              normal: {
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                }
              }
            }
          }
        ]
      },
      partName: {
        1905170019: {
          text: '上善若水市政水表水量'
        },
        1905170020: {
          text: '上善若水增压水表水量'
        },
        1905170029: {
          text: '水务大厦市政水表水量'
        },
        1905170014: {
          text: '水务大厦增压水表水量'
        },
        1905170024: {
          text: '食堂、空调水表水量\xa0\xa0\xa0'
        }
      },
      sumValue: 0,
      echartsIntance: '',
      timer: null,
      shValue: 0,
      num: 0,
      rate: 0
    };
  },
  mounted() {
    Bus.$on('windowOnresize', () => {
      this.echartsIntance.resize();
    });
    this.getWaterDayUsed();
    this.timer = setInterval(() => {
      this.getWaterDayUsed();
    }, 60 * 60 * 10000);
  },
  destroyed() {
    clearInterval(this.timer);
    this.timer = null;
  },
  methods: {
    onEChartsReady(evt) {
      this.echartsIntance = evt.echartsIntance;
      //   console.log(this.echartsIntance.graphic);
    },
    getWaterDayUsed() {
      uwService.getWaterDayUsed().then(res => {
        const serData = [];
        if (res.code === 'ok') {
          this.num = 0;
          res.result.forEach(item => {
            if (item.partName === '1905170028') {
              this.sumValue = item.waterDayUsed;
            } else {
              serData.push({
                value: item.waterDayUsed,
                name: this.partName[item.partName].text
              });
              this.num += item.waterDayUsed;
            }
          });
          this.shValue = this.sumValue - this.num;
          serData.push({
            value: Math.abs(this.shValue.toFixed(2)),
            name: '损耗量'
          });
          this.rate = (this.shValue / this.sumValue * 100).toFixed(2);
          this.options.title.text = this.sumValue + '吨';
          this.options.series[0].data = serData;
          this.echartsIntance.setOption(this.options);
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.today-use {
  position: relative;
  height: 100%;
  width: 100%;
  .title {
    > span {
      font-size: 12px;
    }
  }
  .main {
    height: calc(100% - 41px);
    .echarts {
      height: 80%;
      position: relative;
      .echarts-title {
        position: absolute;
        top: 6%;
        left: 5%;
        font-size: 14px;
        color: #ff181b;
        font-weight: 700;
        .echarts-title-top {
          margin-bottom: 5px;
          span {
            color: #fff;
            &:first-of-type {
              display: inline-block;
              width: 20px;
              height: 10px;
              margin-right: 5px;
              background-color: #ff181b;
            }
          }
        }
      }
    }
    .bottom {
      height: 20%;
      padding: 10px;
      .top-panel {
        height: 100%;
        width: 100%;
        background: url('~@/assets/images/index/zs-panel.png') center no-repeat;
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
          color: rgb(0, 253, 155);
          font-size: 16px;
          margin-left: 10px;
          &.active {
            color: red;
          }
        }
      }
    }
  }
}
</style>
