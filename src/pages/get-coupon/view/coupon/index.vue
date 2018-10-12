<template>
  <div class="couponWrap">
    <h3 class="title">活动说明</h3>
    <ol class="order">
      <li>1、每个手机号限领一次；</li>
      <li>2、领取成功后请在APP - 我的 - 优惠券中查看；</li>
      <li>3、瑞卡丁应用保留活动最终解释权。</li>
    </ol>
    <form>
      <input class="inp" type="text" placeholder="输入手机号即可领取">
      <button class="getCouponButton" @click="goToSuccess">去领优惠券</button>
    </form>

  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  components: {},
  methods: {
    goToSuccess () {
      this.$router.push({ name: 'success' })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/varibles.scss";
.couponWrap {
  padding-left: px(60);
  padding-right: px(60);
  .title {
    font-size: px(36);
    color: #333;
    padding-top: px(48);
    padding-bottom: px(28);
  }
  .order {
    font-size: px(24);
    line-height: px(40);
    color: #666;
    margin-bottom: px(60);
  }
  .inp {
    display: block;
    width: 100%;
    background: #f6f6f6;
    border-radius: px(8);
    font-size: px(32);
    color: #666;
    border: none;
    line-height: px(50);
    padding-top: px(25);
    padding-bottom: px(25);
    text-align: center;
    &::-webkit-input-placeholder {
      color: #9e9e9e;
    }
  }
  .getCouponButton {
    display: block;
    width: 100%;
    font-size: px(32);
    color: #ffffff;
    letter-spacing: 0;
    height: px(100);
    background: #e82700;
    border-radius:px(8);
    margin-top: px(20);
  }
}
</style>
