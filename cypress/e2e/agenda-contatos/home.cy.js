/// <reference types="cypress" />

describe('Agenda de Contatos - Testes E2E', () => {
    const baseUrl = 'https://ebac-agenda-contatos-tan.vercel.app/';

    beforeEach(() => {
        cy.visit(baseUrl);
        cy.window().then((win) => {
            win.localStorage.clear();
        });
    });

    it('Deve incluir um novo contato e removelo', () => {
        cy.get('input[type="text"]').type('Nome Teste');
        cy.get('input[type="email"]').type('emailteste@example.com');
        cy.get('input[type="tel"]').type('19 9999999');
        cy.get('button.adicionar').click();

        cy.contains('Nome Teste').should('exist');

        cy.contains('li', 'Nome Teste')
            .parents('div.contato')
            .find('button.delete')
            .click();

        cy.contains('Nome Teste', { timeout: 5000 }).should('not.exist');
    });

    it('Deve editar um contato existente', () => {
        cy.get('input[type="text"]').type('Nome Teste');
        cy.get('input[type="email"]').type('emailteste@example.com');
        cy.get('input[type="tel"]').type('19 9999999');
        cy.get('button.adicionar').click();

        cy.contains('Nome Teste')
            .closest('div.contato')
            .within(() => {
                cy.get('button.edit').click();
            });

        cy.get('input[type="text"]').clear().type('Maria Souza');
        cy.get('input[type="email"]').clear().type('maria.email@example.com');
        cy.get('input[type="tel"]').clear().type('18 8888888');
        cy.get('button.alterar').click();

        cy.contains('Maria Souza').should('exist');
        cy.contains('maria.email@example.com').should('exist');

        cy.contains('li', 'Maria Souza')
            .parents('div.contato')
            .find('button.delete')
            .click();

        cy.contains('Maria Souza', { timeout: 5000 }).should('not.exist');
    });
});