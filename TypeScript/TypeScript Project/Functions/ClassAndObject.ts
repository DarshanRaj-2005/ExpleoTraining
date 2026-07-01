class Animal {
    public name = ""
    protected breed = ""
    private color = ""

    constructor(name : string,breed:string) {
        this.name = name
        this.breed = breed
    }

    public setColor(color : string) {
        this.color = color
    }
    public getColor() {
        console.log("The Color of ",this.name," is ",this.color)
    }
    public sound() {
        console.log(this.name,"Barks")
    }

    public breedname() {
        console.log("The breed of ",this.name," is ",this.breed)
    }
}
let obj = new Animal("Dog","Shepard")
obj.breedname()
obj.sound()
obj.setColor("red")
obj.getColor()


