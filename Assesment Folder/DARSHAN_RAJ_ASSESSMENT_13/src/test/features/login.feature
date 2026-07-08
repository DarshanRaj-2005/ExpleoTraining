Feature:Login

Background:
Given the user is on Login page

Scenario Outline: Verify the user can login
When the user enters the email "<email>"
And the user enter the password "<password>"
And the user clicks Log in button
Then the user should be redirected to homepage "<type>" "<message>" 

Examples:
    |type   |email                  |password  |message               |
    |valid  |darshan12345@gmail.com |123456    |darshan12345@gmail.com|
    |invalid|darshan10@gmail.com    |123456    |Login was unsuccessful. Please correct the errors and try again.|


