<template>
  <li class="directories-item" @click="directorieInfo">
    <div class="container clearfix">
      <div class="img fl">
        <img :src="avatar ? avatar : defaultAvatar" alt="">
      </div>
      <div class="txt fr">
        <p class="title no-linefeed">{{ name }}</p>
      </div>
    </div>
  </li>
</template>

<script>
  export default {
    props: ['id', 'avatar', 'name', 'email'],
    data () {
      return {
        defaultAvatar: '/static/avatar.png'
      }
    },
    methods: {
      directorieInfo () {
        this.$router.push({ name: 'DirectorieInfo', params: {id: this.id, avatar: this.avatar, name: this.name, email: this.email} })
      }
    }
  }
</script>

<style lang="less" scoped>
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
