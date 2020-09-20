describe('Goes to the Fibonacci Page in application', () => {
    it('and checks if correct text and Fibonacci is calculated', () => {
        cy.visit('http://localhost:3000/')
        cy.contains('Fibonacci').click();

        cy.get('input').type('6')
        cy.get('form').submit()
        cy.contains("The fibonacci is {\"result\":8}")

        cy.get('#root').find('h1').find('div').contains("Fibonacci")
    })
})