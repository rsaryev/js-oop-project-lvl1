import * as yup from 'yup'
import Validator from './index'

export default class ArrayValidator extends Validator {
  constructor () {
    super()
    this.schema = yup.array()
  }

  sizeof(size) {
    this.schema = this.schema.length(size)
    return this
  }
}