<template>
  <div id="chats">
    <ul>
      <item
      v-for="chat in chatsList"
      :id="chat.id"
      :avatar="chat.avatar"
      :name="chat.name"
      :message="chat.message"
      :date="chat.date"
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

</style>
