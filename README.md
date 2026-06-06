# Pokédex TypeScript Lite

## Sobre o projeto

O Pokédex TypeScript Lite é uma aplicação desenvolvida em Node.js com TypeScript que consulta dados da PokeAPI e organiza os Pokémon encontrados em um catálogo local durante a execução do programa.

## Fluxo da aplicação

1. O sistema recebe o nome ou ID de um Pokémon.
2. A função buscarPokemon realiza uma requisição para a PokeAPI.
3. A resposta JSON é convertida para um objeto simplificado.
4. O Pokémon pode ser adicionado ao catálogo local.
5. O catálogo impede registros duplicados.
6. Os Pokémon podem ser listados e removidos pelo ID.


## Objetivo


Praticar os conceitos estudados no módulo:

- Node.js
- TypeScript
- Interfaces
- Classes
- Arrays e Objetos
- Métodos de Array
- Fetch API
- Async/Await
- Tratamento de erros
- Git e GitFlow
- GitHub
- Kanban

## Tecnologias utilizadas

- Node.js
- TypeScript
- TSX
- PokeAPI
- Git
- GitHub

## Pré-requisitos

Antes de executar o projeto é necessário ter instalado:

- Node.js
- npm
- Git

## Como instalar

Clone o repositório:

```bash
git clone https://github.com/alexwsch/pokedex-typescript-lite.git
```

Entre na pasta:

```bash
cd pokedex-typescript-lite
```

Instale as dependências:

```bash
npm install
```

## Como executar

Modo desenvolvimento:

```bash
npm run dev
```

Compilar o projeto:

```bash
npm run build
```

## Estrutura do projeto

```text
src/
├── models/
│   └── Pokemon.ts
├── services/
│   ├── PokeApiService.ts
│   └── CatalogoPokemon.ts
├── utils/
└── main.ts
```
A aplicação foi organizada em camadas para separar responsabilidades:

- models: interfaces e tipos
- services: regras de negócio e integração com API
- main: ponto de entrada da aplicação

## Funcionalidades

- Buscar Pokémon por nome ou ID
- Consultar dados na PokeAPI
- Tratar erros de Pokémon inexistente
- Converter resposta da API para objeto simplificado
- Adicionar Pokémon ao catálogo
- Impedir Pokémon duplicado
- Listar Pokémon cadastrados
- Remover Pokémon pelo ID

## Interfaces utilizadas

### PokemonResumo

Representa o modelo simplificado do Pokémon utilizado pela aplicação.

Campos:

- id
- nome
- tipos
- altura
- peso

Exemplo:

```json
{
  "id": 25,
  "nome": "pikachu",
  "tipos": ["electric"],
  "altura": 4,
  "peso": 60
}
```
## Repositório

https://github.com/alexwsch/pokedex-typescript-lite

## Consumo da API

A aplicação utiliza a função fetch do Node.js para consultar a PokeAPI.

As requisições são executadas de forma assíncrona utilizando async/await, permitindo aguardar a resposta da API antes de processar os dados retornados.



### PokemonApiResponse

Representa apenas os campos utilizados da resposta da PokeAPI.

Campos utilizados:

- id
- name
- types
- height
- weight

Representa apenas os campos utilizados da resposta da PokeAPI.

## Métodos de Array utilizados

### map()

Transforma os tipos da API em um array de strings.

### some()

Verifica se um Pokémon já existe no catálogo.

### filter()

Remove Pokémon pelo ID.

### forEach()

Lista os Pokémon armazenados.

## Classe CatalogoPokemon

Responsável pelo gerenciamento do catálogo local.

Métodos:

- adicionar()
- listar()
- remover()

## Tratamento de erros

A aplicação utiliza `try/catch` durante as requisições para a PokeAPI.

Quando um Pokémon não é encontrado, o sistema exibe uma mensagem sem interromper a execução.

Exemplo:

```text
[ERRO] Pokémon não encontrado
```

## Exemplos de execução

### Busca válida

Entrada:

```text
pikachu
```

Saída:

```text
[OK] pikachu adicionado ao catálogo.
```

### Busca inválida

Entrada:

```text
pokemon-inexistente
```

Saída:

```text
[ERRO] Pokémon não encontrado
```

### Duplicidade

Entrada:

```text
adicionar pikachu duas vezes
```

Saída:

```text
[AVISO] pikachu já está no catálogo.
```

### Remoção

Entrada:

```text
remover ID 25
```

Saída:

```text
[OK] Pokémon removido do catálogo.
```
## Scripts

```bash
npm run dev
npm run build
```

- npm run dev: executa o projeto em desenvolvimento.
- npm run build: compila os arquivos TypeScript.


### Execução completa

```text
[OK] pikachu adicionado ao catálogo.
[OK] charmander adicionado ao catálogo.
[AVISO] pikachu já está no catálogo.
[ERRO] Pokémon não encontrado

#25 - pikachu | Tipos: electric | Altura: 4 | Peso: 60
#4 - charmander | Tipos: fire | Altura: 6 | Peso: 85

[OK] Pokémon removido do catálogo.

#4 - charmander | Tipos: fire | Altura: 6 | Peso: 85
```
## Conceitos aplicados

- TypeScript com tipagem explícita.
- Interfaces para modelagem de dados.
- Classes e modificadores de acesso.
- Métodos de array (map, some, filter e forEach).
- Consumo de API com fetch.
- Programação assíncrona com async/await.
- Tratamento de erros com try/catch.
- Organização em camadas (models, services e main).

## GitFlow utilizado

Branches utilizadas:

- main
- develop
- feat/pokedex
- docs/readme

## Kanban

Link do Kanban:

https://trello.com/invite/b/6a1cd215befe7bd1b4e6faca/ATTIfbfc30fd2c0015836dd41d2ea0ac15504E61F732/pokedex-typescript-lite

## Melhorias futuras

- Criar menu interativo no terminal
- Salvar catálogo em arquivo JSON
- Exibir HP, ataque e defesa
- Criar filtros por tipo

## Autor

Alexandre Wetzstein Schumann

Projeto desenvolvido para fins educacionais no curso de Desenvolvimento Back-End Node.js.