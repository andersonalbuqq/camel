describe('Página de Login', () => {
  it('Login para entrar na conta', () => {
    cy.visit('http://127.0.0.1:5500/frontend/index.html');
    cy.wait(1500);
    cy.get('details.user').eq(1).click({ force: true });
    cy.wait(1500);
    cy.contains('a', 'Entrar').click({ force: true });
    cy.wait(1500);
    cy.get('input[name="email"]').type('teste@email.com');
    cy.wait(1500);
    cy.get('input[name="password"]').type('123456');
    cy.contains('a', 'Entrar').click({ force: true });
  })
})