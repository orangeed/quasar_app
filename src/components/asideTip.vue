<!-- 侧边小工具 -->
<template>
  <div id="asideTip">
    <div class="column items-center" style="margin-top: 100px; margin-bottom: 100px;">
      <q-fab color="purple" icon="keyboard_arrow_up" direction="up">
        <q-fab-action color="primary" icon="mail"/>
        <q-fab-action color="secondary" icon="alarm"/>
      </q-fab>
    </div>

    <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
      <q-btn fab icon="keyboard_arrow_up" color="accent"/>
    </q-page-scroller>
  </div>
</template>

<script>
export default {
  name: "asideTip",
  props: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {}
};
</script>

<style scoped lang="scss">
#asideTip {
  position: fixed;
}
</style>
