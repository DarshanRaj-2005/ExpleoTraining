//Implement a simple calculator using switch-case.

import java.util.*;

public class Problem5{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = 5, b = 10;
        System.out.println("Enter a Symbol for Calculation(+,-,*,/,%) :");
        char c = sc.next().charAt(0);

        switch(c){

            case '+':
                System.out.print("Addition : "+(a+b));
                break;

            case '-':
                System.out.print("Subraction : "+(a-b));
                break;

            case '*':
                System.out.print("Multiplication : "+(a*b));
                break;

            case '/':
                System.out.print("Division : "+(a/b));
                break;

            case '%':
                System.out.print("Modules : "+(a%b));
                break;
        }
    }
}