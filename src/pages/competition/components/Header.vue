<template>
 <header class="border-bottom">
      <!-- 它换 class，替换不同的图片 -->
      <a href="javascript:;" class="left" :class="left" @click="goBack"></a>
      <slot name="title">
        <h2 class="title">{{content}}</h2>
      </slot>
      <!-- 它换 class，显示不同的内容 -->
      <div class="right">
        <div v-if="right === 'date'"  class="date" @click="goToDate" ></div>
        <div v-if="right === 'today'" class="today">今天</div>
      </div>
    </header>
</template>

<script>
export default {
  props: {
    left: {
      type: String,
      default: 'back'
    },
    content: {
      type: String,
      default: ''
    },
    right: {
      type: String,
      default: 'date'
    }
  },
  data () {
    return {}
  },

  methods: {
    goBack () {
      history.back(-1)
    },
    goToDate () {
      this.$router.push({ name: 'date' })
    }
  },
  mounted () {
    console.log(this.$router)
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/varibles.scss";

header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: px(88);
  background: #fff;
  &.border-bottom::before {
    border-color: #ccc;
  }
  .left {
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    width: px(100);
    height: px(88);
    &.back {
      background: url("../image/back.png") no-repeat center center;
      background-size: px(36) px(48);
    }
    &.close {
      background: url("../image/back.png") no-repeat center center;
      background-size: px(36) px(48);
    }
  }
  .right {
    position: absolute;
    right: 0;
    top: 0;
    display: block;
    width: px(100);
    height: px(88);
    .date {
      position: absolute;
      right: 0;
      top: 0;
      display: block;
      width: 100%;
      height: 100%;
      background: url("../image/date.png") no-repeat center center;
      background-size: px(48) px(44);
    }
    .today {
      font-size: px(32);
      color: #e82700;
      text-align: center;
      line-height: px(88);
    }
  }

  .title {
    text-align: center;
    font-size: px(36);
    font-weight: normal;
    img {
      width: px(142);
      height: px(32);
      vertical-align: middle;
    }
  }
}
</style>
