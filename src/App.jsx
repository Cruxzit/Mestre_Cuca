import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FavoritesProvider } from './context/FavoritesContext';

import Header from './components/Header';
import Home from './Home';
import Recipes from './Recipes';
import RecipeDetalhes from './RecipeDetalhes';
import Favorites from './Favorites';
import Contact from './Contact';
import Categorias from './Categorias';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <FavoritesProvider>
      <Router>
        <Header />
        <div className="main-content">
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/receitas" element={<Recipes />} />
          <Route path="/receitas/:id" element={<RecipeDetalhes />} />
          <Route path="/categorias" element={<Categorias />} />
          <Route path="/favoritos" element={<Favorites />} />
          <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </FavoritesProvider>
  );
}

export default App;