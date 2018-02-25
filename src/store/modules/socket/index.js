import user from '../user'
import directorie from '../directorie'
import chat from '../chat'

const state = {
  connect: false,
  addList: [],
  addListRes: [],
  addListMessage: []
}

const getters = {
  addList: state => state.addList,
  addListRes: state => state.addListRes
}

const mutations = {
  SOCKET_CONNECT: (state) => {
    state.connect = true
  },
  SOCKET_USER_INFO: (state, data) => {
    console.log('dd:', data)
    user.state.userInfo = {
      id: data.id,
      token: data.token,
      name: data.name,
      email: data.email
    }
    user.state.successLogin = true
    directorie.state.directoriesList = data.list
    state.addList = data.addList
    state.addListRes = data.addListRes
    state.addListMessage = data.addListMessage
  },
  SOCKET_ADD_DIRECTORIE: (state, data) => {
    state.addListRes.unshift(data)
  },
  SOCKET_ADD_DIRECTORIE_AGREE: (state, data) => {
    // 增加好友成功，聊天区域弹出提示‘你们已经是好友啦，快来聊天吧’

  },
  SOCKET_GET_MESSAGE: (state, data) => {
    let message = {
      is: data.is,
      message: data.message,
      date: data.date
    }
    chat.state.chatsList[data.id].message.push(message)
    window.localStorage.setItem('chatXChats', JSON.stringify(chat.state.chatsList))
  }
}

const actions = {
  socket_userInfo: (context, data) => {
    context.commit('SOCKET_USER_INFO', data)
  },
  socket_addDirectorie: (context, data) => {
    context.commit('SOCKET_ADD_DIRECTORIE', data)
  },
  socket_addDirectorieAgree: (context, data) => {
    context.commit('SOCKET_ADD_DIRECTORIE_AGREE', data)
  },
  socket_getMessage: (context, e) => {
    for (let data of e.values()) {
      let flag = true
      for (let [k] of Object.entries(chat.state.chatsList)) {
        if (k === data.id) {
          context.commit('SOCKET_GET_MESSAGE', data)
          flag = false
          break
        }
      }
      if (flag) {
        let [id, name, avatar] = [data.id]
        for (let elem of directorie.state.directoriesList.values()) {
          console.log(elem)
          if (id === elem._id) {
            [name, avatar] = [elem.name, elem.avatar]
          }
        }
        let obj = {
          [id]: {
            'name': name,
            'avatar': avatar,
            'message': [{
              'is': data.is,
              'message': data.message,
              'date': data.date
            }]
          }
        }
        context.commit('newMessage', obj)
      }
    }
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
