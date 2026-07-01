//Sum of elements in an array.

public class Problem7{
    public static void main(String[] args){
        String a = "5,3,2,6,4,1";
        String[] arr = a.split(",");
        int[] array = new int[arr.length];

        for(int i=0; i<arr.length;i++){
            array[i] = Integer.valueOf(arr[i]);
        }
        int sum = 0;
        for(int i=0;i<array.length;i++){
            sum += array[i];
        }
        System.out.println("Sum of Array Elements: "+sum);

    }
}