<!-- 整体框架 -->
<template>
  <div>
    <asideLeft class="left"/>
    <top/>
    <slot/>
  </div>
</template>

<script>
import asideLeft from "./component/aside";
import top from "./component/top";
export default {
  props: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: { asideLeft, top }
};
</script>

<style scoped lang="scss">
// .left{
//   position: fixed;
// }
</style>
