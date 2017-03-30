/**
 * 获取当前页面的页面信息，站点，唯一页面名
 */
function getPage() {
  // 站点，如 gist, developer, help 等，默认主站是 github
  const site = location.host.replace(/\.?github\.com$/, '') || 'github'; // 站点
  const pathname = location.pathname; // 当前路径
  const isLogin = localStorage['logged-in'] === 'true'; // 是否登录

  // 用于确定 个人首页，组织首页，仓库页 然后做别买
  const analyticsLocation = (document.getElementsByName('analytics-location')[0] || 0).content || '';
  const isProfile = analyticsLocation === '/<user-name>'; // 个人首页
  const isOrganization = analyticsLocation === '/<org-login>'; // 组织首页
  const isRepository = analyticsLocation.indexOf('/<user-name>/<repo-name>') > -1; // 仓库页

//   console.log({
//     site,
//     pathname,
//     isLogin,
//     isProfile,
//     isOrganization,
//     isRepository,
//   });

  let page = pathname;

  if (pathname === '/') { // 首页 别名
    page = isLogin ? 'dashboard' : pathname;
  }

  if (isProfile) { // 个人主页 别名
    page = 'profile';
  }

  if (isOrganization) { // 组织主页 别名
    page = 'organizations';
  }

  if (isRepository) { // 仓库页 别名
    page = analyticsLocation.replace('/<user-name>/<repo-name>', 'repository');
  }

  console.log({
    site,
    page,
    pathname,
    isLogin,
    isProfile,
    isOrganization,
    isRepository,
  });

  return {
    site,
    page,
  };
}

// 导出
export default getPage;
