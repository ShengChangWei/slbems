<template>
    <div class="pic-container">
        <div class="pic-title clearfix">
            <div class="left-time">2019-08-01用水日报统计</div>
            <div class="right-btn">
                <div>导出</div>
                <div>打印</div>
            </div>
        </div>
        <div class="pic-main">
            <el-scrollbar style="height: 100%;">
                <div class="pic-list">
                    <div class="pic-main-title">
                        <span></span>
                        <span>2019-08-01用水日报统计</span>
                    </div>
                    <div class="pic-main-content">
                        <img src="@/assets/images/pc/ysgxt_1.png"
                             alt="">
                    </div>
                </div>
                <div class="pic-list">
                    <div class="pic-main-title">
                        <span></span>
                        <span>2019-08-01用水日报统计</span>
                    </div>
                    <div class="pic-main-content ysgxt_3">
                        <img src="@/assets/images/pc/ysgxt_2.png"
                             alt="">
                    </div>
                </div>
                <div class="pic-list">
                    <div class="pic-main-title">
                        <span></span>
                        <span>2019-08-01用水日报统计</span>
                    </div>
                    <div class="pic-main-content">
                        <img src="@/assets/images/pc/ysgxt_3.png"
                             alt="">
                    </div>
                </div>

            </el-scrollbar>
        </div>
    </div>
</template>

<script>
export default {
  name: 'use-water-pic'
};
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';
.pic-container {
  position: relative;
  height: 100%;
  width: 100%;
  .pic-title {
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
  .pic-main {
    height: calc(100% - 40px);
    .pic-list {
      padding: 20px 0;
      .pic-main-title {
        font-weight: 700;
        margin-top: 10px;
        margin-left: 20px;
      }
      .pic-main-content {
        text-align: center;
        margin-top: 20px;
        img {
          width: 80%;
        }
        &.ysgxt_3 {
          img {
            width: 48%;
          }
        }
      }
    }
  }
}
</style>
