/**
 * 时间节点翻译
 */
function timeElement() {
  if (!window.RelativeTimeElement) { // 防止报错
    return false;
  }

  const RelativeTimeElement$getFormattedDate = window.RelativeTimeElement.prototype.getFormattedDate;
  const TimeAgoElement$getFormattedDate = window.TimeAgoElement.prototype.getFormattedDate;
  // const LocalTimeElement$getFormattedDate = window.LocalTimeElement.prototype.getFormattedDate;

  const RelativeTime = function RelativeTime(str, el) { // 相对时间解析
    if (/^on ([\w ]+)$/.test(str)) {
      return `于 ${el.title.replace(/ .+$/, '')}`;
    }

    // 使用字典公共翻译的第二个正则翻译相对时间
    const timeAgo = window._GITHUB_LANGS_[window._GITHUB_LANG_].github.public.regexp[1];
    return str.replace(timeAgo[0], timeAgo[1]);
  };

  window.RelativeTimeElement.prototype.getFormattedDate = function getFormattedDate() {
    const str = RelativeTimeElement$getFormattedDate.call(this);
    return RelativeTime(str, this);
  };

  window.TimeAgoElement.prototype.getFormattedDate = function getFormattedDate() {
    const str = TimeAgoElement$getFormattedDate.call(this);
    return RelativeTime(str, this);
  };

  window.LocalTimeElement.prototype.getFormattedDate = function getFormattedDate() {
    return this.title.replace(/ .+$/, '');
  };

  // 遍历 time 元素进行翻译
  // 2016-04-16 github 改版，不再用 time 标签了。
  const times = document.querySelectorAll('time, relative-time, time-ago, local-time');
  Array.prototype.forEach.call(times, (el) => {
    if (el.getFormattedDate) { // 跳过未注册的 time 元素
      el.textContent = el.getFormattedDate();
    }
  });

  return true;
}

// 导出
export default timeElement;
