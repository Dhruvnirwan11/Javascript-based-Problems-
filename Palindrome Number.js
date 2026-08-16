// Check if a number is a palindrome.?

let original = 121;
let num = original;
let digit
let reversed=0
while(num!==0){
    digit= num%10
    reversed = reversed*10 +digit
    num = Math.floor(num/10)

}
if (reversed===original){
    console.log("yes This is palandrome no");
    
}
else{
    console.log("This is not Palandrome")
}