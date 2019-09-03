<template>
  <div class="total-water">
    <div class="water-right-top">
      <div class="screen-title">
        {{ curMonth }}月总用水量统计
      </div>
      <div class="water-right-top-content">
        <div class="radus-content">
          <div class="img month"></div>
          <div class="radus-text">
            <div>{{ sumNumber }}</div>
            <div>吨</div>
          </div>
        </div>
        <div class="panel-content">
          <div>本月总水量</div>
          <div class="tongbi bi"
               style="margin-top: 10px;">同比：
            <span>{{ waterTbUsed? waterTbUsed : '--' }}</span>
            <i :class="{'fa fa-arrow-up': waterTbUsed > 0, 'fa fa-arrow-down': waterTbUsed < 0, 'active': waterTbUsed > 0}"></i>
          </div>
          <div class="huanbi bi">环比：
            <span>{{ waterHbUsed? waterHbUsed : '--' }}</span>
            <i :class="{'fa fa-arrow-up': waterHbUsed > 0, 'fa fa-arrow-down': waterHbUsed < 0 , 'active': waterHbUsed > 0}"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="water-right-bottom">
      <div class="screen-title">
        {{ curYear }}年总用水量统计
      </div>
      <div class="water-right-bottom-content">
        <div class="radus-content">
          <div class="img year"></div>
          <div class="radus-text">
            <div>{{ waterYearUsed }}</div>
            <div>吨</div>
          </div>
        </div>
        <div class="panel-content">
          <div>本年总水量</div>
          <div class="tongbi bi year">同比：
            <span>{{ yearWaterTbUsed? yearWaterTbUsed : '--' }}</span>
            <i :class="{'fa fa-arrow-up': yearWaterTbUsed > 0, 'fa fa-arrow-down': yearWaterTbUsed < 0 , 'active': yearWaterTbUsed > 0}"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import uwService from '@/api/use-water-static.js';
export default {
  name: 'total-water',
  data() {
    return {
      curMonth: '',
      curYear: '',
      sumNumber: '',
      waterTbUsed: 0,
      waterHbUsed: 0,
      waterYearUsed: 0,
      yearWaterTbUsed: 0
    };
  },
  mounted() {
    const date = new Date();
    this.curMonth = date.getMonth() + 1;
    this.curYear = date.getFullYear();
    this.getWaterSumMonthUsed();
    this.getWaterSumMonthLastUsed();
    this.getWaterSumYearUsed();
    this.getWaterSumYearLastUsed();
    this.timer = setInterval(() => {
      this.getWaterSumMonthUsed();
      this.getWaterSumMonthLastUsed();
      this.getWaterSumYearUsed();
      this.getWaterSumYearLastUsed();
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
    getWaterSumMonthLastUsed() {
      uwService.getWaterSumMonthLastUsed().then(res => {
        this.waterTbUsed = res.result.waterTbUsed;
        this.waterHbUsed = res.result.waterHbUsed;
      });
    },
    getWaterSumYearUsed() {
      uwService.getWaterSumYearUsed().then(res => {
        this.waterYearUsed = res.result.waterYearUsed;
      });
    },
    getWaterSumYearLastUsed() {
      uwService.getWaterSumYearLastUsed().then(res => {
        this.yearWaterTbUsed = res.result.waterTbUsed;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.total-water {
  position: relative;
  height: 100%;
  width: 100%;
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
            background: url('~@/assets/images/monitoring/water.png') center
              no-repeat;
            background-size: 90%;
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
          background: url('~@/assets/images/index/water-text-panel.png') center
            no-repeat;
          background-size: 96% 80%;
          color: #fff;
          padding-top: 30px;
          padding-left: 10px;
          position: relative;
          font-size: 12px;
          .tongbi,
          .bi {
            position: relative;
            color: #26bcf8;
            > span {
              color: #e9e830;
              font-size: 14px;
              font-weight: 700;
              display: inline-block;
              margin: 0 6px;
              text-align: center;
              vertical-align: middle;
            }
            > i {
              color: #0be3f5;
              &.active {
                color: #dd630a;
              }
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
          }
        }
      }
    }
  }
}
</style>

