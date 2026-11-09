"use client";
import { experiences } from "@/data/experiences";
import { useFavorites } from "./FavoritesProvider";
import { ExperienceGrid } from "./ExperienceGrid";
export function FavoritesContent() {
  const favorites = useFavorites();
  const saved = experiences.filter((experience) =>
    favorites.favoriteIds.includes(experience.id),
  );
  return (
    <>
      <div className="page-intro">
        <h1>
          Your next chapter<span className="accent">.</span>
        </h1>
        <p>All the experiences you want to come back to.</p>
      </div>
      <div className="results-heading">
        <h2 aria-live="polite">
          {saved.length} saved{" "}
          {saved.length === 1 ? "experience" : "experiences"}
        </h2>
      </div>
      <ExperienceGrid
        items={saved}
        {...favorites}
        emptyTitle="Your wishlist starts here"
        emptyMessage="Tap the heart on an experience to save a little inspiration for later."
      />
    </>
  );
}
