const state = {
  chatsList: [
    {
      id: '1',
      avatar: '',
      name: 'cc',
      message: ['hi', 'w'],
      date: '10-10'
    },
    {
      id: '1',
      avatar: '',
      name: 'cc',
      message: ['你好'],
      date: '10-10'
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
