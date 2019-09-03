<template>
  <div class="wind-monitoring">
    <div class="line">
      <div class="title">新风系统监控</div>
      <div class="line-content">
        <div class="content-detail">
          <div>
            <div class="title">送风温度
              <span class="go-tem">24℃</span>
            </div>
            <div class="out">
              <div class="inner">
                <div class="progress go"></div>
              </div>
            </div>
            <!-- <div>24℃</div> -->
          </div>
          <div>
            <div class="title">回风温度
              <span class="in-tem">20℃</span>
            </div>
            <div class="out">
              <div class="inner">
                <div class="progress in"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="panel">
      <div class="screen-title">排风扇系统</div>
      <div class="panel-info">
        <div class="w-panel">
          <div class="text-center"
               style="padding-top: 22px;">1号排风扇状态</div>
          <div class="text-center">
            <span></span>
          </div>
        </div>
        <div class="w-panel">
          <div class="text-center"
               style="padding-top: 22px;">1号排风扇状态</div>
          <div class="text-center">
            <span></span>
          </div>
        </div>
        <div class="w-panel">
          <div class="text-center"
               style="padding-top: 22px;">1号排风扇状态</div>
          <div class="text-center">
            <span></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'wind-monitoring'
};
</script>

<style lang="scss" scoped>
.wind-monitoring {
  width: 100%;
  height: 100%;
  .line {
    height: 60%;
    .title {
      font-size: 18px;
      color: #26bcf8;
      padding: 10px 20px;
    }
    .line-content {
      height: calc(100% - 40px);
      position: relative;
      .content-detail {
        padding: 20px 16px;
        position: absolute;
        width: 100%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        > div {
          padding: 10px 0;
          .title {
            padding: 10px 0;
            .go-tem {
              color: #ba6409;
              font-weight: 700;
              margin-left: 10px;
            }
            .in-tem {
              font-weight: 700;
              color: #b5d84b;
              margin-left: 10px;
            }
          }
          .out {
            width: 100%;
            padding: 4px;
            background: rgba(15, 27, 71, 1);
            border: 2px solid rgba(20, 125, 229, 0.42);
            border-radius: 10px;
            .inner {
              width: 100%;
              height: 20px;
              background: rgba(23, 50, 110, 1);
              border: 2px solid rgba(20, 125, 229, 0.42);
              border-radius: 10px;
              .progress {
                height: 100%;

                border-radius: 10px;
                &.go {
                  width: 70%;
                  background: -webkit-linear-gradient(
                    left,
                    #66ffff 10%,
                    #ba6409 100%
                  );
                  background-size: 200% 100%;
                  animation: masked-animation 3s linear infinite;
                }
                &.in {
                  width: 50%;
                  background: -webkit-linear-gradient(
                    left,
                    #66ffff 10%,
                    #b5d84b 100%
                  );
                  background-size: 200% 100%;
                  animation: masked-animation 3s linear infinite;
                }
              }
              @keyframes masked-animation {
                0% {
                  background-position: 0 0;
                }
                100% {
                  background-position: -100% 0;
                }
              }
            }
          }
        }
      }
    }
  }
  .panel {
    height: 40%;
    width: 100%;
    .panel-info {
      width: 100%;
      height: calc(100% - 41px);
      display: flex;
      padding-bottom: 10px;
      justify-content: space-between;
      padding: 0 10px 15px 10px;
      .w-panel {
        width: calc(100% / 3.4);
        height: 100%;
        background: url('~@/assets/images/index/w-panel.png') center no-repeat;
        background-size: 100% 100%;
        > div {
          width: 100%; // height: 50%;
          font-size: 12px;
          color: #a9ddee;
          // padding-top: px;
          > span {
            margin-top: 6px;
            display: inline-block;
            width: 15px;
            height: 15px;
            background: rgba(0, 255, 0, 1);
            border-radius: 50%;
          }
        }
      }
    }
  }
}
</style>
