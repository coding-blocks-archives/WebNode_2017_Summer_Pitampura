/**
 * Created by championswimmer on 27/06/17.
 */

var obj = Object.create(Object.prototype, {
  key: {
    writable: true,
    configurable: true,
    value: 'some value'
  },
  anotherKey: {
    configurable: true,
    get: function () {
      return "You can't change this"
    }
  }
});

var o = {p:1, q: 2};

Object.defineProperty(o, 'z', {
  writable: false,
  configurable: true,
  enumerable: false,
  value: "You can't change this"
})