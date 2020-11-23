<!-- 炫酷的地图 -->
<template>
  <div class="home">
    <button @click="returnCountry">返回全国</button>
    <div class="mapp">
      <aMap :reContry="reContry"></aMap>
    </div>
  </div>
</template>
<script>
import aMap from "./com/index";

export default {
  name: "map",
  components: { aMap }, // 引入注册
  data() {
    return {
      reContry: true
    };
  },
  methods: {
    //点击全国按钮
    returnCountry() {
      this.reContry = true;
      setTimeout(() => {
        this.reContry = false;
      }, 500);
      console.log("reContry", this.reContry);
    }
  }
};
</script>
<style scoped lang="scss">
//地图
.mapp {
  width: 100vw;
  height: calc(100vh - 50px);
  z-index: 2;
}
</style>

