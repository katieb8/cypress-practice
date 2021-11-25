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
});