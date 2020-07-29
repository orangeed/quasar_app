<!-- 留言功能 -->
<template>
  <div id="message">
    <headImg title="留言板" imgSrc="https://s2.ax1x.com/2020/03/05/3HM2dK.jpg"/>
    <orange-aside>
      <template>
        <div :class="$store.state.isMobile ? 'left-mobile' : 'left' ">
          <q-card class="my-card" basic flat>
            <q-card-section class="content"></q-card-section>
          </q-card>
        </div>
      </template>
    </orange-aside>
  </div>
</template>

<script>
export default {
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
#message {
  .content {
    padding: 50px 40px;
  }
}
</style>
