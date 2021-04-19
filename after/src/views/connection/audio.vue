<!-- 语音通话 -->
<template>
  <div>
    <!-- <video ref="video" controls autoplay></video> -->
    <audio ref="audio" controls autoplay></audio>
    <!-- <audio ref="audio" controls autoplay style="display:none"></audio> -->

    <el-button type="primary" @click="handleBeginConntion"
      >拨打语音通话</el-button
    >
    <el-button type="danger" @click="handleEndConnection"
      >结束语音通话</el-button
    >
  </div>
</template>

<script>
import { Recorder, addWavHeader } from "../../utils/audio";
export default {
  props: {},
  data() {
    return {
      // ws
      ws: null,
      constraints: {},
      // 录音器
      mediaRecorder: null,
      // 音频块
      chunks: [],
      // 音频数据blob
      audioBlob: null,
      // 计时器，每隔一段时间发送
      timer: null,
      timer1: null,
      // 收集的数据
      rec: null,
      // 接收到的数据
      blob: null,
      // 将接收到的数据转换成为url
      audioURL: "",
      // buffer数组
      bufferArr: [],
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    // 拨打语音通话
    handleBeginConntion() {
      // 判断是否存在语音通话
      if (window.WebSocket) {
        if (this.ws) {
          this.$message.error("已经发起来语音通话");
          return;
        }
        console.log("开始语音通话");
        this.ws = new WebSocket("wss://192.168.4.108:8080");
        // this.ws = new WebSocket("ws://localhost:8181");
        // this.ws = new WebSocket("wss://192.168.10.110:8181");
        const audio = this.$refs.audio;
        // const video = this.$refs.video
        // this.ws.binaryType = "arraybuffer"; //传输的是 ArrayBuffer 类型的数据
        this.ws.onopen = (e) => {
          console.log("服务器连接成功！", e);

          this.handleStartRecord().then(() => {
            //业务命令构建
            // const data = {
            //   nameKey: "orange",
            // };
            // this.ws.send(JSON.stringify(data));

            this.timer = setInterval(() => {
              this.rec.start();
              this.ws.send(this.rec.getBlob());
            }, 300);
          });
        };
        this.ws.onclose = (e) => {
          console.log("服务器连接关闭", e);
        };
        this.ws.onerror = (e) => {
          console.log("服务器连接失败", e);
        };
        this.ws.onmessage = (e) => {
          console.log("接受服务器发送的信息", e);
          this.audioURL = window.URL.createObjectURL(e.data);
          console.log("audioURL", this.audioURL);
          audio.src = this.audioURL;
        };
      } else {
        this.$message.error("您的浏览器不支持websocket");
      }
    },
    // 结束语音通话
    handleEndConnection() {
      if (this.ws) {
        console.log("结束语音通话");
        clearInterval(this.timer);
        clearInterval(this.timer1);
        this.ws.close();
        // this.mediaRecorder.stop();
        this.rec.clear();
        this.rec.stop();
        this.ws = null;
        this.mediaRecorder = null;
      } else {
        this.$message.error("没有通话了");
      }
    },
    // 语音输入
    async handleStartRecord() {
      // 1.首先判断浏览器是否支持录音
      if (navigator.mediaDevices.getUserMedia) {
        this.constraints = {
          audio: true,
          video: true,
        };
        navigator.mediaDevices.getUserMedia(this.constraints).then(
          (stream) => {
            console.log("授权成功！");
            // 2.判断是否存在一个录音
            // 如果没有录音，则创建一个录音
            if (!this.mediaRecorder) {
              this.rec = new Recorder(stream);
              console.log("rec", this.rec);
            } else {
              this.$message.error("已经在通话中啦！");
            }
          },
          (error) => {
            console.log("授权失败", error);
            this.$message.error("授权失败", error);
          }
        );
      } else {
        this.$message.error("浏览器不支持通话功能！");
      }
    },
    // 解码
    // handleReceive(data) {
    //   console.log("data", data);
    //   if (typeof e == "string" && JSON.parse(e).message == "OK") {
    //     console.log("OK");
    //   } else {
    //     var buffer = new Response(data).arrayBuffer();
    //     buffer.then(function (buf) {
    //       console.log("buff", buf);
    //       var audioContext = new (window.AudioContext ||
    //         window.webkitAudioContext)();
    //       var fileResult = addWavHeader(buf, "16000", "16", "1"); //解析数据转码wav
    //       audioContext.decodeAudioData(fileResult, function (buffer) {
    //         _visualize(audioContext, buffer); //播放
    //       });
    //     });
    //   }
    // },
  },
  components: {},
};
</script>

<style scoped lang="scss">
</style>
