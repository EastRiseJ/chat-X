<template>
  <div id="user">
    <div class="info">
      <div class="container clearfix">
        <div class="img fl">
          <img :src="userInfo.avatar ? userInfo.avatar : defaultAvatar" alt="">
        </div>
        <div class="txt fr">
          <p class="title">{{ userInfo.name }}</p>
          <p class="email">账号：{{ userInfo.email }}</p>
        </div>
      </div>
    </div>
    <div class="logout">
      <x-button type="primary" @click.native="logout">登出</x-button>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { XButton } from 'vux'

  export default {
    components: {
      XButton
    },
    data () {
      return {
        defaultAvatar: '/static/avatar.png'
      }
    },
    computed: mapGetters({
      userInfo: 'userInfo'
    }),
    methods: {
      logout () {
        window.localStorage.removeItem('chatXToken')
        this.$store.commit('successLogout')
        this.$router.push({ path: '/' })
      }
    }
  }
</script>
<style lang="less" scoped>
  #user{
    padding-top: 0.6rem;
  }
  .info{
    padding: 0.2rem 0;
    background: #fff;
    .img{
      width: 16%;
      img{
        width: 100%;
      }
    }
    .txt{
      width: 78%;
      padding-top: 0.44rem;
      .title{
        font-weight: bold;
      }
      .email{
        padding-top: 0.1rem;
        color: #999999;
      }
    }
  }
  .logout{
    margin-top: 1rem;
  }
</style>
