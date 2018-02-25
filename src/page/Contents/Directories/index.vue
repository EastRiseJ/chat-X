<template>
  <div id="directories">
    <ul>
      <li class="addlist directories-item" @click="directorieInfo">
        <div class="container clearfix">
          <div class="img fl">
            <img src="/static/add.jpg" alt="">
          </div>
          <div class="txt fr">
            <p class="title no-linefeed">好友增加请求</p>
          </div>
        </div>
      </li>
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
    }),
    methods: {
      directorieInfo () {
        this.$router.push({ name: 'DirectorieAddlist' })
      }
    }
  }
</script>

<style lang="less">
  .addlist{
    margin-bottom: 0.4rem;
  }
  .directories-item{
    padding: 0.2rem 0;
    background: #fff;
    border-bottom:1px solid #f4f4f4;
    .img{
      width: 12%;
      img{
        width: 100%;
      }
    }
    .txt{
      position: relative;
      width: 82%;
      padding-top: 0.46rem;
      padding-right: 4em;
      .title{
        font-weight: bold;
      }
      .message{
        padding-top: 0.1rem;
        color: #999999;
      }
      .date{
        position: absolute;
        width: 4em;
        right: 0;
        top: 0;
      }
    }
  }
</style>
