"use client";
import { createContext, useContext, useState, type ReactNode } from "react";
import type { FavoriteProps } from "@/types/experience";
const FavoritesContext = createContext<FavoriteProps | null>(null);
export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);
  function onToggleFavorite(id: string) {
    setFavoriteIds((current) =>
      current.includes(id)
        ? current.filter((saved) => saved !== id)
        : [...current, id],
    );
  }
  return (
    <FavoritesContext.Provider value={{ favoriteIds, onToggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}
// Context transports the root useState through Next's route boundary; cards receive props.
export function useFavorites(): FavoriteProps {
  const state = useContext(FavoritesContext);
  if (!state) throw new Error("useFavorites must be inside FavoritesProvider");
  return state;
}
