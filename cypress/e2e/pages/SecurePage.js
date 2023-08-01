export default class SecurePage {

    path = "/secure";



    // Create variables for element locators

    messageDiv = "p[class='overview']";



    // Create independent methods to do actions on elements

    getMessage() {

        return cy.get(this.messageDiv).invoke('text');

    }

}