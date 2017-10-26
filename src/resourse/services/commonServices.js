import JAjax from '../api'
import * as JPorts from '../interface'
import { JPost } from '../ajaxMethods'

// 登录
export const login = (data) => {
  return JAjax(JPost(JPorts.login, data))
}

// 登出
export const logout = (data) => {
  return JAjax(JPost(JPorts.logout, data))
}
