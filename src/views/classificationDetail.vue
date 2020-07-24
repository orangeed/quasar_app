<!-- 分类详情 -->
<template>
  <div id="classificationDetail">
    <headImg :title="title" imgSrc="https://s1.ax1x.com/2020/03/28/GkTJaj.jpg"/>
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
                    <span class="text-h5 text-grey-10">分类-{{title}}</span>
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
              <div class="photo">
                <div v-for="(item,index) in photo" :key="index" class="photo-img">
                  <img :src="item.img" alt>
                </div>
              </div>
              <div class="articleList q-mt-lg" v-for="(item,index) in music_video" :key="index">
                <div class="music-video">
                  <div class="music-video-img">
                    <img :src="item.img">
                  </div>
                  <div class="q-ml-md q-mt-md">
                    <p class="text-h6">{{item.name}}</p>
                    <p class="text-grey-9">{{item.auther}}</p>
                  </div>
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
  props: {},
  data() {
    return {
      title: "",
      // articleList: [
      //   {
      //     total: 3, //文章总数
      //     list: [
      //       {
      //         title: "这是第一篇文章",
      //         img: "https://s1.ax1x.com/2020/06/24/NwAQ39.md.jpg",
      //         createTime: "2020-07-16",
      //         tag: "教程",
      //         description:
      //           "不知道是多少天了，在无数个难眠的夜晚，我辗转反侧，想有自己的台式电脑，最好是自己组装的，正好，今年刚刚毕业，又赶上了618活动，就开始买买买（虽然自己是在之前两天买的）！ "
      //       },
      //       {
      //         title: "这是第二篇文章",
      //         img: "https://s1.ax1x.com/2020/03/28/GAJpkt.md.jpg",
      //         createTime: "2020-07-16",
      //         tag: "教程",
      //         description:
      //           "ask的黄金卡是多久啊是根据哈i按时打卡是大苏打好i收到偶爱的哈克斯的卢卡斯的哈师大那时快大厦的那款是那么，啊啊实打实多名旅客大苏打阿萨，啊 "
      //       },
      //       {
      //         title: "软著 | 手把手教你如何申请软著",
      //         img: "https://s2.ax1x.com/2020/03/05/3HM2dK.md.jpg",
      //         createTime: "2020-07-16",
      //         tag: "教程",
      //         description:
      //           "教科书的高分考生东方博客随时打开是，地方大师傅看见那就开始变得卡死撒旦，是，萨达看到咯聚合物疾风让顾客毕竟我，开始交付海军我"
      //       }
      //     ]
      //   }
      // ],
      photo: [
        {
          img: "https://s1.ax1x.com/2020/04/12/GLArCD.jpg"
        },
        {
          img: "https://s1.ax1x.com/2020/04/12/GLAB4O.jpg"
        },
        {
          img: "https://s1.ax1x.com/2020/06/24/NwA8nx.jpg"
        },
        {
          img: "https://s1.ax1x.com/2020/04/12/GLA6vd.jpg"
        },
        {
          img: "https://s1.ax1x.com/2020/04/12/GLA0UK.jpg"
        },
        {
          img: "https://s1.ax1x.com/2020/03/28/GkTJaj.jpg"
        }
      ],
      //   articleList: [],
      //   photo: [],
      music_video: []
      //   music_video: [
      //     {
      //       img:
      //         "https://bkimg.cdn.bcebos.com/pic/aa18972bd40735fac86bcf959e510fb30f240806?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5",
      //       name: "倔强",
      //       auther: "五月天"
      //     },
      //     {
      //       img:
      //         "https://bkimg.cdn.bcebos.com/pic/aa18972bd40735fac86bcf959e510fb30f240806?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5",
      //       name: "倔强",
      //       auther: "五月天"
      //     }
      //   ]
    };
  },
  computed: {},
  created() {},
  mounted() {
    this.title = this.$route.query.classification;
  },
  watch: {},
  methods: {},
  components: {}
};
</script>

<style scoped lang="scss">
#classificationDetail {
  .content {
    padding: 50px 40px;
  }

  .timeline {
    cursor: pointer;
    .articleList {
      display: flex;
      overflow: hidden;
      &:hover {
        background-color: #dbd9d9cc;
        transition: all 0$time-head;
      }
      .img {
        width: 70px;
        height: 70px;
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
  .photo {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    cursor: pointer;
    .photo-img {
      width: 300px;
      height: 180px;
      margin: 10px;
      overflow: hidden;

      img {
        width: 300px;
        height: 180px;
        object-fit: cover;
        transform: scale(1);
        transition: transform $time-text ease 0s;
        &:hover {
          transform: scale(1.2);
        }
      }
    }
  }
  .music-video {
    display: flex;
    // justify-content: center;
    align-items: center;
    cursor: pointer;
    .music-video-img {
      width: 70px;
      height: 70px;
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
    &:hover {
      background-color: #dbd9d9cc;
      transition: all 0$time-head;
    }
  }
}
</style>
