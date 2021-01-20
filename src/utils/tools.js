import qs from "qs";

/**
 * 格式化url中的search参数，返回一个对象
 * @param {*} search
 */
export function parseSearch(search) {
  return qs.parse(search, {
    ignoreQueryPrefix: true,
  });
}

/**
 * 把查询条件转换成url参数
 * @param {*} query
 */
export function stringifySearch(query) {
  return qs.stringify(query);
}
