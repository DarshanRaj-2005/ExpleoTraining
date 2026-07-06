Feature: Register the application

Background:
    Given User Navigate to the application
    And user click on the my account link

Scenario: Valid Register
    And user click on the Register link
    And user enters the valid register details 

    |firstname|lastname|email                 |telephone |password|confirmpassword|
    |dharshan |raj     |dharshan7857@gmail.com|1234567890|1234    |1234           |
    
    # And user enter valid firstname as "dharshan"
    # And user enter valid lastname as "raj"
    # And user enter valid email as "dharshan256575432450@gmail.com"
    # And user enter valid telephone as "1234567890"
    # And user enter password as "1234"
    # And user enter confirm password as "1234"
    And user check privacy and policy
    When user click on the continue button
    Then register should be success