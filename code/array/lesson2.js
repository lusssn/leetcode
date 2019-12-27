export default (arr) => {
  // 计算最大公约数
  const calcGdc = (a, b) => {
    if (b === 0) return a
    return calcGdc(b, a % b)
  }
  // 可用reduce函数代替for
  const map = {}
  for (let item of arr) {
    if (!map[item]) {
      map[item] = 1
      continue
    }
    map[item]++
  }
  const result = (list) => {
    // 至少是两种牌
    while (list.length > 1) {
      const gcd = calcGdc(list[0], list[1])
      list.splice(0, 2, gcd)
    }
    return list[0]
  }
  return result(Object.values(map)) >= 2
}
