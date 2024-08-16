/// <reference types ="cypress"/>

describe('encontrando_webelements', () => {
    it('elements', () => {
      cy.visit('https://www.facebook.com/')

      cy.get('img')

      cy.get('textarea')

      cy.get('._97vy')

      cy.get('[text]')
      

    })
  })