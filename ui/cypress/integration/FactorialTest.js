describe('Goes to the Factorial Page in application', () => {
    it('and checks if correct text and factotial is calculated', () => {
        cy.visit('http://localhost:3000/')
        cy.contains('Factorial').click();

        cy.contains("N!")

        cy.get('input').type('6')
        cy.get('form').submit()
        cy.contains("The factorial is {\"result\":720}")
    })
})