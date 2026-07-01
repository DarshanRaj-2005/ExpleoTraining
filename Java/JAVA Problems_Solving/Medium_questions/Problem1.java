//Count vowels and consonants in a string.

public class Problem1{
    public static void main(String[] args) {
        String a = "AbeIocdsUTX";
        String new_a = a.toLowerCase();
        int vc=0, cc=0;
        for(int i=0; i<a.length(); i++){
            if(new_a.charAt(i) == ('a')||
            new_a.charAt(i) == ('e')||
            new_a.charAt(i) == ('i')||
            new_a.charAt(i) == ('o')||
            new_a.charAt(i) == ('u')){
                vc++;
            }
            else{
                cc++;
            }
        }
        System.out.println("Vowel Count is :"+vc);
        System.out.println("Consonats Count is :"+cc);
    }
}