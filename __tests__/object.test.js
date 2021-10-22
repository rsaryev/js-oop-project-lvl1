import { test, expect } from '@jest/globals'
import Validator from '../index'

test('should type check', () => {
  const v = new Validator()
  const schema = v.object()
  const isValid = schema.isValid({})
  expect(isValid).toBe(true)
})

test('should shape check', () => {
  const v = new Validator()
  const schema = v.object().shape({
    name: v.string().required(),
    age: v.number().positive(),
  })
  expect([
    schema.isValid({ name: 'kolya', age: 100 }),
    schema.isValid({ name: 'maya', age: null }),
    schema.isValid({ name: '', age: null }),
    schema.isValid({ name: 'ada', age: -5 }),
  ]).toStrictEqual([true, true, false, false])
})
