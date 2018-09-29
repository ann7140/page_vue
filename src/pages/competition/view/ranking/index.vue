<template>
  <div>
    <HeaderTop></HeaderTop>
    <TabHeader></TabHeader>
    <List></List>
  </div>
</template>

<script>
import HeaderTop from './Header'
import TabHeader from './TabHeader'
import List from './List'

export default {
  data () {
    return {}
  },
  components: {
    HeaderTop,
    TabHeader,
    List
  }
}
</script>
