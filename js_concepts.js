//////////////////////////////////////////////////////
// Operators
//////////////////////////////////////////////////////

// +
// -
// *
// /
// %
// ++ (increment)
// -- (decrement)

//////////////////////////////////////////////////////
// Setting/ redefining variables
//////////////////////////////////////////////////////

var pi = 3.14;
pi = 'Pie!';

var num = 1;
num += 1;
num -= 1;
num *= 10;
num /= 5;

//////////////////////////////////////////////////////
// Booleans
//////////////////////////////////////////////////////

// Pretty much the same

//////////////////////////////////////////////////////
// Conditionals
//////////////////////////////////////////////////////

time = 10

if (time < 10) {
  greeting = 'Good morning';
} else if (time < 17) {
  greeting = 'Good day';
} else {
  greeting = 'Good evening';
}

// Ternary operator
time < 10 ? greeting = 'Good morning' : greeting = 'Good day';

//////////////////////////////////////////////////////
// Functions (instead of methods)
//////////////////////////////////////////////////////

// Note snakecase
function addUp(num1, num2) {
  return num1 + num2; // no implicit return
}

var added = addUp(1, 7);
// added == 8

//////////////////////////////////////////////////////
// Functions (instead of classes)
//////////////////////////////////////////////////////

// Constructor function
// Note capital letter
function Person(first, last, age) {
  this.firstName = first;  // this is the object that 'owns the code'
  this.lastName = last;    // this when used in an object is the object itself
  this.age = age;

  // add a method
  this.hello = function() {
    return 'Hello, my name is ' + this.firstName;
  };
}

// creating a new object of the 'type' Person
dave = new Person('Dave', 'Smith', 25);

// can access the properties of that object
dave.age;
// > 25

// can add new properties to a specific object
dave.city = 'London';

// can add new methods to an object
dave.sentence = function() {
  return 'This is ' + this.firstName + '. They live in ' + this.city;
}

// can add new properties/ methods to the object 'type' using prototype
Person.prototype.nationality = 'English';

Person.prototype.fullName = function() {
  return this.firstName + ' ' + this.lastName;
};

dave.nationality;
// > 'English'

dave.fullName;
// > 'Dave Smith'

//////////////////////////////////////////////////////
// Loops
//////////////////////////////////////////////////////

// While loops
var i = 0;

while (i <= 10) {
  console.log(i);
}

// For loops

for (i = 1; i <= 10; i++) {
  console.log(i);
}

//////////////////////////////////////////////////////
// Functions (instead of blocks)
//////////////////////////////////////////////////////

// forEach, comparable to .each iterator in Ruby for arrays
var array = [1, 2, 3, 4, 5];

array.forEach(function(element) {
  console.log(element);
});

//////////////////////////////////////////////////////
// Using arrays
//////////////////////////////////////////////////////
