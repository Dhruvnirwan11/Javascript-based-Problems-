//  Check whether a number is divisible by 5?
 let dividend = 43
 const divisor = 5  
 const remainder =0
 let quetient = Math.floor(dividend/divisor)
 let result= dividend-(divisor*quetient)
  let divisible = remainder===result
  console.log(`${divisible}`)


//   Check whether it is divisible by both 3 and 5.?
let num = 30
console.log(num%3===0 && num%5===0)