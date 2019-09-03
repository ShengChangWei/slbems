<template>
  <div ref="xgplayer"
       class="xgplayer">

    <div class="upload-button"
         :class="{'active': urlList.length <=0}"
         @click="uploadVideo">
      <span class="text">上传视频</span>
      <span class="arrow">《</span>
    </div>

    <!-- <video :src="videoUrl" ref="videoInfo" autoplay controls @ended="playNext"></video> -->

    <div v-if="isVisible"
         class="playBtn">
      <span @click="playBack">
        <i class="fa fa-step-backward"></i>
      </span>
      <span @click="playNext">
        <i class="fa fa-step-forward"></i>
      </span>
    </div>

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
import energyService from '@/api/energy.js';
import axios from 'axios';
import configService from '@/services/config.service';
export default {
  name: 'autoplay-video',
  components: {},
  data() {
    return {
      dialogVisible: false,
      formDate: '',
      fileList: [],
      urlList: [],
      loading: false,
      player: '',
      videoUrl: '',
      curIndex: 0,
      isVisible: false
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
      this.isVisible = false;
      const videoInfo = document.querySelector('#videoInfo');
      if (videoInfo) {
        this.$refs.xgplayer.removeChild(videoInfo);
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

      const url = configService.domain;

      // 创建一个axios
      const request = axios.create({
        baseURL: url
      });
      request.post('/fileController/uploadFile', formDate, config).then(() => {
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
          this.videoUrl = this.urlList[0];
          this.curIndex = 0;
          this.createVideo();
        }
      });
    },
    playNext() {
      this.curIndex++;
      this.playEnd();
    },

    playBack() {
      this.curIndex--;
      this.playEnd();
    },
    playEnd() {
      if (this.curIndex >= 0 && this.curIndex <= this.urlList.length - 1) {
        this.videoUrl = this.urlList[this.curIndex];
      } else {
        this.curIndex = 0;
        this.videoUrl = this.urlList[this.curIndex];
      }
      this.createVideo();
    },
    createVideo() {
      const videoInfo = document.querySelector('#videoInfo');
      if (videoInfo) {
        this.$refs.xgplayer.removeChild(videoInfo);
      }
      const newVideo = document.createElement('video');
      this.$refs.xgplayer.appendChild(newVideo);
      newVideo.src = this.videoUrl;
      newVideo.controls = true;
      newVideo.id = 'videoInfo';
      newVideo.autoplay = true;
      newVideo.style.height = '100%';
      newVideo.style.width = '100%';
      newVideo.style.objectFit = 'fill';
      newVideo.onended = this.playNext;
      this.isVisible = true;
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
  background-color: #071e44;
  &:hover {
    .playBtn {
      opacity: 1;
      transition: all 0.5s;
    }
  }

  .upload-button {
    padding: 10px;
    background: #071e44;
    width: 30px;
    position: absolute;
    color: #0be3f5;
    top: 0px;
    right: 0px;
    z-index: 2;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    transition: all 0.2s;
    cursor: pointer;
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

  video {
    height: 100%;
    width: 100%;
    object-fit: fill;
  }
  .videoInfo {
    height: 100%;
    width: 100%;
    object-fit: fill;
  }
  .playBtn {
    opacity: 0;
    position: absolute;
    bottom: 44px;
    right: 300px;
    z-index: 999;
    color: #fff;
    font-size: 20px;
    transition: all 0.6s;
    span {
      cursor: pointer;
      display: inline-block;
      &:first-of-type {
        margin-right: 40px;
      }
      i {
      }
    }
  }
}
</style>

<style lang="scss">
.xgplayer {
  .el-dialog {
    background: #071e44;
    .el-dialog__title {
      color: #fff;
    }
  }
}
</style>

