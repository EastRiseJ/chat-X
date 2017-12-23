const state = {
  connect: false
}

const getters = {
  userInfo: state => state.userInfo
}

const mutations = {
  socket_contact: (state) => {
    state.connect = true;
  }
}
export default {
  state,
  getters,
  mutations
}
