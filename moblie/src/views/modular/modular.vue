<!-- 功能模块 -->
<template>
  <div id="modular">
    <v-sheet id="scrolling-techniques-5" class="overflow-y-auto">
      <v-container>
        <v-row dense>
          <v-card class="center">
            <v-card-text style="margin-top:-30px" v-show="$store.state.title=='垃圾分类查询'">
              <v-text-field label="请输入搜索的内容" v-model="laji" @change="search">
                <v-icon slot="append" @click="search" color="green">search</v-icon>
              </v-text-field>
            </v-card-text>
            <v-card-text
              class="text--primary content-text middle"
              :style="$store.state.type=='laji'?'height:60vh':'height:70vh'"
              v-show="!$store.state.content.info"
            >
              <div class="text--primary content-text" v-if="$store.state.type=='laji'">
                <div v-if="$store.state.content.name">
                  <p>垃圾名称：{{$store.state.content.name}}</p>
                  <p>垃圾分类：{{$store.state.content.sort}}</p>
                </div>
                <p v-else>{{$store.state.content}}</p>
              </div>
              <div v-else-if="$store.state.type=='movies'" style="height:100%;text-align:left">
                <v-card
                  color="#0277BD"
                  dark
                  v-for="(item,index) in $store.state.content"
                  :key="index"
                  style="margin-bottom:20px;width:88vw"
                >
                  <v-badge color="green" :content="item.Top">
                    <v-card-title class="text--primary">排名：{{item.Top}}</v-card-title>
                    <!-- <v-card-subtitle></v-card-subtitle> -->

                    <v-card-subtitle>
                      <p style="font-size:18px">电影名称：{{item.moveName}}</p>
                      <p>今日票房：{{item.zhPF}}</p>
                      <p>总票房：{{item.zzPF}}</p>
                      <p>上映天数：{{item.day}}</p>
                    </v-card-subtitle>
                  </v-badge>
                </v-card>
              </div>
              <div v-else-if="$store.state.type=='douban'" style="height:100%;text-align:left">
                <v-card
                  color="#0277BD"
                  dark
                  v-for="(item,index) in $store.state.content"
                  :key="index"
                  style="margin-bottom:20px;width:88vw"
                >
                  <!-- <v-card-title class="text--primary">电影名称：{{item.title}}</v-card-title> -->
                  <!-- <v-card-subtitle></v-card-subtitle> -->

                  <v-card-subtitle>
                    <p style="font-size:18px">电影名称：{{item.title}}</p>
                    <p>
                      豆瓣链接：
                      <a :href="item.info.url">{{item.info.url}}</a>
                    </p>
                    <p>演员：{{item.info.yanyuan}}</p>
                    <p>评分：{{item.info.pingfen}}</p>
                    <p>评论人数：{{item.info.pingjia}}</p>
                    <!-- <p>图片：{{item.info.imgurl}}</p> -->
                  </v-card-subtitle>
                </v-card>
              </div>
              <div v-else-if="$store.state.type=='audio'" style="margin-top:20px">
                <v-form ref="form" data-app="true">
                  <v-select :items="persex" v-model="audio.per" label="喊你选择男的还是女的！" outlined></v-select>
                  <v-textarea outlined clearable label="你想要转化啥子文字嘛？" v-model="audio.txt"></v-textarea>
                </v-form>
                <v-btn color="deep-orange" @click="identifyAudio()">
                  <v-icon style="color:#EF6C00">transform</v-icon>转换起飞
                </v-btn>
                <video v-if="src" class="audio" controls autoplay name="media">
                  <source :src="src" type="audio/mpeg">
                </video>
              </div>
              <div v-else>{{$store.state.content}}</div>
            </v-card-text>
            <img
              v-show="$store.state.type == 'image'"
              :src="$store.state.content.imgurl"
              width="100%"
              alt="风景图片"
              ref="image"
            >
            <v-card-actions>
              <v-btn color="deep-orange" @click="$router.push('/')" style="margin-right:10px">
                <v-icon style="color:#2962FF;">arrow_back</v-icon>我要回家
              </v-btn>
              <v-btn
                color="deep-orange"
                v-if="$store.state.type=='normal' || $store.state.type == 'image'"
                style="margin-right:10px"
                @click="init()"
              >
                <v-icon style="color:#D81B60">favorite</v-icon>再来一个
              </v-btn>
              <v-btn color="deep-orange" v-if="$store.state.type=='image'" @click="dowloadImage()">
                <v-icon style="color:#EF6C00">save_alt</v-icon>下载图片
              </v-btn>
              <v-btn color="deep-orange" v-if="$store.state.type=='audio'" @click="saveAudio()">
                <v-icon style="color:#EF6C00">save_alt</v-icon>下载语音
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-row>
      </v-container>
    </v-sheet>
    <v-overlay :value="$store.state.overlay">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
      <p>{{$store.state.message}}</p>
    </v-overlay>
  </div>
</template>

<script>
/*eslint-disabled*/
import {
  ian,
  xh,
  love,
  sao,
  view,
  laji,
  movies,
  douban,
  audio
} from "../../api/index";
export default {
  props: {},
  data() {
    return {
      content: "",
      name: "",
      laji: "",
      type: "",
      src: "",
      persex: ["男声", "女声"],
      audio: {
        txt: "", //文字
        per: "" //性别
      },
      overlay: false,
      message: ""
    };
  },
  computed: {},
  created() {
    this.$store.commit("SET_CONTENT", "");
    this.init();
    this.$store.commit("SET_TITLE", this.$route.query.name);
  },
  mounted() {},
  watch: {},
  methods: {
    init() {
      console.log("this.$route.query.name", this.$route.query.name);
      this.$store.commit("SET_MESSAGE", "莫催我，我在使劲了...");
      this.$store.commit("SET_OVERLAY", true);
      switch (this.$route.query.name) {
        case "我想说":
          this.$router.push("/you");
          break;
        case "一句一言":
          ian().then(res => {
            console.log(res);
            if (res.data.success) {
              this.$store.commit("SET_TYPE", "normal");
              this.$store.commit("SET_OVERLAY", false);
              //   this.content = res.data.ishan;
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

              //   this.content = res.data.joke;
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

              //   this.content = res.data.ishan;
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

              //   this.content = res.data.ishan;
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
          this.$store.commit("SET_CONTENT", "你要查啥子垃圾？是不是你自己哟？");
          break;
        case "实时电影排行":
          movies().then(res => {
            console.log(res);
            if (res.data.success) {
              // this.type = "movies";
              this.$store.commit("SET_TYPE", "movies");
              this.$store.commit("SET_OVERLAY", false);
              this.$store.commit("SET_CONTENT", res.data.data);
            }
          });
          break;
        case "豆瓣电影排行":
          douban().then(res => {
            console.log(res);
            if (res.data.success) {
              // this.type = "douban";
              this.$store.commit("SET_TYPE", "douban");
              this.$store.commit("SET_OVERLAY", false);

              this.$store.commit("SET_CONTENT", res.data.data);
            }
          });
          break;
        case "文字转语音":
          this.$store.commit("SET_OVERLAY", false);
          this.$store.commit("SET_TYPE", "audio");
          // this.$store.commit("SET_CONTENT", this.content);

          // audio().then(res => {
          //   console.log(res);
          //   if (res.data.success) {
          //     this.content = res.data.ishan;
          //   }
          // });
          break;
        case "关于":
          this.$router.push("/about");
          break;
        default:
          break;
      }
    },
    // 垃圾分类查询
    search() {
      console.log("laji", this.laji);
      this.$store.commit("SET_MESSAGE", "莫催我，我在使劲了...");
      this.$store.commit("SET_OVERLAY", true);
      laji({ lj: this.laji }).then(res => {
        console.log(res);
        if (res.data.success) {
          // this.type = "laji";
          this.$store.commit("SET_TYPE", "laji");
          this.$store.commit("SET_OVERLAY", false);

          //   this.content = res.data;
          this.$store.commit("SET_CONTENT", res.data);
        }
      });
    },
    // 下载图片
    dowloadImage() {
      const aLink = document.createElement("a");
      aLink.download = "风景图片";
      aLink.href = this.$store.state.content.imgurl;
      aLink.click();
    },
    // 识别文字并转化语音
    identifyAudio() {
      this.src = "";
      this.message = "等哈，在转换了，吃多了，有点卡到了...";
      this.$store.commit("SET_OVERLAY", true);

      console.log("audio", this.audio);
      setTimeout(() => {
        if (this.audio.per == "男声") {
          this.src = `https://api.vvhan.com/api/song.php?txt=${
            this.audio.txt
          }&per=1`;
        } else {
          this.src = `https://api.vvhan.com/api/song.php?txt=${this.audio.txt}`;
        }
        this.$store.commit("SET_OVERLAY", false);
        console.log("src", this.src);
      }, 1000);
    },
    // 进行下载
    saveAudio() {
      const aLink = document.createElement("a");
      aLink.download = "识别的语音.mp3";
      aLink.href = this.src;
      aLink.click();
      // var ua = navigator.userAgent.toLowerCase();
      // if (ua.match(/MicroMessenger/i) == "micromessenger") {
      //   this.show = true;
      // } else {
      //   this.show = false;
      //   var url = this.src;
      //   var tType = "GET";
      //   var xmlhttp = new XMLHttpRequest();
      //   xmlhttp.onreadystatechange = () => {
      //     if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
      //       const blob = xmlhttp.response;
      //       let reader = new FileReader();
      //       reader.readAsDataURL(blob);
      //       reader.onload = e => {
      //         console.log("e", e);
      //         var a = document.createElement("a");
      //         a.href = e.target.result;
      //         a.download = "识别的语音.mp3";
      //         a.click();
      //       };
      //     }
      //   };
      //   xmlhttp.open(tType, url, true);
      //   xmlhttp.send();
      //   xmlhttp.responseType = "blob";
      // }
    }
  },
  components: {}
};
</script>


<style scoped lang="scss">
#modular {
  .center {
    width: 95vw;
    height: 88vh;
    top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .content-text {
    color: #00bfa5;
    font-size: 1rem;
  }
  .middle {
    // height: 62vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: auto;
  }
  .audio {
    height: 80px;
    width: 100%;
    margin: 0 auto;
    // display: flex;
    // justify-content: center;
    // align-items: center;
  }
}
</style>
