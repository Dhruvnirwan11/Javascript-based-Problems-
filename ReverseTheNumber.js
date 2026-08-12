// Reverse a number?

let num = 6798564;
let num2;
let reversed_num;
let result_num = 0;
do {
  num2 = Math.floor(num / 10) * 10;
  reversed_num = num - num2;
  result_num = result_num * 10 + reversed_num;
  num = num2 / 10;
} while (num !== 0);
console.log(result_num);

// one more thing is that if you want the last digit instant then use (num % 10) this gives the last digit instant because it gives remainer after dividing the number with 10 .