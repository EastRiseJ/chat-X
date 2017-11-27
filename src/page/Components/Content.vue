<template>
  <div id="chat_X_content">
    <transition name="router-fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>
<style lang="less">
  #chat_X_content{
    position:absolute;
    left:0;
    top: 50px;
  }
</style>
