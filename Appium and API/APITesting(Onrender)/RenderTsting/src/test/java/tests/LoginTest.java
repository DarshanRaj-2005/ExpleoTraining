package tests;

import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;
import base.BaseApi;
import io.restassured.http.ContentType;
import payloads.PayloadManager;
import endPoint.EndPoint;
import static io.restassured.RestAssured.given;

public class LoginTest extends BaseApi{
	
	
	@DataProvider(name = "loginData")
	public static Object[][] loginData() {
		return new Object[][] {
			{"ad@gmail.com","123"},
			{"sam@gmail.com","1234"},
			{"",""}
		};
	}
	
	@Test
	public static void loginTest() {
		given()
		    .contentType(ContentType.JSON)
		    .body(PayloadManager.loginPayload("sam@gmail.com","123")).
		when()
		    .post(EndPoint.USER+EndPoint.LOGIN).
		then()
	    .statusCode(201);	
	}
	
	@Test(dataProvider = "loginData")
	public static void invalidEmailloginTest(String email,String password) {
		given()
		    .contentType(ContentType.JSON)
		    .body(PayloadManager.loginPayload(email,password)).
		when()
		    .post(EndPoint.USER+EndPoint.LOGIN).
		then()
	    .statusCode(400);	
	}
}
