# EngagED Front-End Challenge - Rick and Morty Explorer

Este projeto é a solução para o desafio técnico de Front-End da [EngagED](https://engagedu.notion.site/Desafio-Front-end-EngagED-d7543481dd7d4f2da1f5f565303b242c), utilizando a [API pública do Rick and Morty](https://rickandmortyapi.com/).

🔗 **Acesse o projeto online:** [rick-and-morty-ivory-pi.vercel.app](https://rick-and-morty-ivory-pi.vercel.app/#/)

## 🔍 Funcionalidades

- ✅ Listagem de personagens com imagem, nome, espécie e gênero
- ✅ Paginação com botões de navegação (próxima e anterior)
- ✅ Busca por nome de personagem
- ✅ Página de detalhes com informações completas e episódios
- ✅ Indicadores de carregamento e tratamento de erros
- ✅ Interface responsiva com Quasar Framework
- ✅ Testes unitários com Vitest

## ⚙️ Tecnologias utilizadas

- [Vue 3](https://vuejs.org/)
- [Quasar Framework](https://quasar.dev/)
- [Apollo Client](https://apollo.apollographql.com/)
- [GraphQL](https://graphql.org/)
- [Vitest](https://vitest.dev/)
- [Rick and Morty GraphQL API](https://rickandmortyapi.com/documentation/#graphql)

## 🚀 Como rodar o projeto

### 1. Instale as dependências

```bash
npm install
```

### 2. Rode o servidor de desenvolvimento

```bash
quasar dev
```

> O projeto será iniciado em `http://localhost:9000`

### 3. Rodar os testes

```bash
npx vitest
```

## 🧪 Testes

Testes unitários foram criados para as composables principais (`useCharacter` e `useCharacters`) utilizando mocks do Apollo Client.

---

## 📄 Sobre o desafio

Este projeto tem como objetivo demonstrar domínio de:

- Consumo de APIs GraphQL
- Organização e componentização de código em Vue
- Uso de Apollo Client com Vue 3
- Gerenciamento de estado com composables
- Criação de testes unitários com Vitest
