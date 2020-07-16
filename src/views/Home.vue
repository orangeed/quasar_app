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
          <div class="rigth q-ml-lg">
            <q-card class="my-card">
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

  // flex-wrap: wrap;
  .left {
    flex: 4;
  }
  .rigth {
    flex: 1;
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
</style>

