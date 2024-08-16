/// <reference types ="cypress"/>

describe('usando_get', () => {
    it('get_prueba', () => {
      cy.visit('https://www.facebook.com/')

      cy.get('.x1lliihq x6ikm8r x10wlt62 x1n2onr6 xlyipyv xuxw1ft').should('be.enabled')
    })
  })