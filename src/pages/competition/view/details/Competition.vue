<template>
  <div class="competitionWrap">
    <div class="top border-bottom">
      <span class="date">10月16-18日 20:30</span>
      <span class="address">绍兴国际卡丁车场</span>
    </div>
    <div class="show">
      <div class="map" :style="{'backgroundImage': 'url('+ mapImgUrl +')'}"></div>
      <div class="b"></div>
      <span class="name">ROTAX MAX</span>
      <span class="year">2018</span>
    </div>
    <div class="competitionInfoWrap">
      <div class="left">
        <div class="name">挑战赛浙江赛区 第二站</div>
        <ul class="date">
          <li><strong>09</strong><span>天</span></li>
          <li><strong>22</strong><span>小时</span></li>
          <li><strong>01</strong><span>分钟</span></li>
        </ul>
      </div>
      <div class="img" :style="{'backgroundImage': 'url('+ showImg +')'}"></div>
    </div>
  </div>
</template>

<script>

// 赛事：第一部分

export default {
  data () {
    return {
      mapImgUrl:
        'https://img.zcool.cn/community/01fea155430a2b0000019ae94364d6.jpg@2o.jpg',
      showImg:
        'https://img.zcool.cn/community/01fea155430a2b0000019ae94364d6.jpg@2o.jpg'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/varibles.scss";
.competitionWrap {
  padding: 0 px(42);
  width: 100%;
  height: px(400);
  background: url("../../image/bg_saishi.png")
    no-repeat center center;
  background-size: 100% px(400);

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: px(84);
    &.border-bottom::before {
      border-color: #999;
    }
    .date {
      font-size: px(28);
      color: #ffffff;
      font-weight: 700;
    }
    .address {
      font-size: px(24);
      color: #ffffff;
      font-weight: 100;
      padding-left: px(38);
      background: url("../../image/location.png") no-repeat left
        center;
      background-size: px(24) px(26);
    }
  }
  .show {
    display: flex;
    align-items: center;
    height: px(78);
    .map {
      width: px(96);
      height: px(48);
      margin: 0 px(34);
      background-position: center center;
      background-repeat: no-repeat;
      background-size: contain;
    }
    .b {
      height: px(52);
      width: 1px;
      background: #999;
    }
    .name {
      font-size: px(36);
      color: #ffffff;
      font-weight: 900;
      padding-left: px(44);
      padding-right: px(10);
    }
    .year {
      font-size: px(32);
      -webkit-text-stroke: 1px #fff;
      color: transparent;
      font-weight: bold;
    }
  }

  .competitionInfoWrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: px(200);
    background: #fff;
    border-radius: px(8);
    padding: 0 px(20);
    .left {
      flex-shrink: 0;
      width: px(392);
      .name {
        height: px(46);
        font-size: px(24);
        line-height: px(46);
        text-align: center;
        color: #666;
        background: #ccc;
        border-radius: px(23);
      }
      .date {
        display: flex;
        li {
          flex: 1;
          span,
          strong {
            display: block;
            text-align: center;
          }
          strong {
            padding-top: px(16);
            line-height: px(81);
            font-size: px(72);
            color: #333;
          }
          span{
            margin-top: px(-9);
            line-height: px(24);
            font-size: px(24);
            font-weight: 100;
            transform: scale(.85);
          }
        }
      }
    }
    .img {
      width: px(204);
      height: px(162);
      background-position: center center;
      background-repeat: no-repeat;
      background-size: contain;
      background-size: px(204) px(162);
    }
  }
}
</style>
