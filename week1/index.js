const prompt =require('prompt-sync')();
console.log("starting")


const number1 = parseInt(prompt("enter a first number :"));
const number2 = parseInt(prompt("enter a second number :"))
 
// addition of two number //
const sum = number1 + number2;

// display the addition //
console.log('the sum of  '+number1 + 'and ' + number2 +'is:' +sum);

// subtraction of two number //
const subtraction = number1 - number2;

//  display the subtraction //
console.log('the sub of '+number1 + 'and ' + number2 +'is:' +subtraction);

// multiplication of numbers  //
const multiplication = number1 * number2;

// display the subtraction //
console.log('the multi of '+number1 + 'and ' + number2 +'is:' +multiplication);

// Division of numbers  //
const Division= number1 / number2;

//display the Division //
console.log('the division of '+number1 + 'and ' + number2 +'is:' +Division);

