<template>
  <div>
    <HeaderTop content="赛事"></HeaderTop>
    <!-- 赛程日历 列表 -->
    <List :list="data"></List>
  </div>
</template>

<script>
import HeaderTop from '../../components/Header'
import List from './List'

export default {
  data () {
    return {
      data: [
        {
          id: 1,
          imgUrl: 'https://img.zcool.cn/community/01fea155430a2b0000019ae94364d6.jpg@2o.jpg'
        },
        {
          id: 2,
          imgUrl: 'https://img.zcool.cn/community/01fea155430a2b0000019ae94364d6.jpg@2o.jpg'
        },
        {
          id: 3,
          imgUrl: 'https://img.zcool.cn/community/01fea155430a2b0000019ae94364d6.jpg@2o.jpg'
        }
      ]
    }
  },
  components: {
    HeaderTop,
    List
  }
}
</script>
