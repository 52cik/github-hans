import zh_CN from './lang/zh_CN/index';

// 暴露到全局
window._GITHUB_LANGS_ = {
  zh_CN, // 简体中文
};


window._GITHUB_LANGS_.config = {
  /**
   * 忽略区域的 class 正则
   *
   * 面包屑 breadcrumb
   * 文件列表 files js-navigation-container js-active-navigation-container
   * 代码高亮 highlight tab-size js-file-line-container
   * 代码差异 data highlight blob-wrapper
   * wiki内容 markdown-body
   */
  reIgnore: /(breadcrumb|files js-navigation-container|highlight tab-size|highlight blob-wrapper|markdown-body)/,
};
