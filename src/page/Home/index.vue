<template>
  <div id="chat_X_home">
    <c-header></c-header>
    <c-content></c-content>
    <c-footer></c-footer>
  </div>
</template>
<script>
  // import * as commonServices from '@/resourse/services/commonServices'
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
    },
    mounted: function () {
      // this.$nextTick(function () {
      //   console.log('cc')
      //   commonServices.directories()
      //     .then((data) => {
      //       console.log(data)
      //       this.$store.commit('getDirectoriesList', data.data.list)
      //     })
      // })
    }
  }
</script>
<style lang="less">
  #chat_X_home{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  #inner-header{
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
</style>
