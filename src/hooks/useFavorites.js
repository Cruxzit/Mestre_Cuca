import { useState, useEffect } from 'react'

const FAVORITES_KEY = 'mestre-cuca-favorites'

export function useFavorites() {
  const [favorites, setFavorites] = useState([])

  // Carregar favoritos do localStorage na inicialização
  useEffect(() => {
    try {
      const savedFavorites = localStorage.getItem(FAVORITES_KEY)
      if (savedFavorites) {
        setFavorites(JSON.parse(savedFavorites))
      }
    } catch (error) {
      console.error('Erro ao carregar favoritos:', error)
      setFavorites([])
    }
  }, [])

  // Salvar favoritos no localStorage sempre que a lista mudar
  useEffect(() => {
    try {
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites))
    } catch (error) {
      console.error('Erro ao salvar favoritos:', error)
    }
  }, [favorites])

  // Adicionar receita aos favoritos
  const addToFavorites = (recipeId) => {
    setFavorites(prev => {
      if (!prev.includes(recipeId)) {
        return [...prev, recipeId]
      }
      return prev
    })
  }

  // Remover receita dos favoritos
  const removeFromFavorites = (recipeId) => {
    setFavorites(prev => prev.filter(id => id !== recipeId))
  }

  // Toggle favorito (adiciona se não existe, remove se existe)
  const toggleFavorite = (recipeId) => {
    if (favorites.includes(recipeId)) {
      removeFromFavorites(recipeId)
    } else {
      addToFavorites(recipeId)
    }
  }

  // Verificar se uma receita está nos favoritos
  const isFavorite = (recipeId) => {
    return favorites.includes(recipeId)
  }

  // Obter todas as receitas favoritas
  const getFavoriteRecipes = (allRecipes) => {
    return allRecipes.filter(recipe => favorites.includes(recipe.id))
  }

  // Limpar todos os favoritos
  const clearFavorites = () => {
    setFavorites([])
  }

  return {
    favorites,
    addToFavorites,
    removeFromFavorites,
    toggleFavorite,
    isFavorite,
    getFavoriteRecipes,
    clearFavorites,
    favoritesCount: favorites.length
  }
}