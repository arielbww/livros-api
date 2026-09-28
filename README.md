# API de Livros

API REST simples para cadastro e consulta de livros, feita com Node.js e Express.
Os dados são armazenados em memória (array), sem banco de dados.

## Requisitos

- Node.js 18 ou superior
- npm

## Instalação

```bash
git clone https://github.com/SEU-USUARIO/api-livros.git
cd api-livros
npm install
```

## Execução

```bash
npm start
```

A API ficará disponível em `http://localhost:3000`.

## Estrutura de um livro

```json
{
  "id": 1,
  "titulo": "Dom Casmurro",
  "autor": "Machado de Assis",
  "ano": 1899
}
```

## Rotas

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | /livros | Lista todos os livros |
| GET | /livros/:id | Consulta um livro pelo ID |
| POST | /livros | Cadastra um novo livro |
| PUT | /livros/:id | Atualiza um livro |
| DELETE | /livros/:id | Exclui um livro |

## Exemplos

**POST /livros**

```json
{
  "titulo": "Capitães da Areia",
  "autor": "Jorge Amado",
  "ano": 1937
}
```

Resposta: `201 Created` com o livro criado.

## Códigos de resposta

- 200: sucesso
- 201: criado
- 204: excluído com sucesso
- 400: dados inválidos
- 404: livro não encontrado

## Observação

Como os dados ficam em memória, eles são reiniciados sempre que o servidor é reiniciado.