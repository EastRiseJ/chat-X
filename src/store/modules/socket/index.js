const state = {
  connect: false,
  addList: []
}

const getters = {
  addList: state => state.addList
}

const mutations = {
  SOCKET_CONNECT: (state) => {
    state.connect = true
  },
  SOCKET_ADD_DIRECTORIE: (state, data) => {
    state.addList.unshift(data)
  }
}

const actions = {
  socket_addDirectorie: (context, data) => {
    // context.dispatch('newMessage', message)
    context.commit('SOCKET_ADD_DIRECTORIE', data)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
