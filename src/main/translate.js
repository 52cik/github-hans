/**
 * 翻译核心
 *
 * @param {string} page 页面信息
 * @param {string} key  待翻译的关键字
 *
 * @returns {string|boolean}
 */
function locale(key, page) {
  page = page || _GITHUB_SITE_.pageInfo.page;

  // 不存在的翻译内容
  if (!_GITHUB_SITE_ || !_GITHUB_SITE_[page] || !_GITHUB_SITE_[page].static) {
    return false;
  }

  // 静态字典翻译
  let str = _GITHUB_SITE_[page].static[key];

  if (str) { // 翻译成功
    return str;
  }

  // 正则翻译
  const res = _GITHUB_SITE_[page].regexp;

  if (res) {
    for (let i = 0, len = res.length; i < len; i++) {
      str = key.replace(res[i][0], res[i][1]); // 正则替换
      if (str !== key) { // 翻译成功
        return str;
      }
    }
  }

  return false; // 没有翻译的条目
}




/**
 * 翻译入口
 *
 * @param {string} text 待翻译字符串
 *
 * @returns {string|boolean}
 */
function translate(text) {
  const key = text.trim(); // 去除首尾空格的 key
  const keyNeat = key
    .replace(/\xa0/g, ' ') // 替换 &nbsp; 空格导致的 bug
    .replace(/\s{2,}/g, ' '); // 去除多余换行空格等字符，(试验测试阶段，有问题再恢复)

  if (keyNeat === '') { // 内容为空不翻译
    return false;
  }

  let str = locale(keyNeat, 'public'); // 公共翻译

  if (str !== false && str !== keyNeat) { // 公共翻译完成
    str = locale(str, 'public') || str;  // 二次公共翻译（为了弥补正则部分翻译的情况）
    return text.replace(key, str);  // 替换原字符，保留空白部分
  }

  str = locale(keyNeat); // 翻译已知页面
  if (str === false || str === '') { // 未知内容不翻译
    return false;
  }

  str = locale(str, 'public') || str; // 二次公共翻译（为了弥补正则部分翻译的情况）
  return text.replace(key, str); // 替换原字符，保留空白部分
}

// 导出
export default translate;
