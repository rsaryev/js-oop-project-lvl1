import StringValidator from './src/String'
import NumberValidator from './src/Number'
import ArrayValidator from './src/Array'

export default class {
  string () {
    return new StringValidator()
  }
  number() {
    return new NumberValidator()
  }
  array() {
    return new ArrayValidator()
  }
}