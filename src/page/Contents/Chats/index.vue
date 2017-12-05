<template>
  <div id="chats">
    <ul>
      <item
      v-for="item in chatsList"
      :id="item.id"
      :avatar="item.avatar"
      :name="item.name"
      :message="item.message"
      :date="item.date"
      ></item>
    </ul>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Item from './items.vue'

  export default {
    components: {
      Item
    },
    computed: mapGetters({
      chatsList: 'chatsList'
    })
  }
</script>

<style lang="less" scoped>
.div-next{
  width: 100%;
  text-align: center;
  font-size: 0.14rem;
  line-height: 2.4em;
}
</style>
