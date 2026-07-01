console.log("Without Optional:",cal(3,5))
console.log("With Optional:",cal(3,5,8))
function cal(num1:number,num2:number,num3?:number){
    if(num3 != undefined) {
        return num1 + num2 + num3
    }
    return num1 + num2
}