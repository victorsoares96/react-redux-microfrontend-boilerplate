declare module 'utils' {
  import sayHello from 'utils/sayHello'
  export { sayHello }
}
declare module 'utils/sayHello' {
  export default function sayHello(): string
}
declare module 'utils' {
  import main = require('utils')
  export = main
}
