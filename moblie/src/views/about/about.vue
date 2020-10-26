<!-- 关于我 -->
<template>
  <div id="about">
    <div class="about">
      <v-container>
        <v-card class="center">
          <div class="middle">
            <p>
              《好玩的api》由
              <a href="https://orangecj.cn" style="color:#EF6C00">橘子orange</a>单独开发，粗制滥造，引用的api均由互联网提供，其中大多数调用的是
              <a
                href="https://api.vvhan.com/"
                style="color:#40C4FF"
              >韩小韩API接口站</a>
              。
            </p>
            <p>正在添加更多的好玩api......</p>
            <p>对了，app需要联网......</p>
          </div>
          <v-card-actions>
            <v-btn color="deep-orange" @click="$router.push('/')" style="margin-right:10px">
              <v-icon style="color:#2962FF;">arrow_back</v-icon>我要回家
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {};
  },
  computed: {},
  created() {
    this.$store.commit("SET_TITLE", this.$route.meta.title);
  },
  mounted() {},
  watch: {},
  methods: {},
  components: {}
};
</script>

<style scoped lang="scss">
.about {
  .center {
    width: 95vw;
    height: 87vh;
    top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .middle {
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
