//Check if a number is prime.

public class Problem4{
    public static void main(String[] args) {
        int a = 179, flag =0;

        for(int i=2;i<a/2;i++){
            if(a % i == 0){
                flag = 1;
            }
        }
        if(flag == 0) {
            System.out.println("It is Prime");
        }else{
            System.out.println("It is Not a Prime");
        }
    }
}