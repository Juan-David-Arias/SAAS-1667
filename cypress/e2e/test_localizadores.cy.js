/// <reference types ="cypress"/>

describe('localizadores', () => {
    it('passes', () => {
      cy.visit('https://www.facebook.com/')

      cy.get('img')

      cy.get('textarea')

      cy.get('._97vy')

      cy.get('[text]')
      

    })
  })