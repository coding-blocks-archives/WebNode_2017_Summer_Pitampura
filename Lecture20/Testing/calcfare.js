
getFare = (km, min) =>
  Math.max(25, (25 + 8*(km -2))) + Math.max(0, (min - 15))

getFare2 = (km, min) =>
  25 + ((km > 2) ? (8 * (km - 2)) : 0) + ((min > 15) ? (min - 15) : 0)

if (typeof module != 'undefined' && module) {
  module.exports = {
    getFare, getFare2
  }
} else {
  window.getFare = getFare;
  window.getFare2 = getFare2;
}