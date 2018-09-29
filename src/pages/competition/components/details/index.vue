<template>
  <div class="main">
    <HeaderTop></HeaderTop>

    <ul class="site">
      <li class="active">台湾站</li>
      <li>台湾站</li>
      <li>台湾站</li>
      <li>台湾站</li>
    </ul>

    <div class="tabMain">
      <Competition></Competition>
      <Video></Video>

      <div class="buttonList">
        <div class="buttonWrap">
          <span>赛事规则</span>
        </div>
        <div class="buttonWrap">
          <span>赛事信息</span>
        </div>
        <div class="buttonWrap">
          <span>总积分排名</span>
        </div>
      </div>

      <Weather></Weather>

      <div class="ad">
        <a class="link" href="###"><img src='https://img.zcool.cn/community/01fea155430a2b0000019ae94364d6.jpg@2o.jpg' alt=""></a>
        <a class="link" href="###"><img src='https://img.zcool.cn/community/01fea155430a2b0000019ae94364d6.jpg@2o.jpg' alt=""></a>
      </div>

      <div class="countDownWrap">
        <div class="logo" :style="{'backgroundImage':'url(\'https://img.zcool.cn/community/01fea155430a2b0000019ae94364d6.jpg@2o.jpg\')'}"></div>
        <div class="countDown">
          <p class="title">报名参赛</p>
          <p class="date">
            <span>01天</span>
            <span>01</span>
            <strong>:</strong>
            <span>55</span>
            <strong>:</strong>
            <span>09</span>
          </p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import HeaderTop from './Header'
import Competition from './Competition'
import Video from './Video'
import Weather from './Weather'

export default {
  data () {
    return {}
  },
  components: {
    HeaderTop,
    Competition,
    Video,
    Weather
  }
}
</script>

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

.buttonList {
  padding: 0 px(30);
  display: flex;
  height: px(186);
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
  .buttonWrap {
    height: px(122);
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #ddd;
    span {
      display: block;
      font-size: px(24);
      color: #333;
      &::before {
        content: "";
        display: block;
        width: px(96);
        height: px(79);
      }
    }
    &:nth-of-type(1) span::before {
      background: url("../../../../assets/image/list_button1.png") no-repeat center
        center;
      background-size: px(96) px(79);
    }
    &:nth-of-type(2) span::before {
      background: url("../../../../assets/image/list_button2.png") no-repeat center
        center;
      background-size: px(96) px(79);
    }
    &:nth-of-type(3) {
      border: none;
    }
    &:nth-of-type(3) span::before {
      background: url("../../../../assets/image/list_button3.png") no-repeat center
        center;
      background-size: px(96) px(79);
    }
  }
}

.ad {
  .link {
    display: block;
    margin-bottom: px(12);
  }
  img {
    display: block;
    width: 100%;
  }
}

.countDownWrap {
  height: px(140);
  display: flex;
  justify-content: center;
  align-items: center;
  .logo {
    width: px(94);
    height: px(76);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
    margin-right: px(16);
  }
  .countDown {
    margin-top:px(-5);
    .title {
      font-size: px(36);
      color: #333;
      line-height: px(50);
    }
    .date {
      color: #fff;
      line-height: px(24);
      font-size: px(24);

      span {
        padding: 0 px(3);
        background: #e82700;
        border-radius: px(5);
        transform: scale(0.85);
        margin: 0 2px;
      }
    }
  }
}
</style>
