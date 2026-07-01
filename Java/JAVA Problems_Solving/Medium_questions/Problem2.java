//Check Armstrong number.

public class Problem2{
    public static void main(String[] args) {
        String a = "153";
        int len = a.length();

        int num = Integer.valueOf(a);
        int b = num;
        int res=0;
        while(num!=0){
            int temp = num % 10;
            res += Math.pow(temp,len);
            num /= 10;
        }
        if(b == res){
            System.out.print("It is Armstrong Number");
        }
        else{
            System.out.print("It is not a Armstrong Number");
        }
    }
}