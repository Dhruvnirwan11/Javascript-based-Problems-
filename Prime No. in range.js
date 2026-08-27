// Check if a number is prime in range?

let first = 30;
let last = 100;
let prime_count = 0;
let non_prime_count = 0;

for (let i = first; i <= last; i++) {
  if (i === 1) {
    continue;
  }
  for (let j = 2; j <=i; j++) {
    if (i % j === 0) {
      if (i !== j) {
        non_prime_count += 1;
          // console.log("These are non prime no. : "+i+" count is :"+non_prime_count)
        break;

      } else {
        prime_count += 1;

        console.log("prime no. : " + i + "count is " + prime_count);
      }
    }
  }
}
