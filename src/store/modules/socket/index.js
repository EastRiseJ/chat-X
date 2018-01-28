const state = {
  connect: false,
  message: null
}

const getters = {
  userInfo: state => state.userInfo
}

const mutations = {
  SOCKET_CONNECT: (state) => {
    state.connect = true
  },
  SOCKET_GET_MESSAGE: (state, message) => {
    state.message = message
    console.log(message)
  }
}

const actions = {
  socket_getMessage: (context, message) => {
    // context.dispatch('newMessage', message)
    context.commit('SOCKET_GET_MESSAGE', message)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
