<template>
 <header class="border-bottom">
      <a href="###" class="back"></a>
      <h2 class="title">赛事</h2>
      <button class="date"></button>
    </header>
</template>

<style lang="scss" scoped>
@import "~@/assets/style/varibles.scss";

header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: px(88);
  background: border-box;
  &.border-bottom::before {
    border-color: #ccc;
  }
  .back {
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    width: px(100);
    height: px(88);
    background: url("../../image/back.png") no-repeat center center;
    background-size: px(36) px(48);
  }
  .date {
    position: absolute;
    right: 0;
    top: 0;
    display: block;
    width: px(100);
    height: px(88);
    border: none;
    background: url("../../image/date.png") no-repeat center center;
    background-size: px(48) px(44);
  }
  .title {
    text-align: center;
    font-size: px(36);
    color: #333;
    font-weight: 400;
  }
}
</style>
