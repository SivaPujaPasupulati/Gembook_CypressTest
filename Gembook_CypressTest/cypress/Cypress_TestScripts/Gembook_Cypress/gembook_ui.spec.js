/// <reference types="cypress" />
///  cy is an in built object to call all cypress API's
/// NPM - JavaScript package manager [inbuilt with node JS] like Maven in Java [Cypress another package inside NPM repo] 
/// npm install cypress@3 [cmd to install cypress]
/// npx cypress open [Open run report]
/// Mocha is an inbuilt test runner with cypress [only test runner need not install]

context('Window', () => {
    beforeEach(() => {
      cy.visit('https://gembookuibeta.geminisolutions.com/#/')
    })
  
    it('cy.window() - get the global window object', () => {
        //Get the global window object
      cy.window().should('have.property', 'top')
    })
  
    it('cy.document() - get the document object', () => {
       //Get the document object
      cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
    })
  
    it('cy.title() - get the title', () => {
      //Get Gembook title and verify it
      cy.title().should('include', 'Gembook')
    })

    it('cy.get()- get the name', function(){
        //Get Gembook tagline and verify if it contains 'around you' in it
        cy.get('.info-2').should('contain','around you')
    })

    it('cy.get()- click', function(){
        //clicking on sign in button of Gembook
        cy.get('.auth_signin__3ILKi').click()
    })
    

  })
  