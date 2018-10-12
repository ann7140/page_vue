<template>
  <div class="couponWrap">
    <div class="content">
      <img class="icon" src="../../image/coupon.png" />
      <p class="p1">恭喜你</p>
      <h3 class="p2">优惠券领取成功</h3>
      <p class="p3">请在瑞卡丁APP中查看</p>
      <button class="knowButton">我知道了</button>
    </div>
    <div class="sidebar">
      <img src="../../image/logo.png" alt="">
      <div class="r">
        <h3>瑞卡丁</h3>
        <p>帮您实现赛车梦想</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/varibles.scss";
.couponWrap {
  width: 100vw;
  height: 100vh;
  .content {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: px(188);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: px(60);
    padding-right: px(60);
    box-shadow: 0 px(4) px(8) 0 rgba(0, 0, 0, 0.1);
  }
  .icon {
    display: block;
    width: px(144);
    height: px(144);
    margin-top: px(100);
    margin-bottom: px(10);
  }
  .p1 {
    font-size: px(36);
    color: #333;
    margin-bottom: px(10);
  }
  .p2 {
    font-size: px(36);
    color: #333;
    font-weight: 500;
    margin-bottom: px(10);
  }
  .p3 {
    font-size: px(24);
    color: #999;
    margin-bottom: px(48);
  }
  .knowButton {
    display: block;
    width: 100%;
    font-size: px(32);
    color: #ffffff;
    letter-spacing: 0;
    height: px(100);
    background: #e82700;
    border-radius: px(8);
    margin-top: px(20);
  }

  .sidebar {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: px(176);
    display: flex;
    align-items: center;
    padding: 0 px(32);
    img {
      width: px(120);
      height: px(120);
      box-shadow: 0 0 px(8) rgba(0, 0, 0, 0.2);
      margin-right: px(32);
    }
    .r {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: px(120);
      color: #333;
      h3 {
        font-size: px(40);
      }
      p {
        font-size: px(32);
      }
    }
  }
}
</style>
