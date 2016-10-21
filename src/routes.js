
// components
import appView from './components'

export default [{
  // 首页
    name: 'index',
    path: '/',
    component: appView.Index
  }, {
  // 项目列表页
    name: 'project',
    path: '/project',
    component: appView.Page.Project
  }, {
  // 详细某项目页
    name: 'project-vue-codemirror',
    path: '/project/vue-codemirror',
    component: appView.Project.vueCodemirror
  }, {
  // 关于我
    name: 'about',
    path: '/about',
    meta: { fullPage: true },
    component: appView.Page.About
  },  {
  // 播放器页面
    name: 'music',
    path: '/music',
    meta: { fullPage: true },
    component: appView.Page.Music
  }, {
  // 留言板
    name: 'guestbook',
    path: '/guestbook',
    component: appView.Page.Guestbook
  }, {
  // 标签的文章列表页
    name: 'tag',
    path: '/tag/:tag_slug',
    component: appView.Article.Tag
  }, {
  // 时间筛选的文章列表页
    name: 'date',
    path: '/date/:date',
    component: appView.Article.Date
  }, {
  // 视频列表页
    name: 'movie',
    path: '/category/movie',
    meta: { fullPage: true },
    component: appView.Article.Movie.List
  }, {
  // 视频详情页
    name: 'movie-detail',
    path: '/movie/:movie_id',
    meta: { fullPage: true },
    component: appView.Article.Movie.Detail
  }, {
  // 分类的文章列表页
    name: 'category',
    path: '/category/:category_slug',
    component: appView.Article.Category
  }, {
  // 文章详情页
    name: 'detail',
    path: '/article/:article_id',
    component: appView.Article.Detail
  }, {
  // 404
    path: '*',
    redirect: '/'
  }
]
