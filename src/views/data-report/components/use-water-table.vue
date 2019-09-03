<template>
    <div class="table-container">
        <div class="table-title clearfix">
            <div class="left-time">2019-08-01用水日报统计</div>
            <div class="right-btn">
                <div>导出</div>
                <div>打印</div>
            </div>
        </div>
        <div class="table-main">
            <el-scrollbar style="height: 100%;">
                <div class="table-content">
                    <table cellspacing="0">
                        <tr>
                            <th colspan="6">2019-08-01水利部综合事业局用水情况日报（单位：吨）</th>
                        </tr>
                        <tr class="house">
                            <td>水利部综合事业局总水量</td>
                            <td class="td-color">上善若水大厦水量</td>
                            <td>水务大厦水量</td>
                            <td class="td-color">食堂、空调水量</td>
                            <td>绿化水量</td>
                            <td class="td-color">损耗量</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td class="td-color"></td>
                            <td></td>
                            <td class="td-color"></td>
                            <td></td>
                            <td class="td-color"></td>
                        </tr>
                    </table>
                    <table cellspacing="0">
                        <tr>
                            <th colspan="6">2019-08-01食堂、空调用水情况日报（单位：吨）</th>
                        </tr>
                        <tr class="house">
                            <td>食堂、空调总用水量</td>
                            <td class="td-color">空调水量</td>
                            <td>食堂水量</td>
                            <td class="td-color">损耗量</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td class="td-color"></td>
                            <td></td>
                            <td class="td-color"></td>
                        </tr>
                    </table>
                    <table cellspacing="0">
                        <tr>
                            <th colspan="6">2019-08-01上善若水大厦用水情况日报（单位：吨）</th>
                        </tr>
                        <tr class="house">
                            <td>上善若水大厦总水量</td>
                            <td class="td-color">1-2层男卫生间水量</td>
                            <td>3-6层男卫生间水量</td>
                            <td class="td-color">1-2层女卫生间水量</td>
                            <td>3-6层女卫生间水量</td>
                            <td class="td-color">损耗量</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td class="td-color"></td>
                            <td></td>
                            <td class="td-color"></td>
                            <td></td>
                            <td class="td-color"></td>
                        </tr>
                    </table>

                </div>
            </el-scrollbar>
        </div>
    </div>
</template>

<script>
export default {
  name: 'use-water-table'
};
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';
.table-container {
  position: relative;
  height: 100%;
  width: 100%;
  .table-title {
    background-color: $formTitle;
    padding: 10px 10px;
    .left-time {
      float: left;
      font-weight: 700;
      font-size: 14px;
      letter-spacing: 1px;
    }
    .right-btn {
      float: right;
      > div {
        float: left;
        font-size: 13px;
        height: 20px;
        width: 60px;
        text-align: center;
        line-height: 20px;
        background-color: #fff;
        border: 1px solid $primary;
        border-radius: 3px;
        cursor: pointer;
        &:hover {
          background-color: $primary;
          color: #fff;
        }
        &:last-of-type {
          margin-left: 20px;
        }
      }
    }
  }
  .table-main {
    height: calc(100% - 40px);

    .table-content {
      //   height: 100%;
      padding: 0 60px;
      padding-bottom: 20px;
      table {
        width: 100%;
        margin-top: 60px;
        tr {
          height: 56px;
          .td-color {
            background-color: rgb(237, 241, 251);
          }
          th,
          td {
            border: 1px solid rgb(199, 211, 232);
            //   border-left: 0;
            text-align: center;
            //   border-bottom: 0;
            &:first-of-type {
              // border-left: 1px solid rgb(199, 211, 232);
            }
          }
          th {
            border-bottom: 0;
            background-color: rgb(213, 227, 255);
          }
          &.house {
            td {
              border-bottom: 0;
              border-right: 0;
              &:last-of-type {
                border-right: 1px solid rgb(199, 211, 232);
              }
            }
          }
          &:last-of-type {
            td {
              // border-bottom: 0;
              border-right: 0;
              &:last-of-type {
                border-right: 1px solid rgb(199, 211, 232);
              }
            }
          }
        }
      }
    }
  }
}
</style>
