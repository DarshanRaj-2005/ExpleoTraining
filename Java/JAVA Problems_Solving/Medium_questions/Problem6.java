//Create a class `Car` with attributes and methods; create objects and display info.

class Car{
    String name;
    String model;
    int price;
    String color;

    void carDetials(String name,String model,int price, String color){
        this.name = name;
        this.model =model;
        this.price = price;
        this.color =color;
    }

    void display(){
        System.out.println(name);
        System.out.println(model);
        System.out.println(price);
        System.out.println(color);
    }
}

public class Problem6{
    public static void main(String[] args) {
        Car c = new Car();
        c.carDetials("BMW","M2",400000,"Black");
        c.display();
    }
}