<template>
  <div ref="xgplayer"
       class="xgplayer">

    <div class="upload-button"
         :class="{'active': urlList.length <=0}"
         @click="uploadVideo">
      <span class="text">上传视频</span>
      <span class="arrow">》</span>
    </div>
    <!-- <div>
            <el-button @click="next">下一及</el-button>
        </div> -->
    <!-- <input type="text" ref="uploadDom"> -->
    <!-- <video :src="videoUrl" autoplay controls></video> -->

    <el-dialog title="视频上传"
               :visible.sync="dialogVisible"
               width="30%">
      <el-upload ref="upload"
                 v-loading="loading"
                 class="upload-demo"
                 element-loading-text="上传中"
                 element-loading-spinner="el-icon-loading"
                 element-loading-background="rgba(0, 0, 0, 0.2)"
                 name="files"
                 :auto-upload="false"
                 action="http://192.168.0.81:87/slbems/fileController/uploadFile"
                 :on-change="OnChange"
                 :on-remove="OnRemove"
                 multiple
                 accept=".mp4,.qlv,.qsv,.ogg,.flv,.avi,.wmv,.rmvb">
        <el-button size="small"
                   type="primary">视频上传</el-button>
      </el-upload>
      <span slot="footer"
            class="dialog-footer">
        <el-button size="mini"
                   @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary"
                   size="mini"
                   @click="onSubmit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import Player from 'xgplayer';
import energyService from '@/api/energy.js';
import axios from 'axios';
export default {
  name: 'xg-player',
  components: {},
  data() {
    return {
      dialogVisible: false,
      formDate: '',
      fileList: [],
      urlList: [],
      loading: false,
      player: ''
    };
  },
  created() {
    this.getFileList();
  },
  mounted() {},
  methods: {
    OnChange(file, fileList) {
      this.fileList = fileList;
    },
    OnRemove(file, fileList) {
      this.fileList = fileList;
    },
    onSubmit() {
      if (this.player) {
        this.player.destroy();
      }
      this.loading = true;
      const formDate = new FormData();
      for (let i = 0; i < this.fileList.length; i++) {
        formDate.append('files', this.fileList[i].raw);
      }
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      };
      axios
        .post(
          process.env.VUE_APP_API + '/fileController/uploadFile',
          formDate,
          config
        )
        .then(() => {
          this.loading = false;
          this.dialogVisible = false;
          this.$message({
            message: '视频上传成功',
            type: 'success'
          });
          this.getFileList();
        });
    },
    getFileList() {
      energyService.getFileList().then(res => {
        this.urlList = [];
        if (res.result) {
          res.result.forEach(item => {
            this.urlList.push(
              process.env.VUE_APP_API + '/fileController/preview/' + item
            );
          });
        }
        const newDiv = document.createElement('div');
        newDiv.id = 'mse';
        newDiv.style.height = '1000px';
        newDiv.style.marginTop = '20px';
        this.$refs.xgplayer.appendChild(newDiv);
        this.player = new Player({
          el: document.querySelector('#mse'),
          url: this.urlList[0],
          fluid: true,
          //   loop: true,
          autoplay: true,
          //   height: "100%",
          playNext: {
            urlList: this.urlList.reverse()
          },
          lang: 'zh-cn'
        });
        this.player.on('ended', () => {
          console.log(this.player);
          this.player.src = this.urlList[this.urlList.length - 1];
        });
      });
    },
    uploadVideo() {
      this.dialogVisible = true;
    }

    // 自定义插件
  }
};
</script>

<style lang="scss" scoped>
.xgplayer {
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
  .upload-button {
    padding: 10px;
    background: #071e44;
    width: 30px;
    position: absolute;
    color: #0be3f5;
    top: 20px;
    left: 0;
    z-index: 2;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    transition: all 0.2s;
    cursor: pointer;
    &.active {
      top: 0;
      left: 0;
    }
    &:hover {
      width: 100px;
      .text {
        display: block;
        opacity: 1;
        width: 100px;
        //  transition: all 0.5s;
      }
      .arrow {
        display: none;
      }
    }
    .text {
      display: none;
      float: left;
      opacity: 0;
      transition: all 2s;
      width: 0;
    }
    .arrow {
      float: left;
    }
  }
  #mse {
    height: 100% !important;
    width: 100%;
  }
}
</style>

<style lang="scss">
.xgplayer {
  background: #000;
  .el-dialog__header,
  .el-dialog__body,
  .el-dialog__footer {
    background-color: #071e44;
  }
  .el-dialog__title {
    color: #fff;
  }

  .el-upload-list__item-name {
    i {
      color: #2eb5f0;
    }
    color: #fff;
  }
  #mse {
    height: 100% !important;
    position: absolute;
    z-index: 1;
    video {
      object-fit: fill;
    }
  }
}
</style>
