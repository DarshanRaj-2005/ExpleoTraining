Feature: Search Functionality

Scenario Outline: Search using keywords

Given the user is on home page
When the user click search bar
And the user enters "<keyword>"
Then the system should check and show the result "<result_status>"

Examples:
  | keyword | result_status |
  | iPhone  | contain       |
  | Samsung | contain       |
  | Nik     | not contain   |