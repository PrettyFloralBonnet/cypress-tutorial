/// <reference types="Cypress"> />

describe("Test Contact Us form on Automation Test Store", () => {
    it("Should be able to make a successful submission via the form", () => {
        cy.visit("https://automationteststore.com/");
        cy.xpath("//a[contains(@href, 'contact')]").click().then(item => {
            cy.log(item.text())
        });

        cy.get("#ContactUsFrm_first_name").type("John");

        const emailInput = cy.get("#ContactUsFrm_email");
        emailInput.type("john.shepard@citadel.net");
        emailInput.should("have.attr", "name", "email");

        cy.get("#ContactUsFrm_enquiry").type("How do I shut this thing down?");

        cy.xpath("//button[@title='Submit']").click();

        cy.xpath("//p[text()[contains(., 'enquiry has been successfully sent')]]")
            .should(
                "have.text",
                "Your enquiry has been successfully sent to the store owner!"
            );
        cy.log("Test completed.")
    });
})
