// Reverse the sign of a number?
let a = 6;
a = a - 2 * a;
console.log(a);

//  very good

// Find the remainder without %.?
// only well performed for normal cases but some cases got this wrong.
let num = 43;
let num2 = 7;
 let quetient = parseFloat((num/num2).toFixed(1))
     let quetient_integers =Math.floor(quetient)
     let remainder = Math.round((quetient-quetient_integers)*7)
     console.log(remainder)

// better approach for this (by Formula)
// divident = (divisor*queient) +remainder
 let divisor = 3
 let divident =15
 let divide_quetient = Math.floor(divident/divisor)
 let remainder_answer = divident - (divisor*divide_quetient)
 console.log(remainder_answer)
 


