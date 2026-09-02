
// 6 Piramid

let num=10
for (let i = 1; i <= num; i++) {
  let row = "";
  for (let k = 1; k <= num - i; k++) {
    row += " ";
  }
  for (let j = 1; j <= 2 * i - 1; j++) {
    row += "*";
  }
  console.log(row);
}