import translate from './translate';

/**
 * 翻译页面标题
 */
function transTitle() {
  const title = translate(document.title, 'title');

  if (title === false) { // 无翻译则退出
    return false;
  }

  document.title = title;

  return true;
}

// 导出
export default transTitle;
