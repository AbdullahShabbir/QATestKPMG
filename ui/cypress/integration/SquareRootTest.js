describe('Goes to the Square root Page in application', () => {
    it('and checks if correct text is displayed', () => {
        cy.visit('http://localhost:3000/')
        cy.contains('Random Square').click();

        cy.contains("Random square")

        cy.get('input').type('6')
        cy.get('form').submit()
    })
})