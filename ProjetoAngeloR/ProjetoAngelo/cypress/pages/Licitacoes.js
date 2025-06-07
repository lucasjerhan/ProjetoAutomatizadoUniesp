class Licitacoes {
    visit() {
      cy.visit('https://transparencia.joaopessoa.pb.gov.br/#/');
    }

    clickLicitacoesButton() {
        cy.get('.cartao-componente[href="#/licitacoes"]').click();
    }

    clickPesquisarButton() {
        cy.get('button[type="button"] .ui-button-text.ui-clickable')
          .contains('Pesquisar')
          .click({ force: true });
    }
}

export default Licitacoes;