/// <reference types="Cypress"> />

describe("Test Contact Us form on Automation Test Store", () => {
    it("Should be able to make a successful submission via the form", () => {
        cy.visit("https://automationteststore.com/");
        cy.xpath("//a[contains(@href, 'contact')]").click();

        cy.get("#ContactUsFrm_first_name").type("John");
        cy.get("#ContactUsFrm_email").type("john.shepard@citadel.net");
        cy.get("#ContactUsFrm_enquiry").type("How do I shut this thing down?");

        cy.xpath("//button[@title='Submit']").click();
    })
})
