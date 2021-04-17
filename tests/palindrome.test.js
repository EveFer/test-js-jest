const { palindrome } = require('./utils/fortesting')

test('palindrome of fernanda', () => {
  const result = palindrome('fernanda')
  expect(result).toBe('adnanref')
})

test('palindrome of empty string', () => {
  const result = palindrome('')
  expect(result).toBe('')
})

test('palindrome of empty undefined', () => {
  const result = palindrome()
  expect(result).toBeUndefined()
})
