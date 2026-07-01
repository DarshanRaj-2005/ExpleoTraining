package assesment03;

import java.util.Scanner;

/*Given a string, return a string length 2 made of its first 2 character. If the string length is less than 2, use '@' 
for the missing chars. 
Sample Input1: 
Hello 
Sample Output1: 
He */

public class Prob_002 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		System.out.println("Enter a String:");
		String word = sc.nextLine();
		
		if(word.length() >= 2) {
			System.out.println(word.substring(0,2));
		}
		else if(word.length() == 1) {
			System.out.println(word.charAt(0) + "@");
		}
		else {
			System.out.println("@@");
		}
		sc.close();
	}
}
