import { test, expect } from '@jest/globals'
import Validator from '../index'


test('should custom check', () => {
  const v = new Validator()
  v.addValidator('string', 'startWith', (value, start) => value.startsWith(start))
  const schema = v.string().test('startWith', 'H')
  expect([schema.isValid('exlet'), schema.isValid('Hexlet')]).toStrictEqual([false, true])
})