<template>
  <div class="home">
    <div>
      <homeImg/>
    </div>
    <q-page style="background-attachment: fixed;">
      <q-img class="img" src="https://s1.ax1x.com/2020/07/04/Nv2rxP.jpg">
        <div class="my-row bg-transparent">
          <div class="left">
            <q-card class="my-card" flat bordered v-for="(item,index) in articleList" :key="index">
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
                    <div>{{item.description}}</div>
                  </div>
                </q-card-section>
              </q-card-section>
            </q-card>
          </div>
          <div class="right q-ml-lg">
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
                <div class="bookmark q-mt-md q-mb-md">
                  <q-icon name="bookmark" class="icon q-mr-sm"/>加入书签
                </div>
                <div class="text-center">
                  <i class="fab fa-github fa-2x q-mr-md avatar"></i>
                  <i class="fab fa-weixin fa-2x q-mr-md avatar"></i>
                  <i class="fab fa-zhihu fa-2x q-mr-md avatar"></i>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="zhihu"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                    class="svg-inline--fa fa-zhihu fa-w-20 fa-2x q-mr-md avatar"
                  >
                    <path
                      fill="currentColor"
                      d="M170.54 148.13v217.54l23.43.01 7.71 26.37 42.01-26.37h49.53V148.13H170.54zm97.75 193.93h-27.94l-27.9 17.51-5.08-17.47-11.9-.04V171.75h72.82v170.31zm-118.46-94.39H97.5c1.74-27.1 2.2-51.59 2.2-73.46h51.16s1.97-22.56-8.58-22.31h-88.5c3.49-13.12 7.87-26.66 13.12-40.67 0 0-24.07 0-32.27 21.57-3.39 8.9-13.21 43.14-30.7 78.12 5.89-.64 25.37-1.18 36.84-22.21 2.11-5.89 2.51-6.66 5.14-14.53h28.87c0 10.5-1.2 66.88-1.68 73.44H20.83c-11.74 0-15.56 23.62-15.56 23.62h65.58C66.45 321.1 42.83 363.12 0 396.34c20.49 5.85 40.91-.93 51-9.9 0 0 22.98-20.9 35.59-69.25l53.96 64.94s7.91-26.89-1.24-39.99c-7.58-8.92-28.06-33.06-36.79-41.81L87.9 311.95c4.36-13.98 6.99-27.55 7.87-40.67h61.65s-.09-23.62-7.59-23.62v.01zm412.02-1.6c20.83-25.64 44.98-58.57 44.98-58.57s-18.65-14.8-27.38-4.06c-6 8.15-36.83 48.2-36.83 48.2l19.23 14.43zm-150.09-59.09c-9.01-8.25-25.91 2.13-25.91 2.13s39.52 55.04 41.12 57.45l19.46-13.73s-25.67-37.61-34.66-45.86h-.01zM640 258.35c-19.78 0-130.91.93-131.06.93v-101c4.81 0 12.42-.4 22.85-1.2 40.88-2.41 70.13-4 87.77-4.81 0 0 12.22-27.19-.59-33.44-3.07-1.18-23.17 4.58-23.17 4.58s-165.22 16.49-232.36 18.05c1.6 8.82 7.62 17.08 15.78 19.55 13.31 3.48 22.69 1.7 49.15.89 24.83-1.6 43.68-2.43 56.51-2.43v99.81H351.41s2.82 22.31 25.51 22.85h107.94v70.92c0 13.97-11.19 21.99-24.48 21.12-14.08.11-26.08-1.15-41.69-1.81 1.99 3.97 6.33 14.39 19.31 21.84 9.88 4.81 16.17 6.57 26.02 6.57 29.56 0 45.67-17.28 44.89-45.31v-73.32h122.36c9.68 0 8.7-23.78 8.7-23.78l.03-.01z"
                      class
                    ></path>
                  </svg>
                  <i class="fas fa-envelope fa-2x avatar"></i>
                </div>
                <!-- <q-list>
                  <q-item clickable>
                    <q-item-section avatar>
                      <i class="fab fa-weixin"></i>
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
                </q-list>-->
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
      </q-img>
    </q-page>
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
      ]
    };
  },
  create() {}
};
</script>
<style lang="scss" scoped>
.my-row {
  display: flex;
  align-items: flex-start;
  margin: 0 auto;
  padding: 2rem 15px;
  max-width: 1200px;
  .left {
    flex: 3;
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
</style>

