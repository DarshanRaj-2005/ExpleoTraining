Feature: User Authentication tests

Background: 
    Given User Navigate to the website
    And user click on my account link
    And user click on the login link

Scenario Outline: Valid Login
    And user enter valid username as "<Header1>"
    And user enter valid password as "<Header2>"
    When user click on the login button
    Then login should be success

Examples:
    | Header1             | Header2   |
    | darshan10@gmail.com | darshan@12 |
    | darshan3@gmail.com  | darshan10  |

Scenario: Invalid Login
    And user enter invalid username as "<Header1>"
    And user enter invalid password as "<Header2>"
    When user click on the login button
    Then login should not be success

Examples:
    | Header1             | Header2 |
    | darshan3@gmail.com  | 1234     |
    | darshan10@gmail.com | 1234     |
