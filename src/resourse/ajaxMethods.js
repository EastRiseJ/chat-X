// post 方法
export const JPost = (url, data) => {
  return {
    method: 'post',
    url: url,
    data: data || {}
  }
}
// get 方法
export const JGet = (url) => {
  return {
    method: 'get',
    url: url
  }
}
