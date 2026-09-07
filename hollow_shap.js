// Straight
let num3 = 10;
let count = 0;
for (let i = 1; i <= num3; i++) {
  let row = "";
  for (let j = 1; j <=i; j++) {
    count += 1;
    row += count + " ";
  }
  console.log(row);
}

// Hollow Rectangle
for(let i=1;i<=4;i++){
  let row=""
  for(let j=1;j<=5;j++){
    if((2<=i &&3>=i) && (j>=2 && j<=4)){
      row+=" "+" "
    }
    else{
      row+="*"+" "
    }
  }
   console.log(row)
}
