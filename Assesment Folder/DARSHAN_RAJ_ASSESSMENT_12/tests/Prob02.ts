let num = 45667

let rev = 0
while(num > 0) {
    let n = num % 10
    rev = rev *10 + n
    num = Math.floor(num/10)
}

console.log("The reversed number is:",rev)