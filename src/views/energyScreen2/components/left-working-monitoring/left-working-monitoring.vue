<template>
  <div class="monitoring">
    <div class="monitoring-title"
         @click="handlerWater('ele')">
      能源智能监管分析系统
    </div>
    <div class="monitoring-content">
      <div class="monitoring-detail"
           style="cursor: pointer"
           @click="handlerWater('water')">
        <left-panel title="用水监管">
          <div class="info-content">
            <div class="use">
              <div class="info water text">
              </div>
              <div class="text-content text-center">
                <span>{{ sumNumber? sumNumber : 0 }}</span>
                <div>
                  吨
                </div>
              </div>
              <div class="left-title">{{ curMonth }}月总用水量</div>
            </div>
          </div>
          <div class="info-content">
            <div class="use">
              <div class="info water text"></div>
              <div class="text-content text-center">
                <span> {{ waterYearUsed? waterYearUsed : 0 }}</span>
                <div>
                  吨
                </div>
              </div>
              <div class="left-title">{{ curYear }}年总用水量</div>
            </div>
          </div>

        </left-panel>
      </div>
      <div class="monitoring-detail">
        <left-panel title="用电监管">
          <div class="info-content">
            <div class="use">
              <div class="info electricity text">

              </div>
              <div class="text-content text-center">
                <span>
                  3.65
                </span>
                <div>
                  万kw·h
                </div>
              </div>
              <div class="left-title">{{ curMonth }}月总用电量</div>
            </div>
          </div>
          <div class="info-content">
            <div class="use">
              <div class="info electricity text">

              </div>
              <div class="text-content text-center">
                <span>57.29</span>
                <div>
                  万kw·h
                </div>
              </div>
              <div class="left-title">{{ curYear }}年总用电量</div>
            </div>
          </div>
        </left-panel>
      </div>
      <div class="monitoring-detail">
        <left-panel title="新风监管">
          <div class="bottom-content">
            <div class="content-detail">
              <div>
                <div class="title">送风温度
                  <span class="go-tem">24℃</span>
                </div>
                <div class="out">
                  <div class="inner">
                    <div class="progress go"></div>
                  </div>
                </div>
              </div>
              <div>
                <div class="title">回风温度
                  <span class="in-tem">24℃</span>
                </div>
                <div class="out">
                  <div class="inner">
                    <div class="progress in"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </left-panel>
      </div>
    </div>
    <div class="monitoring-bottom"
         @click="togglePage">
      <img src="@/assets/images/monitoring/arrow.png"
           alt="">
    </div>
  </div>
</template>

<script>
import leftPanel from '../left-panel/left-panel';
import uwService from '@/api/use-water-static.js';
export default {
  name: 'left-working-monitoring',
  components: {
    leftPanel
  },
  data() {
    return {
      useWater: '',
      sumNumber: '',
      waterYearUsed: '',
      timer: null,
      curMonth: '',
      curYear: ''
    };
  },
  mounted() {
    const date = new Date();
    this.curMonth = date.getMonth() + 1;
    this.curYear = date.getFullYear();
    this.getWaterSumMonthUsed();
    this.getWaterSumYearUsed();
    this.timer = setInterval(() => {
      this.getWaterSumMonthUsed();
      this.getWaterSumYearUsed();
    }, 60 * 60 * 1000);
  },
  destroyed() {
    clearInterval(this.timer);
    this.timer = null;
  },
  methods: {
    getWaterSumMonthUsed() {
      uwService.getWaterSumMonthUsed().then(res => {
        this.sumNumber = res.result.waterMonthUsed;
      });
    },
    getWaterSumYearUsed() {
      uwService.getWaterSumYearUsed().then(res => {
        this.waterYearUsed = res.result.waterYearUsed;
      });
    },
    togglePage() {
      this.$emit('togglePage');
    },
    handlerWater(curlist) {
      this.$emit('waterLook', curlist);
    }
  }
};
</script>

<style lang="scss" scoped>
.monitoring {
  height: 100%;
  width: 100%;
  padding: 10px;
  .monitoring-title {
    height: 55px;
    background: url('~@/assets/images/monitoring/title.png') center no-repeat;
    text-align: center;
    line-height: 55px;
    color: rgba(11, 227, 245, 1);
    font-size: 21px;
  }
  .monitoring-content {
    height: calc(100% - 120px);
    background: url('~@/assets/images/monitoring/bg.png') center no-repeat;
    background-size: 100% 100%;
    margin-top: 10px;
    .monitoring-detail {
      height: calc(100% / 3);
      padding: 16px 10px;
      cursor: pointer;
      .info-content {
        float: left;
        text-align: center;
        width: 50%;
        height: 100%;
        padding: 20px 0;
        position: relative;
        .use {
          position: absolute;
          width: 100%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          .left-title {
            font-size: 14px;
          }
          .text-content {
            position: absolute;
            top: 50px;
            // left: 74px;
            width: 100%;
            font-size: 18px;
            font-family: MicrosoftYaHei-Bold;
            font-weight: bold;
            color: rgba(0, 234, 255, 1);

            &.ele {
              left: 68px;
            }
            > div {
              font-size: 14px;
            }
          }
          .info {
            display: inline-block;
            width: 100%;
            height: 140px;
            text-align: center;
            line-height: 140px;
            margin-bottom: 10px;
            &.text {
            }
            &.water {
              background: url('~@/assets/images/monitoring/water.png') center
                no-repeat;
              animation: move 2s linear infinite;
            }
            &.electricity {
              background: url('~@/assets/images/monitoring/ele.png') center
                no-repeat;
              animation: move 2s linear infinite;
              background-size: 90%;
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
      .bottom-content {
        position: relative;
        width: 100%;
        height: 100%;

        .content-detail {
          padding: 20px 30px;
          position: absolute;
          width: 100%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          > div {
            .title {
              padding: 10px 0;
            }
            .go-tem {
              color: #ba6409;
              font-weight: 700;
              margin-left: 10px;
            }
            .in-tem {
              font-weight: 700;
              color: #b5d84b;
              margin-left: 10px;
            }
            .out {
              width: 100%;
              padding: 8px;
              background: rgba(15, 27, 71, 1);
              border: 2px solid rgba(20, 125, 229, 0.42);
              border-radius: 10px;
              .inner {
                width: 100%;
                height: 27px;
                background: rgba(23, 50, 110, 1);
                border: 2px solid rgba(20, 125, 229, 0.42);
                border-radius: 10px;
                .progress {
                  height: 100%;

                  border-radius: 10px;
                  &.go {
                    width: 70%;
                    background: -webkit-linear-gradient(
                      left,
                      #66ffff 10%,
                      #ba6409 100%
                    );
                    background-size: 200% 100%;
                    animation: masked-animation 3s linear infinite;
                  }
                  &.in {
                    width: 50%;
                    background: -webkit-linear-gradient(
                      left,
                      #66ffff 10%,
                      #b5d84b 100%
                    );
                    background-size: 200% 100%;
                    animation: masked-animation 3s linear infinite;
                  }
                }
                @keyframes masked-animation {
                  0% {
                    background-position: 0 0;
                  }
                  100% {
                    background-position: -100% 0;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  .monitoring-bottom {
    height: 55px;
    line-height: 55px;
    // background: url("~@/assets/images/monitoring/arrow.png") center no-repeat;
    animation: move1 3s linear infinite;
    cursor: pointer;
    > img {
      vertical-align: middle;
      transform: rotate(180deg);
    }
    @keyframes move1 {
      0% {
        transform: translate(0px);
      }
      25% {
        transform: translate(20px);
      }
      50% {
        transform: translate(50px);
      }
      75% {
        transform: translate(20px);
      }
      100% {
        transform: translate(0px);
      }
    }
  }
}
</style>
