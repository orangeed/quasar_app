<!-- 侧边小工具 -->
<template>
  <div id="asideTip" :class="{on: topShow}">
    <!-- <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]"></q-page-scroller> -->
    <div class="column items-center fixed-bottom-right tips">
      <q-fab color="orange" direction="up" class="tips-item">
        <q-fab-action color="primary" icon="mail"/>
        <q-fab-action color="secondary" icon="alarm"/>
      </q-fab>

      <q-btn color="orange" icon="keyboard_arrow_up" @click="toTop"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "asideTip",
  props: {
    scrollTop: {
      type: Number
    }
  },
  data() {
    return {
      topShow: false
    };
  },
  computed: {},
  created() {},
  mounted() {
    this.topShowM();
  },
  watch: {
    scrollTop(val) {
      // console.log("val", val);
      this.scrollTop = val;
      this.topShowM();
    }
  },
  methods: {
    toTop() {
      window.scrollTo(0, 0);
      console.log("scrollTop", this.scrollTop);
    },
    topShowM() {
      if (this.scrollTop >= 150) {
        this.topShow = true;
      } else {
        this.topShow = false;
      }
    }
  },
  components: {},
  destroyed() {}
};
</script>

<style scoped lang="scss">
#asideTip {
  max-width: 30px;
  overflow: hidden;
  transition: all $time-head;
  opacity: 0;

  &.on {
    opacity: 1;
  }
  .tips {
    bottom: 50px;

    .q-fab {
      width: 30px;
      height: 30px;

      /deep/ .q-fab--form-rounded {
        border-radius: 0 !important;
        width: 30px;
        height: 30px;
      }
      .q-btn--rounded {
        border-radius: 0;
      }
      /deep/ .q-btn--fab .q-btn__wrapper {
        padding: 0;
        min-height: 0;
        min-width: 0;
      }
    }
  }
  .q-btn {
    border-radius: 0;
    width: 30px;
    height: 30px;
  }
}
</style>
