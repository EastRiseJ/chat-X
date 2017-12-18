const state = {
  directoriesList: [
    {
      id: '1',
      avatar: '',
      name: 'abc',
      email: '123@qq.com'
    },
    {
      id: '1',
      avatar: '',
      name: 'def',
      email: '456@qq.com'
    }
  ]
}

const getters = {
  directoriesList: state => state.directoriesList
}

const mutations = {

}
export default {
  state,
  getters,
  mutations
}
