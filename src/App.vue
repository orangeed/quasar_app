<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="glossy">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
          v-if="isShow"
        />

        <q-toolbar-title>橘子的分享</q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
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

    <q-page-container>
      <HelloWorld/>
    </q-page-container>
  </q-layout>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "LayoutDefault",

  components: {
    HelloWorld
  },

  data() {
    return {
      leftDrawerOpen: false,
      screenWidth: document.body.clientWidth,
      isShow: false,
      leftDrawer: false
    };
  },
  mounted() {
    // 1、数据首次加载完后 → 获取图片（或外层框）宽度，并设置其高度
    // this.$nextTick(() => {
    //   // 获取图片（或外层框）
    //   let imgBox = this.$refs.imgBox;
    //   // 获取其宽度
    //   let wImgbox = imgBox[0].getBoundingClientRect().width;
    //   // 设置其高度（以宽度的60%为例）
    //   this.imgBox.height = 0.6 * wImgbox + "px";
    // });
    // 2、挂载 reisze 事件 → 屏幕缩放时监听宽度变化
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth;
        this.screenWidth = window.screenWidth;
        // console.log("screenWidth", this.screenWidth);
        if (this.screenWidth <= 770) {
          this.isShow = true;
          // this.leftDrawerOpen = false;
          this.leftDrawer = true;
        } else {
          this.isShow = false;
          // this.leftDrawerOpen = true;
          this.leftDrawer = false;
        }
        // this.$nextTick(() => {
        //   let imgBox = this.$refs.imgBox;
        //   let wImgbox = imgBox[0].getBoundingClientRect().width;
        //   this.imgBox.height = 0.6 * wImgbox + "px";
        // });
      })();
    };
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
  }
};
</script>

<style>
</style>
