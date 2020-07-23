<!-- 版本更新 -->
<template>
  <div id="version">
    <headImg title="版本更新记录" imgSrc="https://s1.ax1x.com/2020/06/24/NwAsDP.jpg"/>
    <orange-aside>
      <template>
        <div :class="$store.state.isMobile ? 'left-mobile' : 'left' ">
          <q-card class="my-card" basic flat>
            <q-card-section class="content">
              <q-timeline layout="comfortable">
                <q-timeline-entry heading>更新记录</q-timeline-entry>

                <q-timeline-entry
                  v-for="(item,index) in versionList"
                  :key="index"
                  :avatar="item.avatar"
                  color="orange"
                >
                  <template v-slot:title>{{item.title}}</template>
                  <template v-slot:subtitle>{{item.subtitle}}</template>

                  <div>{{item.description}}</div>
                </q-timeline-entry>
              </q-timeline>
            </q-card-section>
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
    return {
      versionList: [
        {
          avatar: "https://s1.ax1x.com/2020/07/07/UA7cFS.jpg",
          title: "添加其他页面",
          subtitle: "2020年7月23日",
          description: "添加了常用网站，关于，版本更新等模块"
        },
        {
          avatar: "https://s1.ax1x.com/2020/07/07/UA7cFS.jpg",
          title: "添加首页",
          subtitle: "2020年7月22日",
          description: "新增首页等"
        },
        {
          avatar: "https://s1.ax1x.com/2020/07/07/UA7cFS.jpg",
          title: "开始创建",
          subtitle: "2020年7月21日",
          description: "初始化了网站"
        }
      ]
    };
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
#version {
  .content {
    padding: 50px 40px;
  }
}
</style>
