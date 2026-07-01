package com.tests;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.testng.Assert;
import org.testng.annotations.Listeners;
import org.testng.annotations.Test;

import com.utils.Excelutil;

@Listeners(com.tests.ListenerClass.class)
public class SignupTest extends BaseTest {

	private static final Logger log = LogManager.getLogger(SignupTest.class);

	@Test(dataProvider = "validData", dataProviderClass = Excelutil.class)
	public void loginTest(String username, String password, String email) {
		objsignupPage.login(username, email, password, "darshan", "raj", "Expleo", "Salem,TamilNadu", "India",
				"tamilnadu", "salem", "123456", "1234567890");

		String mess = objsignupPage.mess().trim();

		Assert.assertTrue(mess.contains("ACCOUNT CREATED!"));
		log.info("Account Created..");
	}

	@Test(priority = 2, dataProvider = "invalidData", dataProviderClass = Excelutil.class)
	public void invalidTest(String name, String email, String password) {

		objsignupPage.login(name, email, password, "darshan", "raj", "Expleo", "Salem,TamilNadu", "India", "tamilnadu",
				"salem", "123456", "1234567890");
		String mess = objsignupPage.errormessage().trim();

		Assert.assertTrue(mess.contains("Email Address already exist!"));
		log.info("Account not created");

	}

	@Test(priority = 3)
	public void validLoginTest() {

		String email = "existing_user@gmail.com";
		String password = "dharshan@2004";

		objsignupPage.logIn(email, password);

	}

	@Test(priority = 4)
	public void invalidLoginTest() {

		String email = "dhar@gmail.com";
		String password = "dharshan123";

		objsignupPage.logIn(email, password);
	}
}
