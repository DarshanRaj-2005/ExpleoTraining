Feature: Address Functionality

Scenario: Add new address using data table

Given the user is on login page
When the user enters valid email and password
And the user clicks login button
And the user navigates to add new address page
And the user enters address details
  | firstName | John            |
  | lastName  | Doe             |
  | address1  | 123 Main Street |
  | city      | Chennai         |
  | postCode  | 600001          |
  | country   | India           |
  | region    | Tamil Nadu      |
And the user clicks continue button
Then the address should be added successfully