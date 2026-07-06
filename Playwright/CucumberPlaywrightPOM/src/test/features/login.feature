Feature: SauceDemo Login

Background:
Given user is navigated to login page

Scenario: Valid Login
And user enter "valid" credentails
And user clicks login button
Then user should redirected to homepage


Scenario: Invalid Login
And user enters "invalid" credentails
And user clicks login button
Then user should get a error message
