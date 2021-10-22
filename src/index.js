import StringValidator from './String';
import NumberValidator from './Number';
import ArrayValidator from './Array';
import ObjectValidator from './Object';

export default class {
  constructor() {
    this.customValidators = {};
  }

  string() {
    return new StringValidator(this.customValidators);
  }

  number() {
    return new NumberValidator(this.customValidators);
  }

  array() {
    return new ArrayValidator(this.customValidators);
  }

  object() {
    return new ObjectValidator(this.customValidators);
  }

  addValidator(type, name, fn) {
    if (!this.customValidators[type]) {
      this.customValidators[type] = {};
    }
    this.customValidators[type][name] = {
      fn,
    };
  }
}
