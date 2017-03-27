import transElement from './transElement';

const reIgnore = window._GITHUB_LANGS_.config.reIgnore;

/**
 * 遍历节点
 *
 * @param {Element} node 节点
 */
function walk(node) {
  const nodes = node.childNodes;

  for (let i = 0, len = nodes.length; i < len; i++) {
    const el = nodes[i];
    // todo 1. 修复多属性翻译问题; 2. 添加事件翻译, 如论预览信息;

    if (el.nodeType === Node.ELEMENT_NODE) { // 元素节点处理
      // 元素节点属性翻译
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') { // 输入框 按钮 文本域
        if (el.type === 'button' || el.type === 'submit') {
          transElement(el, 'value');
        } else {
          transElement(el, 'placeholder');
        }
      } else if (el.hasAttribute('aria-label')) { // 带提示的元素，类似 tooltip 效果的
        transElement(el, 'aria-label', true);

        if (el.hasAttribute('data-copied-hint')) { // 复制成功提示
          transElement(el.dataset, 'copiedHint');
        }
      } else if (el.tagName === 'OPTGROUP') { // 翻译 <optgroup> 的 label 属性
        transElement(el, 'label');
      }

      if (el.hasAttribute('data-disable-with')) { // 按钮等待提示
        transElement(el.dataset, 'disableWith');
      }

      // 跳过 readme, 文件列表, 代码显示
      if (el.id !== 'readme' && !reIgnore.test(el.className)) {
        walk(el); // 遍历子节点
      }
    } else if (el.nodeType === Node.TEXT_NODE) { // 文本节点翻译
      transElement(el, 'data');
    }
  }
}

// 导出
export default walk;
