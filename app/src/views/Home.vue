
<template>
  <div class="home">
    <homeImg/>
    <orange-aside>
      <template>
        <div :class="$store.state.isMobile ? 'left-mobile' : 'left' ">
          <div v-if="$store.state.isMobile">
            <q-card class="my-card" basic flat v-for="(item,index) in articleList" :key="index">
              <img :src="item.img" @click="$router.push(`/articleDeatil?id=${item.id}`)">
              <q-card-section :horizontal="$store.state.isMobile ? undefined : true">
                <div class="right-text q-mt-md q-mb-md">
                  <div class="text-h6" @click="$router.push(`/articleDeatil?id=${item.id}`)">{{item.title}}</div>
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
                <div class="section-img" @click="$router.push(`/articleDeatil?id=${item.id}`)">
                  <p>
                    <img :src="item.img">
                  </p>
                </div>
                <q-card-section>
                  <div class="right-text">
                    <div
                      class="text-h6 section-title"
                      @click="$router.push(`/articleDeatil?id=${item.id}`)"
                    >{{item.title}}</div>
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
          id: 0,
          title: "这是第一篇文章",
          img: "https://s1.ax1x.com/2020/06/24/NwAQ39.md.jpg",
          createTime: "2020-07-16",
          tag: "教程",
          description:
            "不知道是多少天了，在无数个难眠的夜晚，我辗转反侧，想有自己的台式电脑，最好是自己组装的，正好，今年刚刚毕业，又赶上了618活动，就开始买买买（虽然自己是在之前两天买的）！ "
        },
        {
          id: 1,
          title: "这是第二篇文章",
          img: "https://s1.ax1x.com/2020/03/28/GAJpkt.md.jpg",
          createTime: "2020-07-16",
          tag: "教程",
          description:
            "ask的黄金卡是多久啊是根据哈i按时打卡是大苏打好i收到偶爱的哈克斯的卢卡斯的哈师大那时快大厦的那款是那么，啊啊实打实多名旅客大苏打阿萨，啊 "
        },
        {
          id: 2,
          title: "这是第三篇文章",
          img: "https://s2.ax1x.com/2020/03/05/3HM2dK.md.jpg",
          createTime: "2020-07-16",
          tag: "教程",
          description:
            "教科书的高分考生东方博客随时打开是，地方大师傅看见那就开始变得卡死撒旦，是，萨达看到咯聚合物疾风让顾客毕竟我，开始交付海军我"
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
  .my-card {
    margin-bottom: 30px;
    .section-img {
      cursor: pointer;

      p {
        height: 230px;
        width: 350px;
        margin: 0;
        padding: 0;
        border-radius: 5px;
        overflow: hidden;
      }
      img {
        height: 230px;
        width: 350px;
        object-fit: cover;
        transform: scale(1);
        transition: transform $time-img ease 0s;
        &:hover {
          transform: scale(1.2);
        }
      }
    }
    .section-title {
      cursor: pointer;
      transition: all $time-head;
      font-weight: 600;
      color: #575757;
      &:hover {
        color: #2196f3;
        transition: all $time-head;
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
}
</style>
 
