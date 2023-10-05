describe('Página de Criar Conta', () => {
    it('Sera inserido os dados do usuario para cadastrar nova conta', () => {
      cy.visit('http://127.0.0.1:5500/frontend/login/')
      cy.contains('a', 'Registre-se').click();
      cy.get('[name="email"]').type('junior@junior.com');
      cy.wait(1500);
      cy.get('[name="name"]').type('ricardo');
      cy.wait(1500);
      cy.get('[name="password"]').type('123');
      cy.wait(1500);
      cy.get('[name="confirmPassword"]').type('123');
      cy.wait(1500);
      cy.contains('a', 'Cadastrar').click();
    })
  })