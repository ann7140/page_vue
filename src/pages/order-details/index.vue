<template>
  <div class="main">
    <main>
      <!-- 购买的东西 -->
      <h2 class="title">{{parking_name}}</h2>
      <shopping :parkDic="parkDic" v-if="parkDic.length" @totalFnCount="componentsTotal"></shopping>
      <otherThing :phone="phone" v-if="phone"></otherThing>
      <!-- <insurance></insurance> -->
      <info></info>
    </main>
    <div class="paymentWrap border-top" v-if="total">
      <div class="info">
        <span class="money">实付款 ¥{{total}}</span>
        <span class="integral">支付成功获得{{total}}积分</span>
      </div>
      <div class="buttonPay" @click="payButton" id="pay">去支付</div>
    </div>
    <discount v-show="discountShow"></discount>
  </div>
</template>

<script>
import axios from 'axios'
import {
  getHrefData,
  setupWebViewJavascriptBridge,
  log
} from '@/assets/js/utility.js'

import otherThing from './components/otherThing.vue'
import shopping from './components/shopping.vue'
import info from './components/info.vue'
import insurance from './components/insurance.vue'
import discount from './components/discount.vue'

export default {
  data () {
    return {
      // 控制减号按钮
      disable: true,
      phone: '',
      parking_name: '',
      user_login: '',
      parkDic: [],
      total: 0
    }
  },
  components: {
    shopping,
    otherThing,
    insurance,
    info,
    discount
  },
  methods: {
    componentsTotal (total) {
      this.total = total
    },
    payButton (e) {
      e.preventDefault()
      const orderData = getHrefData()
      const _this = this

      /* 与OC交互的所有JS方法都要放在此处注册，才能调用通过JS调用OC或者让OC调用这里的JS */
      setupWebViewJavascriptBridge(function (bridge) {
        // 把WEB中要注册的方法注册到bridge里面  ios->web
        bridge.registerHandler('iosprice', function (data, responseCallback) {
          var responseData = {
            'Javascript Says': 'Right back atcha!'
          }
          responseCallback(responseData)
        })

        // web -> ios
        bridge.callHandler(
          'iosallprice',
          {
            parking_id: orderData['parking_id'],
            price: _this.total,
            user_login: _this.parking_name,
            iphone: _this.phone,
            data: _this.parkDic
          },
          function (response) {
            log('js得到的返回值', response)
          }
        )
      })
    }
  },
  created () {
    const _this = this
    // 订单详情 URL
    const orderData = getHrefData()

    if (orderData['parkDic']) {
      let dataUrl = decodeURIComponent(orderData['parkDic'])
      dataUrl = dataUrl.replace(/[\\n|' ']/g, '')

      let parkDic = JSON.parse(dataUrl)

      let parkRegroup = []

      for (let key in parkDic) {
        parkRegroup.push({
          id: key,
          mount: parkDic[key]
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
          _this.parking_name = res.data.data.parking_name
          _this.user_login = res.data.data.user_login
          const ajaxParkDic = res.data.data.fare
          const parkDic = orderData['parkDic']
          if (!parkDic) return null
          for (let i = 0; i < parkDic.length; i++) {
            for (let j = 0; j < ajaxParkDic.length; j++) {
              if (ajaxParkDic[j].id === parkDic[i].id) {
                _this.parkDic.push({
                  ...ajaxParkDic[j],
                  mount: parkDic[i].mount,
                  price: ajaxParkDic[j]['attr_price'],
                  name: ajaxParkDic[j]['fare_type']
                })
              }
            }
          }
          _this.total = _this.parkDic.reduce((prev, t) => {
            return prev + t.price * t.mount
          }, 0)
        })
        .catch(function (error) {
          log(error)
        })
    } else {
      alert('参数不全')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/varibles.scss";
main {
  // padding-top: px(88);
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
