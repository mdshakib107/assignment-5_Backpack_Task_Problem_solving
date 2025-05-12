/*3.Task: Function Composition
Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.      */


const squareNumber = number => number * number;
const doubleNumber = number => number * 2;
const addFiveWithNumber = number => number + 5;


const threeFunction = number => addFiveWithNumber(doubleNumber(squareNumber(number)));

console.log(threeFunction(3)); 