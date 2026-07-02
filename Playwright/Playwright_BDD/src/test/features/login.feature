Feature: User Authentication tests

Background: 
    Given User Navigate to the website
    And user click on my account link
    And user click on the login link

Scenario: Valid Login
    And user enter valid username as "dharshan10@gmail.com"
    And user enter valid password as "1234"
    When user click on the login button
    Then login should be success

Scenario: Invalid Login
    And user enter invalid username as "dharshan@gmail.com"
    And user enter invalid password as "1234"
    When user click on the login button
    Then login should not be success