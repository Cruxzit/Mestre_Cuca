import { useContext } from 'react'
import { FavoritesContext } from '../context/FavoritesContext'

export function useFavorites() {
  const ctx = useContext(FavoritesContext)
  if (!ctx) {
    // Fornecer uma API de fallback para evitar erros se o provider não estiver presente    npm run dev
    return {
      favorites: [],
      addToFavorites: () => {},
      removeFromFavorites: () => {},
      toggleFavorite: () => {},
      isFavorite: () => false,
      getFavoriteRecipes: (all) => [],
      clearFavorites: () => {},
      favoritesCount: 0
    }
  }
  return ctx
}