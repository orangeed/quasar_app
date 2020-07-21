<!-- about页面 -->
<template>
  <div class="about">
    <headImg/>
    <orange-aside>
      <template>
        <div :class="$store.state.isMobile ? 'left-mobile' : 'left' ">
          <div v-if="$store.state.isMobile">
            222
          </div>
          <div v-else>
            111
          </div>
        </div>
      </template>
    </orange-aside>
  </div>
</template>


<script>
export default {
    props: {

    },
    data() {
        return {

        };
    },
    computed: {

    },
    created() {

    },
    mounted() {

    },
    watch: {

    },
    methods: {

    },
    components: {

    },
};
</script>

<style scoped lang="scss">

</style>
