describe('BrowserStack Demo Test', () => {
  it('should add a product to the cart', () => {
    // Visit demo site
    cy.visit('https://bstackdemo.com');

    // Wait for the products to load
    cy.get('.shelf-item', { timeout: 10000 }).should('have.length.greaterThan', 0);

    // Get the first product and store its name dynamically
    cy.get('.shelf-item').first().within(() => {
      cy.get('.shelf-item__title').invoke('text').as('productName'); // store product name
      cy.get('.shelf-item__buy-btn').click();
    });

    // Verify that the product was added to the cart
    cy.get('@productName').then((name) => {
      cy.get('.float-cart__content', { timeout: 10000 }).should('contain', name.trim());
    });
  });
});
