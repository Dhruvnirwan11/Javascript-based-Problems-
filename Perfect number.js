// Check if a number is a perfect number.?

let num=8128
let divisor
let sum=0
for(let i=1;i<=num-1;i++){
        divisor=(num%i)
        if(divisor===0){
            sum+=i
        }
}
 console.log(sum===num?"This is perfect no.":"This is not a Perfect number")
