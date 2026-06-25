package Appium;
import java.net.URL;
import java.time.Duration;
import org.testng.Assert;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;
import io.appium.java_client.AppiumBy;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.android.options.UiAutomator2Options;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.ExpectedConditions;

public class CallingBala {
	
	AndroidDriver driver;
    WebDriverWait wait;
    
    public void click(By locator) {
        wait.until(ExpectedConditions.visibilityOfElementLocated(locator)).click();
    }
    
    public String getText(By locator) {
    	return wait.until(ExpectedConditions.visibilityOfElementLocated(locator)).getText();
    }
    
    @BeforeTest
    public void beforeTest() throws Exception {
        UiAutomator2Options options = new UiAutomator2Options();
        options.setPlatformName("Android");
        options.setAutomationName("UiAutomator2");
        options.setDeviceName("Android");
        options.setUdid("mvs4gu4tkfytuosw");
        options.setAppPackage("com.android.contacts");
        options.setAppActivity("com.android.contacts.activities.TwelveKeyDialer");
        options.setNoReset(true);
        options.setCapability("skipDeviceInitialization", true);
        options.setCapability("ignoreHiddenApiPolicyError", true);
        options.setCapability("autoGrantPermissions", false);
        options.setCapability("uiautomator2ServerLaunchTimeout", 120000);
        options.setCapability("adbExecTimeout", 120000);
        System.out.println("Starting Appium Session...");

        driver = new AndroidDriver(
                new URL("http://127.0.0.1:4723"),
                options);
        wait = new WebDriverWait(driver,Duration.ofSeconds(15));
        System.out.println("Session Started Successfully");
    }

    @Test
    public void addNum() throws Exception {
        click(AppiumBy.xpath("//android.widget.TextView[@content-desc=\"B​a​l​a​m​u​r​u​g​a​n​K​i​o​t\"]"));
        Thread.sleep(5);
        String res = getText(AppiumBy.xpath("//android.widget.TextView[@text=\"Video call\"]"));
        Assert.assertEquals(res,"Video call");
        Thread.sleep(5000);
        click(AppiumBy.xpath("//android.widget.LinearLayout[@content-desc=\"End\"]/android.widget.ImageView"));
    }
    
    @AfterTest
    public void afterTest() {
        if (driver != null) {
            driver.quit();
        }
    }
}
