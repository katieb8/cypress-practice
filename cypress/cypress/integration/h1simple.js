describe('simple axe cat page tests', () => {
    beforeEach(() => {
        cy.setCookie('AOLCookieBannerTestVariant', 'not-in-test')
        cy.visit('/laundry')
      })

    it('Should have the right title', () => {
        cy.injectAxe();
        cy.title().should('contain', 'laundry')
        cy.checkA11y();
    });

    
it('Has no detectable a11y violations on load (filtering to only include critical impact violations)', () => {
    // Test on initial load, only report and assert for critical impact items
    cy.checkA11y(null, {
      includedImpacts: ['critical']
    })
  })
});