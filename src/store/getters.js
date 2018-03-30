// 歌手列表
export const singer = state => state.singer

// 控制播放器的开始和暂停
export const playing = state => state.playing

// 控制播放器的展开和收起
export const fullScreen = state => state.fullScreen

// 播放数据
export const playlist = state => state.playlist

// 顺序列表 及随机顺序单曲
export const sequenceList = state => state.sequenceList

// 播放模式
export const mode = state => state.mode

// 当前播放的索引
export const currentIndex = state => state.currentIndex

// 计算顺序
export const currentSong = (state) => {
  return state.playlist[state.currentIndex] || {}
}
// 创建歌单对象
export const disc = state => state.disc

// 排行页面
export const topList = state => state.topList

// 搜索历史
export const searchHistory = state => state.searchHistory