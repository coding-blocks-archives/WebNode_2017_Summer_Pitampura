/**
 * Created by championswimmer on 27/06/17.
 */

function downloadFile(url, downloaded) {
  //we are downloading here
  setTimeout(function () {
    downloaded('some file data')
  }, 3000)
}

function compressFile(data, type, compressed) {
  setTimeout(function () {
    compressed('compressed data')
  }, 2000)
}

function saveFile(data, fileLocation, saved) {
  setTimeout(function () {
    saved(true)
  }, 3000)
}

downloadFile('google.com/file', function (data) {
  compressFile(fileData, 'zip', function (data) {
    saveFile(compressedData, 'C:/myfile.txt', function () {
      console.log('Download complete');
    })
  })
});
console.log('Download started');

