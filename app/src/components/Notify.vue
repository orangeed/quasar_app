<!-- 提示组件 -->
<template>
  <div class="notify" :class="{on: isShow}">
    <div :class=" color | colorFilter " class="position">
      <p class="tishi">{{NotifyText}}</p>
      <span class="close">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fal"
          data-icon="times"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
          class="svg-inline--fa fa-times fa-w-10 fa-lg avatar"
        >
          <path
            fill="currentColor"
            d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"
            class
          ></path>
        </svg>
        <!-- <font-awesome-icon :icon="['fas','times']" class="avatar"/> -->
      </span>
    </div>

    <!-- <div :class="'bg-green'">{{NotifyText}}</div> -->
  </div>
</template>

<script>
export default {
  name: "Notify",
  props: {
    isShow: {
      type: Boolean,
      default: false
    },
    NotifyText: {
      type: String,
      default: "这是提示框"
    },
    color: {
      type: String,
      default: "info"
    }
  },
  data() {
    return {
      newColor: ""
    };
  },
  filters: {
    colorFilter(key) {
      const type = {
        error: "bg-red",
        success: "bg-blue-4",
        info: "bg-blue-grey-3"
      };
      console.log("type[key]", type[key]);
      return type[key];
    }
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {}
};
</script>

<style scoped lang="scss">
.notify {
  position: fixed;
  height: 100px;
  z-index: 9999;
  transition: all 1s linear;
  visibility: visible;
  opacity: 0;
  top: -100px;
  right: 16px;
  &.on {
    top: 16px;
    opacity: 1;
  }
  .position {
    // position: absolute;
    font-size: 20px;
    width: 330px;
    min-height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    // height: 100px;
    top: 16px;
    right: 16px;
    border-radius: 10px;
    padding: 10px;
    .tishi {
      margin: 0;
      font-size: 16px;
      color: #ffffff;
    }
    .close {
      position: absolute;
      top: 0px;
      right: 20px;
      // 头像旋转
      .avatar {
        font-size: 16px;
        color: #ffffff;
        transition: all 0$time-head ease-in;
        &:hover {
          transform: rotate(360deg);
          transform-origin: center;
        }
      }
    }
  }
}
</style>
