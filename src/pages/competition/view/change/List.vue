<template>
    <ul class="listBox">
      <li class="border-bottom"  v-for="(item,index) in [1,2,3,4,7]" :key="index">
        <div class="bg" style="background-image:url('https://img.zcool.cn/community/01fea155430a2b0000019ae94364d6.jpg@2o.jpg')"></div>
      </li>
    </ul>
</template>

<style lang="scss" scoped>
@import "~@/assets/style/varibles.scss";

  .listBox {
    background: #fff;
    display: flex;
    flex-wrap: wrap;
    li {
      flex-shrink: 0;
      width: 50%;
      height: px(210);
      padding: px(18);
      border-right: 1px solid #ddd;
      border-bottom: 1px solid #ddd;
      &:nth-of-type(2n){
        border-right: none;
      }
      .bg{
        width: 100%;
        height: 100%;
background-position: center center;
      background-repeat: no-repeat;
      background-size: contain;
      }

    }
  }
</style>
