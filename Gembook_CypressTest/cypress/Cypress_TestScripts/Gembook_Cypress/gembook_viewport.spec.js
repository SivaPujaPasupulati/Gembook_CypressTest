/// <reference types="Cypress" />

context('Viewport', () => {
  beforeEach(() => {
    cy.visit('https://gembookuibeta.geminisolutions.com/#/')
  })

  it('cy.viewport() - set the viewport size and dimension', () => {
    
    cy.get('.cover-img').should('be.visible')
    cy.viewport(720, 480)

    // the navbar should have collapse since our screen is smaller
    cy.get('.cover-img').should('be.visible').click()
    
    // lets see what our app looks like on a super large screen
    cy.viewport(2999, 2999)
    cy.wait(2000)

    // cy.viewport() accepts a set of preset sizes
    // to easily set the screen to a device's width and height

    // We added a cy.wait() between each viewport change so you can see
    // the change otherwise it is a little fast to see :)

    cy.viewport('macbook-15')
    cy.wait(3000)
    cy.viewport('macbook-13')
    cy.wait(3000)
    cy.viewport('iphone-xr')
    cy.wait(3000)
    cy.viewport('iphone-x')
    cy.wait(3000)
    cy.viewport('ipad-mini')
    cy.wait(3000)
    cy.viewport('iphone-6+')
    cy.wait(3000)
    cy.viewport('iphone-6')
    cy.wait(3000)
    cy.viewport('iphone-5')
    cy.wait(3000)
    cy.viewport('iphone-4')
    cy.wait(200)
    cy.viewport('iphone-3')
    cy.wait(200)

    // cy.viewport() accepts an orientation for all presets
    // the default orientation is 'portrait'
    cy.viewport('ipad-2', 'portrait')
    cy.wait(200)
    cy.viewport('iphone-4', 'landscape')
    cy.wait(3000)

    // The viewport will be reset back to the default dimensions
  })

})
