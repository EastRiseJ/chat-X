<template>
  <div id="chat_X_header">
    <div class="container clearfix">
      <div class="left fl">
          Chat X（100）
      </div>
      <div class="right fr">
        <a @click="isShow = !isShow">搜索</a>
      </div>
    </div>
    <div id="search" v-if="isShow">
      <div id="inner-header">
        <div class="container clearfix">
          <div class="left fl">
              <a @click="isShow = false">< 返回</a>
          </div>
        </div>
      </div>
      <search
      auto-scroll-to-top top="3rem"
      ref="search"></search>
    </div>
  </div>
</template>

<script>
  import { Search } from 'vux'
  export default {
    components: {
      Search
    },
    data () {
      return {
        isShow: false,
        counter: 1
      }
    }
  }
</script>
<style lang="less">
  #chat_X_header{
    position: absolute;
    height: 3rem;
    line-height: 3rem;
    background: #393a3f;
    top: 0;
    left: 0;
    right: 0;
    color: #fff;
    a{
      color: #fff;
    }
    .vux-search-box{
      color: #888;
      line-height: 1.6em;
      a{
        color: #888;
      }
    }
  }
  #search{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 990;
    background: #fff;
  }
</style>
