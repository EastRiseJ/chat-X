const state = {
  chatsList: {

  }
}

const getters = {
  chatsList: state => state.chatsList
}

const mutations = {
  'chatsList': (state, payload) => {
    state.chatsList = payload
  },
  'newMessage': (state, data) => {
    state.chatsList = Object.assign({}, state.chatsList, data)
    window.localStorage.setItem('chatXChats', JSON.stringify(state.chatsList))
  }
}



export default {
  state,
  getters,
  mutations
}
