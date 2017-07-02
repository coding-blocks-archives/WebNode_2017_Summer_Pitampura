/**
 * Created by championswimmer on 02/07/17.
 */

let privVar = 'something really private'

let privFun = function () {
  console.log('doing some private work here');
}

module.exports = {
  pubVar: 'some public information here',
  pubFun: function () {
    console.log('doing public work here');
  },
  privAccess: privVar,
  privAccessFun: function () {
    privFun();
  }
}