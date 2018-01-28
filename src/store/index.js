import Vue from 'vue'
import Vuex from 'vuex'
import common from './modules/common'
import user from './modules/user'
import chat from './modules/chat'
import directorie from './modules/directorie'
import socket from './modules/socket'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    common,
    user,
    chat,
    directorie,
    socket
  }
})
