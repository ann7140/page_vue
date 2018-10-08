<template>
  <div class="main">
    <HeaderTop ></HeaderTop>
    <main>
      <!-- 购买的东西 -->
      <h2 class="title">胜道博大岳卡丁车俱乐部（世博源店）胜道博大岳卡丁车俱乐部（世博源店）</h2>
      <shopping></shopping>
      <otherThing></otherThing>
      <!-- <insurance></insurance> -->
      <info></info>
    </main>
    <div class="paymentWrap border-top">
      <div class="info">
        <span class="money">实付款 ¥712.00</span>
        <span class="integral">支付成功获得159积分</span>
      </div>
      <div class="buttonPay">去支付</div>
    </div>
  </div>
</template>

<script>
import HeaderTop from './components/Header.vue'
import otherThing from './components/otherThing.vue'
import shopping from './components/shopping.vue'
import info from './components/info.vue'
import insurance from './components/insurance.vue'

export default {
  data () {
    return {
      disable: true
    }
  },
  components: {
    HeaderTop,
    shopping,
    otherThing,
    insurance,
    info
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/varibles.scss";
main {
  padding-top: px(88);
  background: #f8f8f8;
  padding-bottom: px(108);
  .title {
    line-height: px(40);
    font-size: px(36);
    color: #333;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    padding: px(30) px(30);
    background: #fff;
  }
}
.paymentWrap {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: px(108);
  background: #fff;
  display: flex;
  &::before {
    border-top-color: #ddd;
  }
  .info{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 56%;
    .money{
    font-size: px(36);
    color: #E82700;
    }
    .integral{
      font-size: px(24);
      color: #333;
    }
  }
  .buttonPay{
    display: flex;
    align-items: center;
    justify-content: center;
    background: #E82700;
    width: 44%;
    color:#fff;
    font-size: px(36);
  }
}
</style>
