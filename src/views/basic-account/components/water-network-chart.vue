<template>
    <div class="water-network-chart">
        <div class="chart-title clearfix">
            <div class="pull-left">
                <label style="margin-right: 20px;">2019年水表配备网络图</label>
                <el-select v-model="value"
                           placeholder="请选择"
                           size="small">
                    <el-option v-for="item in options"
                               :key="item.value"
                               :label="item.label"
                               :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div class="pull-right">
                <el-button-group>
                    <el-button size="small">导入</el-button>
                    <el-button size="small">导出</el-button>
                    <el-button size="small">打印</el-button>
                </el-button-group>
            </div>
        </div>
        <div class="chart-content">

        </div>
    </div>
</template>

<script>
export default {
  name: 'water-network-chart',
  data() {
    return {
      options: [
        {
          value: '选项1',
          label: '2017年水表配备网络图'
        },
        {
          value: '选项2',
          label: '2018年水表配备网络图'
        },
        {
          value: '选项3',
          label: '2019年水表配备网络图'
        },
        {
          value: '选项4',
          label: '2020年水表配备网络图'
        },
        {
          value: '选项5',
          label: '2021年水表配备网络图'
        }
      ],
      value: ''
    };
  }
};
</script>

<style lang="scss" scoped>
.water-network-chart {
  position: relative;
  height: 100%;
  width: 100%;
  padding: 20px;
  .chart-title {
    height: 40px;
  }
}
</style>
