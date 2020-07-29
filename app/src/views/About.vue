<!-- about页面 -->
<template>
  <div class="about">
    <headImg title="关于我" imgSrc="https://s2.ax1x.com/2020/03/05/3HM2dK.jpg"/>
    <orange-aside>
      <template>
        <div :class="$store.state.isMobile ? 'left-mobile' : 'left' ">
          <q-card class="my-card" basic flat>
            <q-card-section class="content">
              <p class="text-h4 text-grey-9">
                <b>简介</b>
              </p>
              <p>
                欢迎来到
                <b>橘子orange</b>的个人博客。
              </p>
              <p>这个主要是分享一些些计算机知识，软件推荐，以及自己的生活和学习。</p>
              <p class="text-h4 q-mt-xl text-grey-9">
                <b>关于我</b>
              </p>
              <p>刚刚毕业踏入社会，惨遭社会毒打的前端程序员，原电子商务专业。文科生。</p>
              <p class="text-h4 q-mt-xl text-grey-9">
                <b>联系方式</b>
              </p>
              <div>
                <p>
                  阿里邮箱：
                  <a
                    href="mailto: cj1208917130@aliyun.com"
                    class="text-orange"
                  >cj1208917130@aliyun.com</a>
                </p>
                <p>
                  QQ邮箱：
                  <a href="mailto: 1208917130@qq.com" class="text-orange">1208917130@qq.com</a>
                </p>
              </div>
              <div>
                <p>公众号：橘子的分享</p>
                <img
                  style="width:250px"
                  src="https://s1.ax1x.com/2020/07/04/NxncdA.jpg"
                  alt="公众号：橘子的分享"
                >
              </div>
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
.about {
  .content {
    padding: 50px 40px;
  }
}
</style>
