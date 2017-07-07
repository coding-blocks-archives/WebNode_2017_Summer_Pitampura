/**
 * Created by championswimmer on 04/07/17.
 */

const fs = require('fs');
const path = require('path')

const inputFile = path.join(__dirname, 'input')
const outputFile = path.join(__dirname, 'output')

function getFizzBuzzForNum (num) {
  let res = '';
  num = parseInt(num);
  if (num % 3 == 0) res += 'fizz'

  if (num % 5 == 0) res += 'buzz'

  if (res === '') res += num;

  return res
}

function resultReducer(accum, currVal) {
  return accum + '\n' + currVal;
}

fs.readFile(inputFile, (err, data) => {
  if (err) throw err;

  let fileData = data.toString();
  let fileDataVals = fileData.split(/\r?\n/);
  let fizzBuzzVals = fileDataVals.map(getFizzBuzzForNum);
  let resString =  fizzBuzzVals.reduce(resultReducer);

  fs.writeFile(outputFile, resString, function (err) {
    if (err) throw err;

    console.log('All done!');
  })
})


