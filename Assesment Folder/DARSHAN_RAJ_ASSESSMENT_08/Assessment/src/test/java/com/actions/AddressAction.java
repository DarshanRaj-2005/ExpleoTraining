package com.actions;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.Select;
import com.pages.AddressPage;

public class AddressAction {

	AddressPage page;

	public AddressAction(WebDriver driver) {

		page = new AddressPage(driver);
	}

	public void navigateToAddressPage() {

	    page.addressBook.click();

	    try {
	        Thread.sleep(2000);
	    } catch (InterruptedException e) {
	        e.printStackTrace();
	    }

	    page.newAddress.click();
	}

	public void enterAddressDetails(String firstName, String lastName, String address1, String city, String postCode,
			String country, String region) {

		page.firstName.sendKeys(firstName);

		page.lastName.sendKeys(lastName);

		page.address1.sendKeys(address1);

		page.city.sendKeys(city);

		page.postCode.sendKeys(postCode);

		Select countryDropdown = new Select(page.country);

		countryDropdown.selectByVisibleText(country);

		Select regionDropdown = new Select(page.region);

		regionDropdown.selectByVisibleText(region);
	}

	public void clickContinue() {

		page.continueButton.click();
	}

	public boolean verifySuccessMessage() {

		return page.successMessage.isDisplayed();
	}
}
