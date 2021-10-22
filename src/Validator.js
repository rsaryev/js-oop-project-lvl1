export default class Validator {
  isValid(data) {
    return this.schema.isValidSync(data);
  }

  required() {
    this.schema = this.schema.required();
    return this;
  }

  test(name, ...args) {
    this.schema = this.schema.test('name', (data) => this.customValidators[name].fn(data, ...args));
    return this;
  }
}
