<!-- 时间轴 -->
<template>
  <div id="timeline">
    <headImg title="时间归类" imgSrc="https://s1.ax1x.com/2020/04/12/GLAB4O.jpg"/>
    <orange-aside>
      <template>
        <div :class="$store.state.isMobile ? 'left-mobile' : 'left' ">
          <q-card class="my-card" basic flat>
            <q-card-section class="content">
              <q-timeline v-for="(item,index) in articleList " :key="index">
                <q-timeline-entry color="orange" icon="article">
                  <template v-slot:title>
                    <span class="text-h6 text-grey-10">{{item.list.length}}篇</span>
                  </template>
                  <template v-slot:subtitle>
                    <span class="text-h5 text-grey-10">文章总览</span>
                  </template>
                </q-timeline-entry>

                <q-timeline-entry
                  v-for="(item1,index) in item.list"
                  :key="index"
                  color="orange"
                  class="timeline"
                >
                  <template v-slot:title>
                    <div class="articleList">
                      <div class="img">
                        <img :src="item1.img">
                      </div>
                      <div class="articleList-item q-ml-sm">
                        <div>
                          <p class="q-ma-sm">
                            <q-icon name="date_range"/>
                            {{item1.createTime}}
                          </p>
                          <p class="q-ma-sm articleList-title">{{item1.title}}</p>
                        </div>
                      </div>
                    </div>
                  </template>
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
      articleList: [
        {
          total: 3, //文章总数
          list: [
            {
              title: "这是第一篇文章",
              img: "https://s1.ax1x.com/2020/06/24/NwAQ39.md.jpg",
              createTime: "2020-07-16",
              tag: "教程",
              description:
                "不知道是多少天了，在无数个难眠的夜晚，我辗转反侧，想有自己的台式电脑，最好是自己组装的，正好，今年刚刚毕业，又赶上了618活动，就开始买买买（虽然自己是在之前两天买的）！ "
            },
            {
              title: "这是第二篇文章",
              img: "https://s1.ax1x.com/2020/03/28/GAJpkt.md.jpg",
              createTime: "2020-07-16",
              tag: "教程",
              description:
                "ask的黄金卡是多久啊是根据哈i按时打卡是大苏打好i收到偶爱的哈克斯的卢卡斯的哈师大那时快大厦的那款是那么，啊啊实打实多名旅客大苏打阿萨，啊 "
            },
            {
              title: "软著 | 手把手教你如何申请软著",
              img: "https://s2.ax1x.com/2020/03/05/3HM2dK.md.jpg",
              createTime: "2020-07-16",
              tag: "教程",
              description:
                "教科书的高分考生东方博客随时打开是，地方大师傅看见那就开始变得卡死撒旦，是，萨达看到咯聚合物疾风让顾客毕竟我，开始交付海军我"
            }
          ]
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
#timeline {
  .content {
    padding: 50px 40px;
  }

  .timeline {
    cursor: pointer;
    .articleList {
      display: flex;
      .img {
        width: 70px;
        height: 70px;
        overflow: hidden;

        img {
          width: 70px;
          height: 70px;
          object-fit: cover;
          transform: scale(1);
          transition: transform $time-text ease 0s;
          &:hover {
            transform: scale(1.2);
          }
        }
      }
      .articleList-item {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        .articleList-title {
          font-size: 16px;
          font-weight: 500;
          transition: all $time-text;
          &:hover {
            color: #2196f3;
            padding-left: 20px;
            transition: all $time-text;
          }
        }
      }
    }
  }
}
</style>
