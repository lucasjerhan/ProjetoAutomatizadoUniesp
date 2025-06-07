
## 📋 Funcionalidades testadas

### ✅ Cenários:

1. **Consulta por Despesas**
   - Acessa a home do portal
   - Navega até a seção "Despesas"
   - Busca por "Ministério da Saúde"
   - Verifica se o órgão aparece nos resultados

2. **Ranking de Maiores Salários**
   - Acessa a seção "Servidores Públicos"
   - Clica em "Maiores remunerações"
   - Verifica se a página apresenta o conteúdo esperado

---

## 🚀 Como executar

### 1. Instalar dependências
```bash
npm install
````

### 2. Executar os testes com Cucumber

```bash
npx cypress open
```

Ou, para executar em modo headless:

```bash
npx cypress run
```

> Certifique-se de que a configuração do Cypress esteja integrada ao Cucumber. Para isso, veja o `cypress.config.js` e o plugin do `@badeball/cypress-cucumber-preprocessor`.

---

## 🛠 Tecnologias

* [Cypress](https://www.cypress.io/)
* [Cucumber + Gherkin](https://cucumber.io/)
* \[JavaScript (Node.js)]
* Arquitetura **Page Object Model (POM)**

---

## ✨ Observações

* Os seletores utilizados são sensíveis a mudanças no HTML do portal.
* Caso o portal utilize muitas requisições assíncronas, aguarde elementos com `cy.intercept()` ou `cy.wait()` de forma controlada.
* Para facilitar a manutenção, utilize `data-testid` nos elementos ao trabalhar com projetos internos.

