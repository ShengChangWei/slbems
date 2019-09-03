<template>
  <div class="network">
    <div class="network-title">
      <div class="screen-title">{{ curMonth }}月一、二级表水量统计</div>
      <div class="network-title-list">
        <div class="list">
          <div class="panel blue">
            <span class="number">{{ sumNumber }}</span>
            <span class="addr">&nbsp;吨</span>
          </div>
          <div class="biao-name">总用水量</div>
        </div>
        <div v-for="(item, index) in userElectricity"
             :key="index"
             class="list">
          <div class="panel">
            <span class="number">{{ item.waterMonthUsed? item.waterMonthUsed : 0 }}</span>
            <span class="addr">&nbsp;吨</span>
          </div>
          <div class="biao-name">{{ partName[item.addressCode] }}</div>
        </div>
      </div>
    </div>
    <div class="network-content">
      <div class="screen-title">{{ curMonth }}月用水计量网络图</div>
      <div class="network-img">
        <span class="dun">
          单位： 吨
        </span>
        <span class="one">
          一级表
        </span>
        <span class="two">
          二级表
        </span>
        <span class="three">
          三级表
        </span>
        <div v-for="(item, index) in diagramData"
             :key="index"
             :style="diagramList[item.addressCode].style">
          <div class="net-text">
            <div class="net-value">{{ diagramList[item.addressCode].value }}</div>
            <div>{{ diagramList[item.addressCode].text }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import uwService from '@/api/use-water-static.js';
export default {
  name: 'network-diagram',
  data() {
    return {
      userElectricity: [
        {
          partName: 'shangshan'
        },
        { partName: 'waterAffairs' },
        { partName: 'airConditioner' },
        { partName: 'canteen' },

        { partName: 'green' }
      ],
      partName: {
        shangshan: '上善若水大厦',
        waterAffairs: '水务大厦',
        airConditioner: '中央空调',
        canteen: '食堂',
        green: '绿化'
      },
      sumNumber: 0,
      diagramData: [],
      diagramList: {
        1905170030: {
          text: '', // 消防水箱
          style: 'left: 0%; top: 9%'
        },
        1905170014: {
          text: '增压水表',
          style: 'left: 5.5%; top: 21%'
        },
        1905170029: {
          text: '市政水表',
          style: 'left: 5.5%; top: 37%'
        },
        1905170024: {
          text: '食堂、空调水表',
          style: 'left: 15%; top: 13%'
        },
        1905170018: {
          text: '大机组软化水',
          style: 'left: 29%; top: 2%'
        },
        1908020006: {
          text: '大机组冷却水',
          style: 'left: 40%; top: 2%'
        },
        1905170016: {
          text: '小机组软化水',
          style: 'left: 51%; top: 2%'
        },
        1908020011: {
          text: '小机组冷却水',
          style: 'left: 62%; top: 2%'
        },
        1905170011: {
          text: '灶台',
          style: 'left: 73.3%; top: 2%'
        },
        1905170026: {
          text: '操作间',
          style: 'left: 81.5%; top: 2%'
        },
        1905170020: {
          text: '增压水表',
          style: 'left:25%; top: 40%'
        },
        zym: {
          text: '男卫生间',
          style: 'left:43.5%; top: 35.5%'
        },
        zyw: {
          text: '女卫生间',
          style: 'left:70%; top: 35.5%'
        },
        1905170019: {
          text: '市政水表',
          style: 'left:25%; top: 57%'
        },
        szm: {
          text: '男卫生间',
          style: 'left:43.5%; top: 52.5%'
        },
        szw: {
          text: '女卫生间',
          style: 'left:70%; top: 52.5%'
        },
        1905170012: {
          text: '绿化',
          style: 'left:39%; top: 80%'
        },
        1905170028: {
          text: '总水表',
          style: 'left:59%; top: 89.5%'
        }
      },
      curMonth: '',
      timer: ''
    };
  },
  mounted() {
    this.curMonth = new Date().getMonth() + 1;
    this.getWaterMonthUsed();
    this.getWaterSumMonthUsed();
    this.getAllWaterMonthUsed();
    this.timer = setInterval(() => {
      this.getWaterSumMonthUsed();
      this.getWaterMonthUsed();
      this.getAllWaterMonthUsed();
    }, 60 * 60 * 10000);
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
    getWaterMonthUsed() {
      uwService.getWaterMonthUsed().then(res => {
        this.userElectricity = res.result;
      });
    },
    getAllWaterMonthUsed() {
      uwService.getAllWaterMonthUsed().then(res => {
        res.result.forEach((item, index) => {
          this.diagramList[item.addressCode]['value'] = item.waterMonthUsed;
        });
        this.diagramData = res.result;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.network {
  height: 100%;
  width: 100%;
  padding: 10px;
  .network-title {
    height: 15%;
    width: 100%;

    .network-title-list {
      display: flex;
      justify-content: space-around;
      border-bottom: 1px solid cyan;
      padding-bottom: 10px;
      .list {
        width: calc(100% / 6.3);
        .biao-name {
          color: #fff;
          font-size: 16px;
          margin-top: 10px;
          display: inline-block;
          text-align: center;
          width: 100%;
        }
        .panel {
          //   border: 2px solid #0c2049;
          color: rgb(36, 240, 161);
          font-weight: 700;
          //   text-align: center;
          position: relative;
          //   background-color: #000;
          background: url('~@/assets/images/index/green-panel.png') center
            no-repeat;
          background-size: 100% 100%;
          &.blue {
            background: url('~@/assets/images/index/blue-panel.png') center
              no-repeat;
            background-size: 100% 100%;
            color: rgb(1, 142, 242);
          }
          text-align: center;
          .number {
            width: 100%;
            height: 60px;
            line-height: 60px;
            font-family: 'UnidreamLED';
            font-size: 30px;
            //   border: 1px solid #ccc;
          }
        }
      }
    }
  }
  .network-content {
    height: 85%;
    width: 100%;
    .network-img {
      height: calc(100% - 41px);
      background: url('~@/assets/images/index/sbpb.png') center no-repeat;
      background-size: 100% 100%;
      position: relative;
      color: #fff;
      > span {
        position: absolute;
        font-size: 14px;
        &.dun {
          bottom: 2%;
          right: 16%;
        }
        &.one {
          bottom: 15.5%;
          right: 1%;
        }
        &.two {
          bottom: 9%;
          right: 1%;
        }
        &.three {
          bottom: 2%;
          right: 1%;
        }
      }
      > div {
        position: absolute;
        font-family: 'UnidreamLED';
        color: #fff;
        font-size: 12px;
        .net-text {
          width: 110px;
          text-align: center;
          .net-value {
            color: rgb(36, 240, 161);
            margin-bottom: 5px;
            font-size: 18px;
          }
        }
      }
    }
  }
}
</style>

