<template>
  <div class="dateWrap">
    <HeaderTop class="left" left="close" content="赛程日历" right="today"></HeaderTop>
    <div class="month">
      <em @click="prevMonth"></em>
      <span>{{year}}年 {{month}}月</span>
      <em @click="nextMonth"></em>
    </div>
    <ul class="week">
        <li v-for="(week,index) of weeks" :key="index">{{week}}</li>
      </ul>
    <ul class="days">
        <li
          v-for="(item,index) in days"
          :key="index"
          @click="goToList"
          :class="item.classList"
        >
          <em>{{item.count}}</em>
          <span>{{item.event}}</span>
        </li>
      </ul>
  </div>
</template>

<script>
import { weeks, daysList } from '@/assets/js/date.js'
import HeaderTop from '../../components/Header'
// import { constants } from 'http2'

let date = new Date()
const year = date.getFullYear()
const month = date.getMonth() + 1

export default {
  data () {
    return {
      weeks: weeks,
      year: year,
      month: month
    }
  },
  computed: {
    days () {
      const list = []
      const dayCounts = daysList(this.year, this.month)

      dayCounts.map((item, index) => {
        list.push({
          count: item === 0 ? '' : item,
          event: item === 0 ? '' : '4场',
          classList: {
            disable: item === 0,
            first: item === 1,
            today: false
          }
        })
      })

      const todayObj = this.getToday()
      console.log(todayObj)
      if (todayObj.year === this.year && todayObj.month === this.month) {
        for (let i = 0; i < list.length; i++) {
          if (list[i].count === todayObj.day) {
            list[i].classList.today = true
            break
          }
        }
      }
      return list
    }
  },
  components: {
    HeaderTop
  },
  methods: {
    goToList () {
      this.$router.push({ name: 'list' })
    },
    getToday () {
      const date = new Date()
      return {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        day: date.getDate()
      }
    },
    prevMonth () {
      if (this.month - 1 <= 0) {
        this.month = 12
        this.year = this.year - 1
      } else {
        this.month = this.month - 1
      }
    },
    nextMonth () {
      if (this.month + 1 > 12) {
        this.month = 1
        this.year = this.year + 1
      } else {
        this.month = this.month + 1
      }
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

.month {
  display: flex;
  justify-content: center;
  align-items: center;
  height: px(80);
  font-size: px(32);
  color: #333;
  em {
    display: block;
    width: px(80);
    height: px(80);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: px(12) px(20);
    &:nth-of-type(1) {
      background-image: url("../../image/icon_left.png");
    }
    &:nth-of-type(2) {
      background-image: url("../../image/icon_right.png");
    }
  }
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

.days {
  display: flex;
  flex-wrap: wrap;
  li {
    position: relative;
    flex-shrink: 0;
    background: #fff;
    width: 14.285vw;
    height: px(130);
    padding-top: px(45);

    text-align: center;
    border-top: 1px solid #ddd;
    border-right: 1px solid #ddd;

    &:nth-child(7n) {
      border-right: none;
    }
    &.disable {
      background: #f8f8f8;
      color: #fff;
      border-right: none;
    }
    &.today{
      background: #E82700;
      em{
        color: #fff;
      }
      span{
        color: rgba(255,255,255,0.8)
      }
    }
    &.first {
      &::after {
        content: "";
        position: absolute;
        left: -1px;
        top: 0;
        width: 100%;
        height: 100%;
        border-left: 1px solid #ddd;
      }
    }
    em {
      font-style: normal;
      font-size: px(32);
      color: #999;
    }

    span {
      position: absolute;
      left: 0;
      bottom: px(5);
      width: 100%;
      color: #ddd;
      font-size: px(22);
    }
  }
}
</style>
