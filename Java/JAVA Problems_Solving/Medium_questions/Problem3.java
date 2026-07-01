//Write a method to swap two numbers and return the result.

public class Problem3{

    void swap(int a, int b){
        int temp = a;
        a = b;
        b = temp;
        System.out.print("The value a is "+ a + "  The value b is "+b);
    } 
    public static void main(String[] args) {
        Problem3 p = new Problem3();
        p.swap(10,20);
    }
}