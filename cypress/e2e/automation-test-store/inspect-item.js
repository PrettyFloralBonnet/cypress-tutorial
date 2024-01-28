/// <reference types="Cypress"> />

describe("Inspect Automation Test Store items", () => {
    it("Click on the first item using item text", () => {
        cy.visit("https://automationteststore.com/");
        cy.get("a.prdocutname").contains("Skinsheen Bronzer Stick").click()
            .then(item => { cy.log(item.text()) });
    });

    it("Click on the first item using its index", () => {
        cy.visit("https://automationteststore.com/");
        cy.get(".fixed_wrapper").find(".prdocutname").eq(0).click();
    });

    it("Navigating to specific product pages", () => {
        cy.visit("https://automationteststore.com/");
        cy.get("#categorymenu").find("a[href]").contains("Makeup").click();

        cy.get("h1 .maintext").then(($element) => {
            const headerText = $element.text();
            cy.log(headerText);

            expect(headerText).to.eq("Makeup");
        });
    });
})
