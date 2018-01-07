<template>
  <div id="directories">
    <ul>
      <item
      v-for="directorie in directoriesList"
      :id="directorie._id"
      :avatar="directorie.avatar"
      :name="directorie.name"
      :email="directorie.email"
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
      directoriesList: 'directoriesList'
    })
  }
</script>

<style lang="less" scoped>

</style>
