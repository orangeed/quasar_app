<!-- 调用摄像头 -->
<template>
  <div class="app-container">
    <el-button type="primary" @click="openVideo">打开摄像头</el-button>
    <el-button @click="closeVideo">关闭摄像头</el-button>
    <el-button type="danger" @click="screenshot">截图</el-button>
    <div>
      <video id="video" ref="video" />
    </div>
    <canvas ref="canvas" width="400" height="300" style="display:none" />
    <!-- 截图展示图片 -->
    <img ref="screenshot">
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    // 打开摄像头
    openVideo() {
      // 老的浏览器可能根本没有实现 mediaDevices，所以我们可以先设置一个空的对象
      console.log('navigator.mediaDevices', navigator.mediaDevices)
      if (navigator.mediaDevices === undefined) {
        navigator.mediaDevices = {}
      }
      // 一些浏览器部分支持 mediaDevices。我们不能直接给对象设置 getUserMedia
      // 因为这样可能会覆盖已有的属性。这里我们只会在没有getUserMedia属性的时候添加它。
      if (navigator.mediaDevices.getUserMedia === undefined) {
        navigator.mediaDevices.getUserMedia = constraints => {
          // 首先，如果有getUserMedia的话，就获得它
          const getUserMedia =
            navigator.getUserMedia ||
            (navigator.getUserMedia =
              navigator.mozGetUserMedia ||
              navigator.webkitGetUserMedia ||
              navigator.msGetUserMedia)
          console.log('getUserMedia', getUserMedia)
          // 一些浏览器根本没实现它 - 那么就返回一个error到promise的reject来保持一个统一的接口
          if (!getUserMedia) {
            return Promise.reject(new Error('该浏览器暂不支持摄像头！'))
          }
          // 否则，为老的navigator.getUserMedia方法包裹一个Promise
          return new Promise((resolve, reject) => {
            getUserMedia.call(navigator, constraints, resolve, reject)
          })
        }
      }
      const constraints = {
        audio: true,
        video: {
          width: { ideal: 1280, max: 1920 },
          height: { ideal: 720, max: 1080 }
        }
      }
      console.log('window.navigator', window.navigator)
      window.navigator.mediaDevices
        .getUserMedia(constraints)
        .then(stream => {
          const video = this.$refs.video
          // 旧的浏览器可能没有srcObject
          if ('srcObject' in video) {
            video.srcObject = stream
          } else {
            // 防止在新的浏览器里使用它，因为它已经不再支持了
            video.src = window.URL.createObjectURL(stream)
          }
          video.onloadedmetadata = e => {
            video.play()
          }
        })
        .catch(err => {
          console.log(err.name + ': ' + err.message)
        })
    },
    // 关闭摄像头
    closeVideo() {
      console.log('srcObject', this.$refs.video.srcObject)
      const srcObject = this.$refs.video.srcObject
        ? this.$refs.video.srcObject.getTracks()
        : this.$refs.video.src.getTracks()
      srcObject.forEach(track => {
        track.stop()
        this.$refs.video.src = null
      })
    },
    // 截图
    screenshot() {
      // 获取视频
      const video = this.$refs.video
      // 获取截图的地址
      const screenshot = this.$refs.screenshot
      // 获取canvas
      const canvas = this.$refs.canvas
      // 渲染一个2d平面的试图
      const ctx = canvas.getContext('2d')
      // 设置canvas 试图文件地址和大小
      ctx.drawImage(video, 0, 0, 400, 300)
      // 将数据转为base64赋值给img标签的src属性
      screenshot.src = canvas.toDataURL('image/png')
      console.log('screenshot.src', screenshot.src)
      const imgData = canvas
        .toDataURL('image/png')
        .replace('image/png', 'image/octet-stream')
      // 下载图片到本地
      const save_link = document.createElementNS(
        'http://www.w3.org/1999/xhtml',
        'a'
      )
      save_link.href = imgData
      save_link.download = 'file_' + new Date().getTime() + '.png'
      save_link.click()
    }
  }
}
</script>

<style scoped lang="scss">
</style>
