// A
// B C
// D E F
// G H I J
// K L M N O
let count=0
let num=6;
for(let i=1;i<=6;i++){
  let row=""
  for(let j=1;j<=i;j++){
    count+=1
    row+=String.fromCharCode(64+count)+" "
  }
  console.log(row)
}