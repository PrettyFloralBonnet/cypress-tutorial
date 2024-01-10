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
})