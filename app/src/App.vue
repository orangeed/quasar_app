<template>
  <q-layout view="lHh Lpr lFf" @scroll="scroll">
    <q-header class="head" reveal>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          v-if="isMobile"
        />

        <q-toolbar-title
          :class="isMobile ? 'title' : 'title q-ml-md'"
          @click="$router.push('/')"
        >橘子的分享</q-toolbar-title>

        <div class="q-pa-sm link" v-if="!isMobile" @click="$router.push('/')">
          <q-icon name="home " class="q-pa-sm"/>首页
        </div>
        <div class="q-pa-sm link" v-if="!isMobile" @click="$router.push('/timeline')">
          <q-icon name="watch_later" class="q-pa-sm"/>时间轴
        </div>
        <div class="q-pa-sm link" v-if="!isMobile" @click="$router.push('/website')">
          <q-icon name="screen_share" class="q-pa-sm"/>常用网站
        </div>
        <!-- <div class="q-pa-sm link" v-if="!isMobile">
          <q-icon name="note" class="q-pa-sm"/>便签
        </div>-->
        <div class="q-pa-sm link" v-if="!isMobile" @click="$router.push('/classification')">
          <q-icon name="folder" class="q-pa-sm"/>分类
        </div>
        <div class="q-pa-sm link" v-if="!isMobile" @click="$router.push('/message')">
          <q-icon name="chat_bubble" class="q-pa-sm"/>留言
        </div>
        <div class="q-pa-sm link" v-if="!isMobile">
          <q-icon name="reorder" class="q-pa-sm"/>
          <q-menu transition-show="scale" transition-hide="scale">
            <q-list style="min-width: 100px">
              <q-item clickable @click="$router.push('/classificationDetail?classification=照片')">
                <q-icon name="insert_photo" class="q-pa-sm"/>
                <q-item-section>照片</q-item-section>
              </q-item>
              <q-item clickable @click="$router.push('/classificationDetail?classification=音乐')">
                <q-icon name="audiotrack" class="q-pa-sm"/>
                <q-item-section>音乐</q-item-section>
              </q-item>
              <q-item clickable @click="$router.push('/classificationDetail?classification=影视')">
                <q-icon name="movie" class="q-pa-sm"/>
                <q-item-section>影视</q-item-section>
              </q-item>
            </q-list>
          </q-menu>多媒体
        </div>
        <div class="q-pa-sm link" v-if="!isMobile" @click="$router.push('/about')">
          <q-icon name="favorite" class="q-pa-sm"/>关于
        </div>
        <div class="q-pa-sm link" v-if="!isMobile" @click="$router.push('/version')">
          <font-awesome-icon
            :icon="['fas','code-branch']"
            class="q-ma-sm"
            style="vertical-align: middle"
          />版本
        </div>
      </q-toolbar>
    </q-header>
    <q-drawer
      v-if="leftDrawer"
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-2"
    >
      <q-scroll-area
        style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd"
        :thumb-style="{ borderRadius: '5px', background: '#3595e8', width: '7px', opacity: 1 }"
        :bar-style="{ borderRadius: '5px', background: '#cce5f9', width: '7px', opacity: 1 }"
      >
        <q-list padding style="font-size:15px">
          <q-item clickable v-ripple @click="$router.push('/')">
            <q-item-section avatar>
              <q-icon name="home" class="q-pa-sm"/>
            </q-item-section>

            <q-item-section class="q-pl-sm">首页</q-item-section>
          </q-item>

          <q-item clickable v-ripple @click="$router.push('/timeline')">
            <q-item-section avatar>
              <q-icon name="watch_later" class="q-pa-sm"/>
            </q-item-section>

            <q-item-section class="q-pl-sm">时间轴</q-item-section>
          </q-item>

          <q-item clickable v-ripple @click="$router.push('/website')">
            <q-item-section avatar>
              <q-icon name="screen_share" class="q-pa-sm"/>
            </q-item-section>

            <q-item-section class="q-pl-sm">常用网站</q-item-section>
          </q-item>

          <!-- <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="note" class="q-pa-sm"/>
            </q-item-section>

            <q-item-section class="q-pl-sm">便签</q-item-section>
          </q-item>-->
          <q-item clickable v-ripple click="$router.push('/classification')">
            <q-item-section avatar>
              <q-icon name="folder" class="q-pa-sm"/>
            </q-item-section>

            <q-item-section class="q-pl-sm">分类</q-item-section>
          </q-item>
          <q-item clickable v-ripple @click="$router.push('/message')">
            <q-item-section avatar>
              <q-icon name="chat_bubble" class="q-pa-sm"/>
            </q-item-section>

            <q-item-section class="q-pl-sm">留言</q-item-section>
          </q-item>
          <q-expansion-item group="somegroup" icon="reorder" label="多媒体" class="q-pa-sm">
            <q-item
              clickable
              v-ripple
              class="q-pl-xl"
              @click="$router.push('/classificationDetail?classification=照片')"
            >
              <q-icon name="insert_photo" class="q-pa-sm"/>
              <q-item-section class="q-pl-md">照片</q-item-section>
            </q-item>
            <q-item
              clickable
              v-ripple
              class="q-pl-xl"
              @click="$router.push('/classificationDetail?classification=音乐')"
            >
              <q-icon name="audiotrack" class="q-pa-sm"/>
              <q-item-section class="q-pl-md">音乐</q-item-section>
            </q-item>
            <q-item
              clickable
              v-ripple
              class="q-pl-xl"
              @click="$router.push('/classificationDetail?classification=影视')"
            >
              <q-icon name="movie" class="q-pa-sm"/>
              <q-item-section class="q-pl-md">影视</q-item-section>
            </q-item>
          </q-expansion-item>

          <q-item clickable v-ripple @click="$router.push('/about')">
            <q-item-section avatar>
              <q-icon name="favorite" class="q-pa-sm"/>
            </q-item-section>

            <q-item-section class="q-pl-sm">关于</q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <q-img
        class="absolute-top"
        src="https://s1.ax1x.com/2020/06/24/NwAGB6.md.jpg"
        style="height: 150px"
      >
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="https://s1.ax1x.com/2020/07/07/UA7cFS.jpg">
          </q-avatar>
          <div class="text-weight-bold">橘子orange</div>
          <div>人生不像做饭，不能等万事俱备了才下锅</div>
        </div>
      </q-img>
    </q-drawer>
    <!-- <q-scroll-area
      :thumb-style="{ borderRadius: '5px', background: '#3595e8', width: '7px', opacity: 1 }"
      :bar-style="{ borderRadius: '5px', background: '#cce5f9', width: '7px', opacity: 1 }"
      style="height: 100vh; width:100vw"
    >-->
    <q-page-container style="padding-top:0px">
      <router-view/>
    </q-page-container>
    <footer>
      <div class="footer-wrap">
        <div class="copyright">©2020 By 橘子orange</div>
        <div class="footer_custom_text">这是橘子orange的个人博客哟！</div>
      </div>
    </footer>
    <!-- </q-scroll-area> -->
    <asideTip :scrollTop="scrollTop"/>
  </q-layout>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "LayoutDefault",

  components: {},

  data() {
    return {
      leftDrawerOpen: false,
      screenWidth: document.body.clientWidth,
      isMobile: false,
      leftDrawer: false,
      scrollTop: 0
    };
  },

  mounted() {
    console.log("===", this.$store);
    // 挂载 reisze 事件 → 屏幕缩放时监听宽度变化
    window.onresize = () => {
      this.onresize();
    };
    this.onresize();
  },
  watch: {
    screenWidth(val) {
      // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
      if (!this.timer) {
        // 一旦监听到的screenWidth值改变，就将其重新赋给data里的screenWidth
        this.screenWidth = val;
        this.timer = true;
        setTimeout(() => {
          // 打印screenWidth变化的值
          // console.log(this.screenWidth);
          that.timer = false;
        }, 400);
      }
    }
  },
  methods: {
    //查询屏幕大小
    onresize() {
      window.screenWidth = document.body.clientWidth;
      this.screenWidth = window.screenWidth;
      // console.log("screenWidth", this.screenWidth);
      if (this.screenWidth <= 1023) {
        this.isMobile = true;
        this.$store.commit("SET_MOBILE", this.isMobile);
        this.leftDrawer = true;
      } else {
        this.isMobile = false;
        this.$store.commit("SET_MOBILE", this.isMobile);
        this.leftDrawer = false;
      }
    },
    scroll() {
      this.scrollTop = document.documentElement.scrollTop;
    }
  }
};
</script>

<style lang='scss'>
html {
  scroll-behavior: smooth;
}
// body {
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0; /* fixed 定位覆盖页面 */
//   z-index: 9999; /* 层叠放到很高的一个位置，盖在页面上 */
//   mix-blend-mode: difference; /* 混合模式，反色 */
//   background-color: #fff; /* 结合混合模式做反色处理的对比色 */
//   pointer-events: none; /* 作为一个层覆盖在元素上，但不能妨碍页面元素点击，添加一个穿透效果 */
// }

// .all {
//   background-blend-mode: darken;
//   filter: brightness(80%) grayscale(20%) contrast(1.2);
// }

/*控制整个滚动条*/
::-webkit-scrollbar {
  // background-color: lightgray;
  width: 8px;
  // height: 10px;
  background-clip: padding-box;
}
/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {
  // box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #f5f5f5;
}
/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  // box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #49b1f5;
}
.my-card {
  height: 100%;
  width: 100%;
  margin: 0 auto;
}
.head {
  background: rgba($color: #ffffff, $alpha: 0) !important;

  .title {
    font-size: 18px;
    text-shadow: 0.1rem 0.1rem 0.2rem rgba(0, 0, 0, 0.15);
    font-weight: bold;
    cursor: pointer;
  }
  .link {
    cursor: pointer;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      top: -8px;
      right: 50%; /*下划线从右侧开始显示*/
      width: 0;
      height: 100%;
      border-bottom: 2px solid #49b1f5;
      transition: 0.2s all linear; /*动画效果*/
    }
    &:hover:before {
      right: 0; /*鼠标滑过时，下划线从右向左移动*/
      width: 80%; /*同时，下划线宽度从0-100%*/
    }
  }
}
footer {
  background-image: url("https://s1.ax1x.com/2020/07/04/Nvarv9.jpg");
  position: relative;
  // background: #49b1f5;
  background-attachment: local;
  background-position: bottom;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  .footer-wrap {
    position: relative;
    padding: 2rem 1rem;
    color: #eee;
    text-align: center;
  }
}

.q-card {
  border-radius: 8px !important;
}

//公用的样式
.left {
  flex: 3;
  .description {
    /* 多余内容省略号处理-多行 */
    word-break: break-all;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
}
.left-mobile {
  .description {
    /* 多余内容省略号处理-多行 */
    word-break: break-all;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
}
a {
  text-decoration: none;
}
</style>
