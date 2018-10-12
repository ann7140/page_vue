<template>
  <div class="carTypeWrap">
    <div v-for="(item,index) in parkDicData" :key="item.id">
      <h3 class="border-bottom">{{item.name}}</h3>
      <div class="countWrap">
        <span class="text">购买数量</span>
        <div class="countBox">
          <em :class="{disable:  item.count===0 }" @click="prevClick(index)">-</em>
          <strong>{{item.mount}}</strong>
          <em @click="nextClick(index)">+</em>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      disable: true,
      parkDicData: this.parkDic
    }
  },
  props: {
    parkDic: Array
  },
  computed: {
    totalFn: function () {
      return this.parkDicData.reduce((prev, t) => {
        return prev + t.price * t.mount
      }, 0)
    }
  },
  methods: {
    prevClick (index) {
      let mount = this.parkDicData[index].mount
      if (mount <= 0) {
        mount = 0
      } else {
        mount -= 1
      }
      this.$set(this.parkDicData[index], 'count', mount)
      this.$emit('totalFnCount', this.totalFn)
    },
    nextClick (index) {
      let mount = this.parkDicData[index].mount
      mount += 1
      this.$set(this.parkDicData[index], 'mount', mount)
      this.$emit('totalFnCount', this.totalFn)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/varibles.scss";

.carTypeWrap {
  padding: 0 px(30);
  background: #ffffff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
  h3 {
    font-weight: normal;
    font-size: px(32);
    color: #333;
    line-height: px(40);
    padding: px(26) 0;
    &::before {
      border-bottom-color: #ddd;
    }
  }
  .countWrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: px(100);
    .text {
      font-size: px(28);
      color: #666;
    }
    .countBox {
      display: flex;
      em {
        display: block;
        width: px(48);
        height: px(48);
        border-radius: px(10);
        text-align: center;
        line-height: px(48);
        font-size: px(28);
        background: #f6f6f6;
        font-style: normal;
        color: #333;
        &.disable {
          color: #ddd;
        }
      }
      strong {
        display: block;
        text-align: center;
        line-height: px(48);
        width: px(80);
        font-size: px(28);
        font-weight: normal;
        color: #666;
      }
    }
  }
}
</style>
