<!-- 顶部图片 -->
<template>
  <div class="q-gutter-md row items-start home-img">
    <q-img class="img" :src="imgSrc">
      <div class="absolute-full text-subtitle2 flex flex-center bg-transparent">
        <p
          :class="$store.state.isMobile ?'text-h5 text-weight-bold' : 'text-h3 text-weight-bold'"
        >{{title}}</p>
      </div>
    </q-img>
  </div>
</template>

<script>
export default {
  name: "headImg",
  props: {
    title: {
      type: String,
      default: "关于我"
    },
    imgSrc: {
      type: String
    }
  },
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
