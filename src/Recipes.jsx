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
              <span className="recipe-difficulty">🍳 {recipe.difficulty}</span>
            </div>
            <button className="btn-primary">Ver Receita</button>
          </div>
        </div>
      ))}
    </div>
  </main>
);

export default Recipes;