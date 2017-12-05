const state = {
  status: false,
  userInfo: {
    id: '',
    name: '',
    email: '',
    token: '',
    avatar: ''
  }
}

const getters = {
  userInfo: state => state.userInfo
}

const mutations = {
  'successLogin' (state, payload) {
    state.status = true
    Object.assign(state.userInfo, payload)
  },
  'successLogout' (state) {
    state.status = false
    for (let index in state.userInfo) {
      state.userInfo[index] = ''
    }
  }
}
export default {
  state,
  getters,
  mutations
}
