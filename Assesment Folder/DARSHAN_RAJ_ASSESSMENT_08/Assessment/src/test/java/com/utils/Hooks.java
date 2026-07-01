package com.utils;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import java.time.Duration;

public class Hooks {
    
    public static WebDriver driver;

    @Before
    public void setup() {
        driver = new ChromeDriver();
        driver.get("https://tutorialsninja.com/demo");
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
    }
    
    @After
    public void teardown() {
        if (driver != null) {
           driver.quit();
        }
    }
}




