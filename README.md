# vue-music

> Vue.js 打造高级实战——音乐 App

## 项目树
```
.
├── README.md
├── build
│   ├── build.js
│   ├── check-versions.js
│   ├── dev-client.js
│   ├── dev-server.js
│   ├── utils.js
│   ├── vue-loader.conf.js
│   ├── webpack.base.conf.js
│   ├── webpack.dev.conf.js
│   └── webpack.prod.conf.js
├── config
│   ├── dev.env.js
│   ├── index.js
│   └── prod.env.js
├── index.html
├── package.json
├── prod.server.js
├── src
│   ├── App.vue(主要)
│   ├── api(接口)
│   │   ├── config.js(默认固定参数)
│   │   ├── rank.js(歌手排行接口)
│   │   ├── recommend.js(推荐页面接口)
│   │   ├── search.js(搜索页面接口)
│   │   ├── singer.js(歌手页面接口)
│   │   └── song.js(歌曲列表接口)
│   ├── base(基础组件库)
│   │   ├── confirm(弹窗组件)
│   │   │   └── confirm.vue
│   │   ├── listview(类通讯录组件)
│   │   │   └── listview.vue
│   │   ├── loading(加载组件)
│   │   │   ├── loading.gif
│   │   │   └── loading.vue
│   │   ├── no-result(没有数据时显示的组件)
│   │   │   ├── no-result.vue
│   │   │   ├── no-result@2x.png
│   │   │   └── no-result@3x.png
│   │   ├── progress-bar(进度条组件)
│   │   │   └── progress-bar.vue
│   │   ├── progress-circle(圆形进度条)
│   │   │   └── progress-circle.vue
│   │   ├── scroll(滚动组件)
│   │   │   └── scroll.vue
│   │   ├── search-box(搜索框组件)
│   │   │   └── search-box.vue
│   │   ├── search-list(搜索历史列表组件)
│   │   │   └── search-list.vue
│   │   ├── slider(轮播图组件)
│   │   │   └── slider.vue
│   │   ├── song-list(歌曲列表组件)
│   │   │   ├── first@2x.png
│   │   │   ├── first@3x.png
│   │   │   ├── second@2x.png
│   │   │   ├── second@3x.png
│   │   │   ├── song-list.vue
│   │   │   ├── third@2x.png
│   │   │   └── third@3x.png
│   │   ├── switches(左右开关组件)
│   │   │   └── switches.vue
│   │   └── top-tip(添加成功提示组件)
│   │       └── top-tip.vue
│   ├── common(静态资源)
│   │   ├── fonts
│   │   │   ├── music-icon.eot
│   │   │   ├── music-icon.svg
│   │   │   ├── music-icon.ttf
│   │   │   └── music-icon.woff
│   │   ├── image
│   │   │   └── default.png
│   │   ├── js
│   │   │   ├── cache.js(处理一些与search有关的逻辑，还有与localhost有关的逻辑)
│   │   │   ├── config.js(常量定义)
│   │   │   ├── dom.js(dom相关操作)
│   │   │   ├── jsonp.js(封装的一个jsonp函数和拼接函数)
│   │   │   ├── mixin.js(控制缩小后播放组件距离列表的高度)
│   │   │   ├── singer.js(歌手类)
│   │   │   ├── song.js(歌单类)
│   │   │   └── util.js(随机函数)
│   │   └── stylus
│   │       ├── base.styl
│   │       ├── icon.styl
│   │       ├── index.styl
│   │       ├── mixin.styl
│   │       ├── reset.styl
│   │       └── variable.styl
│   ├── components(业务组件库)
│   │   ├── add-song(添加歌曲页面)
│   │   │   └── add-song.vue
│   │   ├── disc(歌单详情页)
│   │   │   └── disc.vue
│   │   ├── m-header(头部组件)
│   │   │   ├── logo@2x.png
│   │   │   ├── logo@3x.png
│   │   │   └── m-header.vue
│   │   ├── music-list(详情公共组件)
│   │   │   └── music-list.vue
│   │   ├── player(播放器组件)
│   │   │   └── player.vue
│   │   ├── playlist(歌曲列表页)
│   │   │   └── playlist.vue
│   │   ├── rank(排行组件)
│   │   │   └── rank.vue
│   │   ├── recommend(推荐组件)
│   │   │   └── recommend.vue
│   │   ├── search(搜索组件)
│   │   │   └── search.vue
│   │   ├── singer(歌手组件)
│   │   │   └── singer.vue
│   │   ├── singer-detail(歌手详情页)
│   │   │   └── singer-detail.vue
│   │   ├── suggest(搜索检索列表组件)
│   │   │   └── suggest.vue
│   │   ├── tab(切换列表组件)
│   │   │   └── tab.vue
│   │   ├── top-list(排行列表)
│   │   │   └── top-list.vue
│   │   └── user-center(用户中心)
│   │       └── user-center.vue
│   ├── main.js(入口)
│   ├── router(路由)
│   │   └── index.js
│   └── store(vuex存放)
│       ├── actions.js(异步操作/修改 或者对于mutations的封装)
│       ├── getters.js(获取state映射)
│       ├── index.js(入口文件)
│       ├── mutation-types.js(所有相关new action 名字 存储字符串常量)
│       ├── mutations.js(所有的mutations)
│       └── state.js(所有状态)
└── static(项目展示)
    ├── 1.png
    ├── 2.png
    ├── 3.png
    ├── 4.png
    └── 5.png

