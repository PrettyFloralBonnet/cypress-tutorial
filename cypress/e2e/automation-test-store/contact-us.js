/// <reference types="Cypress"> />

describe("Test Contact Us form on Automation Test Store", () => {
    it("Makes a successful submission via the form", () => {
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

    it("Validates the field names on the form", () => {
        cy.visit("https://automationteststore.com/index.php?rt=content/contact");

        // cypress commands and chaining
        cy.contains("#ContactUsFrm", "Contact Us Form")
            .should("contain.text", "First name")
            .and("contain.text", "Email")
            .and("contain.text", "Enquiry")

        // jQuery
        cy.contains("#ContactUsFrm", "Contact Us Form").then($form => {
            const firstNameText = $form.find("#field_11").text();
            const emailText = $form.find("#field_12").text();
            const enquiryText = $form.find("#field_13").text();

            expect(firstNameText).to.contain("First name");
            expect(emailText).to.contain("Email");
            expect(enquiryText).to.contain("Enquiry");

            // embedded cypress commands (closures)
            cy.get("#field_11").then($div => {
                const firstNameText = $div.text();
                expect(firstNameText).to.contain("First name");
            })
        })
    });
})
