package com.tests;

import org.testng.annotations.BeforeMethod;

import com.pages.SignupPage;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterMethod;

public class BaseTest {
	
	public static final ThreadLocal<WebDriver> driver = new ThreadLocal<>();
	
	public static WebDriver getDriver() {
		return driver.get();
	}
	
	SignupPage objsignupPage;
	
  @BeforeMethod
  public void beforeMethod() {
	  driver.set(new ChromeDriver());
	  driver.get().manage().window().maximize();
	  driver.get().get("https://automationexercise.com/");
	  
	  objsignupPage = new SignupPage(getDriver());
	  
  }

  @AfterMethod
  public void afterMethod() {
//	  driver.get().quit();
  }

}
