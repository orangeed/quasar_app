<!-- 首页 -->
<template>
  <div>
    <v-card min-width="350" class="mx-auto overflow-hidden">
      <v-sheet id="scrolling-techniques-5" class="overflow-y-auto">
        <v-container>
          <v-row dense>
            <!-- <v-col cols="12">
              <v-card color="#385F73" dark>
                <v-card-title class="headline">Unlimited music now</v-card-title>

                <v-card-subtitle>Listen to your favorite artists and albums whenever and wherever, online and offline.</v-card-subtitle>

                <v-card-actions>
                  <v-btn text>Listen Now</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>-->

            <v-col v-for="(item, i) in cardList" :key="i" cols="12">
              <v-card @click="_toModular(item.name)" :img="item.img">
                <div class="d-flex flex-no-wrap justify-space-between">
                  <div>
                    <v-card-title class="headline" style="color:#FBE9E7" v-text="item.name"></v-card-title>
                    <v-card-subtitle style="text-align:left;color:#ddd">{{item.subtitle}}</v-card-subtitle>
                    <!-- <v-card-subtitle v-text="item.artist"></v-card-subtitle> -->
                  </div>

                  <!-- <v-avatar class="ma-3" size="125" tile>
                    <v-img :src="item.src"></v-img>
                  </v-avatar>-->
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-sheet>
    </v-card>
  </div>
</template>

<script>
import { cardList } from "../../utils/modular";
export default {
  props: {},
  data() {
    return {
      drawer: false, // 是否打开抽屉
      cardList
    };
  },
  computed: {},
  created() {
    this.$store.commit("SET_TITLE", "首页");
  },
  mounted() {},
  watch: {},
  methods: {
    _toModular(name) {
      this.$router.push(`/modular?name=${name}`);
    }
  },
  components: {}
};
</script>

<style scoped lang="scss">
</style>
