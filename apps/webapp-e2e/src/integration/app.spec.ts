describe('webapp', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    cy.get('h2').contains('Welcome to Remix!');
  });
});