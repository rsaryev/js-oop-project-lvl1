export default class Validator {
  isValid (data) {
    return this.schema.isValidSync(data)
  }
  required () {
    this.schema = this.schema.required()
    return this
  }
}