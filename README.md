# Mestre Cuca 🍳

Mestre Cuca é um site de receitas moderno, feito com React + Vite, focado em praticidade, beleza e experiência do usuário. O objetivo é compartilhar receitas deliciosas, organizadas por categorias, com visual profissional e responsivo.

## 🚀 Tecnologias Utilizadas

- **React 19** — Interface moderna e reativa
- **Vite** — Build rápido e hot reload instantâneo
- **Tailwind CSS** — Estilização moderna e responsiva
- **React Router DOM** — Navegação entre páginas sem recarregar
- **ESLint** — Padrão de código e qualidade

## 📂 Estrutura do Projeto

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

## 🖥️ Funcionalidades

- **Página Inicial:** Apresentação do projeto, destaque de receitas e categorias.
- **Página de Receitas:** Cards dinâmicos com imagem, tempo, dificuldade e descrição.
- **Navegação:** Menu fixo com links para Início, Receitas e outras seções.
- **Responsivo:** Visual bonito em qualquer dispositivo.
- **Imagens:** Todas as imagens devem ser colocadas na pasta `public/` com os nomes corretos.

## 📦 Como rodar o projeto

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Rode o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
3. Acesse no navegador:
   ```
   http://localhost:5173
   ```
   (ou a porta informada no terminal)

## 📝 Como adicionar receitas

- Edite o arquivo `src/Recipes.jsx` e adicione objetos ao array `recipes`.
- Coloque a imagem correspondente na pasta `public/`.

## 💡 Dicas

- Para gerar imagens de receitas, você pode usar IA gratuita como Bing Image Creator, Mage.Space, Leonardo.Ai, etc.
- O projeto pode ser facilmente expandido para incluir cadastro de usuários, comentários, favoritos e muito mais!

---

Feito com carinho para quem ama cozinhar! 👨‍🍳👩‍🍳
