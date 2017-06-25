/**
 * Created by championswimmer on 25/06/17.
 */

// Made in 'Declarative Environment Record'
let obj = {
  k1: 'v1',
  k2: 2,
  k3: false
};
let otherObj = {};

var a = 'some stuff';

obj.k4 = 'Some new stuff';
obj['a'] = 200;
obj['spaced string'] = 'some value';
obj[''] = 10;
obj[obj] = 'abc';
obj[otherObj] = 'def';

//delete obj.k2;

var objA = {a:10};

var objB = Object.create(objA);
objB.b = 20;

var objC = Object.create(objB);
objC.c = 30;

var objD = Object.create(objC);
objD.d = 40;

