/**
 * Created by championswimmer on 04/07/17.
 */
const path = require('path');
const fs = require('fs');


console.log('Directory is == ');
console.log(__dirname);

console.log(path.join(__dirname, '..', '..'));
console.log(path.join(__dirname, '/subdir'))

fs.readdir(__dirname, function (err, files) {
  if (err) throw err
  console.log(files);
})