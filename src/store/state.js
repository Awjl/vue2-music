import {playMode} from 'common/js/config'
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
  currentIndex: -1
}

export default state