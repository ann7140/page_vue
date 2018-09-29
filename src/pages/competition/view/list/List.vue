<template>
  <div>
    <div class="listWrap"  v-for="(item,index) in [1,2,7]" :key="index">
    <h3 class="title">9月29日 星期六</h3>
    <ul class="listBox">
      <li class="border-bottom" v-for="(item,index) in [1,2,3,4,7]" :key="index">
        <div class="date">
          <span>20:20</span>
          <span>F1</span>
        </div>
        <p class="content">F1新加坡大奖赛第一次练习赛</p>
        <div class="button">观看直播</div>
      </li>
    </ul>
  </div>
  </div>
</template>

<style lang="scss" scoped>
@import "~@/assets/style/varibles.scss";
.listWrap {
  width: 100%;
  background: #f7f7f7;
  .title {
    height: px(80);
    line-height: px(80);
    font-size: px(24);
    color: #666;
    font-weight: normal;
    padding-left: px(32);
  }
  .listBox {
    background: #fff;
    padding: 0 px(32);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: px(120);
      &.border-bottom::before {
        border-color: #ddd;
      }
      .date {
        width: px(130);
        flex-shrink: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        span {
          display: block;
        }
        span:nth-of-type(1) {
          font-size: px(28);
          color: #333;
        }
        span:nth-of-type(2) {
          font-size: px(24);
          color: #999;
        }
      }
      .content {
        flex: 1;
        font-size: px(28);
        color: #333;
      }
      .button {
        width: px(135);
        flex-shrink: 0;
        font-size: px(24);
        color: #666;
        padding-left: px(32);
        background: url("../../image/play.png") no-repeat left center;
        background-size: px(28) px(28);
      }
    }
  }
}
</style>
