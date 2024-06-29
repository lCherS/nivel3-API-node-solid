# nivel3-API-node-solid
repositorio destinado para um projeto de nodejs da rocketseat onde implementamos solid na estrutura

GymPass style app.

## RFs (Requisito Funcionais)
###  Funcionalidades da aplicação - o que o usuario poderá fazer

- [x] Deve ser possivel se cadastrar;
- [x] Deve ser possivel se autenticar;
- [x] Deve ser possivel obter o perfil de um usuario logado;
- [ ] Deve ser possivel obter o numero de check-ins realizados pelo usuario logado;
- [ ] Deve ser possivel o usuario obter seu historico de check-ins;
- [ ] Deve ser possivel o usuario buscar academias proximas;
- [ ] Deve ser possivel o usuario buscar academias pelo nome;
- [ ] Deve ser possivel o usuario realizar check0ins em uma academia;
- [ ] Deve ser possivel validar o check-in de um usuario;
- [ ] Deve ser possivel cadastrar uma academia;

## RNs (Regras de Negocio)
### Caminhos de cada requisito - Condições para o que o usuario podera fazer

- [x] o usuario nao deve poder se cadastrar com um e-mail duplicado;
- [x] o usuario nao pode fazer 2 check-ins no mesmo dia;
- [x] o usuario nao pode fazer check-in se nao estiver perto (100m) da academia;
- [ ] o check-in so pode ser validado por administradores;
- [ ] A academia so pode ser cadastrada por administradores;

## RNFs (Requisitos não-Funcionais)
### Requisitos técnicos - independente do usuario

- [x] A senha do usuario precisa estar criptografada;
- [x] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [ ] Todas as listas de dados precisam estar paginados por 20 itens por pagina;
- [ ] O usuário deve ser identificado por um JWT (Json Web Token);