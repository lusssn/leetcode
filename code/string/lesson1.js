export default (str) => {
  const strArray = str.split(' ')
  const result = strArray.map(item => {
    return item.split('').reverse().join('')
  })
  return result.join(' ')
}
