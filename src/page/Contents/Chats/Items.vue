<template>
  <li class="chats-item">
    <div class="container clearfix">
      <div class="img fl">
        <img :src="avatar ? avatar : defaultAvatar" alt="">
      </div>
      <div class="txt fr">
        <p class="title no-linefeed">{{ name }}</p>
        <p class="message no-linefeed">{{ message[message.length - 1] }}</p>
        <div class="date">
          {{ date }}
        </div>
      </div>
    </div>
  </li>
</template>

<script>
  export default {
    props: ['id', 'avatar', 'name', 'message', 'date'],
    data () {
      return {
        defaultAvatar: '/static/avatar.png'
      }
    }
  }
</script>

<style lang="less" scoped>
  .chats-item{
    padding: 0.2rem 0;
    background: #fff;
    border-bottom:1px solid #f4f4f4;
    .img{
      width: 16%;
      img{
        width: 100%;
      }
    }
    .txt{
      position: relative;
      width: 78%;
      padding-top: 0.44rem;
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
