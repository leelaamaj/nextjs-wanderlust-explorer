import { SearchIcon, PinIcon } from "./Icons";
import { experiences } from "@/data/experiences";
import type { ExperienceFilters } from "@/lib/filter-experiences";
const destinations = [
  ...new Set(experiences.map((experience) => experience.destination)),
].sort();
export function SearchBar({
  filters,
  updateFilter,
}: {
  filters: ExperienceFilters;
  updateFilter: (key: keyof ExperienceFilters, value: string) => void;
}) {
  const knownDestination = destinations.includes(filters.destination);
  return (
    <form
      className="search-row"
      onSubmit={(event) => event.preventDefault()}
      role="search"
    >
      <label className="input-wrap">
        <SearchIcon />
        <span className="sr-only">Search experiences</span>
        <input
          type="search"
          name="search"
          placeholder="Search experiences"
          value={filters.search}
          onChange={(event) => updateFilter("search", event.target.value)}
        />
      </label>
      <label className="input-wrap destination">
        <PinIcon />
        <span className="sr-only">Destination</span>
        <select
          name="destination"
          value={filters.destination}
          onChange={(event) => updateFilter("destination", event.target.value)}
        >
          <option value="">All destinations</option>
          {filters.destination && !knownDestination && (
            <option value={filters.destination}>{filters.destination}</option>
          )}
          {destinations.map((destination) => (
            <option key={destination} value={destination}>
              {destination}
            </option>
          ))}
        </select>
      </label>
      <button className="button" type="submit">
        Search
      </button>
    </form>
  );
}
