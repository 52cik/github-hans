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
    'Add topics': '添加标签',

    // 仓库描述编辑
    'No description or website provided.': '没有提供说明和网站信息.',
    'Description': '描述',
    'Short description of this repository': '简短的描述下您的仓库',
    'Website': '网址',
    'Website for this repository (optional)': '这个仓库的网址 (可选)',
    'Save': '保存',
    'or': '或',
    'Cancel': '取消',

    // 添加标签
    'Topics': '标签',
    '(separate with spaces)': '(使用空格分隔)',
    'Add topics to categorize your repository and make it more discoverable.': '添加标签分类您的仓库，使其更容易被发现。',
    'Suggested:': '建议:',
    'Done': '完成',

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







// 设置部分 公共菜单
const menu = {
  'Options': '基本选项',
  'Collaborators': '合作者',
  'Branches': '分支',
  'Integrations & services': '集成和服务',
  'Deploy keys': '部署 keys',
};


// 基本选项页面 https://github.com/52cik/github-hans/settings
locals['repository/edit_repositories/options'] = {
  static: { // 静态翻译
    ...menu, // 菜单

    'Repository name': '仓库名',
    'Rename': '重命名',

    'Features': '特性',
    'GitHub Wikis is a simple way to let others contribute content. Any GitHub user can create and edit pages to use for documentation, examples, support, or anything you wish.': 'GitHub Wikis 是一个简单的方法让别人贡献内容。GitHub 的任何用户都可以创建和编辑页面中使用的文档，示例，支持或任何您想。',
    'Restrict editing to collaborators only': '编辑限制只有合作者可以',
    'Public wikis will still be readable by everyone.': '公共 wikis 仍然会受到大家的可读性',
    'GitHub Issues adds lightweight issue tracking tightly integrated with your repository. Add issues to milestones, label issues, and close & reference issues from commit messages.': 'GitHub 与您的存储库添加轻量级问题跟踪紧密集成的问题。添加里程碑的问题，标签问题，并密切与参考问题提交消息。',
    'Projects': '项目',
    'Project boards on GitHub help you organize and prioritize your work. You can create project boards for specific feature work, comprehensive roadmaps, or even release checklists.': '项目面板帮助你组织和优先安排您的工作。您可以创建项目面板为特定功能的工作，综合路线图，甚至发布清单。',

    // 这部分翻译不准确，需要重新翻译
    'Merge button': '合并按钮',
    'When merging pull requests, you can allow any combination of merge commits, squashing, or rebasing. At least one option must be enabled.': '当合并拉取请求时，您可以允许合并提交，压缩。必须启用至少一个选项。',
    'Allow merge commits': '允许合并提交',
    'Add all commits from the head branch to the base branch with a merge commit.': '从head分支的所有提交合并提交到base分支。',
    'Allow squash merging': '允许压缩合并',
    'Combine all commits from the head branch into a single commit in the base branch.': '从head分支的所有提交压缩提交到base分支。',
    'Allow rebase merging': '允许变基合并',
    'Add all commits from the head branch onto the base branch individually.': '从head分支的所有提交变基提交到base分支。',

    'GitHub Pages': 'GitHub 项目演示页面',
    'Your site is published at': '您的演示地址为:',
    'Your site is ready to be published at': '您的演示地址为:',
    'is designed to host your personal, organization, or project pages from a GitHub repository.': '为您私人，组织或仓库项目提供静态web页面。',
    'Source': '源',
    'Your GitHub Pages site is currently being built from the': '你的 GitHub Pages 网站目前正在建立在',
    'branch.': '分支。',
    'Learn more': '查看更多',
    'Select source': '选择源',
    'Use the': '使用',
    'Use only the': '只使用',
    'folder for GitHub Pages.': '目录作为 GitHub Pages',
    'branch for GitHub Pages.': '分支作为 GitHub Pages',
    'Disable GitHub Pages.': '禁用 GitHub Pages',
    'Save': '保存',
    'Theme chooser': '选择主题',
    'Select a theme to build your site with a Jekyll theme': '选择一个Jekyll主题创建你的站点',
    'Choose a theme': '选择主题',
    'Custom domain': '自定义域名',
    'Custom domains allow you to serve your site from a domain other than': '自定义域名允许您的站点使用其他域名，而不是',
    'Enforce HTTPS': '强制 HTTPS',


    'Danger Zone': '危险区',
    'Make this repository private': '将该仓库设为私有仓库',
    'Public forks can’t be made private. Please': '派生的的仓库，无法转为私有，请',
    'duplicate the repository': '复制一份该仓库。',
    'Make private': '转为私有',
    'Please': '请',
    'upgrade your plan': '更新您的私有仓库计划',
    'to make this repository private.': '让这个仓库转为私有。',
    'Transfer ownership': '转让所有权',
    'Transfer': '转让',
    'Transfer this repository to another user or to an organization where you have the ability to create repositories.': '将此仓库转让给另一个用户或创建为组织。',
    'Delete this repository': '删除此仓库',
    'Once you delete a repository, there is no going back. Please be certain.': '一旦删除您的仓库，将无法找回。请您三思。',
  },
  regexp: [ // 正则翻译
  ],
};


// 合作者页面 https://github.com/52cik/github-hans/settings/collaboration
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

    ...menu, // 菜单

  },
  regexp: [ // 正则翻译
  ],
};


// 分支页面 https://github.com/52cik/github-hans/settings/branches
locals['repository/edit_repositories/branches'] = {
  static: { // 静态翻译
    ...menu, // 菜单

    'Default branch': '默认分支',

  },
  regexp: [ // 正则翻译
  ],
};


// hooks https://github.com/52cik/github-hans/settings/hooks
locals['repository/repository_hooks/index'] = {
  static: { // 静态翻译
    ...menu, // 菜单

    'Add webhook': '添加 webhook',

  },
  regexp: [ // 正则翻译
  ],
};


// 集成和服务 https://github.com/52cik/github-hans/settings/installations
locals['repository/repository_installations/index'] = {
  static: { // 静态翻译
    ...menu, // 菜单

    'Installed integrations': '安装集成',

  },
  regexp: [ // 正则翻译
  ],
};


// 部署页面 https://github.com/52cik/github-hans/settings/installations
locals['repository/edit_repositories/keys'] = {
  static: { // 静态翻译
    ...menu, // 菜单

    'Add deploy key': '添加部署 key',

  },
  regexp: [ // 正则翻译
  ],
};

export default locals;
