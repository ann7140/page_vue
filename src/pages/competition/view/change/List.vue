<template>
    <ul class="listBox">
      <li class="border-bottom" @click="goToDetails(item.id)" v-for="(item,index) in list" :key="index">
        <div class="bg" :style="{backgroundImage:'url('+ item.imgUrl +')'}"></div>
      </li>
    </ul>
</template>

<script>
export default {
  props: {
    list: {
      type: Array
    }
  },
  methods: {
    goToDetails (id) {
      this.$router.push({ 'name': 'details', 'params': { id: id } })
    }
  }
}
</script>

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
    &:nth-of-type(2n) {
      border-right: none;
    }
    .bg {
      width: 100%;
      height: 100%;
      background-position: center center;
      background-repeat: no-repeat;
      background-size: contain;
    }
  }
}
</style>
