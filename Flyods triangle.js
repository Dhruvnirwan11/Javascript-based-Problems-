// 8. Floyds triangle
// inverted

let num3 = 10;
let count = 0;
for (let i = 1; i <= num3; i++) {
  let row = "";
  for (let j = 1; j <= num3 + 1 - i; j++) {
    count += 1;
    row += count + " ";
  }
  console.log(row);
}