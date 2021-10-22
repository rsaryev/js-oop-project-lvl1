import * as yup from 'yup';
import Validator from './Validator';

export default class StringValidator extends Validator {
  constructor(customValidators) {
    super();
    this.customValidators = customValidators.string;
    this.schema = yup.string().nullable(true);
  }

  minLength(length) {
    this.schema = this.schema.min(length);
    return this;
  }

  contains(text) {
    const regex = new RegExp(text);
    this.schema = this.schema.matches(regex);
    return this;
  }
}
