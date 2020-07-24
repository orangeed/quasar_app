<!-- 分类 -->
<template>
  <div id="classification">
    <headImg title="分类" imgSrc="https://s1.ax1x.com/2020/06/24/NwAJHK.jpg"/>
    <orange-aside>
      <template>
        <div :class="$store.state.isMobile ? 'left-mobile' : 'left' ">
          <q-card class="my-card" basic flat>
            <q-card-section class="content" v-if="!$store.state.isMobile">
              <q-splitter v-model="splitterModel">
                <template v-slot:before>
                  <div class="q-pa-md">
                    <q-tree
                      :nodes="simple"
                      node-key="label"
                      selected-color="primary"
                      :selected.sync="selected"
                      default-expand-all
                    />
                  </div>
                </template>

                <template v-slot:after>
                  <q-tab-panels
                    v-model="selected"
                    animated
                    transition-prev="jump-up"
                    transition-next="jump-up"
                    v-for="(item,index) in simple"
                    :key="index"
                  >
                    <q-tab-panel :name="item.label">
                      <div class="text-h4 q-mb-md">{{item.label}}</div>
                      <p>{{item.description}}</p>
                    </q-tab-panel>
                    <q-tab-panel
                      v-for="(item1,index1) in item.children"
                      :key="index1"
                      :name="item1.label"
                    >
                      <div class="title">
                        <span class="text-h4 q-mb-md">{{item1.label}}</span>
                        <span class="text-primary" @click="more(item1.label)">查看更多>></span>
                      </div>
                      <div
                        class="articleList q-mt-lg"
                        v-for="(item2,index2) in item1.articleList"
                        :key="index2"
                      >
                        <div class="img">
                          <img :src="item2.img">
                        </div>
                        <div class="articleList-item q-ml-sm">
                          <div>
                            <p class="q-ma-sm">
                              <q-icon name="date_range"/>
                              {{item2.createTime}}
                            </p>
                            <p class="q-ma-sm articleList-title">{{item2.title}}</p>
                          </div>
                        </div>
                      </div>
                      <div
                        class="articleList q-mt-lg"
                        v-for="(item3,index3) in item1.photo"
                        :key="index3"
                      >
                        <div class="photo">
                          <img :src="item3.img" alt="index3">
                        </div>
                      </div>
                      <div
                        class="articleList q-mt-lg"
                        v-for="(item4,index4) in item1.music_video"
                        :key="index4"
                      >
                        <div class="music-video">
                          <div class="music-video-img">
                            <img :src="item4.img">
                          </div>
                          <div class="q-ml-md">
                            <p class="text-h6">{{item4.name}}</p>
                            <p class="text-grey-9">{{item4.auther}}</p>
                          </div>
                        </div>
                      </div>
                    </q-tab-panel>
                  </q-tab-panels>
                </template>
              </q-splitter>
            </q-card-section>
            <q-card-section class="mobile-section" v-else>
              <div class="q-pa-md">
                <q-expansion-item
                  expand-separator
                  default-opened
                  v-for="(item,index) in simple"
                  :key="index"
                  :icon="item.icon"
                  :label="item.label"
                >
                  <div
                    v-for="(item1,index1) in item.children"
                    :key="index1"
                    class="expansion-item q-ml-xl"
                    @click="more(item.label)"
                  >
                    <q-icon :name="item1.icon" class="text-h5 q-mr-md"/>
                    <span>{{item1.label}}</span>
                  </div>
                </q-expansion-item>
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
      splitterModel: 50,
      selected: "教程",
      simple: [
        {
          label: "教程",
          icon: "receipt",
          description: "软件，软著，装机，代码学习等等",
          children: [
            {
              label: "软件",
              icon: "settings_applications",
              articleList: [
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
                  title: "这是第三篇文章",
                  img: "https://s2.ax1x.com/2020/03/05/3HM2dK.md.jpg",
                  createTime: "2020-07-16",
                  tag: "教程",
                  description:
                    "教科书的高分考生东方博客随时打开是，地方大师傅看见那就开始变得卡死撒旦，是，萨达看到咯聚合物疾风让顾客毕竟我，开始交付海军我"
                }
              ]
            },
            {
              label: "软著",
              icon: "import_contacts",
              articleList: [
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
                  title: "这是第三篇文章",
                  img: "https://s2.ax1x.com/2020/03/05/3HM2dK.md.jpg",
                  createTime: "2020-07-16",
                  tag: "教程",
                  description:
                    "教科书的高分考生东方博客随时打开是，地方大师傅看见那就开始变得卡死撒旦，是，萨达看到咯聚合物疾风让顾客毕竟我，开始交付海军我"
                }
              ]
            },
            {
              label: "装机",
              icon: "laptop",
              articleList: [
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
                  title: "这是第三篇文章",
                  img: "https://s2.ax1x.com/2020/03/05/3HM2dK.md.jpg",
                  createTime: "2020-07-16",
                  tag: "教程",
                  description:
                    "教科书的高分考生东方博客随时打开是，地方大师傅看见那就开始变得卡死撒旦，是，萨达看到咯聚合物疾风让顾客毕竟我，开始交付海军我"
                }
              ]
            },
            {
              label: "代码",
              icon: "code",
              articleList: [
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
                  title: "这是第三篇文章",
                  img: "https://s2.ax1x.com/2020/03/05/3HM2dK.md.jpg",
                  createTime: "2020-07-16",
                  tag: "教程",
                  description:
                    "教科书的高分考生东方博客随时打开是，地方大师傅看见那就开始变得卡死撒旦，是，萨达看到咯聚合物疾风让顾客毕竟我，开始交付海军我"
                }
              ]
            }
          ]
        },
        {
          label: "生活",
          icon: "event_seat",
          description: "生活的趣事，照片，视频，音乐",
          children: [
            {
              label: "照片",
              icon: "photo",
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
              ]
            },
            {
              label: "视频",
              icon: "video_call",
              music_video: [
                {
                  img:
                    "https://bkimg.cdn.bcebos.com/pic/a686c9177f3e6709d9a8dd833bc79f3df8dc5525?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5",
                  name: "无极",
                  auther: "陈凯歌"
                }
              ]
            },
            {
              label: "音乐",
              icon: "music_video",
              music_video: [
                {
                  img:
                    "https://bkimg.cdn.bcebos.com/pic/aa18972bd40735fac86bcf959e510fb30f240806?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5",
                  name: "倔强",
                  auther: "五月天"
                },
                {
                  img:
                    "https://bkimg.cdn.bcebos.com/pic/aa18972bd40735fac86bcf959e510fb30f240806?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5",
                  name: "倔强",
                  auther: "五月天"
                }
              ]
            },
            {
              label: "文章",
              icon: "article",
              articleList: [
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
                  title: "这是第三篇文章",
                  img: "https://s2.ax1x.com/2020/03/05/3HM2dK.md.jpg",
                  createTime: "2020-07-16",
                  tag: "教程",
                  description:
                    "教科书的高分考生东方博客随时打开是，地方大师傅看见那就开始变得卡死撒旦，是，萨达看到咯聚合物疾风让顾客毕竟我，开始交付海军我"
                }
              ]
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
  methods: {
    more(val) {
      // console.log("val", val);
      this.$router.push(`/classificationDetail?classification=${val}`);
    }
  },
  components: {}
};
</script>

<style scoped lang="scss">
#classification {
  .content {
    padding: 50px 40px;
  }
  // .my-card {
  //   min-height: 600px;
  // }
  .q-splitter {
    min-height: 600px;
  }
  .mobile-section {
    width: 92.5vw;
  }
  .title {
    display: flex;
    // justify-content: center;
    align-items: center;
    span:nth-child(1) {
      flex: 1;
    }
    span:nth-child(2) {
      cursor: pointer;
    }
  }
  .articleList {
    cursor: pointer;

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
    .photo {
      width: 300px;
      img {
        width: 300px;
      }
    }
    .music-video {
      display: flex;
      .music-video-img {
        @extend .img;
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
  .expansion-item {
    height: 50px;
    display: flex;
    align-items: center;
  }
}
</style>
