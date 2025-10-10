# 🚀 Mestre Cuca — React + Vite

![React](https://img.shields.io/badge/React-19.1.1-61dafb?logo=react)
![Vite](https://img.shields.io/badge/Vite-7.1.7-646cff?logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.14-38bdf8?logo=tailwindcss)
![React Router](https://img.shields.io/badge/React%20Router-7.9.3-ca4245?logo=reactrouter)

Um pequeno site de receitas construído com React e Vite. Rápido, simples e fácil de estender.

## Tecnologias principais

- React 19
- Vite
- Tailwind CSS (configuração presente como dependência dev)
- React Router DOM

## Estrutura rápida do projeto

```
mestre_cuca/
├── public/             # Imagens e assets estáticos
├── src/                # Código fonte React
│   ├── components/     # Componentes reutilizáveis
│   ├── hooks/          # Hooks personalizados
│   └── data/           # Dados estáticos (receitas)
├── package.json
└── README.md
```

## Funcionalidades

- Página inicial com destaques
- Listagem e página de detalhes das receitas
- Favoritos persistidos no localStorage
- Formulário de contacto com persistência de rascunho

## Como começar (local)

1. Instalar dependências:

```bash
npm install
```

2. Executar em modo desenvolvimento (com hot-reload):

```bash
npm run dev
```

3. Construir para produção:

```bash
npm run build
```

4. Visualizar build localmente:

```bash
npm run preview
```

5. Lint (verificação de estilo/erros):

```bash
npm run lint
```

URL local padrão no dev: http://localhost:5173

## Como adicionar receitas

- Edite o ficheiro `src/data/recipes.js` e adicione um novo objeto de receita.
- Coloque a imagem correspondente dentro de `public/` e use o nome do ficheiro nas propriedades da receita.

## Contribuição

Contribuições são bem-vindas! Sugestões:

1. Abra uma issue descrevendo a sua proposta ou bug.
2. Crie um branch com um nome descritivo: `feature/minha-nova-funcionalidade`.
3. Faça commits pequenos e claros. Exemplo de mensagens:
   - `feat(categorias): adicionar página de categorias`
   - `fix(contact): corrigir validação do formulário`
4. Abra um Pull Request para `main` e peça revisão.

## Licença

Este repositório não contém uma licença explícita (ver `LICENSE`). Se pretende partilhar sob uma licença, eu posso adicionar uma (MIT, Apache-2.0, etc.).

---

Feito com paixão para quem adora cozinhar! �‍🍳�‍🍳
