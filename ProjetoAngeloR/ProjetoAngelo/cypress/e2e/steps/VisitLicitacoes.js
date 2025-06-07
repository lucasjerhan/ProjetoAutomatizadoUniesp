import Licitacoes from '../../pages/Licitacoes';
import HomePage from '../../pages/HomePage';

const licitacoes = new Licitacoes();
const homePage = new HomePage();

Given('que estou na página de licitações do portal transparência de João Pessoa', () => {
  homePage.visit();
});

When('eu realizo uma busca por licitações', () => {
  licitacoes.clickLicitacoesButton();
});

Then('devo ver uma lista de licitações disponíveis', () => {
  licitacoes.clickPesquisarButton();
});