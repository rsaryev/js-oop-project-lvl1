import * as yup from 'yup'
import Validator from './index'

export default class NumberValidator extends Validator {
  constructor () {
    super()
    this.schema = yup.number()
  }
  required () {
    this.schema = this.schema.required()
    return this
  }
  positive () {
    this.schema = this.schema.positive()
    return this
  }
  range (min, max) {
    this.schema = this.schema.min(min).max(max)
    return this
  }
}