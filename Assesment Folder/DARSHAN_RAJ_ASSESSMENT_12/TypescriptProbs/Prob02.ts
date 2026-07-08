import readlineSync from 'readline-sync';

let nm = readlineSync.questionInt("Enter the 5 digit number:")
let rev = 0
function reverse(num : number){
    while(num > 0) {
    let n = num % 10
    rev = rev *10 + n
    num = Math.floor(num/10)
    }
}

if(nm > 9999 && nm <= 99999) {
    reverse(nm)
    console.log("The reversed number is:",rev)
}
else {
    console.log("The number exceeded limit")
}
