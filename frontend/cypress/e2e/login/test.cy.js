describe('Página de Login', () => {
  it('teste 1', () => {
    cy.visit('http://127.0.0.1:5500/');
    cy.wait(1000);
    cy.get('details.user').eq(1).click({ force: true });
    cy.wait(1000);
    cy.contains('a', 'Entrar').click({ force: true });
    cy.wait(1000);
    cy.get('input[name="email"]').type('test@email.com');
    cy.wait(1000);
    cy.get('input[name="password"]').type('123456');
  })
})