package assesment03;

import java.io.*;
import java.util.*;

public class Prob001 {

	public static void main(String[] args) {

		try {
			File file = new File("C:\\Users\\dhars\\Documents\\DARSHAN_RAJ_ASSESSMENT_03\\assesment03\\src\\assesment03\\words");
			Scanner sc = new Scanner(file);

			Map<String, Integer> freq = new HashMap<>();

			while (sc.hasNextLine()) {
				String line = sc.nextLine();
				String[] words = line.split(" ");
				for (String w : words) {
					if (freq.containsKey(w)) {
						freq.put(w, freq.get(w) + 1);
					} else {
						freq.put(w, 1);
					}
				}
			}
			for (String key : freq.keySet()) {
				System.out.println(key + ": " + freq.get(key));
			}

			System.out.println("Unique words: " + freq.size());

			sc.close();
		} catch (FileNotFoundException e) {
			System.out.println("Error: words.txt not found");
		}
	}
}
