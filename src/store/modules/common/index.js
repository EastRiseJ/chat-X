import loading from './loading'

const state = {
  title: '',
  showPortErrorToast: false,
  direction: 'forward',
  errorMsg: ''
}

const mutations = {
  'updateTitle' (state, payload) {
    state.title = payload.title
  },
  'updateDirection' (state, payload) {
    state.direction = payload.direction
  },
  'updateShowPortErrorToast' (state, payload) {
    state.showPortErrorToast = payload.showPortErrorToast
  },
  'updateErrorMsg' (state, payload) {
    state.errorMsg = payload.errorMsg
  }
}
export default {
  state,
  mutations,
  modules: {
    loading
  }
}
