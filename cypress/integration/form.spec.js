describe('The first and last name fields can be filled out', () => {
    it('can navigate to the site', () => {
        cy.visit('http://localhost:3000/pizza')
        cy.url().should('include', 'localhost')
      })

    it('can type in the first name field', () => {
        cy.get('#orderName')
        .type('Zachary')
        .should('have.value', 'Zachary')
    })
    it('can select a size', () => {
        cy.get('select').select('medium')
    })
    it('can select a sauce', () => {
        cy.get('[type="radio"]').first().check()
    })
    it('can check all checkboxes', () => {
        cy.get('[type="checkbox"]').check() 
    })
    it('can submit the new order', () => {
        cy.get('.submitBtn').click()
      })
})