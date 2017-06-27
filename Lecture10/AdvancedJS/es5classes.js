/**
 * Created by championswimmer on 27/06/17.
 */

function Person(firstName, lastName) {
  //like public function
  this.getName = function () {
    return this.firstName + " " + this.lastName
  }

  this.getFullName = function () {
    return this.getName() + "(" + getInitials() + ")"
  }

  // like private variables
  var firstInitial = firstName.charAt(0);
  var lastInitial = lastName.charAt(0);

  // like private function
  var getInitials = function () {
    return firstInitial + "." + lastInitial + "."
  }

  //like public variables
  this.firstName = firstName;
  this.lastName = lastName;




}

var p = new Person("John", "Doe")