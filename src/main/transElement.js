import translate from './translate';

/**
 * 翻译节点对应属性内容
 *
 * @param {object} el 对象
 * @param {string} field 属性字段
 * @param {boolean} isAttr 是否是 attr 属性
 *
 * @returns {boolean}
 */
function transElement(el, field, isAttr) {
  let transText = false; // 翻译后的文本

  if (isAttr === undefined) { // 非属性翻译
    transText = translate(el[field]);
  } else {
    transText = translate(el.getAttribute(field));
  }

  if (transText === false) { // 无翻译则退出
    return false;
  }

  // 替换翻译后的内容
  if (isAttr === undefined) {
    el[field] = transText;
  } else {
    el.setAttribute(field, transText);
  }

  return true;
}

// 导出
export default transElement;
