//Find duplicate elements in an array.

public class Problem4{
    public static void main(String[] args) {
        int[] arr = {2,3,2,4,5};
        for(int i=0;i<arr.length;i++){
            for(int j=i+1;j<arr.length;j++){
                if(arr[i]==arr[j]){
                    System.out.print(arr[j]);
                }
            }
        }
    }
}