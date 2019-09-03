<template>
    <div class="water-manage">
        <div class="water-manage-title clearfix">
            <div class="pull-left">
                <el-input style="width: 200px;"
                          placeholder="请输入内容"
                          clearable
                          size="small">
                </el-input>
                <el-button type="primary"
                           style="margin-left: 10px;"
                           icon="el-icon-search"
                           size="small">查询</el-button>
                <el-button size="small"
                           icon="el-icon-refresh">重置</el-button>
                <el-button type="danger"
                           size="small"
                           icon="el-icon-delete">删除</el-button>
            </div>
            <div class="pull-right">
                <el-button type="primary"
                           size="small"
                           icon="el-icon-folder-add">新增</el-button>
            </div>

        </div>
        <div class="water-manage-content">
            <div class="table-content">
                <el-scrollbar style="height: 100%;">
                    <el-table ref="multipleTable"
                              :header-cell-style="{background:'#f5f7fa',color:'#606266','text-align': 'center'}"
                              :data="tableData"
                              :cell-style="{'text-align': 'center'}"
                              border
                              tooltip-effect="dark"
                              style="width: 100%"
                              @selection-change="handleSelectionChange">
                        <el-table-column type="selection"
                                         label="全选"
                                         width="55">
                        </el-table-column>
                        <el-table-column label="水表编号"
                                         width="120">
                            <template slot-scope="scope">{{ scope.row.date }}</template>
                        </el-table-column>
                        <el-table-column prop="name"
                                         label="水表名称"
                                         width="120">
                        </el-table-column>
                        <el-table-column prop="address"
                                         label="安装位置"
                                         show-overflow-tooltip>
                        </el-table-column>
                        <el-table-column prop="name"
                                         label="水表口径"
                                         width="120">
                        </el-table-column>
                        <el-table-column prop="name"
                                         label="水表级别"
                                         width="120">
                        </el-table-column>
                        <el-table-column prop="name"
                                         label="水表监测数据"
                                         width="120">
                        </el-table-column>
                        <el-table-column prop="name"
                                         label="水表运行状态"
                                         width="120">
                        </el-table-column>
                        <el-table-column prop="name"
                                         label="编辑"
                                         width="120">
                        </el-table-column>
                    </el-table>
                </el-scrollbar>
            </div>
            <div class="clearfix">
                <div class="pull-right pagination-detail">
                    <el-pagination background
                                   layout="prev, pager, next"
                                   :total="1000">
                    </el-pagination>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'water-manage',
  data() {
    return {
      tableData: [
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-07',
          name: '王虎1212',
          address: '上海市普陀区金沙江路 1518 弄'
        }
      ],
      multipleSelection: []
    };
  },
  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  }
};
</script>

<style lang="scss" scoped>
.water-manage {
  position: relative;
  height: 100%;
  width: 100%;
  padding: 20px;
  .water-manage-content {
    margin-top: 10px;
    height: calc(100% - 70px);
    .table-content {
      height: 100%;
    }
    .pagination-detail {
      margin-top: 10px;
    }
  }
}
</style>

