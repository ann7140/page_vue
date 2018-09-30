<template>
  <div>
    <HeaderTop left="close" content="赛程日历"></HeaderTop>

    <!-- 赛程日历 列表 -->
    <List></List>
  </div>
</template>

<script>
import HeaderTop from '../../components/Header'
import List from './List'

export default {
  data () {
    return {}
  },
  components: {
    HeaderTop,
    List
  }
}
</script>
