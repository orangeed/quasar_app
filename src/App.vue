<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="head">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          v-if="isMobile"
        />

        <q-toolbar-title :class="isMobile ? 'title' : 'title q-ml-md'" @click="toHome">橘子的分享</q-toolbar-title>

        <div class="q-pa-sm" v-if="!isMobile">
          <q-icon name="home" class="q-pa-sm"/>首页
        </div>
        <div class="q-pa-sm" v-if="!isMobile">
          <q-icon name="watch_later" class="q-pa-sm"/>时间轴
        </div>
        <div class="q-pa-sm" v-if="!isMobile">
          <q-icon name="screen_share" class="q-pa-sm"/>常用网站
        </div>
        <div class="q-pa-sm" v-if="!isMobile">
          <q-icon name="note" class="q-pa-sm"/>便签
        </div>
        <div class="q-pa-sm" v-if="!isMobile">
          <q-icon name="folder" class="q-pa-sm"/>分类
        </div>
        <div class="q-pa-sm" v-if="!isMobile">
          <q-icon name="chat_bubble" class="q-pa-sm"/>留言
        </div>
        <div class="q-pa-sm" v-if="!isMobile">
          <q-icon name="reorder" class="q-pa-sm"/>
          <q-menu transition-show="jump-down" transition-hide="jump-up">
            <q-list style="min-width: 100px">
              <q-item clickable>
                <q-icon name="insert_photo" class="q-pa-sm"/>
                <q-item-section>照片</q-item-section>
              </q-item>
              <q-item clickable>
                <q-icon name="audiotrack" class="q-pa-sm"/>
                <q-item-section>音乐</q-item-section>
              </q-item>
              <q-separator/>
              <q-item clickable>
                <q-icon name="movie" class="q-pa-sm"/>
                <q-item-section>影视</q-item-section>
              </q-item>
            </q-list>
          </q-menu>多媒体
        </div>
        <div class="q-pa-sm" v-if="!isMobile" @click="toAbout">
          <q-icon name="favorite" class="q-pa-sm"/>关于
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
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="home" class="q-pa-sm"/>
            </q-item-section>

            <q-item-section class="q-pl-sm">首页</q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="watch_later" class="q-pa-sm"/>
            </q-item-section>

            <q-item-section class="q-pl-sm">时间轴</q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="screen_share" class="q-pa-sm"/>
            </q-item-section>

            <q-item-section class="q-pl-sm">常用网站</q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="note" class="q-pa-sm"/>
            </q-item-section>

            <q-item-section class="q-pl-sm">便签</q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="folder" class="q-pa-sm"/>
            </q-item-section>

            <q-item-section class="q-pl-sm">分类</q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="chat_bubble" class="q-pa-sm"/>
            </q-item-section>

            <q-item-section class="q-pl-sm">留言</q-item-section>
          </q-item>
          <q-expansion-item group="somegroup" icon="reorder" label="多媒体" class="q-pa-sm">
            <q-item clickable v-ripple class="q-pl-xl">
              <q-icon name="insert_photo" class="q-pa-sm"/>
              <q-item-section class="q-pl-md">照片</q-item-section>
            </q-item>
            <q-item clickable v-ripple class="q-pl-xl">
              <q-icon name="audiotrack" class="q-pa-sm"/>
              <q-item-section class="q-pl-md">音乐</q-item-section>
            </q-item>
            <q-item clickable v-ripple class="q-pl-xl">
              <q-icon name="movie" class="q-pa-sm"/>
              <q-item-section class="q-pl-md">影视</q-item-section>
            </q-item>
          </q-expansion-item>

          <q-item clickable v-ripple @click="toAbout">
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
    <q-scroll-area
      :thumb-style="{ borderRadius: '5px', background: '#3595e8', width: '7px', opacity: 1 }"
      :bar-style="{ borderRadius: '5px', background: '#cce5f9', width: '7px', opacity: 1 }"
      style="height: 100vh; width:100vw"
    >
      <q-page-container style="padding-top:0px">
        <router-view/>
      </q-page-container>
      <footer>
        <div class="footer-wrap">
          <div class="copyright">©2020 By 橘子orange</div>
          <div class="footer_custom_text">这是橘子orange的个人博客哟！</div>
        </div>
      </footer>
    </q-scroll-area>
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
      leftDrawer: false
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
        let that = this;
        setTimeout(function() {
          // 打印screenWidth变化的值
          // console.log(that.screenWidth);
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
    //跳转到首页
    toHome() {
      this.$router.push("/");
    },
    //跳转到关于页面
    toAbout() {
      this.$router.push("/about");
    }
  }
};
</script>

<style lang='scss'>
.head {
  background: rgba($color: #ffffff, $alpha: 0) !important;
  .title {
    font-size: 18px;
    text-shadow: 0.1rem 0.1rem 0.2rem rgba(0, 0, 0, 0.15);
    font-weight: bold;
    cursor: pointer;
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
</style>
