import gcd from '../../code/array/lesson2'

test('gcd([1,2,3,4,4,3,2,1])', () => {
  expect(gcd([1,2,3,4,4,3,2,1])).toEqual(true)
})

test('gcd([1,1,1,2,2,2,3,3])', () => {
  expect(gcd([1,1,1,2,2,2,3,3])).toEqual(false)
})

test('gcd([1])', () => {
  expect(gcd([1])).toEqual(false)
})

test('gcd([1,1])', () => {
  expect(gcd([1, 1])).toEqual(true)
})

test('gcd([1,1,2,2,2,2])', () => {
  expect(gcd([1,1,2,2,2,2])).toEqual(true)
})
