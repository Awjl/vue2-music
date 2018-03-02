import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import state from './state'
import mutations from './mutations'
// 每次通过mutations修改state的时候，会在控制台打印一个log
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

// 调试工具帮助我们是不是对mutations如果不是会报警告
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})