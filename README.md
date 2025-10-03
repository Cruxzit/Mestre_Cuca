# 🚀 PWAFE - React + Vite Project

![React](https://img.shields.io/badge/React-19.1.1-61dafb?logo=react)
![Vite](https://img.shields.io/badge/Vite-LATEST-646cff?logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.14-38bdf8?logo=tailwindcss)
![React Router](https://img.shields.io/badge/React%20Router-7.9.3-ca4245?logo=reactrouter)

## Sobre o Projeto

**Mestre Cuca** é um site de receitas moderno, desenvolvido com React e Vite, pensado para ser rápido, bonito e fácil de usar. O objetivo é partilhar receitas deliciosas, organizadas por categorias, com um visual profissional e totalmente responsivo.

## 🛠️ Tecnologias

- **React 19** — Interface moderna e reativa
- **Vite** — Build rápido e hot reload instantâneo
- **Tailwind CSS** — Estilização moderna e responsiva
- **React Router DOM** — Navegação entre páginas sem recarregar
- **ESLint** — Qualidade e padrão de código

## 📁 Estrutura do Projeto

```
mestre_cuca/
├── public/
│   ├── logo-mestre-cuca.png
│   ├── receita1.jpg
│   ├── receita2.jpg
│   ├── receita3.jpg
│   └── hero-cooking.jpg
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── Home.jsx
│   ├── Recipes.jsx
│   └── components/
│       └── Header.jsx
├── package.json
└── README.md
```

## Funcionalidades

- **Página Inicial:** Apresentação do projeto, receitas em destaque e categorias.
- **Página de Receitas:** Cards dinâmicos com imagem, tempo, dificuldade e descrição.
- **Navegação:** Menu fixo com links para Início, Receitas e outras secções.
- **Responsivo:** Visual apelativo em qualquer dispositivo.
- **Imagens:** Todas as imagens devem ser colocadas na pasta `public/` com os nomes corretos.

## Como começar

1. Instalar as dependências:
   ```bash
   npm install
   ```
2. Iniciar o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
3. Abrir no navegador:
   ```
   http://localhost:5173
   ```
   (ou a porta indicada no terminal)

## Como adicionar receitas

- Editar o ficheiro `src/Recipes.jsx` e adicionar objetos ao array `recipes`.
- Colocar a imagem correspondente na pasta `public/`.

## Dicas

- Para gerar imagens de receitas, pode usar IA gratuita como Bing Image Creator, Mage.Space, Leonardo.Ai, etc.
- O projeto pode ser facilmente expandido para incluir registo de utilizadores, comentários, favoritos e muito mais!

---

Feito com paixão para quem adora cozinhar! 👨‍🍳👩‍🍳
