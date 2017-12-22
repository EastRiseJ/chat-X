const state = {
  directoriesList: []
}

const getters = {
  directoriesList: state => state.directoriesList
}

const mutations = {
  'getDirectoriesList' (state, payload) {
    state.directoriesList = payload
    console.log(state.directoriesList)
  }
}
export default {
  state,
  getters,
  mutations
}
