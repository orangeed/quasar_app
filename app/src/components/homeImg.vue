<template>
  <div class="q-gutter-md row items-start home-img">
    <q-img class="img" src="https://s1.ax1x.com/2020/07/04/Nvarv9.jpg">
      <div class="absolute-full text-subtitle2 flex flex-center bg-transparent q-mb-xl">
        <p
          :class="$store.state.isMobile ? 'text-h5 text-weight-bold' : 'text-h3 text-weight-bold'"
        >橘子的分享</p>
      </div>
      <div class="absolute-full text-subtitle2 flex flex-center bg-transparent q-mt-xl">
        <p
          :class=" $store.state.isMobile ? 'text-grey-11 text-h7 typing' : 'text-grey-11 text-h5 typing'"
        >
          <span ref="hitokoto"></span>
          <i class="caret"></i>
        </p>
      </div>
      <div
        class="absolute-full text-subtitle1 flex flex-center text-center bg-transparent"
        style="margin-top:150px"
        v-if="$store.state.isMobile"
      >
        <div class="text-center">
          <span>
            <font-awesome-icon
              :icon="['fab','github']"
              class="q-mr-md avatar"
              @click="github"
              style="font-size:20px"
            />
            <q-tooltip :offset="[10, 10]">https://github.com/orangeed</q-tooltip>
          </span>
          <span>
            <font-awesome-icon
              :icon="['fab','weixin']"
              class="q-mr-md avatar"
              @click="wechat"
              style="font-size:20px"
            />
            <q-tooltip content-class="bg-green" :offset="[10, 10]">
              <img src="https://s1.ax1x.com/2020/07/04/NxncdA.jpg" alt="公众号——橘子的分享">
            </q-tooltip>
          </span>
          <span>
            <font-awesome-icon
              :icon="['fab','zhihu']"
              class="q-mr-md avatar"
              style="font-size:20px"
              @click="zhihu"
            />
            <q-tooltip
              content-class="bg-blue"
              :offset="[10, 10]"
            >https://www.zhihu.com/people/bu-qi-64-11</q-tooltip>
          </span>
          <span>
            <a href="mailto: 1208917130@qq.com" style="text-decoration: none;color:#fff">
              <font-awesome-icon :icon="['fas','envelope']" class="avatar" style="font-size:20px"/>
              <q-tooltip content-class="bg-red" :offset="[10, 10]">1208917130@qq.com</q-tooltip>
            </a>
          </span>
        </div>
      </div>
      <div class="absolute-bottom text-subtitle1 text-center bg-transparent">
        <q-icon name="keyboard_arrow_down" class="down" style="font-size:40px"/>
      </div>
    </q-img>
  </div>
</template>

<style>
</style>

<script>
export default {
  name: "homeImg",
  data() {
    return {
      //今日语句
      sentence: {},
      refLength: ""
    };
  },
  created() {},
  mounted() {
    this.getSentence();
  },
  methods: {
    write() {
      //打字效果插入句子
      // 获取显示文字的dom元素
      let textEl = this.$refs.hitokoto;
      // 获取文本
      let texts = [this.sentence.hitokoto];
      // 当前显示文本数组中的第几个
      let index = 0;
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
          // 获取完整的字符
          let text = texts[index];
          // 如果是打字效果
          if (!isDeleting) {
            // 给展示文字的p新增一个字符，使用innerHTML来替换，charIndex自增1，然后返回新的字符串子串
            textEl.innerHTML = text.slice(0, ++charIndex);
            // 每个字符打印出来的速度不一样，模仿人工打字的速度
            delta = 500 - Math.random() * 400;
          } else {
            // 如果是删除效果，则把文字一个一个减掉
            textEl.innerHTML = text.slice(0, charIndex--);
          }
          // 把star更新为当前时间，进行下一个周期
          start = time;

          // 如果文字已经全部打印完毕
          if (charIndex === text.length) {
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
            this.$axios({
              method: "get",
              url: "https://v1.hitokoto.cn/"
            }).then(res => {
              // this.sentence = { ...res.data };
              texts = [res.data.hitokoto];
            });
            isDeleting = false;
            // 额外增加200毫秒延迟
            start = time + 200;
          }
        }
      };
      window.requestAnimationFrame(type);
    },
    getSentence() {
      // this.sentence = {};
      this.$axios({
        method: "get",
        url: "https://v1.hitokoto.cn/"
      }).then(res => {
        console.log("res", res);
        if (res.data.hitokoto) {
          this.sentence = { ...res.data };
          setTimeout(() => {
            this.write();
          }, 1000);
        } else {
          this.sentence.hitokoto = "人生不像做饭，不能等万事俱备了才下锅";
        }
      });
    },
    github() {
      window.open("https://github.com/orangeed", "_blank");
    },
    wechat() {
      window.open(
        "https://mp.weixin.qq.com/mp/homepage?__biz=MzUxMTk4NjIzNw==&hid=1&sn=0dba6663f8903af2fa1b50796291c53f&scene=18#wechat_redirect",
        "_blank"
      );
    },
    zhihu() {
      window.open("https://www.zhihu.com/people/bu-qi-64-11", "_blank");
    }
  }
};
</script>
<style lang="scss" >
.img {
  // width: 100vw;
  height: 100vh;
  .q-img__image {
    background-attachment: fixed;
  }
}
//打字效果光标动画
.caret::after {
  content: "";
  display: inline-block;
  width: 2px;
  height: 1em;
  margin-bottom: -2px;
  margin-left: -2px;
  background-color: #ffffff;
  animation: blink-caret $time-text step-end infinite;
}
@keyframes blink-caret {
  50% {
    opacity: 0;
  }
}
// 提示向下动画
.down {
  animation: down 1$time-text ease infinite;
}
@keyframes down {
  0% {
    opacity: 1;
    top: 0px;
  }
  50% {
    opacity: 0.3;
    top: 10px;
  }
  100% {
    opacity: 1;
    top: 0px;
  }
}
.text-h7 {
  font-size: 1rem;
}
</style>
