<template>
    <div class="unit-profile">
        <div class="unit-nav">
            <span :class="{'active': curComponent === 'unit-detail'}"
                  @click="changeTab('unit-detail')">单位概况</span>
            <span :class="{'active': curComponent === 'water-network-chart'}"
                  @click="changeTab('water-network-chart')">供水管网图</span>
        </div>
        <div class="unit-content">
            <keep-alive>
                <el-scrollbar style="height: 100%;">
                    <component :is="curComponent"></component>
                </el-scrollbar>
            </keep-alive>
        </div>
    </div>
</template>

<script>
import unitDetail from './components/unit-detail.vue';
import waterNetworkChart from './components/water-network-chart.vue';
export default {
  name: 'unit-profile',
  components: {
    unitDetail,
    waterNetworkChart
  },
  data() {
    return {
      curComponent: 'unit-detail'
    };
  },
  methods: {
    changeTab(item) {
      this.curComponent = item;
    }
  }
};
</script>

<style lang="scss" scoped>
.unit-profile {
  position: relative;
  height: 100%;
  width: 100%;
  .unit-nav {
    padding-left: 10px;
    height: 40px;
    line-height: 40px;
    background-color: rgb(134, 185, 249);
    > span {
      height: 100%;
      padding: 0 10px;
      color: #fff;
      cursor: pointer;
      display: inline-block;
      &.active {
        background-color: rgb(94, 155, 231);
      }
    }
  }
  .unit-content {
    height: calc(100% - 40px);
  }
}
</style>

