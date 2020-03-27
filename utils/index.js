//  读取localStorage
const getStorageItem = (key) => {
  let val = window.localStorage.getItem(key)
  return JSON.parse(val)
}

//  读取localStorage
const setStorageItem = (key, val) => {
  window.localStorage.setItem(key, JSON.stringify(val))
}

//  删除
const removeStoreItem = (key) => {
  window.localStorage.removeItem(key)
}

export {
  getStorageItem,
  setStorageItem,
  removeStoreItem
}