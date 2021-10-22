import { test, expect } from '@jest/globals';
import Validator from '../index';

test('should type check', () => {
  const v = new Validator();
  const schema = v.number();
  const isValid = schema.isValid(1);
  expect(isValid).toBe(true);
});

test('should required check', () => {
  const v = new Validator();
  const schema = v.number().required();
  expect([schema.isValid(), schema.isValid(1)]).toEqual([false, true]);
});

test('should positive check', () => {
  const v = new Validator();
  const schema = v.number().positive();
  expect([schema.isValid(-1), schema.isValid(1)]).toEqual([false, true]);
});

test('should range check', () => {
  const v = new Validator();
  const schema = v.number().range(-5, 5);
  expect([schema.isValid(100), schema.isValid(4)]).toEqual([false, true]);
});
