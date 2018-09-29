<template>
 <div class="weatherWrap">
   <div class="weaterBox">
     <div class="top"><span>第一天</span> <span>12月19日</span></div>
     <div class="details">
       <span class="count">30</span>
       <span class="unit">℃</span>
       <span class="img" style="background-image:url('https://img.zcool.cn/community/01fea155430a2b0000019ae94364d6.jpg@2o.jpg')"></span>
     </div>
     <div class="describe"><span>晴转多云</span></div>
   </div>
   <div class="weaterBox">
     <div class="top"><span>第一天</span> <span>12月19日</span></div>
     <div class="details">
       <span class="count">30</span>
       <span class="unit">℃</span>
       <span class="img" style="background-image:url('https://img.zcool.cn/community/01fea155430a2b0000019ae94364d6.jpg@2o.jpg')"></span>
     </div>
     <div class="describe"><span>晴转多云</span></div>
   </div>
 </div>
</template>

<script>
// 赛事：第一部分

export default {
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/varibles.scss";
.weatherWrap{
  height: px(230);
  padding: px(38) 0;
  display: flex;
  align-items: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
    margin-bottom: px(12);
}
.weaterBox {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: px(160);
  &:nth-child(n+1){
    border-left: 1px solid #ddd;
  }
  .top {
    display: flex;
    span {
      display: block;
    }
    span:nth-of-type(1) {
      display: block;
      line-height: px(32);
      background: red;
      padding: 0 px(7);
      color: #fff;
      font-size: px(24);
      transform: scale(0.9);
      border-radius: px(5);
    }
    span:nth-of-type(2) {
      font-size: px(24);
      color: #000;
      font-weight: 100;
    }
  }
  .details {
    display: flex;
    align-items:baseline;
    .count {
      font-size: px(48);
      color: #333;
    }
    .unit {
      font-size: px(24);
      color: #333;
      padding:0 px(10) 0 px(5);
    }
    .img {
      display: block;
      width: px(70);
      height: px(40);
      background-repeat: no-repeat;
      background-position: center center;
      background-size: contain;
    }
  }
}
</style>
