"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { experiences } from "@/data/experiences";
import {
  filterExperiences,
  type ExperienceFilters,
} from "@/lib/filter-experiences";
export function useFilters() {
  const params = useSearchParams();
  const pathname = usePathname();
  const filters: ExperienceFilters = {
    search: params.get("search") ?? "",
    category: params.get("category") ?? "",
    destination: params.get("destination") ?? "",
  };
  function updateFilter(key: keyof ExperienceFilters, value: string) {
    // Read the latest URL, including edits made in the same render cycle.
    const next = new URLSearchParams(window.location.search);
    if (value) next.set(key, value);
    else next.delete(key);
    const query = next.toString();
    window.history.replaceState(
      null,
      "",
      `${pathname}${query ? `?${query}` : ""}`,
    );
  }
  function clearFilters() {
    window.history.replaceState(null, "", pathname);
  }
  return {
    filters,
    results: filterExperiences(experiences, filters),
    updateFilter,
    clearFilters,
  };
}
