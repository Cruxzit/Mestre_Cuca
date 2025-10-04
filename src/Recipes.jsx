import React from "react";

const recipes = [
  {
    id: 1,
    title: "Lasanha Bolonhesa",
    image: "/receita1.jpg",
    description: "Uma deliciosa lasanha com molho bolonhesa tradicional e queijo gratinado.",
    time: "1h 20min",
    difficulty: "Média",
  },
  {
    id: 2,
    title: "Risotto de Camarão",
    image: "/receita2.jpg",
    description: "Risotto cremoso com camarões frescos e toque de limão siciliano.",
    time: "50min",
    difficulty: "Fácil",
  },
  {
    id: 3,
    title: "Bolo de Chocolate",
    image: "/receita3.jpg",
    description: "Bolo fofinho de chocolate com cobertura cremosa.",
    time: "1h",
    difficulty: "Fácil",
  },
  {
    id: 4,
    title: "Frango Assado com Batatas",
    image: "/receita4.jpg",
    description: "Frango temperado no forno com batatas douradas.",
    time: "1h 30min",
    difficulty: "Fácil",
  },
  {
    id: 5,
    title: "Salmão Grelhado com Legumes",
    image: "/receita5.jpg",
    description: "Salmão grelhado com legumes salteados e molho de ervas.",
    time: "40min",
    difficulty: "Fácil",
  },
  {
    id: 6,
    title: "Bacalhau à Brás",
    image: "/receita6.jpg",
    description: "Clássico português de bacalhau desfiado com batata palha e ovo.",
    time: "45min",
    difficulty: "Média",
  },
  {
    id: 7,
    title: "Feijoada",
    image: "/receita7.jpg",
    description: "Feijoada tradicional com carnes de porco e enchidos.",
    time: "2h",
    difficulty: "Difícil",
  },
  {
    id: 8,
    title: "Sopa de Legumes",
    image: "/receita8.jpg",
    description: "Sopa nutritiva com legumes frescos.",
    time: "35min",
    difficulty: "Fácil",
  },
  {
    id: 9,
    title: "Pizza Margherita",
    image: "/receita9.jpg",
    description: "Pizza caseira com molho de tomate, mozzarella e manjericão.",
    time: "1h 15min",
    difficulty: "Média",
  },
  {
    id: 10,
    title: "Caril de Frango",
    image: "/receita10.jpg",
    description: "Frango suculento em molho de caril aromático.",
    time: "1h",
    difficulty: "Média",
  },
  {
    id: 11,
    title: "Panquecas Americanas",
    image: "/receita11.jpg",
    description: "Panquecas fofas servidas com mel ou xarope de ácer.",
    time: "25min",
    difficulty: "Fácil",
  },
  {
    id: 12,
    title: "Tiramisu",
    image: "/receita12.jpg",
    description: "Sobremesa italiana clássica com café e mascarpone.",
    time: "40min + 4h frio",
    difficulty: "Média",
  },
  {
    id: 13,
    title: "Polvo à Lagareiro",
    image: "/receita13.jpg",
    description: "Polvo assado no forno com azeite e batatas a murro.",
    time: "1h 40min",
    difficulty: "Difícil",
  },
  {
    id: 14,
    title: "Couscous de Legumes",
    image: "/receita14.jpg",
    description: "Prato leve de couscous com legumes salteados.",
    time: "30min",
    difficulty: "Fácil",
  },
  {
    id: 15,
    title: "Hambúrguer Caseiro",
    image: "/receita15.jpg",
    description: "Hambúrguer artesanal com carne fresca e pão brioche.",
    time: "45min",
    difficulty: "Fácil",
  },
  {
    id: 16,
    title: "Paella Valenciana",
    image: "/receita16.jpg",
    description: "Paella tradicional com frango, coelho e feijão-verde.",
    time: "1h 30min",
    difficulty: "Difícil",
  },
  {
    id: 17,
    title: "Quiche de Espinafres e Queijo",
    image: "/receita17.jpg",
    description: "Quiche cremosa com recheio de espinafres e queijo.",
    time: "1h",
    difficulty: "Média",
  },
  {
    id: 18,
    title: "Ratatouille",
    image: "/receita18.jpg",
    description: "Prato francês de legumes assados em camadas.",
    time: "1h 10min",
    difficulty: "Média",
  },
  {
    id: 19,
    title: "Arroz de Pato",
    image: "/receita19.jpg",
    description: "Arroz de pato tradicional gratinado no forno.",
    time: "1h 45min",
    difficulty: "Difícil",
  },
  {
    id: 20,
    title: "Crepes com Nutella",
    image: "/receita20.jpg",
    description: "Crepes finos recheados com Nutella e frutas.",
    time: "30min",
    difficulty: "Fácil",
  },
  {
    id: 21,
    title: "Chili com Carne",
    image: "/receita21.jpg",
    description: "Ensopado de carne moída com feijão e especiarias.",
    time: "1h 10min",
    difficulty: "Média",
  },
  {
    id: 22,
    title: "Panna Cotta",
    image: "/receita22.jpg",
    description: "Sobremesa italiana de natas com coulis de frutos vermelhos.",
    time: "20min + 3h frio",
    difficulty: "Fácil",
  },
];

const Recipes = () => (
  <main className="recipes-page">
    <h2 className="recipes-title">Receitas</h2>
    <div className="recipes-grid">
      {recipes.map((recipe) => (
        <div className="recipe-card" key={recipe.id}>
          <img src={recipe.image} alt={recipe.title} className="recipe-image" />
          <div className="recipe-info">
            <h3 className="recipe-name">{recipe.title}</h3>
            <p className="recipe-desc">{recipe.description}</p>
            <div className="recipe-meta">
              <span className="recipe-time">⏱ {recipe.time}</span>
              <span className="recipe-difficulty">Dificuldade: {recipe.difficulty}</span>
            </div>
            <button className="btn-primary">Ver Receita</button>
          </div>
        </div>
      ))}
    </div>
  </main>
);

export default Recipes;