describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')
    cy.get("h1").should("contain", "Cypress Test")
    cy.get("p").should("contain", "From github CI")
  })

    it.only('fails', () => {
    cy.visit('/')
    cy.get("h1").should("contain", "Failed")
    })
})