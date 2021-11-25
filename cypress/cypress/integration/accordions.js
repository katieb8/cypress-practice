describe('HMC tests', () => {
    beforeEach(() => {
        cy.setCookie('AOLCookieBannerTestVariant', 'not-in-test')
    })
    
    it('Goes to the FAQs German page', () => {
        cy.visit('https://www.ao.de/hilfe-service/mein-ao/faqs')
    });

    it('Should have the accordions closed by default', () => {
        cy.get('[data-tag-name="accordion question"]')
        .should('have.attr', 'data-tag-action')
        expect('[data-tag-name="accordion question"]').to.have.attr('data-tag-action', 'close')
    })
});