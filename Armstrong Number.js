// Check if a number is an Armstrong number?

let original = 153;
let num = original;
let num2 = num;
let count = 0;
let digit;
let sum = 0;
while (num !== 0) {
  num = Math.floor(num / 10);
  count += 1;
}
while (num2 !== 0) {
  digit = num2 % 10;
  sum = sum + digit ** count;
  num2 = Math.floor(num2 / 10);
}
console.log(
  original === sum ? "This is armstrong no" : "this is not a armstrong no.",
);
