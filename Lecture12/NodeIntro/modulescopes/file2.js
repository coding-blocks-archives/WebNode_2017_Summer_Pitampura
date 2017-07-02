/**
 * Created by championswimmer on 02/07/17.
 */

this.a = 'variable';

console.log(this == module.exports)

var arrowFun = () => {
  console.log(this);
}

setTimeout(() => {
  //
}, 1000)

module.exports = {
  a: this.a
}