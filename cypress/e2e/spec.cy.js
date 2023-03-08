describe('template spec', () => {
  it.only('passes', () => {
    cy.visit('/')
    cy.get("h1").should("contain", "Cypress Test")
    cy.get("p").should("contain", "From github CI")

    expect(Cypress.env("CYPRESS_EMAIL")).to.equal("abc@gmail.com")
  })

    it('fails', () => {
    cy.visit('/')
    cy.get("h1").should("contain", "Failed")
    })
})