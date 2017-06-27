/**
 * Created by championswimmer on 27/06/17.
 */

function genCounter(initVal, deltaVal) {


  return {
    getVal() {
      return initVal;
    },
    incrVal () {
      initVal += deltaVal;
    },
    decrVal () {
      initVal -= deltaVal;
    }
  }
}

var counter = genCounter(10,3);

counter.getVal();
counter.incrVal();
counter.incrVal();
counter.getVal();
counter.decrVal();
counter.getVal();