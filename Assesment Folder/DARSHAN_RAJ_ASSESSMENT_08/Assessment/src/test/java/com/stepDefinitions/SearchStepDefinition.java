package com.stepDefinitions;

import org.testng.Assert;

import com.actions.SearchAction;
import com.pages.SearchPage;
import com.utils.Hooks;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class SearchStepDefinition {

    SearchAction action;
    SearchPage page;

    @Given("the user is on home page")
    public void the_user_is_on_home_page() {

        System.out.println(Hooks.driver.getTitle());
    }

    @When("the user click search bar")
    public void the_user_click_search_bar() {

        page = new SearchPage(Hooks.driver);

        action = new SearchAction(Hooks.driver);

        page.searchBar.click();
    }

    @When("the user enters {string}")
    public void the_user_enters_keyword(String keyword) {

        page = new SearchPage(Hooks.driver);

        page.searchBar.clear();

        page.searchBar.sendKeys(keyword);

        action = new SearchAction(Hooks.driver);

        action.searchClick();
    }

    @Then("the system should check and show the result {string}")
    public void the_system_should_check_and_show_the_result(String result) {
        if(result.equals("contain")) {
	        System.out.println("It have keyword");
	    } else {
	        System.out.println("It does not have keyword");
	    }
    }
}
