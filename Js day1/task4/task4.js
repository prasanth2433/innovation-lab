const num1 = parseFloat(prompt("Enter the first number:"));
const num2 = parseFloat(prompt("Enter the second number:"));
const sum = num1 + num2;
const difference = num1 - num2;
const product = num1 * num2;
const quotient;
const remainder;

if (num2 !== 0) {
  quotient = num1 / num2;
  remainder = num1 % num2;
} else {
  quotient = "Cannot divide by zero";
  remainder = "Cannot divide by zero";
}

console.log("Sum: " + sum);
console.log("Difference: " + difference);
console.log("Product: " + product);
console.log("Quotient: " + quotient);
console.log("Remainder: " + remainder);
