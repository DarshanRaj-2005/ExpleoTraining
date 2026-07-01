import readlineSync from "readline-sync";

let num1:number = Number(readlineSync.question("Enter the number1:"))
let num2:number = Number(readlineSync.question("Enter ther number2:"))

if(num1 > 0 && num2> 0) {
    function calculations(num1:number,num2:number) {
        let add = num1 + num2
        let sub = num1 - num2
        let mul = num1 * num2
        let div = 0
        if(num2 != 0) {
            div = num1 / num2
        }

        console.log("Addition:",add)
        console.log("Subraction:",sub)
        console.log("Multiplication:",mul)
        console.log("Division:",div)
    }
    calculations(num1,num2)
}
else{
    console.log("Given numbers are invalid, Give a valid numbers")
}

