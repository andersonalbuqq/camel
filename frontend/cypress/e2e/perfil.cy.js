describe('Página de Perfil', () => {
    it('Atualizar dados de perfil', () => {
      cy.visit('http://127.0.0.1:5500/frontend/perfil/')
      cy.get('#cep').type('55036-050');
      cy.wait(1500);
      cy.get('#rua').type('Jose Victor de Albuquerque');
      cy.wait(1500);
      cy.get('#numero').type('123');
      cy.wait(1500);
      cy.get('#complemento').type('Casa');
      cy.wait(1500);
      cy.get('#bairro').type('Kennedy');
      cy.wait(1500);
      cy.get('#cidade').type('Caruaru');
      cy.wait(1500);
      cy.get('#uf').type('PE');
      cy.wait(1500);
      cy.get('#telefone').type('8199999999');
      cy.wait(1500);
      cy.contains('button', 'Salvar').click();
    })
  })







describe('Página de Login', () => {
    it('Primeiro será inserido o nome no campo "nome", Segundo será inserido a senha no campo "senha"', () => {
      cy.visit('http://127.0.0.1:5500/frontend/login/')
      cy.contains('a', 'Registre-se').click();
      cy.get('[name="email"]').type('junior@junior.com');
      cy.wait(2000);
      cy.get('[name="name"]').type('ricardo');
      cy.wait(2000);
      cy.get('[name="password"]').type('123');
      cy.wait(2000);
      cy.get('[name="confirmPassword"]').type('123');
      cy.wait(2000);
      cy.contains('a', 'Cadastrar').click();
    })
  })