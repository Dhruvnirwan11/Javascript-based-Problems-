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
