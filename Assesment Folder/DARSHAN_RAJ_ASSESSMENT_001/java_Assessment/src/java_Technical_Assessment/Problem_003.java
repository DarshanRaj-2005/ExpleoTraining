package java_Technical_Assessment;

import java.util.*;

public class Problem_003 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);

		System.out.print("Enter a positive integer: ");
		int number = sc.nextInt();

		int sum = 0;

		for (int i = 1; i < number; i++) {
			if (number % i == 0) {
				sum += i;
			}
		}

		if (sum == number) {
			System.out.println("The given number is perfect");
		} else {
			System.out.println("The given number is not perfect");
		}
		sc.close();
	}
}