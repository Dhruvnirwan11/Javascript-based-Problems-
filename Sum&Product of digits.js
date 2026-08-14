// Find the sum of digits.?

let num = 4444748;
let add = 0;
let num2;
while (num !== 0) {
  num2 = num % 10;
  add += num2;
  num = Math.floor(num / 10);
}
console.log(add);

// Find the product of digits.?

let num1 = 123456;
let mul = 1;
let num3;
while (num1 !== 0) {
  num3 = num1 % 10;
  mul *= num3;
  num1 = Math.floor(num1 / 10);
}
console.log(mul);
