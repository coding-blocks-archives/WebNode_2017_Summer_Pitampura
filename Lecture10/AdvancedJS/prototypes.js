/**
 * Created by championswimmer on 27/06/17.
 */

var oneObj = {
  key: 'value'
}

var otherObj = Object.create(oneObj);
otherObj.otherKey = 12345;

var anotherObj = Object.create(otherObj);
anotherObj.someBool = false;

function aFun () {
  console.log(this.someBool);
}
anotherObj.someFun = aFun

/*
 otherObj
 Object { otherKey: 12345 }
 otherObj.key = 'askhdbaskhd'
 "askhdbaskhd"
 anotherObj.key
 "askhdbaskhd"
 anotherObj
 Object { someBool: false }
 anotherObj.key
 "askhdbaskhd"
 delete otherObj.key
 true
 otherObj
 Object { otherKey: 12345 }
 otherObj.key
 "value"
 anotherObj.key
 "value"
 anotherObj
 Object { someBool: false }
 delete anotherObj.key
 true
 anotherObj.key
 "value"
 */
