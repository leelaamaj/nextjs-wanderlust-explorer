"use client";
import { useFilters } from "@/hooks/useFilters";
import { useFavorites } from "./FavoritesProvider";
import { SearchBar } from "./SearchBar";
import { FilterBar } from "./FilterBar";
import { ExperienceGrid } from "./ExperienceGrid";
export function Explorer() {
  const { filters, results, updateFilter, clearFilters } = useFilters();
  const favorites = useFavorites();
  const filtered = Boolean(
    filters.search || filters.category || filters.destination,
  );
  return (
    <>
      <div className="page-intro">
        <h1>
          Find your next great story<span className="accent">.</span>
        </h1>
        <p>Extraordinary experiences. A world of possibilities.</p>
      </div>
      <SearchBar filters={filters} updateFilter={updateFilter} />
      <FilterBar
        category={filters.category}
        onChange={(value) => updateFilter("category", value)}
      />
      <div className="results-heading">
        <h2 aria-live="polite">
          {results.length} {results.length === 1 ? "experience" : "experiences"}{" "}
          to explore
        </h2>
        {filtered && (
          <button className="text-button" onClick={clearFilters}>
            Clear filters
          </button>
        )}
      </div>
      <ExperienceGrid items={results} {...favorites} />
    </>
  );
}
