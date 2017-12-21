const state = {
  directoriesList: []
}

const getters = {
  directoriesList: state => state.directoriesList
}

const mutations = {
  'getDirectoriesList' (state, payload) {
    state.directoriesList = payload
  }
}
export default {
  state,
  getters,
  mutations
}
