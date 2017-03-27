/**
 * GitHub 模块系统调用方法
 *
 * @param {Array} deps 依赖模块数组
 * @param {Function} cb 回调方法
 * @param {String} path 模块名路径
 */
function use(deps, cb, path) {
  let iCount = 0;
  let maxTimes = 20;

  setTimeout(function callee() {
    if (!window.define) {
      if (++iCount >= maxTimes) {
        return false;
      }
      return setTimeout(callee, 99);
    }
    const name = path ? path : `github/hans-hook-${Date.now().toString(16)}`;
    window.define(name, deps, cb);
    window.ghImport(name)['catch'](e => setTimeout(() => { throw e; }));
  }, 99);
}

// 导出
export default use;
