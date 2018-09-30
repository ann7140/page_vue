<template>
    <div class="rankingWrap">
      <div class="rankItem rankHeader">
        <div class="rankingNumber">名次</div>
        <div class="state"></div>
        <div class="person"> 车手</div>
        <div class="integral">本站积分</div>
        <div class="totalIntegral">总积分</div>
        <span class="go"></span>
      </div>
      <div class="rankItem border-bottom" v-for="(item,index) in [1,22,2,2,3,3,3,3,4]" :key="index">
        <div  class="rankingNumber">{{index+1}}</div>
        <div  class="state" style="background-image:url('https://img.zcool.cn/community/01fea155430a2b0000019ae94364d6.jpg@2o.jpg')"></div>
        <div  class="person">
          <img src="https://img.zcool.cn/community/01fea155430a2b0000019ae94364d6.jpg@2o.jpg" alt="">
          <span>扬·波特夫列特</span>
        </div>
        <div  class="integral">48</div>
        <div  class="totalIntegral">3333</div>
        <div  class="go"></div>
      </div>
    </div>
</template>

<style lang="scss" scoped>
@import "~@/assets/style/varibles.scss";

.rankingWrap {
  padding: 0 px(36);
  .rankItem {
    display: flex;
    align-items: center;
    height: px(92);
    &.border-bottom::before {
      border-color: #ddd;
    }
    .rankingNumber {
      width: px(58);
      flex-shrink: 0;
      flex-flow: 0;
      font-size: px(36);
      color: #333;
      font-family: "BigYoungBoldGB2.0";
    }
    .state {
      width: px(88);
      height: 100%;
      flex-shrink: 0;
      flex-flow: 0;
      background-repeat: no-repeat;
      background-position: left center;
      background-size: auto px(36);
    }
    .person {
      flex: 1;
      min-width: px(220);
      display: flex;
      align-items: center;
      img {
        width: px(60);
        height: px(60);
        border-radius: 50%;
        margin-right: px(10);
      }
    }
    .integral {
      width: px(100);
      flex-shrink: 0;
      flex-flow: 0;
      text-align: center;
    }
    .totalIntegral {
      width: px(120);
      flex-shrink: 0;
      flex-flow: 0;
      text-align: center;
    }
    .go {
      flex-shrink: 0;
      width: px(42);
      height: 100%;
      background-image: url("../../image/go.png");
      background-repeat: no-repeat;
      background-position: left px(12) center;
      background-size: px(12) px(20);
    }

    &.rankHeader {
      height: px(76);
      color: #999;
      font-size: px(24);
      .rankingNumber {
        font-size: px(24);
        color: #999;
        font-family: PingFang;
      }
      .person {
        justify-content: center;
      }
      .go {
        background: none;
      }
    }
  }
}
</style>
