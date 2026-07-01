package assesment03;
import java.util.List;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Scanner;

/*Create a class Product with fields productid, productName, productCategory, productPrice, 
productDiscount and productQuantity and store them in any collection structure of your 
choice. 
b. Set productid as the default sorting. 
c. List the Mobiles whose cost is more than 40000  
d. Create a menu driven application to choose an option from given options.*/

class Product implements Comparable<Product>{
	int productid;
	String productName;
	String productcategory;
	double productprice;
	double productdiscount;
	int productquantity;
	
	Product(int productid,String productName,String productcategory
			,double productprice,double productdiscount,int productquantity){
		this.productid = productid;
		this.productName = productName;
		this.productcategory = productcategory;
		this.productprice = productprice;
		this.productdiscount = productdiscount;
		this.productquantity = productquantity;
	}

	@Override
	public int compareTo(Product o) {
		return this.productid - o.productid;
	}
	
	 @Override
	 public String toString() {
	        return productid + " | " + productName + " | " + productcategory +
	               " | Price: " + productprice + " | Discount: " + productdiscount +
	               " | Qty: " + productquantity;
	  }

}
public class Prob004 {

	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		List<Product> products = new ArrayList<>();
		
		Product p = null;
		products.add(new Product(101,"iphone10","Mobile",20000.0,0.2,2));
		products.add(new Product(102,"dell","Laptop",20000.0,0.3,4));
		products.add(new Product(103,"iphone13","Mobile",10000.0,0.5,1));
		products.add(new Product(104,"Lenovo","Laptop",700000.0,0.8,3));
		products.add(new Product(105,"iphone12","Mobile",500000.0,0.5,6));
		
		System.out.println("1. Sort by Id \r\n"
				+ "2. List Mobiles with price more than 40000 \r\n"
				+ "3. Exit \r\n"
				+ "Enter the option for sorting: ");
		int choice = sc.nextInt();
		
		if(choice == 1) {
			Collections.sort(products);
			for(Product p1 : products) {
				System.out.println(p1);
			}
		}
		
		else if(choice == 2) {
			for(Product p1 : products) {
				if(p1.productprice > 40000) {
					System.out.println(p1);
				}
			}
		}
		else if(choice == 3) {
			System.out.println("Thank you!");
		}
		
	}

}
