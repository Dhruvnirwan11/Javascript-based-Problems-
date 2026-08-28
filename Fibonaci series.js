// Print the Fibonacci series.?
let count=0;
let first=0
let second=1
console.log(`${first}
${second}`  )

for(let i=1;i<=10;i++){

   
    count= first+second
     console.log(count)
    first=second
    second=count
}