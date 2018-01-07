<template>
  <div id="chat_one">
    <div id="inner-header">
      <div class="container clearfix">
        <div class="left fl">
            <router-link to="/home">< 返回</router-link>
        </div>
        <div class="right fr">
          {{ chat.name }}
        </div>
      </div>
    </div>
    <div class="chat-main">
      <li v-for="item in chat.message">
        <div class="container clearfix">
          <div class="img fl">
            <img :src="avatar ? avatar : defaultAvatar" alt="">
          </div>
          <div class="txt fr">
            <p class="title no-linefeed">{{ item.message }}</p>
          </div>
        </div>
      </li>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { XButton } from 'vux'

  export default {
    name: 'ChatOne',
    components: {
      XButton
    },
    data () {
      return {
        user_id: '',
        chat: '',
        defaultAvatar: '/static/avatar.png'
      }
    },
    computed: mapGetters({
      chatsList: 'chatsList'
    }),
    mounted () {
      this.user_id = this.$route.params.id
      this.message = this.getMessage(this.user_id)
    },
    methods: {
      getMessage () {
        this.chatsList.forEach(item => {
          item.id === this.user_id ? this.chat = item : ''
        })
      }
    }
  }
</script>
<style lang="less" scoped>
  #chat_one{
    position: fixed;
    z-index: 990;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
  }
  .chat-main{
    padding-top: 0.3rem;
    li{
      margin: 0.2rem 0;
    }
    .img{
      width: 10%;
      img{
        width: 100%;
      }
    }
    .txt{
      width: 84%;
      background: #eee;
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

</style>
