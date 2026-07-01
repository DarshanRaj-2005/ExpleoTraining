package com.pages;

import java.time.Duration;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

public class SignupPage extends BasePage {
	
	public WebDriver driver;
	public WebDriverWait wait;
	
	public SignupPage(WebDriver driver){
		super(driver);
		this.wait = new WebDriverWait(driver,Duration.ofSeconds(30));
	}
	 
	
	@FindBy(xpath="//*[@id=\"header\"]/div/div/div/div[2]/div/ul/li[4]/a")
	public WebElement loginBtn;
	
	@FindBy(name="name")
	public WebElement username;
	
	@FindBy(xpath="//*[@id=\"form\"]/div/div/div[3]/div/form/input[3]")
	public WebElement email;
	
	@FindBy(xpath="//*[@id=\"form\"]/div/div/div[3]/div/form/button")
	public WebElement signupBtn;
	
	@FindBy(id="password")
	public WebElement password;
	
	@FindBy(id="first_name")
	public WebElement first_name;
	
	@FindBy(id="last_name")
	public WebElement last_name;
	
	@FindBy(id="company")
	public WebElement company;
	
	@FindBy(id="address1")
	public WebElement address1;
	
	@FindBy(xpath="//*[@id=\"country\"]")
	public WebElement country;
	
	@FindBy(id="state")
	public WebElement state;
	
	@FindBy(id="city")
	public WebElement city;
	
	@FindBy(id="zipcode")
	public WebElement zipcode;
	
	@FindBy(id="mobile_number")
	public WebElement mobile_number;
	
	@FindBy(xpath="//*[@id=\"form\"]/div/div/div/div/form/button")
	public WebElement createacc;
	
	@FindBy(xpath="//*[@id=\"form\"]/div/div/div/h2/b")
	public WebElement message;
	
	@FindBy(xpath="//*[@id=\"form\"]/div/div/div[1]/div/form/input[2]")
	public WebElement lem;
	
	@FindBy(xpath="//*[@id=\"form\"]/div/div/div[1]/div/form/input[3]")
	public WebElement lp;
	
	@FindBy(xpath="//*[@id=\"form\"]/div/div/div[1]/div/form/button")
	public WebElement btn;
	
	@FindBy(xpath="//*[@id=\"form\"]/div/div/div[3]/div/form/p")
	public WebElement ermessage;
	
	
	
	public void loginAction() {
		wait.until(ExpectedConditions.elementToBeClickable(loginBtn));
		loginBtn.click();
	}
	
	public void usernameAction(String user) {
		wait.until(ExpectedConditions.visibilityOf(username));
		username.sendKeys(user);
	}
	
	public void emailAction(String emai) {
		wait.until(ExpectedConditions.elementToBeClickable(email));
		email.sendKeys(emai);
	}
	
	public void signupAction() {
		wait.until(ExpectedConditions.elementToBeClickable(signupBtn));
		signupBtn.click();
	}
	
	public void passwordAction(String passwor) {
		wait.until(ExpectedConditions.visibilityOf(password));
		password.sendKeys(passwor);
	}
	
	public void firstnameAction(String fn) {
		wait.until(ExpectedConditions.visibilityOf(first_name));
		first_name.sendKeys(fn);
	}
	public void lastnameAction(String ln) {
		wait.until(ExpectedConditions.visibilityOf(last_name));
		last_name.sendKeys(ln);
	}
	public void companyAction(String com) {
		wait.until(ExpectedConditions.visibilityOf(company));
		company.sendKeys(com);
	}
	public void address1Action(String add) {
		wait.until(ExpectedConditions.visibilityOf(address1));
		address1.sendKeys(add);
	}
	
	public void countryAction(String con) {
		wait.until(ExpectedConditions.visibilityOf(country));
		Select select = new Select(country);
		select.selectByVisibleText(con);
	}
	public void stateAction(String stae) {
		wait.until(ExpectedConditions.visibilityOf(state));
		state.sendKeys(stae);
	}
	public void cityAction(String cit) {
		wait.until(ExpectedConditions.visibilityOf(city));
		city.sendKeys(cit);
	}
	public void zipcodeAction(String zipcod) {
		wait.until(ExpectedConditions.visibilityOf(zipcode));
		zipcode.sendKeys(zipcod);
	}
	public void mobnumAction(String mn) {
		wait.until(ExpectedConditions.visibilityOf(mobile_number));
		mobile_number.sendKeys(mn);
	}
	
	public void createacc() {
		createacc.click();
	}
	
	public String mess() {
		wait.until(ExpectedConditions.visibilityOf(message));
		return message.getText();
	}
	
	public String errormessage() {
		return ermessage.getText();
	}

	
	public void login(String userame, String email, String password, String firstname, String lastname, String company, String address1, String country, String state, String city, String zipcode, String mobilenumber) {
		loginAction();
		usernameAction(userame);
		emailAction(email);
		signupAction();
		passwordAction(password);
		firstnameAction(firstname);
		lastnameAction(lastname);
		companyAction(company);
		address1Action(address1);
		countryAction(country);
		stateAction(state);
		cityAction(city);
		zipcodeAction(zipcode);
		mobnumAction(mobilenumber);
		createacc();
	}

	public void logIn(String strLoginEmail, String strLoginPassword) {

	    WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));

	    wait.until(ExpectedConditions.elementToBeClickable(loginBtn)).click();

	    wait.until(ExpectedConditions.visibilityOf(lem)).sendKeys(strLoginEmail);
	    lp.sendKeys(strLoginPassword);

	    wait.until(ExpectedConditions.elementToBeClickable(btn)).click();
	}
}



