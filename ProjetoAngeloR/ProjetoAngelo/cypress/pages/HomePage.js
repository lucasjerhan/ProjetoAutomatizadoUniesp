class HomePage {
    visit() {
      cy.visit('https://transparencia.joaopessoa.pb.gov.br/#/');
    }
  
    clickHomePageImage() {
        cy.get('.figura-home').click();
    }

    clickExpensesButton() {
        cy.get('.cartao-componente[href="#/despesas/despesas-quadro-geral"]').click();
      }
      
  }
  
  export default HomePage;