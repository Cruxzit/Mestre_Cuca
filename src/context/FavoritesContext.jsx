import React, { createContext, useState, useEffect } from 'react'

const FAVORITES_KEY = 'mestre-cuca-favorites'

export const FavoritesContext = createContext(null)

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    try {
      const saved = localStorage.getItem(FAVORITES_KEY)
      if (saved) setFavorites(JSON.parse(saved))
    } catch (e) {
      console.error('Erro ao carregar favoritos do localStorage', e)
    }
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites))
    } catch (e) {
      console.error('Erro ao salvar favoritos no localStorage', e)
    }
  }, [favorites])

  const addToFavorites = (id) => setFavorites(prev => prev.includes(id) ? prev : [...prev, id])
  const removeFromFavorites = (id) => setFavorites(prev => prev.filter(x => x !== id))
  const toggleFavorite = (id) => setFavorites(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id])
  const isFavorite = (id) => favorites.includes(id)
  const getFavoriteRecipes = (allRecipes) => allRecipes.filter(r => favorites.includes(r.id))
  const clearFavorites = () => setFavorites([])

  return (
    <FavoritesContext.Provider value={{
      favorites,
      addToFavorites,
      removeFromFavorites,
      toggleFavorite,
      isFavorite,
      getFavoriteRecipes,
      clearFavorites,
      favoritesCount: favorites.length
    }}>
      {children}
    </FavoritesContext.Provider>
  )
}
