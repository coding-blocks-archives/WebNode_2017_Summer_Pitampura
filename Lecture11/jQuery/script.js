/**
 * Created by championswimmer on 30/06/17.
 */


$(function () {

  let div2 = $('#div2')
  let div1 = $('#div1');
  //console.log(div2.text());
  div2.text('Some Other Replacement Text')
  console.log(div1.html());

  div1.css('color', 'red')
  console.log(div1.attr('class'));
  div1.attr('id', 'divx');




});