<template>
  <div class="use-water-container">
    <div class="use-water-nav">
      <div class="left-title">
        <div>
          用水数据报表
        </div>
        <div class>
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              查询条件
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <div>
                <span>报表类型：</span>
                <span>日报</span>
                <span>周报</span>
                <span>月报</span>
                <span>季报</span>
                <span>年报</span>
              </div>
              <div>
                <span>时间选择：</span>
                <span>
                  <!-- <el-date-picker v-model="value1"
                                  type="datetime"
                                  placeholder="选择日期时间">
                  </el-date-picker> -->
                </span>
              </div>
              <div>
                <span>用水单位选择：</span>
                <span>
                  <!-- <el-checkbox-group v-model="checkedCities">
                    <el-checkbox v-for="city in cities"
                                 :label="city"
                                 :key="city">{{city}}</el-checkbox>
                  </el-checkbox-group> -->
                </span>
              </div>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
      <div class="right-btn-group">
        <div :class="{'active': curTab === 0}"
             @click="changeTab(0)">用水单元关系图</div>
        <div :class="{'active': curTab === 1}"
             @click="changeTab(1)">数据报表</div>
      </div>
    </div>
    <div class="use-water-content">
      <use-water-pic v-if="curTab === 0"></use-water-pic>
      <use-water-table v-if="curTab === 1"></use-water-table>
    </div>
  </div>
</template>

<script>
import useWaterPic from './components/use-water-pic.vue';
import useWaterTable from './components/use-water-table.vue';
export default {
  name: 'use-water-report',
  components: {
    useWaterPic,
    useWaterTable
  },
  data() {
    return {
      curTab: 0,
      cities: ['上海', '北京', '广州', '深圳']
    };
  },
  methods: {
    changeTab(num) {
      this.curTab = num;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';
.use-water-container {
  position: relative;
  height: 100%;
  width: 100%;
  .use-water-nav {
    height: 50px;
    // line-height: 50px;
    overflow: hidden;
    position: relative;
    background: #fff;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
    padding: 0 20px;
    //  padding:  0;
    .left-title {
      float: left;
      margin-top: 18px;
      > div {
        float: left;
        &:first-of-type {
          position: relative;
          margin-right: 20px;
          margin-left: 15px;
          &::before {
            position: absolute;
            content: '';
            background-color: $primary;
            width: 6px;
            top: 0px;
            left: -15px;
            height: 18px;
            border-radius: 2px;
          }
        }
      }
    }
    .right-btn-group {
      float: right;
      margin-top: 9px;
      > div {
        float: left;
        font-size: 14px;
        background-color: rgb(229, 235, 253);
        text-align: center;
        width: 120px;
        padding: 8px 0;
        $radius: 7px;
        cursor: pointer;
        &:first-of-type {
          border-top-left-radius: $radius;
          border-bottom-left-radius: $radius;
        }
        &:last-of-type {
          border-top-right-radius: $radius;
          border-bottom-right-radius: $radius;
        }
        &:hover,
        &.active {
          background-color: $primary;
          color: #fff;
        }
      }
    }
  }
  .use-water-content {
    height: calc(100% - 50px);
  }
}
</style>

<style lang="scss">
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.demonstration {
  display: block;
  color: #8492a6;
  font-size: 14px;
  margin-bottom: 20px;
}
</style>
