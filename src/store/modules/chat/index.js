const state = {
  chatsList: [
    {
      id: '5a521c44ec7c722908b462b4',
      avatar: '',
      name: 'cc',
      message: [
        {
          message: 'hi',
          data: '1496311370052'
        },
        {
          message: '你好2',
          data: '1496311370052'
        },
        {
          message: '你好2',
          data: '1496311370052'
        },
        {
          message: '你好2',
          data: '1496311370052'
        },
        {
          message: '你好2',
          data: '1496311370052'
        },
        {
          message: '你好2',
          data: '1496311370052'
        },
        {
          message: '你好2',
          data: '1496311370052'
        },
        {
          message: '你好2',
          data: '1496311370052'
        },
        {
          message: '你好2',
          data: '1496311370052'
        },
        {
          message: '你好2',
          data: '1496311370052'
        },
        {
          message: '你好2',
          data: '1496311370052'
        },
        {
          message: '你好2',
          data: '1496311370052'
        },
        {
          message: '你好2',
          data: '1496311370052'
        },
        {
          message: '你好2',
          data: '1496311370052'
        },
        {
          message: '你好2',
          data: '1496311370052'
        },
        {
          message: '你好2',
          data: '1496311370052'
        },
        {
          message: '你好2',
          data: '1496311370052'
        }
      ]
    }
  ]
}

const getters = {
  chatsList: state => state.chatsList
}

const mutations = {
  'chatsList' (state, payload) {
    state.chatsList = payload
  }
}
export default {
  state,
  getters,
  mutations
}
