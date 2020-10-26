<!-- 侧边抽屉 -->
<template>
  <div>
    <v-navigation-drawer style="position: fixed;" v-model="$store.state.drawer" absolute left temporary>
      <v-list nav dense>
        <v-list-item-group v-model="item">
          <v-list-item v-for="(item, i) in cardList" :key="i">
            <v-list-item-title @click="_toModular(item.name)">{{item.name}}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { cardList } from "../../utils/modular";
import {
  ian,
  xh,
  love,
  sao,
  view,
  laji,
  movies,
  douban
} from "../../api/index";

export default {
  props: {},
  data() {
    return {
      item: 1,
      drawer: false,
      cardList
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    _toModular(name) {
      this.$store.commit("SET_TITLE", name);
      this.$router.push(`/modular?name=${name}`);
      this.$store.commit("SET_MESSAGE", "莫催我，我在使劲了...");
      this.$store.commit("SET_OVERLAY", true);
      switch (name) {
        case "我想说":
          this.$router.push("/you");
          break;
        case "一句一言":
          ian().then(res => {
            console.log(res);
            if (res.data.success) {
              this.$store.commit("SET_TYPE", "normal");
              this.$store.commit("SET_OVERLAY", false);

              this.$store.commit("SET_CONTENT", res.data.ishan);
            }
          });
          break;
        case "随机笑话":
          xh().then(res => {
            console.log(res);
            if (res.data.success) {
              this.$store.commit("SET_TYPE", "normal");
              this.$store.commit("SET_OVERLAY", false);

              this.$store.commit("SET_CONTENT", res.data.joke);
            }
          });
          break;
        case "随机情话":
          love().then(res => {
            console.log(res);
            if (res.data.success) {
              this.$store.commit("SET_TYPE", "normal");

              this.$store.commit("SET_OVERLAY", false);
              this.$store.commit("SET_CONTENT", res.data.ishan);
            }
          });
          break;
        case "随机骚话":
          sao().then(res => {
            console.log(res);
            if (res.data.success) {
              this.$store.commit("SET_TYPE", "normal");
              this.$store.commit("SET_OVERLAY", false);

              this.$store.commit("SET_CONTENT", res.data.ishan);
            }
          });
          break;
        case "生成风景图片":
          view().then(res => {
            console.log(res);
            if (res.data.success) {
              this.$store.commit("SET_TYPE", "image");
              this.$store.commit("SET_OVERLAY", false);

              this.$store.commit("SET_CONTENT", res.data);
            }
          });
          break;
        case "垃圾分类查询":
          this.$store.commit("SET_OVERLAY", false);
          this.$store.commit("SET_TYPE", "laji");

          this.$store.commit(
            "SET_CONTENT",
            "你又想查啥子垃圾了？是你的男朋友还是女朋友嘛？"
          );
          break;
        case "实时电影排行":
          movies().then(res => {
            console.log(res);
            if (res.data.success) {
              this.$store.commit("SET_TYPE", "movies");
              this.$store.commit("SET_OVERLAY", false);
              // this.type = "movies";
              this.$store.commit("SET_CONTENT", res.data.data);
            }
          });
          break;
        case "豆瓣电影排行":
          douban().then(res => {
            console.log(res);
            if (res.data.success) {
              // this.type = "movies";
              this.$store.commit("SET_TYPE", "douban");
              this.$store.commit("SET_OVERLAY", false);

              this.$store.commit("SET_CONTENT", res.data.data);
            }
          });
          break;
        case "文字转语音":
          this.$store.commit("SET_OVERLAY", false);
          this.$store.commit("SET_TYPE", "audio");
          //   this.content = "明天开通此功能";

          //   xh().then(res => {
          //     console.log(res);
          //     if (res.data.success) {
          //       this.content = res.data.ishan;
          //     }
          //   });
          break;
        case "关于":
          this.$router.push("/about");
          break;
        default:
          break;
      }
    }
  },
  components: {}
};
</script>

<style scoped lang="scss">
</style>
