// Inline comment
/*multiline comment*/

// Snake Case (Old)
var user_email = "sanravijith@gmail.com";

// Snake Case Capital for Constant Values
var APP_URL = "http://127.0.0.1:5500/";

// Camel Case (New Standard)
var userEmail = "sanravijith@gmail.com";

// Pascal Case (Not Commonly Used)
var UserEmail = "sanravijith@gmail.com";

//variable declaration with var

// ES6 (2015)
// Can be scoped local/function wise
//variable declaration with let

//Local Scoping
{
  var message = "I'm a var Variable";
  let message2 = "Hello let Variable";
  //variable declaration with const
  const message3 = "Hello Const Variable"; // Cannot re-assign a Const Value to message3
  // console.log("LOG: ", message3);
  // console.log("LOG: ", message2);
  // message2 = "Hello let Variable2";
  // console.log("LOG2: ", message2);
}

//Functional Block
function myFunction() {
  let myVariable = 5000;
  // console.log("LOG2:", message);
  return myVariable;
}

// Conditional Block
if (true) {
  let message2 = "i'm blocked";
  // console.log("If ", message);

  var message = "I'm Redeclared var Variable";
  // console.log("If ", message);
}

//Later Initialization
message = "Hello Sandun!";

//message3;

//console.log("LOG: ", message);

// console.log("LOG1 ", myFunction());

// myFunction();

// Re-declaration
// message = "Hello Sandun2! message";
// console.log("LOG3:", message);

// Cannot declare variables using below keywords
// var import = 3000;
// console.log(message);
/*
break: Terminates the current loop or switch statement.
case: Specifies a block of code in a switch statement.
catch: Handles errors in try...catch blocks.
class: Declares a class (introduced in ES6).
const: Declares a read-only variable.
continue: Skips the current iteration in loops.
debugger: Invokes any available debugging functionality.
default: Specifies the default block in a switch statement.
delete: Removes a property from an object.
do: Used with while for do...while loops.
else: Specifies an alternative block of code in if...else statements.
export: Exports functions, objects, or primitives from a module.
extends: Creates a class that is a child of another class.
finally: Executes code after try...catch regardless of the outcome.
if: Executes a block of code based on a condition.
import: Imports functions, objects, or primitives from another module.
in: Checks if a property exists in an object.
instanceof: Tests whether an object is an instance of a specific constructor.
new: Creates an instance of an object.
return: Exits a function and optionally returns a value.
super: Refers to the parent class in class declarations.
switch: Executes different blocks of code based on conditions.
this: Refers to the current context object.
throw: Throws a custom error.
try: Defines a block of code to test for errors.
typeof: Returns a string indicating the type of a variable.
var: Declares a variable.
void: Discards the return value of an expression.
while: Creates a loop that runs as long as a condition is true.
with: Extends the scope chain for a statement (usage is discouraged).
yield: Pauses and resumes a generator function.
*/
