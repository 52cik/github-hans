// https://github.com/settings/profile

const locals = {};

// 设置部分 公共菜单
const menu = {
  'Personal settings': '个人设置',
  'Profile': '基本信息',
  'Account': '帐户设置',
  'Emails': '邮箱设置',
  'Notifications': '通知设置',
  'Billing': '财务信息',
  'SSH and GPG keys': 'SSH 和 GPG keys',
  'Security': '安全信息',
  'OAuth applications': '授权应用',
  'Personal access tokens': '访问令牌',
  'Blocked users': '阻止用户',
  'Repositories': '仓库管理',
  'Organizations': '组织管理',
  'Saved replies': '快捷回复',
  'Authorized applications': '授权应用',
  'Installed integrations': '安装集成',
  'Developer settings': '开发者设置',
  'Organization settings': '组织设置',
};

// 设置页面 https://github.com/settings/profile
locals['/settings/profile'] = {
  static: { // 静态翻译
    ...menu, // 菜单

    'Public profile': '基本资料',
    'Profile picture': '我的头像',
    'Upload new picture': '上传新图片',
    'You can also drag and drop a picture from your computer.': '您也可以直接拖拽照片镜像上传.',
    'Name': '昵称',
    'Public email': '公共邮箱',
    'Select a verified email to display': '选择显示已验证的邮箱',
    'You can manage verified email addresses in your': '您可以管理已验证邮箱在',
    'email settings': '邮箱设置',
    'Bio': '个人简历',
    'You can': '您可以',
    'other users and organizations to link to them.': '其他用户和组织以链接到他们。',
    'Company': '公司',
    'your company\'s GitHub organization to link it.': '您的公司组织以链接到他们。',
    'Location': '地址',
    'Update profile': '更新资料',

  },
  regexp: [ // 正则翻译
  ],
};


export default locals;
