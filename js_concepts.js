//////////////////////////////////////////////////////
// Operators
//////////////////////////////////////////////////////

// Looks fairly similar to Ruby (besides increment/ decrement)
// *
// **
// /
// +
// -
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

// Looks similar to Ruby

// ==, ===, !=, !==, >, <, >=, <=

//////////////////////////////////////////////////////
// Conditionals
//////////////////////////////////////////////////////

var time = 10

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

// Constructor function to create objects of 'type' Person
// Note capital letter in function name
function Person(first, last, age) {
  // add properties
  this.firstName = first;  // 'this' is the object that 'owns the code'
  this.lastName = last;    // 'this' when used in an object is the object itself
  this.age = age;

  // add a method
  this.hello = function() {
    return 'Hello, my name is ' + this.firstName;
  };
}

// creating a new Person object
var dave = new Person('Dave', 'Smith', 25);

// can access the properties of that object
dave.age;
// > 25

// can access methods of that object
dave.hello();
// > 'Hello, my name is Dave'

// can add new properties to a specific object (dave, not Person)
dave.city = 'London';

// can add new methods to a specific object (dave, not Person)
dave.sentence = function() {
  return 'This is ' + this.firstName + '. They live in ' + this.city;
}

dave.sentence();
// > 'This is Dave. They live in London'

// can add new properties/ methods to the object 'type' using prototype
Person.prototype.nationality = 'British';

Person.prototype.fullName = function() {
  return this.firstName + ' ' + this.lastName;
};

dave.nationality;
// > 'English'

dave.fullName;
// > 'Dave Smith'

// New objects of the type Person will have this property
var mo = new Person('Mo', 'Farah', 36);
mo.nationality;
// > 'British'

// a way of adding multiple methods at once using prototype

Person.prototype = {
  eat: function(food) {
    'Is eating ' + food
  },

  think: function() {
    this.firstName + ' is thinking'
  }
}

//////////////////////////////////////////////////////
// Loops
//////////////////////////////////////////////////////

// While loops
var i = 1;

while (i <= 10) {
  console.log(i);
  i++;
}

// For loops

for (i = 1; i <= 10; i++) {
  console.log(i);
}

//////////////////////////////////////////////////////
// Functions (instead of blocks)
//////////////////////////////////////////////////////

// forEach, similar to .each iterator in Ruby
var array = [1, 2, 3, 4, 5];

array.forEach(function(element) {
  console.log(element);
});

//////////////////////////////////////////////////////
// Using arrays
//////////////////////////////////////////////////////

var array = [];

array.push('Pomodoro');

array[0] == 'Pomodoro';
// > true

// more array methods:
// https://www.w3schools.com/jsref/jsref_obj_array.asp

//////////////////////////////////////////////////////
// Using dictionaries (instead of hashes)
//////////////////////////////////////////////////////

// new dictionary
var dictionary = {
  name: 'Dave',
  'surname': 'Smith',
  age: 25
};

// adding to dictionaries
// can be dynamically named
dictionary['city'] = 'London';

// alt
dictionary.nationality = 'British';

//////////////////////////////////////////////////////
// Printing
//////////////////////////////////////////////////////

console.log('Hello world');

//////////////////////////////////////////////////////
// String interpolation
//////////////////////////////////////////////////////

var y = 5;

console.log('I have ' + y + ' cats');
