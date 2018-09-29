<template>
    <ul class="site border-bottom">
      <li class="active">台湾站</li>
      <li>台湾站</li>
      <li>台湾站</li>
      <li>台湾站</li>
    </ul>
</template>

<style lang="scss" scoped>
@import "~@/assets/style/varibles.scss";
.site {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: px(108);
  li {
    width: px(156);
    height: px(60);
    text-align: center;
    line-height: px(60);
    background: transparent;
    border-radius: px(5);
    font-size: px(30);
    &.active {
      color: #fff;
      background: #e82700;
    }
  }
}
</style>
