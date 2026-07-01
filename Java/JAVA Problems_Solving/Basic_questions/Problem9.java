//Check if a string is a palindrome.

public class Problem9{
    public static void main(String[] args) {
        String a = "madam";
        String rev ="";

        for(int i=0; i<= a.length()-1; i++){
            rev = rev + a.charAt(i);
        }
        if(a.equals(rev)){
            System.out.print("It is a Plaindrome");
        }
        else{
            System.out.print("It is not a Palindrome");
        }
    }
}

//Check if a integer is a palindrome.
/*
public class Problem9{
    public static void main(String[] args) {
        int a = 1221 , b = a, rev = 0;

        while(a!=0){
            int temp = a % 10;
            rev = rev * 10 + temp;
            a /= 10;
        }
        if(b == rev){
            System.out.print("It is a Plaindrome");
        }
        else{
            System.out.print("It is not a Palindrome");
        }
    }
}
*/
