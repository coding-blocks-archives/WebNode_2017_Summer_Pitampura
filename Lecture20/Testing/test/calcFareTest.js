const chai = require('chai')
  , expect = chai.expect
const calcfare = require('../calcfare')
  , getFare = calcfare.getFare
  , getFare2 = calcfare.getFare2

describe('calc fare test', () => {
  it('getFare', () => {
    expect(getFare(2,0)).to.equal(25)
  })

  it('getFare2', () => {
    expect(getFare2(2,0)).to.equal(25)

  })
})
