//Factorial of number

public class Problem3{
    public static void main(String[] args) {
        int a = 10,fact=1;
        for(int i=1;i<a;i++){
            fact = fact * i;
        }
        System.out.println(fact);
    }
}