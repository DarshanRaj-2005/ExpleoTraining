package com.actions;

import org.openqa.selenium.WebDriver;

import com.pages.SearchPage;

public class SearchAction {
	
	WebDriver driver ;
	
	SearchPage search;
	
	public SearchAction(WebDriver driver) {
		this.driver = driver;
		search = new SearchPage(driver);
	}
	
	public void searchClick() {
		search.searchBar.click();
	}

}
