export default class Validator {
  isValid (text) {
    return this.schema.isValidSync(text)
  }
  required () {
    this.schema = this.schema.required()
    return this
  }
}