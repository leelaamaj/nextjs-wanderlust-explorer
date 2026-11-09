import type { Experience } from "@/types/experience";
export interface ExperienceFilters {
  search: string;
  category: string;
  destination: string;
}
/** Escape metacharacters so user text remains a safe, case-insensitive regex. */
export function filterExperiences(
  items: Experience[],
  filters: ExperienceFilters,
): Experience[] {
  const escaped = filters.search.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const titlePattern = new RegExp(escaped, "i");
  return items.filter(
    (item) =>
      titlePattern.test(item.title) &&
      (!filters.category ||
        item.category.toLowerCase() === filters.category.toLowerCase()) &&
      (!filters.destination ||
        item.destination
          .toLowerCase()
          .includes(filters.destination.trim().toLowerCase())),
  );
}
