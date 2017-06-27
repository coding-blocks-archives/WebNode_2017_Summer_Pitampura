/**
 * Created by championswimmer on 27/06/17.
 */

function Shape (edges, faces) {
  this.edges = edges
  this.faces = faces
  var a = 10;
}
function gefs () {
  return this.edges + this.faces;
}
Shape.prototype.getEdgeFaceSum = gefs

var cube = new Shape(12,6);
var square = new Shape(4,1);

var triangle = Object.create(Shape.prototype)