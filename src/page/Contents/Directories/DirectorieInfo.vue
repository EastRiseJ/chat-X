<template>
  <div id="directorie">
    <div id="inner-header">
      <div class="container clearfix">
        <div class="left fl">
            <a @click="backTo">< 返回</a>
        </div>
      </div>
    </div>
    <div class="info">
      <div class="container clearfix">
        <div class="img fl">
          <img :src="avatar ? avatar : defaultAvatar" alt="">
        </div>
        <div class="txt fr">
          <p class="title">{{ name }}</p>
          <p class="email">账号：{{ email }}</p>
        </div>
      </div>
    </div>
    <div class="logout">
      //修改意见：prop 当前状态来显示
      <x-button type="primary" @click.native="agree" v-if="isAdd">同意</x-button>
      <x-button type="primary" @click.native="chatOne" v-else-if="flag">发送信息</x-button>
      <x-button type="primary" @click.native="addDirectorie" v-else>增加到联系人</x-button>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { XButton } from 'vux'

  export default {
    name: 'DirectorieInfo',
    components: {
      XButton
    },
    computed: mapGetters({
      directoriesList: 'directoriesList',
      addList: 'addList',
      userInfo: 'userInfo'
    }),
    props: ['id', 'avatar', 'name', 'email'],
    data () {
      return {
        flag: 'false',
        isAdd: 'false',
        defaultAvatar: '/static/avatar.png'
      }
    },
    methods: {
      chatOne () {
        this.$router.push({ path: `/chat_one/${this.id}` })
      },
      addDirectorie () {
        this.$socket.emit('addDirectorie', this.userInfo.id, this.id)
      },
      agree () {
        this.$socket.emit('addDirectorieAgree', this.userInfo.id, this.id)
      },
      backTo () {
        this.$router.go(-1)
      }
    },
    created: function () {
      // 根据 id 查询数据，与本地数据比较
      let _this = this
      for (let elem of this.directoriesList.values()) {
        _this.id === elem._id ? _this.flag = true : _this.flag = false
      }
      for (let elem of this.addList.values()) {
        _this.id === elem._id ? _this.isAdd = true : _this.isAdd = false
      }
    }
  }
</script>
<style lang="less" scoped>
  #directorie{
    position: fixed;
    z-index: 990;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
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
