<template>
  <div>
    <HeaderTop></HeaderTop>

    <!-- 赛程日历 列表 -->
    <List></List>
  </div>
</template>

<script>
import HeaderTop from './Header'
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
