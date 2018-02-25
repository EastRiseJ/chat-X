<template>
  <li class="chats-item" @click="chatOne">
    <div class="container clearfix">
      <div class="img fl">
        <img :src="avatar ? avatar : defaultAvatar" alt="">
      </div>
      <div class="txt fr">
        <p class="title no-linefeed">{{ name }}</p>
        <p class="message no-linefeed">{{ message[message.length - 1].message }}</p>
        <div class="date">
          {{ message[message.length - 1].date | interceptDate }}
        </div>
      </div>
    </div>
  </li>
</template>

<script>
  import { formatDatePlus } from '../../../assets/js/date.js'
  export default {
    props: ['id', 'avatar', 'name', 'message'],
    data () {
      return {
        defaultAvatar: '/static/avatar.png',
        isShow: false
      }
    },
    filters: {
      interceptDate: (value) => {
        let date = new Date(parseFloat(value))
        return formatDatePlus(date)
      }
    },
    methods: {
      chatOne () {
        this.$router.push({ path: `/chat_one/${this.id}` })
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
      padding-right: 3.4em;
      .title{
        font-weight: bold;
      }
      .message{
        padding-top: 0.1rem;
        color: #999999;
      }
      .date{
        position: absolute;
        width: 22%;
        text-align: right;
        right: 0;
        top: 0;
        padding-top: 1em;
      }
    }
  }
</style>
