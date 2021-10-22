import StringValidator from './src/String'
import NumberValidator from './src/Number'

export default class {
  string () {
    return new StringValidator()
  }
  number() {
    return new NumberValidator()
  }
}