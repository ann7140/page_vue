<template>
  <!-- 手机、优惠劵 -->
  <div class="otherThings">
    <div class="phoneWrap border-bottom">
      <div class="phoneBox">
        <div class="phone">
          <span class="text">手机号码：</span>
          <em class="number" v-if="isShow" v-text="phoneData"></em>
          <input v-else type="number"  v-model="phoneData">
        </div>
        <div class="amend" @click="amend" v-text="isShow ?'修改':'完成'"></div>
      </div>
      <span class="info">手机号仅用于生成订单，兑换码将不再以短信发送</span>
    </div>
    <div class="coupon">
      <span class="name">优惠劵</span>
      <!-- <span class="button  use">1张可用</span> -->
      <span class="button  noUse">暂无可用</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'orderPhone',

  data () {
    return {
      isShow: true,
      phoneData: this.phone,

      // 控制优惠劵显示
      discountShow: false
    }
  },
  props: {
    phone: String
  },
  methods: {
    amend () {
      this.isShow = !this.isShow
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/varibles.scss";
.otherThings {
  margin-top: px(12);
  padding: 0 px(30);
  background: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
}

.phoneWrap {
  &::before {
    border-bottom-color: #ddd;
  }
  .phoneBox {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: px(20);
    line-height: px(44);
    // .phone {
    // }
    .amend {
      font-size: px(28);
      color: #e82700;
      background: url("../image/icon_edit.png") no-repeat left top px(7);
      background-size: px(24) px(26);
      padding-left: px(30);
    }
    .text,
    .number {
      font-size: px(32);
    }
    .number {
      font-style: normal;
    }
    input {
      line-height: px(30);
      padding: px(5) 0;
      font-size: px(28);
      margin: 0;
      outline: 1px solid #ddd;
      width: px(300);
    }
  }
  .info {
    display: block;
    line-height: px(30);
    font-size: px(24);
    color: #999;
    padding-top: px(16);
    padding-bottom: px(24);
  }
}

.coupon {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: px(100);
  .name {
    font-size: px(28);
    color: #333;
  }
  .button {
    font-size: px(24);
    &.noUse {
      color: #999;
    }
    &.use {
      color: #e82700;
      padding-right: px(40);
      background: url("../image/icon_right.png") no-repeat right px(10) center;
    background-size: px(18) px(24);
    }
  }
}
</style>
