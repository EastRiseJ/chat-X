import Qs from 'qs'
// import axios from 'axios'
import axios from './axios'
import domain from '../config/config'
// import store from '../store/'
let aParams = {

  url: '/get',

  baseURL: domain.baseURL, // 开发

  method: 'POST',

  transformResponse: [
    function (data) {
      return data
    }
  ],

  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  },
  contentType: 'application/json; charset=utf-8',

  params: {

  },

  paramsSerializer: function (params) {
    return Qs.stringify(params)
  },

  data: {
  },

  timeout: 30000,

  withCredentials: false, // default

  responseType: 'json', // default

  // 将upload事件注释掉，防止跨域状态下发起option请求

  // onUploadProgress: function(progressEvent) {
  // Do whatever you want with the native progress event
  // },

  // onDownloadProgress: function(progressEvent) {
  // Do whatever you want with the native progress event
  // },

  maxContentLength: 2000,

  validateStatus: function (status) {
    return status >= 200 && status < 300 // default
  },

  maxRedirects: 5 // default
}

let API = function (params) {
  for (var key in params) {
    aParams[key] = params[key]
  }
  // return axios(config)
  return new Promise((resolve, reject) => {
    axios(aParams)
      .then((data) => {
        resolve(data)
      })
      .catch((res) => {
        reject('接口异常')
      })
  })
}

export default API
