<!-- echats离线地图 -->
<template>
  <div>
    <offlineMap/>
    <!-- <mapOff/> -->
  </div>
</template>

<script>
import offlineMap from "./components/offlineMap";
import mapOff from "./components/map";

export default {
  components: {
    offlineMap,
    mapOff
  },
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss">
</style>
