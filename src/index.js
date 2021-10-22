export default class Validator {
  isValid (text) {
    return this.schema.isValidSync(text)
  }
}