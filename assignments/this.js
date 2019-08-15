/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Window/Global Object Binding - In the global scope or not inside of a
 *    declared object, the value of "this" defaults to the Window/Global or
 *    Console Object. In "strict mode", "this" on Global scope returns an error.
 *
 * 2. Implicit Binding - When keyword "this" is inside of a declared object,
 *    "this" will be the closest parent object, the object before the dot
 *    notation.
 *
 * 3. New Binding - When an object is created and returned by a constructor
 *    function using the "new" keyword, "this" refers to the instance of that
 *    object.
 *
 * 4. Explicit Binding - Using the call, apply or bind methods, it tells the
 *    function what object to use as "this".
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding

function saySomething(str) {
  console.log(this);
  return str;
}

saySomething('Hello World');

// Principle 2

// code example for Implicit Binding

const person = {
  name: 'John Chaing',
  height: '6 foot 1 inches',
  greet: function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.height} tall.`);
  }
};

person.greet(); // Hello, my name is John Chaing and I am 6 foot 1 inches tall.

// Principle 3

// code example for New Binding

function Animal(dog) {
  this.name = dog.name;
  this.breed = dog.breed;
  this.say = dog.say;
  this.greet = function() {
    console.log(
      `Hello, my name is ${this.name}, I'm a ${this.breed} breed and I say ${this.say}.`
    );
  };
}

const spot = new Animal({
  name: 'Spot',
  breed: 'Terrier',
  say: 'Woof!'
});

const pete = new Animal({
  name: 'Pete',
  breed: 'Pit Bull',
  say: 'Woof woof!'
});

spot.greet(); // Hello, my name is Spot, I'm a Terrier breed and I say Woof!.
pete.greet(); // Hello, my name is Pete, I'm a Pit Bull breed and I say Woof woof!.

// Principle 4

// code example for Explicit Binding
// using the codes from Principle 3

spot.greet.call(pete); // Hello, my name is Pete, I'm a Pit Bull breed and I say Woof woof!.

pete.greet.apply(spot); // Hello, my name is Spot, I'm a Terrier breed and I say Woof!.
