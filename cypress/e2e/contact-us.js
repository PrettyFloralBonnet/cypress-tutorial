/// <reference types="Cypress"> />

describe("Test Contact Us form on WebDriverUni", () => {
    it("Should be able to make a successful submission via the form", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get("#contact-us").click()

        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('[name="first_name"]').type("John")
        cy.get('[name="last_name"]').type("Shepard")
        cy.get('[name="email"]').type("john.shepard@citadel.net")
        cy.get('textarea.feedback-input').type(
            "I'm Commander Shepard, and this is my favorite course on Udemy."
            )
        cy.get('[type="submit"]').click()
    })

    // it(
    //     "Should not be able to make a successful submission via the form, as all fields are required",
    //     () => {
    //         // cypress code
    //     }
    // )
})
