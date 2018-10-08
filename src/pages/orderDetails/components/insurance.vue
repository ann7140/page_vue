<template>
  <div class="insuranceWrap">
    <div class="title border-bottom">
      <input type="checkbox">
      <span>安神户外保险—自由人 卡丁车意外险</span>
    </div>
    <div class="content top">
      <div class="left"></div>
      <div class="right ">
        <span> 计划1 </span>
        <span> 计划2 </span>
        <span> 计划3 </span>
      </div>
    </div>

    <div class="content details">
      <div class="left">意外身故、伤残保障</div>
      <div class="right money">
        <span> 10万 </span>
        <span> 20万 </span>
        <span> 50万 </span>
      </div>
    </div>
    <div class="content details">
      <div class="left">旅行个人责任</div>
      <div class="right money">
        <span> 10万 </span>
        <span> 20万 </span>
        <span> 50万 </span>
      </div>
    </div>
    <div class="content details">
      <div class="left">旅行紧急医疗运送和送返</div>
      <div class="right money">
        <span> 10万 </span>
        <span> 20万 </span>
        <span> 50万 </span>
      </div>
    </div>
    <div class="content details">
      <div class="left">旅行医疗补偿</div>
      <div class="right money">
        <span> 10万 </span>
        <span> 20万 </span>
        <span> 50万 </span>
      </div>
    </div>
    <div class="content bottom">
      <div class="left">1-80岁</div>
      <div class="right ">
        <span> 10万 </span>
        <span> 20万 </span>
        <span> 50万 </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "~@/assets/style/varibles.scss";
.insuranceWrap {
  margin-top: px(12);
  background: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
  .title {
    display: flex;
    align-items: center;
    height: px(90);
    padding: 0 px(30);
    font-size: px(24);
    color: #333;
    &::before {
      border-bottom-color: #ccc;
    }
  }
  .content {
    display: flex;
    justify-content: space-between;
    padding: 0 px(30);
    &.details {
      padding-top: px(8);
      padding-bottom: px(8);
    }
    &.top {
      .right {
        padding-top: px(10);
        padding-bottom: px(10);
        border-bottom: 1px solid #ddd;
      }
    }
    &.bottom {
      .right {
        padding-top: px(10);
        padding-bottom: px(10);
        border-top: 1px solid #ddd;
      }
    }
    .right {
      flex-shrink: 0;
      width: 46%;
      display: flex;
      padding-right: px(10);
      padding-left: px(10);
      justify-content: space-between;
      &.money {
        span {
          color: #0873eb;
        }
      }
    }
  }
}
</style>
