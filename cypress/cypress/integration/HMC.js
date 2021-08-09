describe('HMC tests', () => {
    it('Goes to the homepage', () => {
        cy.visit('')
    });

    it('Has the HMC visible', () => {
        cy.get("[data-tag-section='hmc']")
        .should('be.visible');
    })

    it('Clicks the first filter product facets', () => {
        cy.get('.hmcChoiceButton').first()
        .click();
        cy.get('[data-tag-category="TVs"]')
        .click();
        cy.get('[data-tag-name="hmc-filter-1-clicked"]')
        .eq(3) 
        .click()
    })

    it('gets the maximum and minimum price range', () => {
        cy.get('.priceRangeHolderMin > .priceRangeHolderPrice')
        .wait(2000)
        .then(($minPrice) => {
            const minimumPrice = $minPrice.text()
            var $minPrice = minimumPrice.split(/[£]/).pop()
            parseFloat($minPrice)
            console.log(typeof $minPrice)


        cy.get('.priceRangeHolderMax > .priceRangeHolderPrice')
        .wait(2000)
        .then(($maxPrice) => {
            const maximumPrice = $maxPrice.text()
            var $maxPrice = maximumPrice.split(/[£]/).pop()
            parseInt($maxPrice)
            console.log($maxPrice)

        cy.get('.priceRangeHolderMax > .priceRangeHolderGrab')
        .click()
            .trigger("mousedown")
            .trigger("mousemove", { which: 1, pageX: 10 })

        cy.get('.priceRangeHolderMax > .priceRangeHolderPrice')
        .wait(2000)
        .then(($maxPriceAfter) => {
            
            const maximumPriceAfter = $maxPriceAfter.text()
            var $maxPriceAfter = maximumPriceAfter.split(/[£]/).pop()
            parseInt($maxPriceAfter)
            console.log($maxPriceAfter)

        //expect($maxPrice).to.be.greaterThan($maxPriceAfter)
        //expect($maxPrice).to.be.a('string')
        //expect($maxPrice).to.be.a(Number)
        expect($maxPrice).to.be.greaterThan($maxPriceAfter)
        })
    })
    })
    })
})