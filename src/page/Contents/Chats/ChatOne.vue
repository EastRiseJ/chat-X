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
            <img :src="item.avatar ? item.avatar : defaultAvatar" alt="">
          </div>
          <div class="txt fr">
            <p class="title no-linefeed">{{ item.message }}</p>
          </div>
        </div>
      </li>
    </div>
    <div class="chat-bottom">
      <div class="container">
        <form class="clearfix">
          <div class="fl">
            <input class="" type="text" name="" v-model="value">
          </div>
          <input class="fr" type="submit" name="" value="发送" @click="send()">
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'ChatOne',
    data () {
      return {
        otherUserId: '',
        chat: '',
        value: '',
        defaultAvatar: '/static/avatar.png'
      }
    },
    computed: mapGetters({
      chatsList: 'chatsList',
      userInfo: 'userInfo'
    }),
    mounted () {
      this.otherUserId = this.$route.params.id
      this.message = this.getMessage()
    },
    methods: {
      getMessage () {
        this.chatsList.forEach(item => {
          item.id === this.otherUserId ? this.chat = item : ''
        })
      },
      send () {
        if (this.value.trim() === '') {

        } else {
          console.log(this.otherUserId)
          this.$socket.emit('message', {
            userId: this.userInfo.id,
            otherUserId: this.otherUserId,
            message: this.value
          })
        }
        return false
      }
    }
  }
</script>
<style lang="less" scoped>
  #chat_one{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
  }
  .chat-main{
    position: absolute;
    left: 0;
    right: 0;
    top: 3rem;
    bottom: 3rem;
    overflow-y: scroll;
    background: #fff;
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
  .chat-bottom{
    position: absolute;
    height: 3rem;
    line-height: 3rem;
    background: #fcfcfc;
    bottom: 0;
    left: 0;
    right: 0;
    color: #999999;
    padding-top: 0.28rem;
    border-top: 1px solid #d6d6d6;
    form{
      position: relative;
    }
    input{
      line-height: 2.4rem;
    }
    .fl{
      width: 100%;
      padding-right: 110px;
    }
    input[type="text"]{
      display: block;
      border-bottom: 1px solid #ff0000;
      width: 100%;
    }
    input[type="submit"]{
      position: absolute;
      top: 0;
      right: 0;
      width: 100px;
    }
  }

</style>
