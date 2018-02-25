<template>
  <div id="chats">
    <ul>
      <item
      v-for="(value, key) in chatsList"
      :id="key"
      :avatar="value.avatar"
      :name="value.name"
      :message="value.message"
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
