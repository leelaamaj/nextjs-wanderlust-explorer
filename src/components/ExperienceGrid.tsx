import Link from "next/link";
import type { Experience, FavoriteProps } from "@/types/experience";
import { ExperienceCard } from "./ExperienceCard";
export function ExperienceGrid({
  items,
  emptyTitle = "No results found",
  emptyMessage = "Try a different search, category, or destination.",
  ...favorites
}: {
  items: Experience[];
  emptyTitle?: string;
  emptyMessage?: string;
} & FavoriteProps) {
  return items.length ? (
    <div className="experience-grid">
      {items.map((experience) => (
        <ExperienceCard
          key={experience.id}
          experience={experience}
          {...favorites}
        />
      ))}
    </div>
  ) : (
    <div className="empty-state">
      <h2>{emptyTitle}</h2>
      <p>{emptyMessage}</p>
      <Link className="text-link" href="/experiences">
        Explore all experiences
      </Link>
    </div>
  );
}
