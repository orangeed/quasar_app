<!-- 常用网站 -->
<template>
  <div id="website">
    <headImg title="常用网站" imgSrc="https://s1.ax1x.com/2020/04/12/GLA6vd.jpg"/>
    <orange-aside>
      <template>
        <div :class="$store.state.isMobile ? 'left-mobile' : 'left' " >
          <q-card class="my-card" basic flat >
            <q-card-section :class="$store.state.isMobile ? '' : 'content'">
              <div class="bg-blue-1 xian">
                <div class="q-ml-md q-pt-lg" v-for="(item,index) in websiteList" :key="index">
                  <a :href="item.url" target="_blank">
                    <span>
                      <img
                        style="width:32px;height:32px;vertical-align: middle"
                        :src="item.img"
                        :alt="item.alt"
                      >
                    </span>
                    <span
                      class="text-blue-5 text-weight-bolder q-ml-sm"
                      style="font-size:16px"
                    >{{item.title}}</span>
                  </a>
                </div>
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
  name: "website",
  props: {},
  data() {
    return {
      websiteList: [
        {
          url: "https://orangecj.cn/",
          img: "https://s1.ax1x.com/2020/06/30/NoP6vd.th.jpg",
          alt: "橘子的分享",
          title: "橘子的分享 | 橘享"
        },
        {
          url: "https://www.google.com/",
          img: "https://s1.ax1x.com/2020/07/06/Ui7ouV.th.png",
          alt: "谷歌搜索",
          title: "Google | 谷歌搜索"
        },
        {
          url: "https://www.baidu.com/",
          img:
            "http://c.hiphotos.baidu.com/zhidao/pic/item/6a63f6246b600c3355ae9d2e1b4c510fd8f9a105.jpg",
          alt: "百度搜索",
          title: "Baidu | 百度搜索"
        },
        {
          url: "https://github.com/orangeed",
          img: "https://github.githubassets.com/favicon.ico",
          alt: "Github",
          title: "Github | 全球最大的同性交友网站"
        },
        {
          url: "https://mp.weixin.qq.com/",
          img: "https://res.wx.qq.com/a/wx_fed/assets/res/NTI4MWU5.ico",
          alt: "微信",
          title: "微信公众平台"
        },
        {
          url: "https://www.zhihu.com/",
          img: "https://static.zhihu.com/static/favicon.ico",
          alt: "知乎",
          title: "知乎 | 不懂就知乎"
        },
        {
          url: "https://topbook.cc/overview",
          img: "https://cdn.labs.topbook.cc/icon.png",
          alt: "Topbook",
          title: "Topbook | 高效生活视频书"
        },
        {
          url: "https://tool.oschina.net/commons?type=3",
          img: "https://tool.oschina.net/img/favicon.ico",
          alt: "颜色对照表",
          title: "TRGB颜色对照表"
        },
        {
          url: "https://docschina.org/",
          img: "https://docschina.org/favicon.ico",
          alt: "印记中文",
          title:
            "印记中文 - 深入挖掘国外前端新领域，为中国 Web 前端开发人员提供优质文档！"
        },
        {
          url: "http://www.jixinwulian.cn:14001/",
          img: "http://www.jixinwulian.cn:14001/favicon-32x32.png",
          alt: "swaggerUI",
          title: "API | 令人秃头的项目API"
        },

        {
          url: "https://segmentfault.com/",
          img: "https://cdn.segmentfault.com/v-5e7dd7fe/global/img/favicon.ico",
          alt: "SegmentFault 思否",
          title: "SegmentFault 思否"
        },
        {
          url: "https://www.oschina.net/",
          img: "https://static.oschina.net/new-osc/img/favicon.ico",
          alt: "OSCHINA",
          title: "OSCHINA - 中文开源技术交流社区"
        },
        {
          url: "http://zhongguose.com/",
          img: "http://zhongguose.com/img/favicon.ico",
          alt: "中国色",
          title: "中国色 - 中国传统颜色"
        },
        {
          url: "https://www.ftest.us",
          img: "https://www.ftest.us/favicon.ico",
          alt: "MEET机场",
          title: "MEET机场"
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
#website {
  .content {
    padding: 50px 40px;
  }
  .xian {
    border-left: 4px solid #64b5f6;
    padding-bottom: 20px;
  }
}
</style>
