const state = {
  chatsList: [
    {
      id: '1',
      avatar: '',
      name: 'cc',
      message: [
        {
          message: 'hi',
          data: '1496311370052'
        },
        {
          message: '你好',
          data: '1496311370052'
        }
      ]
    },
    {
      id: '1',
      avatar: '',
      name: 'cc',
      message: [
        {
          message: 'hi',
          data: '1496311370052'
        },
        {
          message: '你好',
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

}
export default {
  state,
  getters,
  mutations
}
