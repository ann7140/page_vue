<template>
  <div>
    <HeaderTop content="排名" right=""></HeaderTop>
    <TabHeader></TabHeader>
    <List></List>
  </div>
</template>

<script>
import HeaderTop from '../../components/Header'
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
