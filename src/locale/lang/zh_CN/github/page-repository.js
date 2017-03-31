// https://github.com/52cik/github-hans

const locals = {};

locals.repository = {
  static: { // 静态翻译
    'Code': '代码',
    'Pulse': '统计',
    'Graphs': '图表',
    'Projects': '项目',

    // 关注通知设置
    'Notifications': '通知类型',
    'Not watching': '取消关注',
    'Watching': '关注',
    'Ignoring': '忽略',
    'Be notified when participating or @mentioned.': '仅参与交谈或@我时通知我.',
    'Be notified of all conversations.': '所有交谈都通知我.',
    'Never be notified.': '忽略任何通知.',

    'Edit': '编辑',
    'Add topics': '添加主题',

    // 仓库描述编辑
    'No description or website provided.': '没有提供说明和网站信息.',
    'Description': '描述',
    'Short description of this repository': '简短的描述下您的仓库',
    'Website': '网址',
    'Website for this repository (optional)': '这个仓库的网址 (可选)',
    'Save': '保存',
    'or': '或',
    'Cancel': '取消',

    'commit': '次提交',
    'commits': '次提交',
    'branch': '分支',
    'branches': '分支',
    'release': '次发布',
    'releases': '次发布',
    'contributor': '个贡献者',
    'contributors': '个贡献者',
    'Copy to clipboard': '复制到剪切板',
    'Copied!': '复制成功!',

    'New pull request': '发起拉取请求',
    'Create new file': '新建文件',
    'Upload files': '上传文件',
    'Find file': '查找文件',
    'Clone or download': '克隆或下载',

    'Use SSH': '使用 SSH',
    'Use HTTPS': '使用 HTTPS',
    'Open in Desktop': '从桌面版打开',
    'Download ZIP': '下载 ZIP',
    'Clone with SSH': '通过 SSH 克隆',
    'Clone with HTTPS': '通过 HTTPS 克隆',
    'Use an SSH key and passphrase from account.': '使用 SSH 密钥和密码访问。',
    'Use Git or checkout with SVN using the web URL.': '使用 git 或 svn 检出该仓库。',

    'Your recently pushed branches:': '你最近推送的分支:',
    'Compare & pull request': '比较 & 拉取请求',

    'Branch:': '分支:',
    'Switch branches/tags': '选择分支或标签',
    'Find or create a branch…': '查找或创建分支…',
    'Branches': '分支',
    'Tags': '标签',
    'Nothing to show': '暂无',

    'Latest commit': '最后提交',




  },
  regexp: [ // 正则翻译
  ],
};


// 配置输入密码页面
locals['repository/edit_repositories/collaboration'] = {
  static: { // 静态翻译
    'Confirm password to continue': '确认密码后才能继续操作',
    'Password': '密码',
    'Forgot password?': '忘记密码?',
    'Confirm password': '继续',

    'Collaborators': '合作者',
    'Push access to the repository': '当前仓库的推送权限',
    'This repository doesn’t have any collaborators yet. Use the form below to add a collaborator.': '当前仓库没有合作者，您可以在下面输入框添加合作者。',
    'Search by username, full name or email address': '搜索用户名, 全名, 邮箱地址：',
    'You\'ll only be able to find a GitHub user by their email address if they\'ve chosen to list it publicly. Otherwise, use their username instead.': '您可以通过邮箱或用户名找到他们。',
    'Add collaborator': '添加合作者',
  },
  regexp: [ // 正则翻译
  ],
};


export default locals;
