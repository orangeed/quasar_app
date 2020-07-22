
<template>
  <div class="home">
    <homeImg/>
    <orange-aside>
      <template>
        <div :class="$store.state.isMobile ? 'left-mobile' : 'left' ">
          <div v-if="$store.state.isMobile">
            <q-card class="my-card" basic flat v-for="(item,index) in articleList" :key="index">
              <img :src="item.img">
              <q-card-section>
                <div class="right-text q-mt-md q-mb-md">
                  <div class="text-h6">{{item.title}}</div>
                  <div>
                    <span>
                      <q-icon name="date_range"/>
                      {{item.createTime}}
                    </span> |
                    <span>
                      <q-icon name="loyalty"/>
                      {{item.tag}}
                    </span>
                  </div>
                  <div class="description">{{item.description}}</div>
                </div>
              </q-card-section>
            </q-card>
          </div>
          <div v-else>
            <q-card class="my-card" basic flat v-for="(item,index) in articleList" :key="index">
              <q-card-section horizontal>
                <img class="col-5" :src="item.img">
                <q-card-section>
                  <div class="right-text">
                    <div class="text-h6">{{item.title}}</div>
                    <div>
                      <span>
                        <q-icon name="date_range"/>
                        {{item.createTime}}
                      </span> |
                      <span>
                        <q-icon name="loyalty"/>
                        {{item.tag}}
                      </span>
                    </div>
                    <div class="description">{{item.description}}</div>
                  </div>
                </q-card-section>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </template>
    </orange-aside>
    <Notify NotifyText="按 CTRL+ D 键将本页加入书签." color="success" :isShow="isShow"/>
  </div>
</template>

<script>
export default {
  name: "Home",
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
  }
};
</script>
<style lang="scss" scoped>
.home {
  // height: 100%;
  // background: url("https://s1.ax1x.com/2020/07/04/Nv2rxP.jpg");
  // background-size: cover;
  // background-attachment: fixed;

  // .my-row {
  // display: flex;
  // align-items: flex-start;
  // margin: 0 auto;
  // padding: 2rem 15px;
  // max-width: 1200px;
  // flex-wrap: wrap;
  // .left {
  //   flex: 3;
  //   .description {
  //     /* 多余内容省略号处理-多行 */
  //     word-break: break-all;
  //     text-overflow: ellipsis;
  //     display: -webkit-box;
  //     -webkit-box-orient: vertical;
  //     -webkit-line-clamp: 3;
  //     overflow: hidden;
  //   }
  // }
  // .left-mobile {
  //   .description {
  //     /* 多余内容省略号处理-多行 */
  //     word-break: break-all;
  //     text-overflow: ellipsis;
  //     display: -webkit-box;
  //     -webkit-box-orient: vertical;
  //     -webkit-line-clamp: 3;
  //     overflow: hidden;
  //   }
  // }
  // .right {
  //   // padding: 20px;
  //   flex: 1;
  //   // 头像旋转
  //   .avatar {
  //     transition: all 0.3s ease-in;
  //     &:hover {
  //       transform: rotate(360deg);
  //       transform-origin: center;
  //     }
  //   }
  // }
  // }
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
    transition: width 0.5s;
    overflow: hidden;
    z-index: -2;
  }
  .bookmark:hover:after {
    z-index: -2;
    width: 100%;
    transition: width 0.5s cubic-bezier(0.82, 1.77, 0.7, 0.56); //三次方贝塞尔函数回弹效果
  }
}
</style>
 


<!--
<template>
  <div class="home">
    <div>
      <homeImg/>
    </div>
    <q-page>
      <div class="my-row bg-transparent">
        <div :class="$store.state.isMobile ? 'left-mobile' : 'left' ">
          <div v-if="$store.state.isMobile">
            <q-card class="my-card" basic flat v-for="(item,index) in articleList" :key="index">
              <img :src="item.img">
              <q-card-section>
                <div class="right-text q-mt-md q-mb-md">
                  <div class="text-h6">{{item.title}}</div>
                  <div>
                    <span>
                      <q-icon name="date_range"/>
                      {{item.createTime}}
                    </span> |
                    <span>
                      <q-icon name="loyalty"/>
                      {{item.tag}}
                    </span>
                  </div>
                  <div class="description">{{item.description}}</div>
                </div>
              </q-card-section>
            </q-card>
          </div>
          <div v-else>
            <q-card class="my-card" basic flat v-for="(item,index) in articleList" :key="index">
              <q-card-section horizontal>
                <img class="col-5" :src="item.img">
                <q-card-section>
                  <div class="right-text">
                    <div class="text-h6">{{item.title}}</div>
                    <div>
                      <span>
                        <q-icon name="date_range"/>
                        {{item.createTime}}
                      </span> |
                      <span>
                        <q-icon name="loyalty"/>
                        {{item.tag}}
                      </span>
                    </div>
                    <div class="description">{{item.description}}</div>
                  </div>
                </q-card-section>
              </q-card-section>
            </q-card>
          </div>
        </div>
        <div :class="$store.state.isMobile ? 'q-mt-xl' : 'right q-ml-lg'">
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
            <img src="https://cdn.quasar.dev/img/parallax2.jpg">

            <q-list>
              <q-item clickable>
                <q-item-section avatar>
                  <q-icon color="primary" name="local_bar"/>
                </q-item-section>

                <q-item-section>
                  <q-item-label>Bar XYZ</q-item-label>
                  <q-item-label caption>Have a drink.</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable>
                <q-item-section avatar>
                  <q-icon color="red" name="local_gas_station"/>
                </q-item-section>

                <q-item-section>
                  <q-item-label>Gas Station</q-item-label>
                  <q-item-label caption>Fill your gas tank.</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable>
                <q-item-section avatar>
                  <q-icon color="amber" name="local_movies"/>
                </q-item-section>
                <q-item-section>
                  <q-item-label>Cinema XYZ</q-item-label>
                  <q-item-label caption>Watch a movie.</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-card>
        </div>
      </div>
    </q-page>
    <Notify NotifyText="按 CTRL+ D 键将本页加入书签." color="success" :isShow="isShow"/>
   <q-dialog v-model="seamless" seamless position="top">
      <q-card style="width: 350px">
        <q-linear-progress :value="0.6" color="pink"/>

        <q-card-section class="row items-center no-wrap">
          <div>
            <div class="text-weight-bold">The Walker</div>
            <div class="text-grey">Fitz & The Tantrums</div>
          </div>

          <q-space/>

          <q-btn flat round icon="play_arrow"/>
          <q-btn flat round icon="pause"/>
          <q-btn flat round icon="close" v-close-popup/>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>
<script>
export default {
  name: "Home",
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
  }
};
</script>
<style lang="scss" scoped>
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
        transition: all 0.3s ease-in;
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
    transition: width 0.5s;
    overflow: hidden;
    z-index: -2;
  }
  .bookmark:hover:after {
    z-index: -2;
    width: 100%;
    transition: width 0.5s cubic-bezier(0.82, 1.77, 0.7, 0.56); //三次方贝塞尔函数回弹效果
  }
}
</style>
-->
