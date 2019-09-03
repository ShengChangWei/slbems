<template>
    <div class="unit-detail">
        <!-- 单位简介 -->
        <div class="unit-brief">
            <div class="title">
                单位简介
                <el-link icon="el-icon-edit"
                         type="primary">编辑</el-link>
            </div>
            <div class="unit-table">
                <table class="table table-bordered">
                    <tbody>
                        <tr>
                            <td>
                                <label>单位名称：</label>
                                <span>综合事业局</span>
                            </td>
                            <td>
                                <label>通讯地址：</label>
                                <span>北京市朝阳区xx大街</span>
                            </td>
                            <td>
                                <label>邮政编码：</label>
                                <span>000001</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>主管部门：</label>
                                <span>办公室</span>
                            </td>
                            <td>
                                <label>联系人：</label>
                                <span>张三</span>
                            </td>
                            <td>
                                <label>电话：</label>
                                <span>66321333</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>占地面积：</label>
                                <span>1200</span>
                            </td>
                            <td>
                                <label>建筑面积：</label>
                                <span>3000</span>
                            </td>
                            <td>
                                <label>住宿面积：</label>
                                <span>000001</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>职工人数：</label>
                                <span>20</span>
                            </td>
                            <td>
                                <label>住宿人数：</label>
                                <span>0</span>
                            </td>
                            <td>

                            </td>
                        </tr>
                    </tbody>

                </table>
            </div>

        </div>
        <!-- 用水单位明细表 -->
        <div class="use-water-list">
            <div class="title">
                用水单元明细表
            </div>
            <table class="table table-bordered"
                   style="margin-top: 20px;">
                <thead>
                    <tr>
                        <th class="text-center">序号</th>
                        <th class="text-center">用水单元名称</th>
                        <th class="text-center">主要用水类型</th>
                        <th class="text-center">操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>水务大厦</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>上善若水大厦</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>食堂</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>空调</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>绿化</td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- 年度用水统计 -->
        <div class="water-static">
            <div class="title">
                年度用水统计
            </div>

            <div class="water-static-content">
                <e-vue-echartsjs style="width: 100%; height: 600px;"
                                 :options="options"
                                 @ready="onEChartsReady($event)"></e-vue-echartsjs>

            </div>
        </div>
        <!-- 智能水表配备情况 -->
        <div class="water-status">
            <div class="title">
                智能水表配备情况
            </div>
            <table class="table table-bordered"
                   style="margin-top: 20px;">
                <thead>
                    <tr>
                        <th colspan="2"
                            class="text-center">一级表</th>
                        <th colspan="2"
                            class="text-center">二级表</th>
                        <th colspan="2"
                            class="text-center">三级表</th>
                    </tr>
                    <tr>
                        <th class="text-center">数量</th>
                        <th class="text-center">配备率</th>
                        <th class="text-center">数量</th>
                        <th class="text-center">配备率</th>
                        <th class="text-center">数量</th>
                        <th class="text-center">配备率</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <el-input></el-input>
                        </td>
                        <td>
                            <el-input></el-input>
                        </td>
                        <td>
                            <el-input></el-input>
                        </td>
                        <td>
                            <el-input></el-input>
                        </td>
                        <td>
                            <el-input></el-input>
                        </td>
                        <td>
                            <el-input></el-input>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
  name: 'unit-detail',
  data() {
    return {
      options: {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar'
          }
        ]
      },
      echartsIntance: null
    };
  },
  mounted() {
    window.onresize = () => {
      this.echartsIntance.resize();
    };
  },
  methods: {
    onEChartsReady(evt) {
      this.echartsIntance = evt.echartsIntance;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';
.unit-detail {
  position: relative;
  height: 100%;
  width: 100%;
  padding: 20px;
  .title {
    // padding: 8px;
    font-size: 15px;
    font-weight: 700px;
    color: #000;
    &::before {
      display: inline-block;
      content: '';
      font-size: 16px;
      margin-right: 6px;
      width: 4px;
      height: 16px;
      vertical-align: middle;
      background: $primary;
    }
  }
  .unit-brief {
    .unit-table {
      padding-top: 20px;
    }
  }
  .use-water-list {
    table {
      tr {
        td {
          text-align: center;
        }
      }
    }
  }
  .water-static {
    .water-static-content {
      margin-top: 20px;
    }
  }
}
</style>
