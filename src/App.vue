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

        <q-toolbar-title :class="isMobile ? 'title' : 'title q-ml-md'">橘子的分享</q-toolbar-title>

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
        <div class="q-pa-sm" v-if="!isMobile">
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
      <q-list>
        <q-item-label header>Essential Links</q-item-label>
        <q-item clickable tag="a" target="_blank" href="https://quasar.dev">
          <q-item-section avatar>
            <q-icon name="school"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Docs</q-item-label>
            <q-item-label caption>quasar.dev</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://github.com/quasarframework/">
          <q-item-section avatar>
            <q-icon name="code"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Github</q-item-label>
            <q-item-label caption>github.com/quasarframework</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://chat.quasar.dev">
          <q-item-section avatar>
            <q-icon name="chat"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Discord Chat Channel</q-item-label>
            <q-item-label caption>chat.quasar.dev</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://forum.quasar.dev">
          <q-item-section avatar>
            <q-icon name="forum"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Forum</q-item-label>
            <q-item-label caption>forum.quasar.dev</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://twitter.com/quasarframework">
          <q-item-section avatar>
            <q-icon name="rss_feed"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Twitter</q-item-label>
            <q-item-label caption>@quasarframework</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
    <q-page-container style="padding-top:0px">
      <router-view/>
    </q-page-container>
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
/* 在全局CSS里引用: */
/* 滚动条宽度 */
::-webkit-scrollbar {
  width: 7px;
  height: 10px;
}
/* 滚动条的滑块 */
::-webkit-scrollbar-thumb {
  background-color: #d4a413;
  border-radius: 3px;
}
div::-webkit-scrollbar {
  width: 0;
}
</style>
