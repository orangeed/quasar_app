<!-- 文章详情头部 -->
<template>
  <div id="articleImg" class="q-gutter-md row items-start home-img">
    <q-img class="img" :src="imgSrc">
      <div class="text-subtitle2 img-title bg-transparent">
        <div>
          <p
            :class="$store.state.isMobile ?'text-h5 text-weight-bold' : 'text-h4 text-weight-bold'"
            style="display: flex;justify-content: center;"
          >{{title}}</p>
          <p>
            <q-icon name="date_range"/>
            发表于{{createTime}} |
            <q-icon name="restore"/>
            更新于{{updateTime}} |
            <q-icon name="loyalty"/>
            {{tag}}
          </p>
          <p>
            <q-icon name="article"/>
            字数统计：{{number}} |
            <q-icon name="query_builder"/>
            阅读时长：{{Math.ceil(number/500)}}分钟 |
            <q-icon name="visibility"/>阅读量：
            <span id="busuanzi_value_page_pv"></span>
          </p>
        </div>
      </div>
    </q-img>
  </div>
</template>

<script>
export default {
  name: "articleImg",
  props: {
    title: {
      type: String
    },
    imgSrc: {
      type: String
    },
    createTime: {
      type: String
    },
    updateTime: {
      type: String
    },
    tag: {
      type: String
    },
    number: {
      type: Number,
      default: 0
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
#articleImg {
  .img {
    height: 50vh;
    .img-title {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: flex-end;
      justify-content: center;
    }
  }
}
</style>
