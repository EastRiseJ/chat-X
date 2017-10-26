const state = {
  isLoading: false,
  direction: 'forward'
}

const mutations = {
  'updateLoadingStatus' (state, payload) {
    state.isLoading = payload.isLoading
  },
  'updateDirection' (state, payload) {
    state.direction = payload.direction
  }
}

const actions = {}

export default {
  state,
  mutations,
  actions
}

