// 生成一个min-max的随机数
function getRandomIndex (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
// 打乱一个数组
export function shuffle (arr) {
  // 修改成修改_arr  这样不会直接修改arr从而影响原数组
  let _arr = arr.slice()
  for (let i = 0; i < _arr.length; i++) {
    let j = getRandomIndex(0, i)
    let t = _arr[i]
    _arr[i] = _arr[j]
    _arr[j] = t
  }
  return _arr
}
// 节流函数
export function debounce(func, delay) {
  // 需要执行的函数，和要延迟的时间
  let timer
  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}