//Find largest/smallest in an array.

public class Problem6{
    public static void main(String [] args){

        String a = "1,2,3,4,5,6";
        String[] arr = a.split(",");

        int[] array = new int[arr.length];

        for(int i=0 ; i <arr.length;i++) {
            array[i] = Integer.parseInt(arr[i]);
        }

        int max =array[0];
        int min =array[0];

        for(int i= 1 ;i < array.length;i++){
            if(array[i] > max){
                max = array[i];
            }
            else if(array[i] < min){
                min = array[i];
            }

        }
        System.out.println("Max value is "+max);
        System.out.println("Min value is "+min);
    }
}