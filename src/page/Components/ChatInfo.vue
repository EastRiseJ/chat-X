<template>
  <div id="chat">
    <div id="inner-header">
      <div class="container clearfix">
        <div class="left fl">
            <a @click="hideDialog">< 返回</a>
        </div>
        <div class="right fr">
          {{ name }}
        </div>
      </div>
    </div>
    <div class="chat-main">
      <li v-for="item in message">
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
  import { XButton } from 'vux'

  export default {
    components: {
      XButton
    },
    props: ['id', 'avatar', 'name', 'message'],
    data () {
      return {
        defaultAvatar: '/static/avatar.png'
      }
    },
    methods: {
      hideDialog () {
        this.$emit('hideDialog')
      }
    }
  }
</script>
<style lang="less" scoped>
  #chat{
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
