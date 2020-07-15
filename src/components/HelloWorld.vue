<template>
  <div class="q-gutter-md row items-start home-img">
    <q-img class="img" src="https://s1.ax1x.com/2020/07/04/Nvarv9.jpg">
      <div class="absolute-full text-subtitle2 flex flex-center bg-transparent q-mb-xl">
        <p
          :class="$store.state.isMobile ?'text-h4 text-weight-bold' : 'text-h3 text-weight-bold'"
        >橘子的分享</p>
      </div>
      <div class="absolute-full text-subtitle2 flex flex-center bg-transparent q-mt-xl">
        <p
          :class=" $store.state.isMobile ? 'text-grey-11 text-h6 typing' : 'text-grey-11 text-h5 typing'"
        >
          <span ref="hitokoto">{{sentence.hitokoto}}</span>
          <i class="caret"></i>
        </p>
      </div>
    </q-img>
  </div>
</template>

<style>
</style>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      //今日语句
      sentence: {},
      refLength: ""
    };
  },
  created() {
    this.getSentence();
  },
  mounted() {},
  methods: {
    write() {
      //打字效果插入句子
      // 获取显示文字的dom元素
      let textEl = this.$refs.hitokoto;
      // 获取文本
      let texts = this.sentence.hitokoto;
      // 当前显示第几个字
      let charIndex = 0;
      // 每个字显示间隔默认是500毫秒
      let delta = 500;
      // 记录动画执行开始时间
      let start = null;
      // 是否为删除动画
      let isDeleting = false;
      // 动画回调函数
      const type = time => {
        window.requestAnimationFrame(type);
        // 初始化开始时间
        if (!start) start = time;
        // 获取时间间隔
        let progress = time - start;
        // 每隔一定的时间，打印出一个新的字符
        if (progress > delta) {
          // 如果是打字效果
          if (!isDeleting) {
            // 给展示文字的p新增一个字符，使用innerHTML来替换，charIndex自增1，然后返回新的字符串子串
            textEl.innerHTML = texts.slice(0, ++charIndex);
            // 每个字符打印出来的速度不一样，模仿人工打字的速度
            delta = 500 - Math.random() * 400;
          } else {
            // 如果是删除效果，则把文字一个一个减掉
            textEl.innerHTML = texts.slice(0, charIndex--);
          }
          // 把star更新为当前时间，进行下一个周期
          start = time;

          // 如果文字已经全部打印完毕
          if (charIndex === texts.length) {
            // 下次开始删除文字
            isDeleting = true;
            // 删除文字的间隔为200毫秒
            delta = 200;
            // 额外等待1.2秒后再删除
            start = time + 1200;
            console.log(111);
          }
          // 如果文字删除完毕
          if (charIndex < 0) {
            console.log("textEl", textEl);
            // textEl.innerHTML = "";
            this.getSentence();
            isDeleting = false;
            // 额外增加200毫秒延迟
            start = time + 200;
            // textEl.innerHTML = "";

            // 把index移动到下一个文本，并且在文本数组元素个数中循环
            // index = ++index % texts.length;
          }
        }
      };
      window.requestAnimationFrame(type);
    },
    getSentence() {
      this.sentence = {};
      this.$axios({
        method: "get",
        url: "https://v1.hitokoto.cn/"
      }).then(res => {
        console.log("res", res);
        this.sentence = { ...res.data };
        console.log("sentence", this.sentence);
        // this.write();
        setTimeout(() => {
          this.write();
        }, 200);
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.img {
  // width: 100vw;
  height: 100vh;
}
.caret::after {
  content: "";
  display: inline-block;
  width: 2px;
  height: 1em;
  margin-bottom: -2px;
  margin-left: -2px;
  background-color: #ffffff;
  animation: blink-caret 0.5s step-end infinite;
}
@keyframes blink-caret {
  50% {
    opacity: 0;
  }
}
</style>
