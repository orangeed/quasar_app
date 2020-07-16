<!-- 顶部图片 -->
<template>
  <div class="q-gutter-md row items-start home-img">
    <q-img class="img" src="https://s2.ax1x.com/2020/03/05/3HM2dK.jpg">
      <div class="absolute-full text-subtitle2 flex flex-center bg-transparent">
        <p
          :class="$store.state.isMobile ?'text-h5 text-weight-bold' : 'text-h3 text-weight-bold'"
        >关于我</p>
      </div>
    </q-img>
  </div>
</template>

<script>
export default {
  name: "headImg",
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
.img {
  height: 50vh;
}
</style>
