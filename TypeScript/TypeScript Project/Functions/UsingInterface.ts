interface Shape {
    name : string
    area() : void
}

class sqaure implements Shape {
    public a = 4
    name : string
    constructor(name:string){
        this.name = name
    }
    area(): void {
        console.log("The Name of the shape is",this.name)
        console.log("The Area of ",Math.round(Math.PI*(this.a**2)))
    }
}

let obj1 = new sqaure("square")
obj1.area()

