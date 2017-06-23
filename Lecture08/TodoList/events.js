/**
 * Created by championswimmer on 23/06/17.
 */


window.onload = function () {
  let myDiv = document.getElementById('mydiv');
  console.log(myDiv);

  let div1 = document.getElementById('one')
  let div2 = document.getElementById('two')
  let div3 = document.getElementById('three')

  // myDiv.onclick = function () {
  //   console.log('div has been clicked');
  // }
  // myDiv.onclick = function () {
  //   console.log('div-clicked');
  // }
  //
  // myDiv.addEventListener('click', function () {
  //   console.log('div has been clicked');
  // })
  // myDiv.addEventListener('mouseover', function () {
  //   console.log('div has mouseover');
  // })
  // myDiv.addEventListener('mouseup', function () {
  //   console.log('div mouseup');
  // })
  // myDiv.addEventListener('mousedown', function () {
  //   console.log('div mousedown');
  // })

  function clicked(event) {
    console.log(event.target.id);
  }

  div1.addEventListener('click', (event) => {
    console.log('1 clicked');
    console.log(event);
  }, true)
  div2.addEventListener('click', () => {
    console.log('2 clicked');
  })
  div3.addEventListener('click', () => {
    console.log('3 clicked');
  })

};