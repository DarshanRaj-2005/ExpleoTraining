package assesment03;

import java.util.Scanner;

/*. Create an abstract base class BankTransactionException that extends Exception with a constructor accepting 
a message and an error code (int). 
2. Create three subclasses: InsufficientFundsException (includes double shortfall field), InvalidAccountException 
(includes String accountId field), and TransactionLimitException (includes double limit field). 
3. Create a class TransactionValidator with a static method validateTransaction(String accountId, double balance, 
double amount, double dailyLimit) that throws the appropriate exception for each violation. 
4. In the main method, call validateTransaction() with at least three different test scenarios — one for each 
exception type — and handle each in a separate catch block, printing the exception message and error code. 
5. Use a finally block to print 'Validation complete.' after each transaction attempt. */

abstract class BankTransactionException extends Exception {
	int errorcode;
	
	BankTransactionException(String message, int errorcode) {
		super(message);
		this.errorcode = errorcode;
	}
	
	public int geterrorcode() {
		return errorcode;
	}	
}

class  InsufficientFundsException extends BankTransactionException {
	double shortfall;
	
	InsufficientFundsException(String message,int errorcode,double shortfall) {
		super(message,errorcode);
		this.shortfall = shortfall;
	}
	
	public double getshortfall() {
		return shortfall;
	}
	
}

class InvalidAccountException extends BankTransactionException {
	String accountid;
	
	InvalidAccountException(String message,int errorcode,String accountid) {
		super(message,errorcode);
		this.accountid = accountid;
	}
	
	public String getaccountid() {
		return accountid;
	}
}
class TransactionLimitException extends BankTransactionException{
	double limit;
	
	TransactionLimitException(String message,int errorcode,double limit) {
		super(message,errorcode);
		this.limit = limit;
	}
	
	public double getlimit() {
		return limit;
	}
}

class TransactionValidator {
	public static void validateTransaction(String accountId, double balance, 
			double amount, double dailyLimit) throws BankTransactionException {
		if (accountId == null || accountId.isEmpty()) {
			throw new InvalidAccountException("Account ID cannot be empty",1001,accountId);
		}
		if (amount > balance) {
			double shortfall = amount - balance;
			throw new InsufficientFundsException("Insufficient fund",1002,shortfall);
		}
		if (amount > dailyLimit) {
			throw new InsufficientFundsException("Insufficient Limit",1003,dailyLimit);
		}
	}
}
public class Prob_003 {

	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		
		System.out.println("Enter account id: ");
		String accountid = sc.nextLine();
		System.out.println("Enter balance: ");
		double balance = sc.nextDouble();
		System.out.println("Enter amount: ");
		double amount = sc.nextInt();
		System.out.println("Enter limit: ");
		double limit = sc.nextInt();
		
		TransactionValidator t = new TransactionValidator();
		try {
			t.validateTransaction(accountid,balance,amount,limit);
		} catch (BankTransactionException e) {
			e.printStackTrace();
		}
		sc.close();
	}
}
