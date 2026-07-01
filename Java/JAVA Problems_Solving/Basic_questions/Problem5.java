//Reverse a string.

public class Problem5{
    public static void main(String[] args) {
        String a = "HelloWorld";
        String rev = "";
        int len = a.length();
        for(int i= len-1; i >= 0; i--){
            rev = rev + a.charAt(i);
        }  
        System.out.print(rev);
    }
}

/*Easy method using StringBuilder

public class Problem5{
    public static void main(String[] args) {
        StringBuilder a = new StringBuilder("HelloWorld");
        a.reverse();

        System.out.print(a);
    }
}

*/

/*Reverse a Number

public class Problem5{
    public static void main(String[] args) {
        int num = 321,res=0;

        while(num != 0){
        int temp = num % 10;
        res = res * 10 + temp;
        num /= 10; 
        }
        System.out.print(res);
    }
}
*/