Feature: Consultar Licitações
  Como um usuário
  Quero consultar as licitações no portal da transparência de João Pessoa
  Para que eu possa visualizar informações sobre os processos licitatórios

  Scenario: Usuário consulta as licitações disponíveis
    Given que estou na página de licitações do portal transparência de João Pessoa
    When eu realizo uma busca por licitações
    Then devo ver uma lista de licitações disponíveis