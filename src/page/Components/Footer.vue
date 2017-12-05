<template>
  <div id="chat_X_bottom">
    <ul class="clearfix">
      <li>
        <router-link to="/home/chats">信息</router-link>
      </li>
      <li>
        <router-link to="/home/directories">联系人</router-link>
      </li>
      <li>
        <router-link to="/home/user">我</router-link>
      </li>
    </ul>
  </div>
</template>
<style lang="less">
  #chat_X_bottom {
    position: fixed;
    height: 3rem;
    line-height: 3rem;
    background: #fcfcfc;
    bottom: 0;
    left: 0;
    right: 0;
    color: #999999;
    border-top: 1px solid #d6d6d6;
    ul {
      li {
        float: left;
        width: 33.3333%;
        text-align: center;
        a{
          display: block;
        }
      }
    }
  }
</style>
