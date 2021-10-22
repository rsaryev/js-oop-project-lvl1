import * as yup from 'yup'
import Validator from './Validator'

export default class ArrayValidator extends Validator {
  constructor () {
    super()
    this.schema = yup.array().nullable(true)
  }

  sizeof(size) {
    this.schema = this.schema.length(size)
    return this
  }
}