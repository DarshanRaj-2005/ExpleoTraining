package com.actions;

import org.openqa.selenium.WebDriver;

import com.pages.LoginPage;

public class LoginAction {

	LoginPage page;

	public LoginAction(WebDriver driver) {

		page = new LoginPage(driver);
	}

	public void login(String email, String password) {

		page.email.sendKeys(email);

		page.password.sendKeys(password);

		page.loginButton.click();
	}
}
