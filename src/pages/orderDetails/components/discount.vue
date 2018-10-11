<template>
  <div class="discountWrap">
    <div class="discountList">
      <div class="discountHeader">
        <h3>优惠劵</h3>
        <span class="close"></span>
      </div>

      <nav class="tabHeader border-bottom">
        <div class="item active"><span>可使用优惠券(2)</span></div>
        <div class="item"><span>不可使用优惠券(1)</span></div>
      </nav>

      <div class="discountScrollWrap noUse" ref="discountScrollWrap">
        <ul class="discountScrollContent">
          <!-- 根据 class : 平台platform  商家shopping -->
          <li class="item shopping" v-for="(item,index) in [1]" :key="index">
            <div class="discountDetails">
              <div class="priceWrap">
                <div class="price">
                  <span>￥</span>
                  <strong>20</strong>
                </div>
                <div class="rule">满100元可用</div>
              </div>
              <div class="infoWrap active">
                <span class="type">商家</span>
                <h3 class="name">瑞卡丁10元优惠券</h3>
                <p class="date">2018-6-30至2018-12-30</p>
                <div class="info">
                  <p>
                    1、每张卡丁车票限玩8分钟
                    2、请听从赛道工作人员指示安全驾车
                    3、穿适合运动的服装和鞋子参与活动，不宜穿拖鞋前往
                    4、不要触碰车后两侧的高温部件，具体细节可向工作人员资询
                    5、女士不宜穿裙装前往，长发需要束起，以免发生危险
                    6、禁止恶意碰撞
                    7、高血压及心脏功能不全者不建议参加，如要参加，后果自负。
                  </p>
                </div>
              </div>
            </div>
            <div class="useButton">立即使用</div>
          </li>
        </ul>
        <!-- 这里可以放一些其它的 DOM，但不会影响滚动 -->
      </div>
      <div class="discountScrollWrap" ref="discountScrollWrap1">
        <ul class="discountScrollContent">
          <!-- 根据 class : 平台platform  商家shopping -->
          <li class="item shopping" v-for="(item,index) in [1]" :key="index">
            <div class="discountDetails">
              <div class="priceWrap">
                <div class="price">
                  <span>￥</span>
                  <strong>20</strong>
                </div>
                <div class="rule">满100元可用</div>
              </div>
              <div class="infoWrap active">
                <span class="type">商家</span>
                <h3 class="name">瑞卡丁10元优惠券</h3>
                <p class="date">2018-6-30至2018-12-30</p>
                <div class="info">
                  <p>
                    1、每张卡丁车票限玩8分钟
                    2、请听从赛道工作人员指示安全驾车
                    3、穿适合运动的服装和鞋子参与活动，不宜穿拖鞋前往
                    4、不要触碰车后两侧的高温部件，具体细节可向工作人员资询
                    5、女士不宜穿裙装前往，长发需要束起，以免发生危险
                    6、禁止恶意碰撞
                    7、高血压及心脏功能不全者不建议参加，如要参加，后果自负。
                  </p>
                </div>
              </div>
            </div>
            <div class="useButton">立即使用</div>
          </li>
        </ul>
        <!-- 这里可以放一些其它的 DOM，但不会影响滚动 -->
      </div>

      <button class="noUseButton">不使用优惠劵</button>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  data () {
    return {
      scroll: null
    }
  },
  mounted () {
    const wrapper = this.$refs.discountScrollWrap

    this.scroll = new BScroll(wrapper)
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/varibles.scss";
.discountWrap {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
}

.discountList {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: px(1034);
  background: #fff;
}
.discountHeader {
  position: relative;
  height: px(90);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: px(30);
  h3 {
    font-weight: normal;
    color: #333;
  }
  .close {
    position: absolute;
    right: 0;
    top: 0;
    width: px(72);
    height: 100%;
    background: url("../image/icon_close.png") no-repeat center center;
    background-size: px(40) px(40);
  }
}

.tabHeader {
  display: flex;
  // margin-bottom: px(24);
  &::before {
    border-bottom-color: #ddd;
  }
  .item {
    height: px(112);
    display: flex;
    justify-content: center;
    width: 50%;
    span {
      display: block;
      padding-top: px(40);
      line-height: px(40);
      padding-bottom: px(32);
      font-size: px(28);
      color: #999;
    }
  }
  .item.active {
    span {
      color: #333;
      border-bottom: px(8) solid red;
    }
  }
}

.noUseButton {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: px(112);
  background: #e82700;
  font-size: px(36);
  border: none;
  color: #fff;
  font-weight: normal;
}

.discountScrollWrap {
  position: relative;
  height: px(720);
  padding-left: px(30);
  padding-right: px(30);
  overflow: hidden;
  &.noUse {
    filter: grayscale(100%);
    opacity: 0.5;
  }
  .discountScrollContent {
    padding-top: px(20);
    padding-bottom: px(20);
  }
  .item {
    width: 100%;
    box-shadow: 0 px(2) px(8) 0 rgba(0, 0, 0, 0.2);
    border-radius: px(8);
    margin-bottom: px(20);
    &:nth-last-of-type(1) {
      margin-bottom: 0;
    }
  }
}

.discountDetails {
  display: flex;
  box-shadow: 0 px(4) px(4) 0 rgba(0, 0, 0, 0.1);
  .priceWrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: px(264);
    height: px(188);
    color: #fff;
    margin-right: px(16);

    .item.shopping & {
      background: url("../image/discount1.png") no-repeat left top;
      background-size: px(264) px(188);
    }
    .item.platform & {
      background: url("../image/discount2.png") no-repeat left top;
      background-size: px(264) px(188);
    }
    .price {
      display: flex;
      align-items: baseline;
      height: px(120);
      padding-left: px(20);
      span {
        display: block;
        font-size: px(40);
      }
      strong {
        display: block;
        font-size: px(96);
      }
    }
    .rule {
      padding-left: px(30);
      font-size: px(24);
    }
  }
  .infoWrap {
    flex: 1;
    background: url("../image/icon_bottom.png") no-repeat right px(22) top
      px(80);
    background-size: px(28) px(21);
    &.active {
      background: url("../image/icon_top.png") no-repeat right px(22) top px(75);
      background-size: px(28) px(21);
    }
    .type {
      display: inline-block;
      margin-top: px(20);
      margin-bottom: px(10);
      padding-left: px(20);
      padding-right: px(20);

      border-radius: px(20);
      line-height: px(40);
      height: px(40);
      font-size: px(24);
      transform: scale(0.9);

      .item.shopping & {
        color: #fff;
        background: #0873eb;
      }
      .item.platform & {
        color: #fff;
        background: #e82700;
      }
    }
    .name {
      line-height: px(40);
      font-size: px(32);
      color: #333;
    }
    .date {
      padding-top: px(10);
      font-size: px(24);
      color: #666;
    }
    .info {
      color: #999;
      padding-top: px(5);
      padding-right: px(20);
      display: none;
    }
    &.active .info {
      display: block;
    }
  }
}

.useButton {
  display: flex;
  justify-content: center;
  align-items: center;
  height: px(84);
  font-size: px(32);
  .item.shopping & {
    color: #0873eb;
  }
  .item.platform & {
    color: #e82700;
  }
}
</style>
