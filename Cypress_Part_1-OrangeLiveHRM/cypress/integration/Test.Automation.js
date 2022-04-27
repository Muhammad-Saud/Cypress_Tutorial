/// <reference types="cypress" />

describe('Test Login Functionality Report', () => {

    beforeEach(() => {
        cy.visit('/')
    })
    
    it('Should Open Application And Login To Website', () => {
      
        cy.login('admin', 'admin123')
    
        cy.get('h1').contains('Dashboard')
    
        cy.contains('Invalid credentials').should('not.exist')
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/index.php/dashboard')
    
        cy.logout()
    
    })
    
    it('Should Open Application And Failed To Login On Website', () => {
       
        cy.login('admin', 'admin1234')
    
        cy.contains('Invalid credentials').should('exist')
    
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/index.php/auth/validateCredentials')
    
    })

})

