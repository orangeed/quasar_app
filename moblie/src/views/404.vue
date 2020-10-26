<!-- 404 -->
<template>
  <div>
    <div class="you">
      <v-container>
        <v-card-subtitle class="center">
          <v-card-subtitle>你是不是想看我想说？</v-card-subtitle>
          <v-card-subtitle>你是不是想看我想说？</v-card-subtitle>
          <v-card-subtitle>想啥子哟？抓梦脚？这个是给你看到嘛？肯定不是塞？散伙散伙。</v-card-subtitle>
        </v-card-subtitle>
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
.center {
  width: 95vw;
  height: 87vh;
  top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
