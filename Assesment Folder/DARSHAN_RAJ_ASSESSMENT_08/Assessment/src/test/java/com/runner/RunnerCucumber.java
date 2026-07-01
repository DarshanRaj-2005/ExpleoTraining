package com.runner;

import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.cucumber.testng.CucumberOptions;

@CucumberOptions(features = "src\\test\\resources\\features",
                 glue = {"com.stepDefinitions", "com.utils"},
                 plugin = { "pretty", "html:target/cucumber_report.html",
                		 "io.qameta.allure.cucumber7jvm.AllureCucumber7Jvm"})

public class RunnerCucumber extends AbstractTestNGCucumberTests{

}
