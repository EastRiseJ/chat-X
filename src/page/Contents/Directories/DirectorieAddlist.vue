<template>
  <div id="addlist">
    <div id="inner-header">
      <div class="container clearfix">
        <div class="left fl">
            <a @click="backTo">< 返回</a>
        </div>
      </div>
    </div>
    <ul>
      <item
      v-for="directorie in addList"
      :id="directorie._id"
      :avatar="directorie.avatar"
      :name="directorie.name"
      :email="directorie.email"
      ></item>
      <div class="tip" v-show="!addList.length">
        <span>暂无好友添加请求</span>
      </div>
    </ul>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Item from './items.vue'

  export default {
    name: 'DirectorieAddlist',
    components: {
      Item
    },
    computed: mapGetters({
      addList: 'addListRes'
    }),
    methods: {
      backTo () {
        this.$router.go(-1)
      }
    }
  }
</script>
<style lang="less" scoped>

</style>
