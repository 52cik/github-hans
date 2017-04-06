import title from './title';
import Public from './public';

import index from './page-index';
import dashboard from './page-dashboard';
import join from './page-join';
import login from './page-login';
import passwordReset from './page-password_reset';
import profile from './page-profile';
import repository from './page-repository';
import settings from './page-settings';


// 导出翻译
export default {
  title, // 标题
  public: Public, // 公共区域

  dashboard, // 登录后首页 (别名配置)
  profile, // 简介页面
  ...repository, // 仓库页面
  ...settings, // 设置页面

  '/': index, // 首页
  '/join': join, // 注册
  '/login': login, // 注册
  '/password_reset': passwordReset, // 忘记密码
};
