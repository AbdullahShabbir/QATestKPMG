describe('Goes to the application', () => {
    it('and checks if all the links are available', () => {
        cy.visit('http://localhost:3000/')
        cy.contains('ul', 'Home')
        cy.contains('ul','Factorial')
        cy.contains('ul','Fibonacci')
        cy.contains('ul','Random Square')
    })
})