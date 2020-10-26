<!-- 顶部 -->
<template>
  <div>
    <v-app-bar fixed color="#43a047" dark src="https://picsum.photos/1920/1080?random">
      <template v-slot:img="{ props }">
        <v-img v-bind="props" gradient="to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)"></v-img>
      </template>
      <v-icon @click.stop="_showAside">menu</v-icon>
      <v-toolbar-title style="margin-left:10px">{{$store.state.title}}</v-toolbar-title>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      drawer: false
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    _showAside() {
      console.log("drawer", this.drawer);
      // if (this.drawer) {
      //   this.drawer = false;
      // } else {
      //   this.drawer = true;
      // }
      if (this.drawer) {
        this.drawer = false;
      }
      this.drawer = !this.drawer;
      this.$store.commit("SET_DRAWER", this.drawer);
      console.log("drawer", this.drawer);
    }
  },
  components: {}
};
</script>

<style scoped lang="scss">
</style>
