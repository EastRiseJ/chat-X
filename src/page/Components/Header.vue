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
      @on-change="getResult"
      @on-result-click="resultClick"
      v-model="searchForm.email"
      :results="items"
      ref="search"></search>
      <directorie-info
      v-if="isShowInfo"
      @hideDialog="hideDialog"
      :id="result.id"
      :avatar="result.avatar"
      :name="result.name"
      :email="result.email"
      ></directorie-info>
      <div class="result">
        {{ tip }}
      </div>
    </div>
  </div>
</template>

<script>
  import * as commonServices from '@/resourse/services/commonServices'
  import directorieInfo from './DirectorieInfo.vue'
  import { Search } from 'vux'
  export default {
    components: {
      Search,
      directorieInfo
    },
    data () {
      return {
        isShow: false,
        items: [],
        searchForm: {
          email: ''
        },
        result: {
          id: '',
          avatar: '',
          name: '',
          email: ''
        },
        isShowInfo: false,
        tip: ''
      }
    },
    methods: {
      getResult (val) {
        this.tip = ''
        this.items = val ? getResult(this.searchForm.email) : []
      },
      resultClick (item) {
        let _this = this
        commonServices.searchUser(this.searchForm)
        .then((data) => {
          console.log(data)
          data.code === 0 ? _this.isShowInfo = true : _this.tip = data.message
          _this.result = data.data
        })
      },
      showDialog () {
        this.isShowInfo = true
      },
      hideDialog () {
        this.$nextTick(() => {
          this.isShowInfo = false
        })
      }
    }
  }
  function getResult (val) {
    let rs = []
    rs.push({
      title: `搜索：${val}`,
      other: val
    })
    return rs
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
    & > .container{
      color: #fff;
      a{
        color: #fff;
      }
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
  .result{
    color: #000;
    text-align: center;
  }
</style>
