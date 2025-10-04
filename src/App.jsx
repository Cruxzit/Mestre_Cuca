
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './Home';
import Recipes from './Recipes';
import RecipeDetalhes from './RecipeDetalhes';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
  <Route path="/receitas" element={<Recipes />} />
  <Route path="/receitas/:id" element={<RecipeDetalhes />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
