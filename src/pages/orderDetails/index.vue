<template>
  <div class="main">
    <HeaderTop ></HeaderTop>
    <main>
      <!-- 购买的东西 -->
      <h2 class="title">胜道博大岳卡丁车俱乐部（世博源店）胜道博大岳卡丁车俱乐部（世博源店）</h2>
      <shopping :parkDic="parkDic" @totalFnCount="componentsTotal"></shopping>
      <otherThing :phone="phone" v-if="phone"></otherThing>
      <!-- <insurance></insurance> -->
      <info></info>
    </main>
    <div class="paymentWrap border-top">
      <div class="info">
        <span class="money">实付款 ¥{{total}}</span>
        <span class="integral">支付成功获得{{total}}积分</span>
      </div>
      <div class="buttonPay">去支付</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { getHrefData } from '@/assets/js/utility.js'

import HeaderTop from './components/Header.vue'
import otherThing from './components/otherThing.vue'
import shopping from './components/shopping.vue'
import info from './components/info.vue'
import insurance from './components/insurance.vue'

export default {
  data () {
    return {
      // 控制减号按钮
      disable: true,
      phone: '',
      parkDic: [],
      total: 0
    }
  },
  components: {
    HeaderTop,
    shopping,
    otherThing,
    insurance,
    info
  },
  methods: {
    componentsTotal (total) {
      this.total = total
    }
  },
  created () {
    const _this = this
    // 订单详情 URL
    const orderData = getHrefData()
    if (orderData['parkDic']) {
      let parkDic = JSON.parse(decodeURI(orderData['parkDic']))
      let parkRegroup = []

      for (let key in parkDic) {
        parkRegroup.push({
          id: key,
          count: parkDic[key]
        })
      }
      orderData['parkDic'] = parkRegroup
    }

    if (orderData['login_uid'] && orderData['parking_id']) {
      axios
        .get('/api/parking/parkingOrder', {
          params: {
            parking_id: orderData['parking_id'],
            login_uid: orderData['login_uid']
          }
        })
        .then(function (res) {
          _this.phone = res.data.data.phone
          console.log(typeof res.data.data.phone, _this.phone)
          const ajaxParkDic = res.data.data.fare
          const parkDic = orderData['parkDic']

          if (!parkDic) return null

          for (let i = 0; i < parkDic.length; i++) {
            for (let j = 0; j < ajaxParkDic.length; j++) {
              if (ajaxParkDic[j].id === parkDic[i].id) {
                _this.parkDic.push({
                  ...parkDic[i],
                  price: ajaxParkDic[j]['attr_price'],
                  name: ajaxParkDic[j]['attr_name']
                })
              }
            }
          }

          _this.total = _this.parkDic.reduce((prev, t) => {
            return prev + t.price * t.count
          }, 0)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/varibles.scss";
main {
  padding-top: px(88);
  background: #f8f8f8;
  padding-bottom: px(108);
  .title {
    line-height: px(40);
    font-size: px(36);
    color: #333;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    padding: px(30) px(30);
    background: #fff;
  }
}
.paymentWrap {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: px(108);
  background: #fff;
  display: flex;
  &::before {
    border-top-color: #ddd;
  }
  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 56%;
    .money {
      font-size: px(36);
      color: #e82700;
    }
    .integral {
      font-size: px(24);
      color: #333;
    }
  }
  .buttonPay {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #e82700;
    width: 44%;
    color: #fff;
    font-size: px(36);
  }
}
</style>
