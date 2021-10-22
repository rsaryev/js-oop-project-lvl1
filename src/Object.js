import * as yup from 'yup'
import Validator from './index'

export default class ObjectValidator extends Validator {
  constructor () {
    super()
    this.schema = yup.object()
    this.shapeObject = null
  }

  shape (object) {
    this.shapeObject = object
    return this
  }

  isValid (obj) {
    return Object.entries(this.shapeObject ?? {}).map(([key, value]) => {
      return value.isValid(obj[key])
    }).every((value) => value)
  }
}