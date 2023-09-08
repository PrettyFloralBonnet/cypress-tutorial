/// <reference types="Cypress"> />

describe("Test Contact Us form on WebDriverUni", () => {
    it("Should be able to make a successful submission via the form", () => {
        // cy.visit("http://www.webdriveruniversity.com");
        // cy.get("#contact-us").click();

        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.document().should("have.property", "charset").and("eq", "UTF-8")

        cy.get('[name="first_name"]').type("John");
        cy.get('[name="last_name"]').type("Shepard");
        cy.get('[name="email"]').type("john.shepard@citadel.net");
        cy.get('textarea.feedback-input').type(
            "I'm Commander Shepard, and this is my favorite course on Udemy."
        );

        cy.get('[type="submit"]').click();
        cy.get("h1").should("have.text", "Thank You for your Message!");
    })

    it("Should fail to submit data via the form due to an empty email field", () => {
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");

        cy.get('[name="first_name"]').type("John");
        cy.get('[name="last_name"]').type("Shepard");

        // leaving the email field blank

        cy.get('textarea.feedback-input').type("How do I shut this thing down?");

        cy.get('[type="submit"]').click();
        cy.get("body").contains("Error: all fields are required");
    })
})
