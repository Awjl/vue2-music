import {playMode} from 'common/js/config'
import {loadSearch, loadPlay, loadFavorite} from 'common/js/cache'
const state = {
  // 歌手列表
  singer: {},
  // 控制播放器的开始和暂停
  playing: false,
  // 控制播放器的展开和收起
  fullScreen: false,
  // 播放数据
  playlist: [],
  // 顺序列表 及随机顺序单曲
  sequenceList: [],
  // 播放模式
  mode: playMode.sequence,
  // 当前播放的索引
  currentIndex: -1,
  // 歌单对象
  disc: {},
  // 排行页面
  topList: {},
  // 搜索历史 初始值从缓存中读取
  searchHistory: loadSearch(),
  // 最近播放 初始值从缓存中读取
  playHistory: loadPlay(),
  // 收藏数据列表 初始值从缓存中读取
  favoriteList: loadFavorite()
}

export default state