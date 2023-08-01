@login
Feature: Login
    Scenario: Login successfully
        Given I open Login Page
        When I fill the username input with "nhungk110101@gmail.com"
        And I fill the password input with "Annhien@12345"
        And I click on Login button
        Then I see "You are required to enroll in Multi-Factor Authentication (MFA) for an extra layer of protection for your Heroku account." message