/**
 * Created by Administrator on 2017/6/13 0013.
 */
/**
 * 存储localStorage
 */
export const setStore = (name, content) => {
  if (!name) return
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  window.localStorage.setItem(name, content)
}

/**
 * 获取localStorage
 */
export const getStore = name => {
  if (!name) return
  return window.localStorage.getItem(name)
}

/**
 * 删除localStorage
 */
export const removeStore = name => {
  if (!name) return
  window.localStorage.removeItem(name)
}

/*
 * 将json转化成vux PopupRadio 相应的格式 key value
 */
export const jsonToKeyValue = (data, keyStr, valStr) => {
  let newData = []
  data.forEach((value, index) => {
    newData.push({
      key: value[keyStr],
      value: value[valStr]
    })
  })
  return newData
}
