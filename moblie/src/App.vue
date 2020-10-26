<template>
  <div id="app" v-touch:right="right" v-touch:left="left" class="overflow-hidden">
    <layout>
      <template>
        <router-view style="margin-top:48px"/>
      </template>
    </layout>
  </div>
</template>

<script>
import layout from "../src/layout/index";
export default {
  data() {
    return {};
  },
  methods: {
    right() {
      this.$store.commit("SET_DRAWER", true);
    },
    left(){
      this.$router.push('/')
    }
  },
  components: { layout }
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
