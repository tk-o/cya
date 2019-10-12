describe('home page', () => {
  it('country selector in footer', async () => {
    // Given the user in on the home page
    cy.visit('https://finder.com.au');
    
    // When the user clicks on the country selector
    (await cy.get('#footer .countrySelector'))
      .click();

    // Then country selector should be visible
    (await cy.get('#footer .countrySelector .countrySelector__menu'))
      .should('be.visible');
  });
});
