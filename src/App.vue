<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

@import './assets/css/common.less';
@import './assets/css/app.less';
  #app{
    height: 100%;
  }
  .tip{
    text-align: center;
    padding-top: 1rem;
    span{
      background: #f8f8f8;
      display: inline-block;
      border-radius: 2rem;
      padding: 0.2rem 1.8rem;
      color: #666;
    }
  }
</style>
