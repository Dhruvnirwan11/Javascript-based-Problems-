// Find the last digit of a number.
let num = 4327;
let new_number = Math.floor(num / 10) * 10;
let result = num - new_number;
console.log(result);

// one more approach for this?
let num2 = 45639;
let new_number2 = Math.floor(num2 / 10);
let decimal_number = num2 / 10;
let result2 = parseFloat((decimal_number - new_number2).toFixed(1)) * 10;
console.log(result2);

// one more approach

let result3 = Math.round((decimal_number % 1) * 10);
console.log(result3);
