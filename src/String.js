import Validator from './index'
import * as yup from 'yup'

export default class StringValidator extends Validator {
  constructor () {
    super()
    this.schema = yup.string()
  }
  minLength (length) {
    this.schema = this.schema.min(length)
    return this
  }

  required () {
    this.schema = this.schema.required()
    return this
  }

  contains (text) {
    const regex = new RegExp(text)
    this.schema = this.schema.matches(regex)
    return this
  }
}