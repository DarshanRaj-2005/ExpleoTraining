package com.stepDefinitions;

import java.util.Map;

import org.testng.Assert;

import com.actions.AddressAction;
import com.actions.LoginAction;
import com.utils.Hooks;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class AddressStepDefinition {

	LoginAction loginAction;
	AddressAction addressAction;

	@Given("the user is on login page")
	public void the_user_is_on_login_page() {

		Hooks.driver.get("https://tutorialsninja.com/demo/index.php?route=account/login");
	}

	@When("the user enters valid email and password")
	public void the_user_enters_valid_email_and_password() {

		loginAction = new LoginAction(Hooks.driver);

		loginAction.login("darshan100@gmail.com", "12345");
	}

	@And("the user clicks login button")
	public void the_user_clicks_login_button() {

		System.out.println("Login completed");
	}

	@And("the user navigates to add new address page")
	public void the_user_navigates_to_add_new_address_page() {

		addressAction = new AddressAction(Hooks.driver);

		addressAction.navigateToAddressPage();
	}

	@And("the user enters address details")
	public void the_user_enters_address_details(DataTable dataTable) {

		Map<String, String> data = dataTable.asMap(String.class, String.class);

		addressAction.enterAddressDetails(data.get("firstName"), data.get("lastName"), data.get("address1"),
				data.get("city"), data.get("postCode"), data.get("country"), data.get("region"));
	}

	@And("the user clicks continue button")
	public void the_user_clicks_continue_button() {

		addressAction.clickContinue();
	}

	@Then("the address should be added successfully")
	public void the_address_should_be_added_successfully() {

		Assert.assertTrue(addressAction.verifySuccessMessage());
	}
}
