export default {
  static: { // 静态翻译
    'Search GitHub': 'GitHub 一下，你就知道',
    'This repository': '当前仓库',
    'Search': '搜索',

    'Pull Requests': '拉取请求',
    'Pull requests': '拉取请求',
    'Issues': '问题',
    'Gist': '代码片段',
    'Your dashboard': '返回仪表盘',

    'You have no unread notifications': '您没有未读通知',
    'You have unread notifications': '您有未读通知',
    'Create new…': '新建…',
    'View profile and more': '查看更多信息',

    'New repository': '新建仓库',
    'Import repository': '导入仓库',
    'New gist': '新建片段',
    'New organization': '新建组织',

    'Signed in as': '已登录',
    'Your profile': '简介',
    'Your stars': '已赞',
    'Explore': '探索',
    'Integrations': '集成',
    'Help': '帮助',
    'Settings': '设置',
    'Sign out': '退出',

    // 底部信息
    'Terms': '团队',
    'Privacy': '隐私',
    'Security': '安全',
    'Status': '状态',
    'Contact GitHub': '联系 GitHub',
    'Training': '培训',
    'Shop': '商店',
    'Blog': '博客',
    'About': '关于',

    // 公共动作词
    'Followers': '粉丝',
    'Follow': '关注',
    'Unfollow': '取消关注',
    'Watch': '关注',
    'Unwatch': '取消关注',
    'Star': '点赞',
    'Unstar': '取消点赞',
    'Fork': '派生',

    // 开源调查 弹层
    'Interested in open source?': '对开源感兴趣吗？',
    'We\'re studying people\'s experiences in open source. Whether you\'re a casual user, just exploring, or a long term contributor, we want to hear from you.': '我们正在研究人们在开源方面的经验。无论你是一个休闲用户，只是探索，或是一个长期的贡献者，我们想听到你的声音。',
    'Take the Open Source Survey': '参加开源调查',
  },
  regexp: [ // 正则翻译 (公共区域正则会二次调用翻译，为了弥补部分翻译的情况)
    /**
     * 匹配时间格式
     *
     * Mar 19, 2015 – Mar 19, 2016
     * January 26 – March 19
     * March 26
     *
     * 不知道是否稳定, 暂时先试用着. 2016-03-19 20:46:45
     */
    [/(Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May(?:)?|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?) (\d+)(?:, (\d+)|)/g, (all, month, date, year) => {
      const monthKey = {
        Jan: '1月',
        Feb: '2月',
        Mar: '3月',
        Apr: '4月',
        May: '5月',
        Jun: '6月',
        Jul: '7月',
        Aug: '8月',
        Sep: '9月',
        Oct: '10月',
        Nov: '11月',
        Dec: '12月',
      };
      return `${(year ? `${year}年` : '') + monthKey[month.substring(0, 3)] + date}日`;
    }],

    /**
     * 相对时间格式处理
     */
    [/just now|(an?|\d+) (second|minute|hour|day|month|year)s? ago/, (m, d, t) => {
      if (m === 'just now') {
        return '刚刚';
      }

      if (d[0] === 'a') { // a, an 修改为 1
        d = '1';
      }

      const dt = { second: '秒', minute: '分钟', hour: '小时', day: '天', month: '个月', year: '年' };

      return `${d} ${dt[t]}之前`;
    }],

    // 仓库删除提示
    [/Your repository '([^']+)'was successfully deleted\./, '您的 \'$1\'仓库已被成功删除。'],
    // 邮箱验证提示
    [/An email containing verification instructions was sent to (.+)\./, '验证邮件已发送到 $1。'],
    // 头像下面的注册信息
    [/Joined on/, '注册于'],
  ],
};
