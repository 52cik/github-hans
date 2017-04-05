import use from './use'; // 调用 github 模块
import walk from './walk'; // 遍历节点
import timeElement from './timeElement'; // 时间节点翻译
import { setPageInfo } from './getPage'; // 时间节点翻译

/**
 * 翻译页面
 */
function trans() {
  setTimeout(() => {
    setPageInfo(); // 设置页面信息
    timeElement(); // 时间节点翻译
    walk(document.body); // 遍历文档
  }, 99);
}

trans(); // 立即翻译

use(['../jquery'], ($) => { // ajax 请求完成后重新翻译
  $(document).ajaxSuccess(trans);

  // https://github.com/github/include-fragment-element
  // 异步元素加载完后执行
  $('include-fragment').on('loadend', trans);
});
