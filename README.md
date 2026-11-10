# Vitrine: catálogo de produtos em React

Aplicação React (criada com **Vite**) que exibe um catálogo de produtos e permite cadastrar novos. Exercício do Módulo 17 (Fundamentos de React) do curso de Front-End da EBAC.

## Funcionalidades

- Lista de produtos renderizada com `.map()` a partir do **state**
- Carregamento inicial simulado com **`useEffect` + `setTimeout`**, mostrando "Carregando..."
- Componente reutilizável **`ProdutoCard`** (nome, preço, imagem e descrição via **props**)
- **Formulário controlado** para cadastrar produtos (nome, preço e descrição obrigatórios; imagem opcional)
- Layout responsivo (mobile first): 1 coluna no celular, 2 no tablet e formulário lateral no desktop

## Estrutura

```
src/
├── assets/estilos.css           estilos globais
├── components/
│   ├── ProdutoCard.jsx          card de um produto (props)
│   ├── ListaProdutos.jsx        grade de cards (.map)
│   └── FormularioProduto.jsx    formulário controlado
├── data/produtos.js             dados mockados + busca simulada
├── pages/Catalogo.jsx           página: state, useEffect e adicionar
├── App.jsx                      cabeçalho, página e rodapé
└── main.jsx                     ponto de entrada
```

## Como rodar

```bash
npm install
npm run dev      # abre em http://localhost:5173
npm run build    # gera a versão de produção em dist/
```

## Tecnologias

React 19 · Vite · CSS puro
