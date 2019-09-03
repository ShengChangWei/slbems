<template>
  <div class="use-water">
    <div class="use-title">
      用水数据统计
    </div>
    <div class="echarts left">
      <div class="water-left">
        <div class="screen-title">今日用水分布</div>
        <e-vue-echartsjs style="width: 100%; height: calc(100% - 41px);" :options="options" @ready="onEChartsReady($event)"></e-vue-echartsjs>
      </div>
    </div>
    <div class="echarts right">
      <div class="water-right">
        <div class="water-right-top">
          <div class="screen-title">
            月总用水量统计
          </div>
          <div class="water-right-top-content">
            <div class="radus-content">
              <div class="img month"></div>
              <div class="radus-text">
                <div>{{ useWater.waterMonthUsed? useWater.waterMonthUsed : 0 }}</div>
                <div>吨</div>
              </div>
            </div>
            <div class="panel-content">
              <div>本月总水量</div>
              <div class="tongbi bi">同比
                <span>--</span>
                <i class="fa fa-arrow-up"></i>
              </div>
              <div class="huanbi bi">环比
                <span>--</span>
                <i class="fa fa-arrow-down"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="water-right-bottom">
          <div class="screen-title">
            年总用水量统计
          </div>
          <div class="water-right-bottom-content">
            <div class="radus-content">
              <div class="img year"></div>
              <div class="radus-text">
                <div>{{ useWater.waterYearUsed? useWater.waterYearUsed : 0 }}</div>
                <div>吨</div>
              </div>
            </div>
            <div class="panel-content">
              <div>本年总水量</div>
              <div class="tongbi bi year">同比
                <span>--</span>
                <i class="fa fa-arrow-up"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bus from '@/global/bus.js';
import energyService from '@/api/energy.js';
export default {
  name: 'use-water',
  data() {
    return {
      useWater: '',
      useWaterDay: [],
      nameObj: {
        shangshan: '上善若水大厦',
        waterAffairs: '水务大厦',
        canteen: '食堂',
        airConditioner: '空调'
      },
      options: {
        title: {
          text: '0吨',
          subtext: '总用水量',
          x: 'center',
          y: '35%',
          textStyle: {
            fontWeight: 'normal',
            fontSize: 17,
            color: '#00eeff'
          }, // 标题
          subtextStyle: {
            fontWeight: 'normal',
            fontSize: 14,
            color: '#00eeff'
          } // 副标题
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          bottom: 20,
          left: 'center',
          data: ['上善若水大厦', '水务大厦', '食堂', '空调'],
          textStyle: {
            // 图例文字的样式
            color: '#0BE3F5'
          }
        },
        color: ['#BA6409', '#AB1AE1', '#24D1F0', '#4E1AE1'],
        series: [
          {
            name: '用水信息',
            type: 'pie',
            radius: ['30%', '45%'],
            center: ['50%', '40%'],
            data: [
              { value: 335, name: '上善若水大厦' },
              { value: 310, name: '水务大厦' },
              { value: 234, name: '食堂' },
              { value: 135, name: '空调' }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      },
      echartsIntance: ''
    };
  },
  mounted() {
    Bus.$on('windowOnresize', () => {
      this.echartsIntance.resize();
    });
    Bus.$on('userWater', data => {
      this.useWater = data;
    });
    // if (this.echartsIntance) {
    //   window.onresize = () => {
    //     this.echartsIntance.resize();
    //      console.log(1222);
    //     //myChart1.resize();    //若有多个图表变动，可多写
    //   };
    // }
  },
  created() {
    // this.getWaterUsedDay();
    // setInterval(() => {
    //   this.getWaterUsedDay();
    // }, 1000 * 60 * 60);
  },
  methods: {
    getWaterUsedDay() {
      energyService.getWaterUsedDay().then(res => {
        if (res.code === 'ok') {
          this.useWaterDay = [];
          const legendName = [];
          let sumNumber = 0;
          res.result.forEach(item => {
            legendName.push(this.nameObj[item.partName]);
            this.useWaterDay.push({
              value: item.waterDayUsed,
              name: this.nameObj[item.partName]
            });
            sumNumber = sumNumber + item.waterDayUsed;
          });
          this.options.legend.data = legendName;
          this.options.title.text = sumNumber + '吨';
          this.options.series[0].data = this.useWaterDay;
          this.echartsIntance.setOption(this.options);
        }
      });
    },
    onEChartsReady(evt) {
      this.echartsIntance = evt.echartsIntance;
    }
  }
};
</script>

<style lang="scss" scoped>
.use-water {
  height: 100%;
  width: 100%;
  position: relative;
  .use-title {
    font-size: 18px;
    color: rgba(38, 188, 248, 1);
    padding: 10px 20px;
  }
  .echarts {
    height: calc(100% - 40px);
    float: left;

    &.left {
      width: 60%;
      padding-right: 5px;
    }
    &.right {
      width: 40%;
      padding-left: 5px;
    }
  }
  .water-left {
    height: 100%;
    border: 1px solid rgba(5, 164, 182, 1);
  }
  .water-right {
    height: 100%;
    border: 1px solid rgba(5, 164, 182, 1);
    .water-right-top,
    .water-right-bottom {
      height: 50%;
      width: 100%;

      .water-right-top-content,
      .water-right-bottom-content {
        height: calc(100% - 41px);
        padding: 0 10px;

        > div {
          float: left;
          width: 50%;
          height: 100%;
          //   position: relative;
          &.radus-content {
            position: relative;
            .radus-text {
              position: absolute;
              top: 38%;
              left: 0;
              color: #04bbff;
              text-align: center;
              font-size: 18px;
              font-family: MicrosoftYaHei-Bold;
              font-weight: bold;
              color: #00eaff;
              width: 100%;
              > div {
                &:last-of-type {
                  font-size: 14px;
                }
              }
            }
            .img {
              width: 100%;
              height: 100%;
              background: url("~@/assets/images/monitoring/water.png") center
                no-repeat;
              //   &.month {
              //     background: url("~@/assets/images/index/month-panel.png") center
              //       no-repeat;
              //     background-size: 100% 80%;
              //   }
              //   &.year {
              //     background: url("~@/assets/images/index/year-panel.png") center
              //       no-repeat;
              //     background-size: 100% 80%;
              //   }
            }
          }
          &.panel-content {
            background-size: 100% 100%;
            background: url("~@/assets/images/index/water-text-panel.png")
              center no-repeat;
            background-size: 100% 80%;
            color: #fff;
            padding-top: 30px;
            padding-left: 10px;
            position: relative;
            .tongbi,
            .bi {
              position: relative;
              color: #26bcf8;
              > span {
                color: #e9e830;
                font-size: 20px;
                font-weight: 700;
                display: inline-block;
                margin: 0 6px;
              }
              > i {
                color: #0be3f5;
              }
              &.year {
                left: 0%;
                top: 26%;
              }
            }
            .tongbi {
              top: 10%;
              left: 0;
            }

            .huanbi {
              top: 16%;
              left: 0;
              > span {
                color: #f0135a;
              }
              > i {
                color: #dd630a;
              }
            }
          }
        }
      }
    }
  }
}
</style>
