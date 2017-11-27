<template>
  <div id="chat_X_home">
    <c-header></c-header>
    <c-content></c-content>
    <c-footer></c-footer>
  </div>
</template>
<script>
  import CHeader from '../Components/Header.vue'
  import CContent from '../Components/Content.vue'
  import CFooter from '../Components/Footer.vue'

  export default {
    data () {
      return {
      }
    },
    components: {
      CHeader,
      CContent,
      CFooter
    }
  }
</script>
<style lang="less">
  #chat_X_home{
    height: 100%;
  }
</style>
