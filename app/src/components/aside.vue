<template>
  <div class="home">
    <q-page>
      <div class="my-row bg-transparent">
        <slot/>
        <div :class="$store.state.isMobile ? 'q-mt-xl mobile-aside' : 'right q-ml-lg'">
          <q-card class="my-card">
            <div class="q-pa-lg">
              <div class="text-center">
                <q-avatar size="100px" class="q-mb-sm q-mt-xs">
                  <img class="avatar" src="https://s1.ax1x.com/2020/07/07/UA7cFS.jpg">
                </q-avatar>
                <div class="text-h5">橘子orange</div>
                <div class="q-mb-sm q-mt-sm">人生不像做饭，不能等万事俱备了才下锅</div>
              </div>
              <div class="tag">
                <div class="tag-item">
                  <span>文章</span>
                  <span>3</span>
                </div>
                <div class="tag-item">
                  <span>标签</span>
                  <span>3</span>
                </div>
                <div class="tag-item">
                  <span>分类</span>
                  <span>3</span>
                </div>
              </div>
              <div class="bookmark q-mt-md q-mb-md" @click="addLabel()">
                <q-icon name="bookmark" class="icon q-mr-sm"/>加入书签
              </div>
              <div class="text-center">
                <span>
                  <font-awesome-icon
                    :icon="['fab','github']"
                    class="q-mr-md avatar fa-2x"
                    @click="github"
                  />
                  <q-tooltip :offset="[10, 10]">https://github.com/orangeed</q-tooltip>
                </span>
                <span>
                  <font-awesome-icon
                    :icon="['fab','weixin']"
                    class="fa-2x q-mr-md avatar"
                    @click="wechat"
                  />
                  <q-tooltip content-class="bg-green" :offset="[10, 10]">
                    <img src="https://s1.ax1x.com/2020/07/04/NxncdA.jpg" alt="公众号——橘子的分享">
                  </q-tooltip>
                </span>
                <span>
                  <font-awesome-icon
                    :icon="['fab','zhihu']"
                    class="fa-2x q-mr-md avatar"
                    @click="zhihu"
                  />
                  <q-tooltip
                    content-class="bg-blue"
                    :offset="[10, 10]"
                  >https://www.zhihu.com/people/bu-qi-64-11</q-tooltip>
                </span>
                <span>
                  <a href="mailto: 1208917130@qq.com" style="text-decoration: none;color:initial">
                    <font-awesome-icon :icon="['fas','envelope']" class="fa-2x avatar"/>
                    <q-tooltip content-class="bg-red" :offset="[10, 10]">1208917130@qq.com</q-tooltip>
                  </a>
                </span>
              </div>
            </div>
          </q-card>
          <q-card class="my-card q-mt-lg">
            <font-awesome-icon
              :icon="['fas','bullhorn']"
              class="q-ma-lg text-red"
              style="font-size:20px"
            />
            <span class="right-card-title q-mt-sm">公告</span>
            <p class="q-pl-lg q-pr-lg q-pb-lg">有事启奏，无事退朝。</p>
          </q-card>
          <q-card class="my-card q-mt-lg">
            <font-awesome-icon
              :icon="['fas','folder-open']"
              class="q-ma-lg text-grey-9"
              style="font-size:20px"
            />
            <span class="right-card-title">标签分类</span>
            <q-list style="margin-top:-20px">
              <q-item clickable v-ripple>
                <q-item-section class="q-ml-lg">分享</q-item-section>
                <q-item-section side class="q-mr-md">2</q-item-section>
              </q-item>

              <q-item clickable v-ripple>
                <q-item-section class="q-ml-lg">生活</q-item-section>
                <q-item-section side class="q-mr-md">2</q-item-section>
              </q-item>
            </q-list>
          </q-card>
          <q-card class="my-card q-mt-lg">
            <font-awesome-icon
              :icon="['fas','calendar-alt']"
              class="q-ma-lg text-grey-9"
              style="font-size:20px"
            />
            <span class="right-card-title">日期分类</span>
            <q-list style="margin-top:-20px">
              <q-item clickable v-ripple>
                <q-item-section class="q-ml-lg">2020年5月</q-item-section>
                <q-item-section side class="q-mr-md">2</q-item-section>
              </q-item>

              <q-item clickable v-ripple>
                <q-item-section class="q-ml-lg">2020年6月</q-item-section>
                <q-item-section side class="q-mr-md">2</q-item-section>
              </q-item>
            </q-list>
          </q-card>
          <q-card class="my-card q-mt-lg">
            <font-awesome-icon
              :icon="['fas','chart-line']"
              class="q-ma-lg text-grey-9"
              style="font-size:20px"
            />
            <span class="right-card-title" style="margin-top:-20px">网站统计</span>
            <q-list style="margin-top:-20px">
              <q-item>
                <q-item-section class="q-ml-lg">文章数量</q-item-section>
                <q-item-section side class="q-mr-md">2</q-item-section>
              </q-item>
              <q-item>
                <q-item-section class="q-ml-lg">本站运行时间</q-item-section>
                <q-item-section side class="q-mr-md">2</q-item-section>
              </q-item>
              <q-item>
                <q-item-section class="q-ml-lg">本站总字数</q-item-section>
                <q-item-section side class="q-mr-md">2</q-item-section>
              </q-item>
              <q-item>
                <q-item-section class="q-ml-lg">本站访客数</q-item-section>
                <q-item-section side class="q-mr-md">
                  <span id="busuanzi_value_site_uv"></span>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section class="q-ml-lg">本站总访问量</q-item-section>
                <q-item-section side class="q-mr-md">
                  <span id="busuanzi_value_site_pv"></span>
                </q-item-section>
              </q-item>
            </q-list>
          </q-card>
        </div>
      </div>
    </q-page>
    <Notify NotifyText="按 CTRL+ D 键将本页加入书签." color="success" :isShow="isShow"/>
  </div>
</template>

<script>
let script;
export default {
  name: "orange-aside",
  data() {
    return {
      articleList: [
        {
          title: "这是第一篇文章",
          img: "https://s1.ax1x.com/2020/06/24/NwAQ39.md.jpg",
          createTime: "2020-07-16",
          tag: "教程",
          description:
            "不知道是多少天了，在无数个难眠的夜晚，我辗转反侧，想有自己的台式电脑，最好是自己组装的，正好，今年刚刚毕业，又赶上了618活动，就开始买买买（虽然自己是在之前两天买的）！ "
        }
      ],
      //是否显示弹出框
      isShow: false
    };
  },
  mounted() {
    //引用不蒜子统计
    // script = require("busuanzi.pure.js");
  },
  create() {},
  methods: {
    github() {
      window.open("https://github.com/orangeed", "_blank");
    },
    wechat() {
      window.open(
        "https://mp.weixin.qq.com/mp/homepage?__biz=MzUxMTk4NjIzNw==&hid=1&sn=0dba6663f8903af2fa1b50796291c53f&scene=18#wechat_redirect",
        "_blank"
      );
    },
    zhihu() {
      window.open("https://www.zhihu.com/people/bu-qi-64-11", "_blank");
    },
    addLabel() {
      this.isShow = true;
      setTimeout(() => {
        this.isShow = false;
      }, 3000);
      // this.seamless = true;
    }
  },
  //当路由发生改变的时候调用
  watch: {
    $route(to, from) {
      if (to.path != from.path) {
        script.fetch();
      }
    }
  }
};
</script>
<style lang="scss" scoped >
.home {
  // height: 100%;
  background: url("https://s1.ax1x.com/2020/07/04/Nv2rxP.jpg");
  background-size: cover;
  background-attachment: fixed;

  .my-row {
    display: flex;
    align-items: flex-start;
    margin: 0 auto;
    padding: 2rem 15px;
    max-width: 1200px;
    flex-wrap: wrap;
    .left {
      flex: 3;
      .description {
        /* 多余内容省略号处理-多行 */
        word-break: break-all;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
      }
    }
    .left-mobile {
      .description {
        /* 多余内容省略号处理-多行 */
        word-break: break-all;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
      }
    }
    .right {
      // padding: 20px;
      flex: 1;
      // 头像旋转
      .avatar {
        transition: all $time-head ease-in;
        &:hover {
          transform: rotate(360deg);
          transform-origin: center;
        }
      }
    }
  }
  .q-img__content > div {
    position: static;
    color: #696969;
  }

  .q-card__section {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .q-card__section--vert {
    padding: 0 40px;
    line-height: 20px;
    overflow: hidden;
    -webkit-line-clamp: 3;
    line-height: 30px;
  }
  .tag {
    display: flex;
    flex-direction: row;
    text-align: center;
    font-size: 16px;
    .tag-item {
      display: flex;
      width: 33.3%;
      flex-direction: column;
      // font-size: 14px;
    }
  }
  .bookmark {
    width: 100%;
    height: 32px;
    background-color: #49b1f5;
    text-align: center;
    line-height: 32px;
    color: #ffffff;
    cursor: pointer;
    position: relative;
    border-radius: 4px;
    z-index: 1;

    .icon {
      font-size: 18px;
    }
  }
  .bookmark:after,
  .bookmark:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    border-radius: 4px;
  }
  .bookmark:before {
    width: 100%;
    z-index: -2;
    background: #49b1f5;
  }
  .bookmark:after {
    width: 0;
    background: #ff7242;
    transition: width $time-text;
    overflow: hidden;
    z-index: -2;
  }
  .bookmark:hover:after {
    z-index: -2;
    width: 100%;
    transition: width $time-text cubic-bezier(0.82, 1.77, 0.7, 0.56); //三次方贝塞尔函数回弹效果
  }
  .my-card {
    position: relative;
    .right-card-title {
      position: absolute;
      top: 15%;
    }
  }
  .mobile-aside {
    width: 100%;
  }
}
</style>

