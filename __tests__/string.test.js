import { test, expect } from '@jest/globals';
import Validator from '../index';

test('should type check', () => {
  const v = new Validator();
  const schema = v.string();
  const isValid = schema.isValid('what does the fox say');
  expect(isValid).toBe(true);
});

test('should required check', () => {
  const v = new Validator();
  const schema = v.string().required();
  expect([schema.isValid(''), schema.isValid('javascript')]).toEqual([false, true]);
});

test('should minLength check', () => {
  const v = new Validator();
  const schema = v.string().minLength(2);
  expect([schema.isValid(''), schema.isValid('javascript')]).toEqual([false, true]);
});

test('should contains check', () => {
  const v = new Validator();
  const schema = v.string().contains('java');
  expect([schema.isValid(''), schema.isValid('javascript')]).toEqual([false, true]);
});
