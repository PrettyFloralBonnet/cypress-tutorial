/// <reference types="Cypress"> />

describe("Test Contact Us form on Automation Test Store", () => {
    it("Should be able to make a successful submission via the form", () => {
        cy.visit("https://automationteststore.com/");
        cy.get("a[href='https://automationteststore.com/index.php?rt=content/contact']")
            .click();
        cy.get("#ContactUsFrm_first_name").type("John");
        cy.get("#ContactUsFrm_email").type("john.shepard@citadel.net");
        cy.get("#ContactUsFrm_enquiry").type("How do I shut this thing down?");
        cy.get(".col-md-6 > .btn").click();
    })
})
