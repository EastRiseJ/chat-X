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
</style>
