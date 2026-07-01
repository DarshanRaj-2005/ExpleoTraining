package java_Technical_Assessment;

import java.util.*;

public class Problem_005 {

	public static void main(String[] args) {

		Scanner scanner = new Scanner(System.in);

		System.out.println("Enter the scores (enter a negative number to stop input):");

		while (true) {
		    int score = scanner.nextInt();

		    if (score < 0) {
		        break;
		    }

		    int result = -1;

		    if (score % 2 == 0)
		        result = Math.max(result, 0);

		    if (score % 2 != 0)
		        result = Math.max(result, 1);

		    if (score % 8 == 0)
		        result = Math.max(result, 2);

		    if (score % 10 == 3)
		        result = Math.max(result, 3);

		    if (score % 9 == 0)
		        result = Math.max(result, 4);

		    System.out.print(result+" ");
		}
		scanner.close();
	}
}
