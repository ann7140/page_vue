<template>
  <div>
    <div class="remarkWrap">
      <h3 class="title">备注</h3>
      <ol class="remarkList">
        <li>每张卡丁车票限玩8分钟</li>
        <li>请听从赛道工作人员指示安全驾车</li>
        <li>穿适合运动的服装和鞋子参与活动，不宜穿拖鞋前往</li>
        <li>不要触碰车后两侧的高温部件，具体细节可向工作人员资询</li>
        <li>女士不宜穿裙装前往，长发需要束起，以免发生危险</li>
        <li>禁止恶意碰撞</li>
        <li>高血压及心脏功能不全者不建议参加，如要参加，后果自负。</li>
      </ol>
    </div>

    <div class="mustInfo">
      <h3 class="title">购买须知</h3>
      <div class="content">
        <div class="name">使用时间</div>
        <div class="content">平日（周一至周五，节假日除外）</div>
      </div>

      <div class="content">
        <div class="name">适合人数</div>
        <div class="content">单人卡丁车最多1人使用，双人卡丁车最多2人使用</div>
      </div>

      <div class="content">
        <div class="name">购买时间</div>
        <div class="content">即买即用（如遇高峰时段请耐心排队等候）</div>
        <div class="content" style="margin-top:5px;">取票及入场方式：前台</div>
        <div class="content">入场方式：电子票</div>
      </div>
      <div class="content">
        <div class="name">商家服务</div>
        <div class="content">免费提供Wi-Fi</div>
        <div class="content">停车位信息详询商家</div>
        <div class="content">免费提供头盔、手套、头盔等安全护具</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "~@/assets/style/varibles.scss";
.remarkWrap{
  padding: 0 px(30);
  margin-top:px(12);
  background: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
  .title{
    line-height: px(80);
    font-size: px(28);
    font-weight: normal;
  }
  ol{
    padding-left: px(40);
    list-style-type: none;
    padding-bottom: px(28);
  }
  li{
    list-style-type: decimal;
    font-size: px(24);
    color: #666;
    line-height: px(40)
  }
}
.mustInfo{
  padding: 0 px(30) px(30);
  margin-top:px(12);
  margin-bottom: px(12);
  background: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
  .title{
    line-height: px(80);
    font-size: px(28);
    font-weight: normal;
  }
  &>.content{
    padding-top: px(16);
    .name{
      font-size: px(24);
      color: #999;
      line-height: px(38);
    }
    &>.content{
      font-size: px(24);
      color: #333;
    }
  }
}
</style>
