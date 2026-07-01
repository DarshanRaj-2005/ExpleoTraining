package com.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class AddressPage {
	WebDriver driver;

	public AddressPage(WebDriver driver) {

		this.driver = driver;

		PageFactory.initElements(driver, this);
	}

	@FindBy(linkText = "Address Book")
	public WebElement addressBook;

	@FindBy(xpath = "//a[contains(text(),'New Address')]")
	public WebElement newAddress;

	@FindBy(name = "firstname")
	public WebElement firstName;

	@FindBy(name = "lastname")
	public WebElement lastName;

	@FindBy(name = "address_1")
	public WebElement address1;

	@FindBy(name = "city")
	public WebElement city;

	@FindBy(name = "postcode")
	public WebElement postCode;

	@FindBy(name = "country_id")
	public WebElement country;

	@FindBy(name = "zone_id")
	public WebElement region;

	@FindBy(xpath = "//input[@value='Continue']")
	public WebElement continueButton;

	@FindBy(xpath = "//div[contains(@class,'alert-success')]")
	public WebElement successMessage;

}
