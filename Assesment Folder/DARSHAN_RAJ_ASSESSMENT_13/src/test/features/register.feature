Feature:Register

Scenario: Verify the user can successfully register

Given the user is on Register page
When the user enters the valid personal details and password
And the user clicks register button
Then the user should get a success message

