<template>
  <div id="chat_one">
    <div id="inner-header">
      <div class="container clearfix">
        <div class="left fl">
            <router-link to="/home">< 返回</router-link>
        </div>
        <div class="right fr">
          {{ name }}
        </div>
      </div>
    </div>
    <div class="chat-main">
      <li v-for="item in chat.message">
        <div class="container clearfix">
          <div :class=" item.is ? 'img fr' : 'img fl'">
            <img :src="item.avatar ? item.avatar : defaultAvatar" alt="">
          </div>
          <div :class=" item.is ? 'txt fl' : 'txt arr fr'">
            <p class="title">{{ item.message }}</p>
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
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'ChatOne',
    data () {
      return {
        otherUserId: '',
        name: '',
        chat: '',
        value: '',
        defaultAvatar: '/static/avatar.png'
      }
    },
    computed: mapGetters({
      directoriesList: 'directoriesList',
      chatsList: 'chatsList',
      userInfo: 'userInfo'
    }),
    mounted () {
      this.otherUserId = this.$route.params.id
      this.message = this.getMessage()
      for (let elem of this.directoriesList.values()) {
        this.otherUserId === elem._id ? this.name = elem.name : ''
      }
    },
    watch: {
      'chat.message': () => {
        let dom = document.querySelector('.chat-main')
        let scrollInterval = setInterval(() => {
          if (dom.scrollHeight - dom.scrollTop > dom.clientHeight) {
            dom.scrollTop += 4
          } else {
            clearInterval(scrollInterval)
          }
        }, 15)
      }
    },
    methods: {
      ...mapActions({
        sendMessage: 'socket_getMessage'
      }),
      getMessage () {
        for (let [k, v] of Object.entries(this.chatsList)) {
          k === this.otherUserId ? this.chat = v : ''
        }
      },
      send () {
        if (this.value.trim() === '') {

        } else {
          let data = [{
            is: true,
            id: this.otherUserId,
            message: this.value,
            date: Date.parse(new Date())
          }]
          this.sendMessage(data)
          this.$socket.emit('message', {
            userId: this.userInfo.id,
            otherUserId: this.otherUserId,
            message: this.value
          })
          this.getMessage()
          this.value = ''
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
      margin: 0.6rem 0;
    }
    .img{
      width: 10%;
      img{
        width: 100%;
      }
    }
    .txt{
      position: relative;
      width: 84%;
      background: #eee;
      padding: 0.44rem 0.4rem;
      border-radius: 10px;
      .title{
        font-weight: bold;
      }
      .email{
        padding-top: 0.1rem;
        color: #999999;
      }
      &:after{
        position: absolute;
        content: '';
        border-left: 1rem solid #eee;
        border-top: 0.5rem solid rgba(255,255,255,0);
        border-bottom: 0.5rem solid rgba(255,255,255,0);
        top: 0.6rem;
        right: -0.8rem;
      }
      &.arr:after{
        border-left: none;
        border-right: 1rem solid #eee;
        border-top: 0.5rem solid rgba(255,255,255,0);
        border-bottom: 0.5rem solid rgba(255,255,255,0);
        right: inherit;
        left: -0.8rem;
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
