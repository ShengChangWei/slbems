<template>
  <div class="screen">
    <div v-if="toggleVisible"
         class="right-video"
         :class="{'active': toggleVisible}">
      <autoplay-video></autoplay-video>
      <!-- <video src="@/assets/video/Cinderella.mp4" autoplay controls="controls"></video> -->
    </div>
    <div class="right-page"
         :class="{'active': toggleVisible}">
      <div class="year time">
        {{ curYear }}
      </div>
      <div class="month time">
        {{ curMonth }}
      </div>
      <div class="day time">
        {{ curDay }}
      </div>

      <!-- 用水监管 页面样式多次改动，命名有差别-->
      <div v-if="waterLook === 'water'"
           class="right-img-content">
        <div class="right-img-panel">
          <network-diagram></network-diagram>
        </div>
      </div>
      <div v-if="waterLook === 'water'"
           class="use-water-container-new">
        <div class="use-water-panel">
          <use-water-static></use-water-static>
        </div>
      </div>

      <!-- 综合大屏 -->
      <div v-if="waterLook !== 'water'"
           class="left-content">
        <div class="left-panel">
          <div class="use-water-top">
            <use-water></use-water>
          </div>
          <div class="use-water-bottom">
            <use-water-analysis></use-water-analysis>
          </div>
        </div>
      </div>
      <div v-if="waterLook !== 'water'"
           class="right-content">
        <div class="right-top-content">
          <div class="right-top-content-left">
            <div class="right-top-content-left-panel">
              <ammeter-status></ammeter-status>
            </div>
          </div>
          <div class="right-top-content-right">
            <div class="right-top-content-right-panel">
              <wind-monitoring></wind-monitoring>
            </div>
          </div>
        </div>
        <div class="right-bottom-content">
          <div class="right-bottom-content-panel">
            <use-electricity></use-electricity>
          </div>
        </div>
      </div>
    </div>
    <div class="left-monitoring">
      <left-working-monitoring @togglePage="togglePage"
                               @waterLook="handlerWaterLook($event)"></left-working-monitoring>
    </div>
  </div>
</template>

<script>
import leftWorkingMonitoring from './components/left-working-monitoring/left-working-monitoring';
import useWater from './components/use-water/use-water';
import useWaterAnalysis from './components/use-water-analysis/use-water-analysis';
import ammeterStatus from './components/ammeter-status/ammeter-status';
import windMonitoring from './components/wind-monitoring/wind-monitoring';
import useElectricity from './components/use-electricity/use-electricity';
import autoplayVideo from './components/autoplay-video/autoplay-video';
import networkDiagram from './components/network-diagram/network-diagram';
import useWaterStatic from './components/use-water-static/use-water-static';
import Bus from '@/global/bus.js';
import { dateFormat } from '@/global/global.js';
export default {
  name: 'energy-screen',
  components: {
    leftWorkingMonitoring,

    useWater,

    useWaterAnalysis,
    ammeterStatus,
    windMonitoring,
    useElectricity,
    autoplayVideo,
    networkDiagram,
    useWaterStatic
  },
  data() {
    return {
      toggleVisible: true,
      curYear: '',
      curMonth: '',
      curDay: '',
      waterLook: ''
    };
  },

  created() {},
  mounted() {
    const date = new Date();
    this.curYear = dateFormat(date, 'yyyy');
    this.curMonth = dateFormat(date, 'MM-dd');
    this.curDay = dateFormat(date, 'hh:mm');
    setInterval(() => {
      const date = new Date();
      this.curYear = dateFormat(date, 'yyyy');
      this.curMonth = dateFormat(date, 'MM-dd');
      this.curDay = dateFormat(date, 'hh:mm');
    }, 1000 * 10);

    window.onresize = () => {
      Bus.$emit('windowOnresize');
      // myChart1.resize();    //若有多个图表变动，可多写
    };
  },
  methods: {
    togglePage() {
      this.toggleVisible = !this.toggleVisible;
    },
    handlerWaterLook(evt) {
      this.waterLook = evt;
      this.toggleVisible = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.screen {
  height: 100%;
  width: 100%;
  position: relative;
  background-color: #051a35;
  .left-monitoring {
    float: left;
    width: calc(100% / 5);
    height: 100%;
    background: rgba(7, 30, 68, 1);
    position: absolute;
    right: 0;
  }
  .right-video {
    float: left;
    width: calc((100% / 5) * 4);
    height: 100%;
    background-color: #051a35;
    position: absolute;
    left: -2000px;
    opacity: 0;
    transition: all 2s;

    &.active {
      left: 0;
      opacity: 1;
    }
    video {
      width: 100%;
      height: 100%;
    }
  }
  .right-page {
    float: left;
    width: calc((100% / 5) * 4);
    height: 100%;
    background-color: #051a35;
    left: 0;
    opacity: 1;
    position: absolute;
    background: url('~@/assets/images/index/bg.png') center no-repeat;
    transition: all 2s;
    top: 0;
    background-size: 100% 100%;
    // position: relative;
    .time {
      position: absolute;
      color: #0be3f5;
      font-size: 20px;
      font-weight: 700;
      top: 3.8%;
      //  font-family: "UnidreamLED";
      &.year {
        right: 17.3%;
      }

      &.month {
        right: 10.3%;
      }
      &.day {
        right: 3.8%;
      }
    }
    // padding: 20px 10px 20px 20px;
    &.active {
      left: -2000px;
      opacity: 0;
    }

    .left-content,
    .right-content,
    .right-img-content,
    .use-water-container-new {
      margin-top: 100px;
      float: left;
      width: 50%;
      height: calc(100% - 100px);
    }
    .right-content {
      padding-bottom: 4px;
    }
    .right-img-content {
      padding: 10px 5px 24px 24px;
      // width: 55%;
      .right-img-panel {
        background: url('~@/assets/images/index/panel.png') center no-repeat;
        width: 100%;
        height: 100%;
        background-size: 100% 100%;
      }
    }
    .use-water-container-new {
      padding: 10px 24px 24px 5px;
      // width: 45%;
      .use-water-panel {
        background: url('~@/assets/images/index/panel.png') center no-repeat;
        width: 100%;
        height: 100%;
        background-size: 100% 100%;
      }
    }

    .left-content {
      padding: 10px 5px 24px 24px;

      // 变成图片时
      &.isPage {
        padding: 10px 24px 18px 5px;
      }
      .left-panel {
        height: 100%;
        width: 100%;
        background: url('~@/assets/images/index/panel.png') center no-repeat;
        background-size: 100% 100%;
        padding: 10px;
        .use-water-top,
        .use-water-bottom {
          height: 50%;
          width: 100%;

          // border: 1px solid #ccc;
        }
        .use-water-top {
          padding-bottom: 5px;
        }
        .use-water-bottom {
          padding-top: 5px;
        }
      }
    }
    .right-top-content {
      height: 40%;
      width: 100%;
      .right-top-content-left,
      .right-top-content-right {
        float: left;
        height: 100%;
        // border: 1px solid #ccc;
      }
      .right-top-content-left {
        width: 60%;
        padding: 10px 5px 5px 5px;
        .right-top-content-left-panel {
          height: 100%;
          width: 100%;
          background: url('~@/assets/images/index/ele-biao-panel.png') center
            no-repeat;
          background-size: 100% 100%;
        }
      }
      .right-top-content-right {
        width: 40%;
        padding: 10px 24px 5px 5px;
        .right-top-content-right-panel {
          height: 100%;
          width: 100%;
          background: url('~@/assets/images/index/new-panel.png') center
            no-repeat;
          background-size: 100% 100%;
        }
      }
    }
    .right-bottom-content {
      height: 60%;
      width: 100%;
      padding: 0 24px 18px 5px;
      .right-bottom-content-panel {
        height: 100%;
        width: 100%;
        background: url('~@/assets/images/index/ele-panel.png') center no-repeat;
        background-size: 100% 100%;
      }
    }
  }
}
</style>
