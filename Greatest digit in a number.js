// Find the greatest digit in a number. ?

// let num = 4568530;
// let digit;
// let largest;
// let digit2 = 0;
// digit = num % 10;

// do {
//   if (digit >= digit2) {
//     largest = digit;
//   } else {
//     digit = digit2;
//   }
//   num = Math.floor(num / 10);
//   digit2 = num % 10;
// } while (num !== 0);
// console.log(`Largest digit is ${largest}`);

// Find the smallest digit in a number. ?
//  This is the efficient way.

let num = 456810535;
let digit;
let result;
let smallest=num%10;
num= Math.floor(num/10)

do{
    digit=num%10
    if(smallest<digit){
        result=smallest
    }
    else{
        smallest=digit
    }
    num=Math.floor(num/10)

}while(num!==0)
 console.log(result)
 
// efficient way to right this




