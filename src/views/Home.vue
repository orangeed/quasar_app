<template>
  <div class="home">
    <div>
      <HelloWorld/>
    </div>
    <q-page class="flex flex-center">
      <img alt="Quasar logo" src="../assets/logo.png">
    </q-page>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>
