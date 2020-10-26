<!-- 我想说的话 -->
<template>
  <div id="you" data-app="true">
    <div class="you">
      <v-container>
        <v-card class="center">
          <v-dialog v-model="firstDialog" persistent max-width="290">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark v-bind="attrs" v-on="on">我想说点东西，你让不让嘛？</v-btn>
            </template>
            <v-card>
              <v-card-title class="headline">你说</v-card-title>
              <v-card-text style="text-align:left">
                <P>你说你现在看到外面有情侣牵手、逛街，就会感到焦虑，因为已经24了。</P>
                <p>你说一个人太久了，一眼望不到头。</p>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text style="color:#039BE5" @click="first">
                  我要看下一条
                  <v-icon style="color:#039BE5">navigate_next</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="secondDialog" persistent max-width="290">
            <v-card>
              <v-card-title class="headline">我说</v-card-title>
              <v-card-text style="text-align:left">
                <p>从2020年8月17日至2020年10月25日</p>
                <P>承蒙不弃，聊到至今</P>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text style="color:#039BE5" @click="second">
                  我要看下一条
                  <v-icon style="color:#039BE5">navigate_next</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="thirdDialog" persistent max-width="290">
            <v-card>
              <v-card-title class="headline">我说</v-card-title>
              <v-card-text style="text-align:left">
                <p>文科生出生的程序员，似乎并没有继承文科生的优点。</p>
                <P>不善表达感情，不善于浪漫气氛，不善于甜言蜜语。</P>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text style="color:#039BE5" @click="third">
                  我要看下一条
                  <v-icon style="color:#039BE5">navigate_next</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="fourDialog" persistent max-width="290">
            <v-card>
              <v-card-title class="headline">对你的看法</v-card-title>
              <v-card-text style="text-align:left">
                <p>简单而勇敢。</p>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text style="color:#039BE5" @click="four">
                  我要看下一条
                  <v-icon style="color:#039BE5">navigate_next</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="fiveDialog" persistent max-width="290">
            <v-card>
              <v-card-title class="headline">我的感情经历</v-card-title>
              <v-card-text style="text-align:left">
                <p>稀少而短暂。</p>
                <p>大多数的异地时间，联系较少，让我曾经一度感觉自己还是一个人。只有在长假才能见面，所以大多数时间和同性呆在一起，对于感情其实也很少而简单，可能也像是一张比较白的白纸。</p>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text style="color:#039BE5" @click="five">
                  我要看下一条
                  <v-icon style="color:#039BE5">navigate_next</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="sixDialog" persistent max-width="290">
            <v-card>
              <v-card-title class="headline">我的个人情况</v-card-title>
              <v-card-text style="text-align:left">
                <p>身高：165cm</p>
                <p>体重：66kg</p>
                <p>情况：莫办法，身高确实矮了点，是个硬伤，其他我也是无颜值，无存款，无车，就是一个三无产品。名下有房一套，贷款还款中...打算卖掉，在成都买一套房子并且在成都上班，具体啥时候也不知道，看情况如何。家里市里有一套两室一厅的小房子，镇上有一栋三层小楼，但是面积小。农村的房子卖了，但是宅基地还在。</p>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text style="color:#039BE5" @click="six">
                  我要看下一条
                  <v-icon style="color:#039BE5">navigate_next</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="sevenDialog" persistent max-width="290">
            <v-card>
              <v-card-title class="headline">最后</v-card-title>
              <v-card-text style="text-align:left">
                <p>我想和你谈一场不分手的恋爱，定居成都。</p>
                <p>我想打印一张你的照片放在口袋，我想今天我就是身藏巨款的人，因为你最珍贵。</p>
                <p>请你慎重考虑，不要着急回答。</p>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text style="color:#039BE5" @click="seven">
                  关闭
                  <v-icon style="color:#039BE5">close</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-card>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      firstDialog: false,
      secondDialog: false,
      thirdDialog: false,
      fourDialog: false,
      fiveDialog: false,
      sixDialog: false,
      sevenDialog: false
    };
  },
  computed: {},
  created() {
    this.$store.commit("SET_TITLE", this.$route.meta.title);
  },
  mounted() {},
  watch: {},
  methods: {
    first() {
      this.firstDialog = false;
      this.secondDialog = true;
    },
    second() {
      this.secondDialog = false;
      this.thirdDialog = true;
    },
    third() {
      this.thirdDialog = false;
      this.fourDialog = true;
    },
    four() {
      this.fourDialog = false;
      this.fiveDialog = true;
    },
    five() {
      this.fiveDialog = false;
      this.sixDialog = true;
    },
    six() {
      this.sixDialog = false;
      this.sevenDialog = true;
    },
    seven() {
      this.sevenDialog = false;
    }
  },
  components: {}
};
</script>

<style scoped lang="scss">
.you {
  .center {
    width: 95vw;
    height: 87vh;
    top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .middle {
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
