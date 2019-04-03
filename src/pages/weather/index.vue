<template>
    <div class="main">
        <div class="top">
            <span class="time">今天</span>
            <div class="middle-box">
                <div class="number">{{nowWeatherData.temperature}}°</div>
                <ul class="details">
                    <li>{{nowWeatherData.wind_direction}} {{nowWeatherData.wind_power}}</li>
                    <li>空气湿度 {{nowWeatherData.sd}}</li>
                    <li>空气质量 {{nowWeatherData.aqi}}</li>
                </ul>
                <div class="state">{{nowWeatherData.weather}}</div>
            </div>
            <div class="weather-icon" :style="{'backgroundImage':'url('+ nowWeatherData.weather_pic +')'}"></div>
        </div>
        <!-- 24小时天气 -->
        <div class="twenty-four-wrap">
            <swiper :options="swiperOption" ref="mySwiper">
                <swiper-slide v-for="(item,index) in hourDataList" :key="index">
                    <div class="twenty-four">
                        <span class="t">{{item.temperature}}°</span>
                        <span class="icon" :style="{backgroundImage: `url('${publicPath}images/weather2/${item.weather_code}.png')`}"></span>
                        <span class="time">{{item.temperature_time}}</span>
                    </div>
                </swiper-slide>
            </swiper>
        </div>

        <ul class="weather-list-wrap">
            <li class="weather-list" v-for="(item,idx) in week" :key="idx">
                <p class="date">{{weekText[item.weekday]}}</p>
                <div class="weather-content">
                    <span class="icon" :style="{backgroundImage: `url('${publicPath}images/weather2/${item.day_weather_code}.png')`}"></span>
                    <span class="describe">{{item.day_weather}}</span>
                    <span class="describe">{{item.day_wind_direction}}{{item.day_wind_power.split(' ')[0]}}</span>
                    <div class="temperature">
                        <p>{{item.day_air_temperature}}°</p>
                        <p>白天</p>
                    </div>
                    <div class="temperature">
                        <p>{{item.night_air_temperature}}°</p>
                        <p>夜晚</p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
/* eslint-disable indent */

  import axios from 'axios'

  const wether = [
    '',
    '晴',
    '多云',
    '阴',
    '阵雨',
    '雷阵雨',
    '雷阵雨伴有冰雹',
    '雨夹雪',
    '小雨',
    '中雨',
    '大雨',

    '暴雨',
    '大暴雨',
    '特大暴雨',
    '阵雪',
    '小雪',
    '中雪',
    '大雪',
    '暴雪',
    '雾',
    '冻雨',

    '沙尘暴',
    '小到中雨',
    '中到大雨',
    '大到暴雨',
    '暴雨到大暴雨',
    '大暴雨到特大暴雨',
    '小到中雪',
    '中到大雪',
    '大到暴雪',
    '浮尘',

    '扬沙',
    '强沙尘暴',
    '霾',
    '雨',
    '无',
    '雪']

  export default {
    data () {
      return {
        publicPath: process.env.BASE_URL,

        nowWeatherData: {},
        hourDataList: [],
        week: [],
        weekText: ['', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
        swiperOption: {
          // some swiper options/callbacks
          // 所有的参数同 swiper 官方 api 参数
          slidesPerView: 5,
          spaceBetween: 5,
          freeMode: true
        }
      }
    },
    computed: {
      swiper () {
        return this.$refs.mySwiper.swiper
      }
    },
    methods: {
      init () {
        this.swiper.slideTo(0, 1000, false)
      }
    },
    mounted () {
      this.init()
      axios.get('https://manage.raykart.com/api/v1/weathers/1').then(res => {
        const { status, data } = res.data
        if (status === 'success') {
          console.log(data.hourDataList)
          this.nowWeatherData = data.now
          this.hourDataList = data.hourDataList.map(item => {
            return {
              ...item,
              cls: 'icon' + wether.indexOf(item.weather),
              icon_bg: '../../assets/images/weather2/' + item.weather_code + '.png'
            }
          })

          const weekData = [data.f1, data.f2, data.f3, data.f4, data.f5, data.f6, data.f7]
          weekData.map(item => {
            return {
              ...item,
              cls: 'icon' + wether.indexOf(item.weather_code)
            }
          })
          this.week = weekData
        }
      })
    }
  }
</script>

<style lang="scss" scoped>
    @import "~@/assets/style/varibles.scss";

    .top {
        position: relative;
        width: 100%;
        padding: px(10) px(16) px(38);
        .time {
            font-size: px(18);
            color: #000000;
            font-weight: bold;
        }
        .middle-box {
            display: flex;
            align-items: flex-end;
            padding-right: px(80);
            padding-top: px(22);
            .number {
                font-size: px(80);
                color: #000000;
                line-height: px(64);
                font-weight: bold;
                margin: 0 px(10);
            }
            .details {
                flex: 1;
                li {
                    font-size: px(14);
                    color: #666;
                }
            }

        }
        .state {
            font-size: px(26);
            color: #000000;
            font-weight: bold;
        }
        .weather-icon {
            position: absolute;
            right: px(16);
            top: px(25);
            width: px(64);
            height: px(64);
            background: no-repeat center center;
            background-size: px(64) px(64);
        }
    }

    .twenty-four-wrap {
        padding: 0 px(16);
        .twenty-four {
            display: flex;
            flex-direction: column;
            width: px(80);
            flex-shrink: 0;
            .t {
                font-size: px(20);
                color: #000000;
            }
            .icon {
                display: block;
                width: px(35);
                height: px(35);
                background: no-repeat center center;
                background-size: px(35) px(35);
            }
            .time {
                padding-top: px(5);
            }
        }
    }

    .weather-list-wrap {
        padding: px(30) px(16) px(30);
        .weather-list {
            border-bottom: 1px solid rgba(0, 0, 0, 0.02);
            padding-bottom: px(15);
            .date {
                font-size: px(14);
                color: #999;
                padding-bottom: px(10);
            }
            .weather-content {
                display: flex;
                align-items: center;
            }
            .icon {
                display: block;
                width: px(35);
                height: px(35);
                background: no-repeat center center;
                background-size: px(35) px(35);
            }
            .describe {
                flex: 1;
                font-size: px(14);
                color: #999;
                text-align: center;
            }
            .temperature {
                width: px(30);
                p {
                    text-align: center;
                    &:nth-child(1) {
                        margin-right: px(-6);
                    }
                }
            }
        }
    }
</style>
