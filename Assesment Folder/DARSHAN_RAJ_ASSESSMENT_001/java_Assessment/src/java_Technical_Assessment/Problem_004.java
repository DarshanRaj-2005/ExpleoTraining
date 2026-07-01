package java_Technical_Assessment;

import java.util.*;

public class Problem_004 {

	public static void main(String[] args) {

		Scanner scanner = new Scanner(System.in);

		System.out.print("Enter starting number: ");
		int start = scanner.nextInt();

		System.out.print("Enter ending number: ");
		int end = scanner.nextInt();
		int count = 0;
		for (int i = start; i <= end; i++) {
			count++;
			if (count == 5) {
				System.out.print("ding ");
			} else if (count == 10) {
				System.out.print("dong ");
			} else {
				System.out.print(i + " ");
			}
		}
		scanner.close();
	}
}
