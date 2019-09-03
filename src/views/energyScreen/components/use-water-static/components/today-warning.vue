<template>
  <div class="today-warning">
    <div class="screen-title">
      当日预警统计
    </div>
    <div class="waring-content">
      <div v-if="waringList.length === 0"
           class="waring-img">
        <img src="@/assets/images/wuyujing.png"
             alt="">
        <div>用户情况良好，暂无预警信息</div>
      </div>

      <el-carousel v-if="waringList.length > 0"
                   trigger="click"
                   direction="vertical">
        <el-carousel-item v-for="(item, index) in waringList"
                          :key="index">
          <div v-for="(ite, i) in item"
               :key="index + i"
               class="waring-text">
            <span class="dot"></span>
            <span class="text">{{ ite.meterName? ite.meterName + '--' : '' }} {{ ite.curStatus }}</span>
            <span class="time">{{ dateFormat(ite.createTime) }}</span>
          </div>
        </el-carousel-item>
      </el-carousel>

    </div>

  </div>
</template>

<script>
import { dateFormat } from '@/global/global';
import uwService from '@/api/use-water-static.js';
export default {
  name: 'today-warning',
  data() {
    return {
      waringList: [],
      timer: null,
      styleText: {}
    };
  },
  mounted() {
    this.getAllWaterWarn();
    // this.timer = setInterval(() => {
    //   this.getAllWaterWarn();
    // }, 60 * 60 * 10000);
  },
  destroyed() {
    // clearInterval(this.timer);
    // this.timer = null;
  },
  methods: {
    dateFormat(time) {
      return dateFormat(time, 'MM-dd hh:mm:ss');
    },
    getAllWaterWarn() {
      uwService.getAllWaterWarn().then(res => {
        this.waringList = [];
        const data = res.result.filter(item => {
          return item.curStatus !== '在线';
        });
        for (var i = 0; i < data.length; i += 7) {
          this.waringList.push(data.slice(i, i + 7));
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.today-warning {
  height: 100%;
  width: 100%;
  .waring-content {
    height: calc(100% - 42px);
    padding: 0 10px;
    overflow: hidden;
    .waring-img {
      width: 100%;
      color: #fff;
      text-align: center;
      display: inline-block;
      > img {
        width: 50%;
        margin-bottom: 10px;
      }
    }
    &:hover {
      .waring-text {
      }
    }
    .waring-content-son {
      width: 100%;
      height: 100% * 2;
    }
    .waring-text {
      height: 32px;
      // animation: suibian 5s infinite linear;
    }
    /*定义动画集*/
    @keyframes suibian {
      from {
      }
      to {
        transform: translate(0, -50px);
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
</style>
