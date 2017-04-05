// https://github.com/52cik 简介页面

export default {
  static: { // 静态翻译
    'Change your avatar': '修改头像',
    'Organizations': '组织',

    'Overview': '概述',
    'Repositories': '仓库',
    'Stars': '已赞',
    'Followers': '粉丝',
    'Following': '关注',

    // 概述 https://github.com/52cik
    'Popular repositories': '流行的仓库',
    'Pinned repositories': '固定的仓库',
    'Customize your pinned repositories': '自定义您的固定仓库',

    'Contribution settings': '贡献设置',
    'Select which contributions to show': '选择要显示哪​​些贡献',
    'Public contributions only': '仅公共的贡献',
    'Visitors to your profile will only see your contributions to public repositories.': '访客到您的个人资料只会看到公共仓库部分的贡献。',
    'Public and private contributions': '公共和私人贡献',
    'Visitors to your profile will see your public and anonymized private contributions.': '访客到您的个人资料将会看到您的公共和匿名的私人贡献。',
    'Visitors will now see only your public contributions.': '访客只会看到您公共仓库部分的贡献。',
    'Visitors will now see your public and anonymized private contributions.': '访客将看到您的公共和匿名的私人贡献。',

    'Jan': '一月',
    'Feb': '二月',
    'Mar': '三月',
    'Apr': '四月',
    'May': '五月',
    'Jun': '六月',
    'Jul': '七月',
    'Aug': '八月',
    'Sep': '九月',
    'Oct': '十月',
    'Nov': '十一月',
    'Dec': '十二月',

    'January': '一月',
    'February': '二月',
    'March': '三月',
    'April': '四月',
    // 'May': '五月',
    'June': '六月',
    'July': '七月',
    'August': '八月',
    'September': '九月',
    'October': '十月',
    'November': '十一月',
    'December': '十二月',

    'Mon': '周一',
    'Wed': '周三',
    'Fri': '周五',

    'Learn how we count contributions': '您想知道如何计算贡献的吗',
    'Less': '少',
    'More': '多',

    'Contribution activity': '贡献信息',
    'Jump to': '跳转到',
    'First pull request': '第一次拉取请求',
    'First issue': '第一次提问',
    'First repository': '第一个仓库',
    'Joined GitHub': '刚注册 GitHub',
    'Show more activity': '显示更多',


    // 仓库页 https://github.com/52cik?tab=repositories
    'Search repositories…': '搜索这些查库…',
    'New': '新建',

    'Type:': '类型:',
    'Select type:': '选择类型:',
    'Language:': '语言:',
    'Public': '公共 (Public)',
    'Private': '私有 (Private)',
    'Sources': '源码 (Sources)',
    'Forks': '派生 (Forks)',
    'Mirrors': '镜像 (Mirrors)',
    'Select language:': '选择语言:',
    'All': '所有 (All)',

    'result for': '个类型为',
    'results for': '个类型为',
    'repositorie': '的仓库',
    'repositories': '的仓库',
    'repositorie written in': '的仓库使用',
    'repositories written in': '的仓库使用',
    'Clear filter': '清除过滤',

    'public': '公共',
    'private': '私有',
    'source': '源码',
    'forked': '派生',
    'mirror': '镜像',

    'Updated': '更新',
    'Forked from': '派生自',

    // 已赞 https://github.com/52cik?tab=stars
    'Search starred repositories…': '搜索点赞的仓库…',
    'All languages': '所有语言',
    'Sort:': '排序:',
    'Sort options': '排序选项',
    'Recently starred': '最近关注的',
    'Recently active': '最近活动的',
    'Most stars': '最多赞的',

    'Previous': '上一页',
    'Next': '下一页',
  },
  regexp: [ // 正则翻译 (注意优先顺序)
    [/([\d,]+) contributions in the last year/, '$1 次贡献在过去的一年中'],
    [/Created (\d+)[\s\r\n]+commits? in[\s\r\n]+(\d+)[\s\r\n]+repositor(y|ies)/, '在 $1 个库中创建了 $2 次提交'],
    [/Opened (\d+)[\s\r\n]+issues?[\s\r\n]+in (\d+) repositor(y|ies)/, '在 $1 个库中打开了 $2 个问题'],
    [/Created (\d+)[\s\r\n]+repositor(y|ies)/, '创建了 $1 个仓库'],
    [/Opened (\d+)[\s\r\n]+other[\s\r\n]+pull requests?/, '发起了 $1 个拉取请求'],
    [/Opened (\d+)[\s\r\n]+other[\s\r\n]+issues?/, '开了 $1 个其他问题'],
    [/(\d+) commits?/, '$1 次提交'],
    [/Pushed (\d+) commits? to/, '推送了 $1 次提交到'],
    [/Follow ([^’]+)’s activity feed/, '关注 $1 的 feed'],
    [/([^ ]+) has no activity during this period\./, '$1 近期没有任何活动。'],
    [/([\s\S]+?) has no activity yet for this period\./, '$1 近期没有任何活动。'],
  ],
};

