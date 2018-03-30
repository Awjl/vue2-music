import storage from 'good-storage'

// 定义搜索的key，最大缓存15条数据，当超过15条的时候，删除时间最长的一条
const SEARCH_KEY = '__search__'
const SEARCH_MAX_LEN = 15

const PLAY_KEY = '__play__'
const PLAY_MAX_LEN = 200

const FAVORITE_KEY = '__favorite__'
const FAVORITE_MAX_LEN = 200

// 判断存储数据中是否有某个元素
function insertArray(arr, val, compare, maxLen) {
  const index = arr.findIndex(compare)
  // 等于零说明是第一条数据什么都不做
  if (index === 0) {
    return
  }
  // 有这条数据，但是不是在第一条数据，首先要删除之前的数据，然后在插入第一条
  if (index > 0) {
    arr.splice(index, 1)
  }
  arr.unshift(val)
  // 如果数据长度超过数值，则最后一条数据删除
  if (maxLen && arr.length > maxLen) {
    arr.pop()
  }
}
// 删除本地缓存数据
function deleteFromArray(arr, compare) {
  const index = arr.findIndex(compare)
  if (index > -1) {
    arr.splice(index, 1)
  }
}
// 保存搜索结果 实现
export function saveSearch(query) {
  // 获取当前缓存列表
  let searches = storage.get(SEARCH_KEY, [])
  insertArray(searches, query, (item) => {
    return item === query
  }, SEARCH_MAX_LEN)
  storage.set(SEARCH_KEY, searches)
  return searches
}
// 删除本地缓存数据
export function deleteSearch(query) {
  // 获取当前缓存列表
  let searches = storage.get(SEARCH_KEY, [])
  deleteFromArray(searches, (item) => {
    return item === query
  })
  // 改变后保存一下数组
  storage.set(SEARCH_KEY, searches)
  return searches
}
// 清除本地所有数据
export function clearSearch() {
  storage.remove(SEARCH_KEY)
  return []
}
// 读取本地缓存列表
export function loadSearch() {
  return storage.get(SEARCH_KEY, [])
}

export function savePlay(song) {
  let songs = storage.get(PLAY_KEY, [])
  insertArray(songs, song, (item) => {
    return song.id === item.id
  }, PLAY_MAX_LEN)
  storage.set(PLAY_KEY, songs)
  return songs
}

export function loadPlay() {
  return storage.get(PLAY_KEY, [])
}

export function saveFavorite(song) {
  let songs = storage.get(FAVORITE_KEY, [])
  insertArray(songs, song, (item) => {
    return song.id === item.id
  }, FAVORITE_MAX_LEN)
  storage.set(FAVORITE_KEY, songs)
  return songs
}

export function deleteFavorite(song) {
  let songs = storage.get(FAVORITE_KEY, [])
  deleteFromArray(songs, (item) => {
    return item.id === song.id
  })
  storage.set(FAVORITE_KEY, songs)
  return songs
}

export function loadFavorite() {
  return storage.get(FAVORITE_KEY, [])
}

