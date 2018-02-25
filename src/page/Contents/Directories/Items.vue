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
  
</style>
