package com.tests;


import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.testng.ITestListener;
import org.testng.ITestResult;

public class ListenerClass implements ITestListener {

	private static final Logger log = LogManager.getLogger(ListenerClass.class);

	public void onTestStart(ITestResult result) {
		log.info("Test Started " + result.getName());
	}

	public void onTestSuccess(ITestResult result) {
		log.info("Test Success " + result.getName());
	}

	public void onTestFailure(ITestResult result) {

		log.error("Failed Test: " + result.getName());
	}

	public void onTestSkipped(ITestResult result) {
		log.info("Skipped Test " + result.getName());
	}
}
