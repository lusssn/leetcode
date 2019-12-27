export default (str) => {
  let pre = 0
  // current的数量，看 i+1 的位置
  let cur = 1
  let result = 0
  const length = str.length -1
  for (let i = 0; i < length; i++) {
    if (str[i] === str[i+1]) {
      cur++
    } else {
      pre = cur
      cur = 1
    }
    if (pre >= cur) {
      result++
    }
  }
  return result
}
