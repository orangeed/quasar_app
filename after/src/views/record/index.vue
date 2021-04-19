
<!-- 录音 -->
<template>
  <div id="record">
    <audio ref="audio" controls class="audio-player"></audio>
    <el-button type="primary" @click="handleStartRecord">开始录音</el-button>
    <el-button type="primary" @click="handlePauseRecord">暂停录音</el-button>
    <el-button type="primary" @click="handleResumeRecord">重新录音</el-button>
    <el-button type="primary" @click="handleStopRecord">结束录音</el-button>
    <el-button type="primary" @click="handleDowload">下载文件</el-button>
  </div>
</template>

<script>
import { login } from "../../api/user";
export default {
  props: {},
  data() {
    return {
      btnText: "开始录音",
      constraints: {},
      // 录音器
      mediaRecorder: null,
      // 音频块
      chunks: [],
      // 录音文件地址
      audioURL: "",
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    // 开始录音
    handleStartRecord() {
      // 1.首先判断浏览器是否支持录音
      if (navigator.mediaDevices.getUserMedia) {
        this.constraints = {
          audio: true,
        };
        navigator.mediaDevices.getUserMedia(this.constraints).then(
          (stream) => {
            console.log("授权成功！");
            // 2.判断是否存在一个录音
            // 如果没有录音，则创建一个录音
            if (!this.mediaRecorder) {
              this.mediaRecorder = new MediaRecorder(stream);
              console.log("mediaRecorder", this.mediaRecorder);
              // 创建完录音流后开始录音
              this.mediaRecorder.start();
              console.log("录音中...");
              this.$message.info("录音中...");
              // 4.将录音的数据放在块中
              this.mediaRecorder.ondataavailable = (e) => {
                console.log("e", e);
                this.chunks.push(e.data);
              };
              console.log("录音器的状态是1：", this.mediaRecorder.state);
            } else {
              this.$message.error("已经在录音啦！");
            }
          },
          (error) => {
            console.log("授权失败", error);
            this.$message.error("授权失败", error);
          }
        );
      } else {
        this.$message.error("浏览器不支持录音功能！");
      }
    },
    // 暂停录音
    handlePauseRecord() {
      if (this.mediaRecorder) {
        this.mediaRecorder.pause();
        console.log("暂停录音");
        this.$message.info("暂停录音...");
        console.log("录音器的状态是2：", this.mediaRecorder.state);
      } else {
        this.$message.error(`请先开始录音`);
      }
    },
    // 重新录音
    handleResumeRecord() {
      if (this.mediaRecorder) {
        this.mediaRecorder.resume();
        console.log("重新录音");
        this.$message.info("重新录音");
        console.log("录音器的状态是3：", this.mediaRecorder.state);
      } else {
        this.$message.error(`请先开始录音`);
      }
    },
    // 停止录音
    handleStopRecord() {
      if (this.mediaRecorder) {
        this.mediaRecorder.stop();
        console.log(this.chunks);
        this.mediaRecorder.onstop = (e) => {
          let blob = new Blob(this.chunks, {
            type: "audio/ogg; codecs=opus",
          });
          console.log("blob", blob);
          this.chunks = [];
          this.audioURL = window.URL.createObjectURL(blob);
          console.log("audioURL", this.audioURL);
          const audioSrc = this.$refs.audio;
          audioSrc.src = this.audioURL;
          // 创建表单元素
          let formData = new FormData();
          const audioName = encodeURIComponent(
            "audio_recording_" + new Date().getTime() + ".mp3"
          );
          // formData.append("upFile", blob, audioName);
          formData.append("audioName", audioName);
          formData.append("upFile", blob);
          console.log("formData", formData);
          // 上传文件
          // login(formData).then((res) => {
          //   console.log("res", res);
          // });
        };
        console.log("结束录音");
        this.$message.info("结束录音");
        console.log("录音器的状态是4：", this.mediaRecorder.state);
        this.mediaRecorder = null;
      } else {
        this.$message.error(`请先开始录音`);
      }
    },
    // 下载文件
    handleDowload() {
      let a = document.createElement("a");
      a.href = this.audioURL;
      a.download = new Date().toISOString() + ".wav";
      a.click();
    },
  },
  components: {},
};
</script>

<style scoped lang="scss">
</style>
