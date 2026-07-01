package java_Technical_Assessment;

import java.util.*;

/*No of Participants: 10 
Token Number for 10 participants: 
[1234, 2345, 3456, 4567, 7891, 1000, 1200, 9999, 7777, 1224] 
First Prize is to token: 7891 
Second Prize is to token: 2345 
Third Prize is to token: 1200 */

public class Problem_001 {

	public static void main(String[] args) {

		Scanner sc = new Scanner(System.in);

		System.out.print("No of Participants: ");
		int n = sc.nextInt();

		int[] tokens = new int[n];

		System.out.println("Enter token numbers for " + n + " participants:");
		for (int i = 0; i < n; i++) {
			tokens[i] = sc.nextInt();
		}

		int firstPrize = -1;
		int secondPrize = -1;
		int thirdPrize = -1;

		for (int i = 0; i < n; i++) {
			int token = tokens[i];
			int num = token;
			int sum = 0;

			while (num > 0) {
				sum += num % 10;
				num /= 10;
			}

			if (sum == 7 && firstPrize == -1) {
				firstPrize = tokens[i];
			} else if (sum == 5 && secondPrize == -1) {
				secondPrize = tokens[i];
			} else if (sum == 3 && thirdPrize == -1) {
				thirdPrize = tokens[i];
			}
		}

		sc.close();
	}
}
