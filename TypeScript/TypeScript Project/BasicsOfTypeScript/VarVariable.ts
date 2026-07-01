//Using var as global
var value1  : number = 10

function myfunc() : void {
    value1 = 20
    console.log("The Value is",value1)
}
myfunc()

//Using var as function scoped

function myfun() : void {
    var value1 = 20
    console.log("The Value is",value1)
}

myfun()

//Using var as block scoped

function fun() : void {
    if(true) {
        var value1 = 20
        console.log("The Value is",value1)
    }
    console.log("The Value is",value1)
}
fun()