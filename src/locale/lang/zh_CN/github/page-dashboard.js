// 登录后的 https://github.com 页面

export default {
  static: { // 静态翻译
    'View': '查看',
    'new broadcast': '条新公告',
    'new broadcasts': '条新公告',

    'Repositories you contribute to': '您贡献过的仓库',
    'Your repositories': '您的仓库',
    'Find a repository…': '搜索仓库…',
    'All': '全部',
    'Public': '公共',
    'Private': '私有',
    'Sources': '源码',
    'Forks': '派生',

    // 动态部分的状态词
    'starred': '赞了',
    'forked': '派生了',
    'forked from': '派生至',
    'created repository': '创建了仓库',
    'opened pull request': '发起了拉取请求',
    'commented on pull request': '评论了拉取请求',
    'opened issue': '新建问题',
    'close issue': '关闭问题',
    'added': '添加了',
    'to': '到',
    'pushed to': '推送了',
    'closed issue': '关闭了问题',
    'merged pull request': '合并了拉取请求',
    'commented on issue': '提交了评论',

    'More': '更多',
  },
  regexp: [ // 正则翻译
    [/Show (\d+) more repository…/, '显示 $1 个更多的仓库…'],
  ],
};
