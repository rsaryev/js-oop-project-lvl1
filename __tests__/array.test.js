import { test, expect } from '@jest/globals'
import Validator from '../index'

test('should type check', () => {
  const v = new Validator()
  const schema = v.array()
  const isValid = schema.isValid([])
  expect(isValid).toBe(true)
})

test('should required check', () => {
  const v = new Validator()
  const schema = v.array().required()
  expect([schema.isValid(), schema.isValid([])]).toEqual([false, true])
})

test('should sizeof check', () => {
  const v = new Validator()
  const schema = v.array().sizeof(2)
  expect([schema.isValid([]), schema.isValid([1, 2])]).toEqual([false, true])
})