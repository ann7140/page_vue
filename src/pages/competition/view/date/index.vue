<template>
  <div class="dateWrap">
    <HeaderTop class="close" content="赛程日历" right="today"></HeaderTop>
    <div class="month">
      <em>&lt;</em>
      <span>2018年9月</span>
      <em>&gt;</em>
    </div>
    <ul class="week">
        <li>日</li>
        <li>一</li>
        <li>二</li>
        <li>三</li>
        <li>四</li>
        <li>五</li>
        <li>六</li>
      </ul>
    <ul class="days">
        <li
          v-for="(item,index) in days"
          :key="index"
          @click="goToList"
        >
          {{index+1}}
        </li>
      </ul>
  </div>
</template>

<script>
import HeaderTop from '../../components/Header'

let days = new Array(30)

export default {
  data () {
    return {
      days: days
    }
  },
  components: {
    HeaderTop
  },
  methods: {
    goToList () {
      this.$router.push({ 'name': 'list' })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/varibles.scss";
.dateWrap {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: #f8f8f8;
}

.month{
  display: flex;
  justify-content: center;
  align-items: center;
  height: px(80);
  font-size: px(32);
  color: #333;
}

.week {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #fff;
  height: px(50);
  li {
    flex: 1;
    height: px(50);
    line-height: px(50);
    text-align: center;
    font-size: px(24);
    color: #999;
  }
}

.days{
  display: flex;
  flex-wrap: wrap;
  li{
    flex-shrink: 0;
    background: #fff;
    width: 14.285vw;
    height: px(130);
    line-height: px(130);
    text-align: center;
    border-top: 1px solid #ddd;
    border-right: 1px solid #ddd;
    &.active{
      background: #E82700;
      color: #fff;
    }
  }
}
</style>
