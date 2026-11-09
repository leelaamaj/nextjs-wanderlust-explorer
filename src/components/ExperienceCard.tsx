import Image from "next/image";
import Link from "next/link";
import type { Experience, FavoriteProps } from "@/types/experience";
import { HeartIcon, PinIcon } from "./Icons";
export function FavoriteButton({
  experience,
  favoriteIds,
  onToggleFavorite,
}: { experience: Experience } & FavoriteProps) {
  const saved = favoriteIds.includes(experience.id);
  return (
    <button
      type="button"
      className={`heart ${saved ? "saved" : ""}`}
      aria-label={`${saved ? "Remove" : "Save"} ${experience.title}${saved ? " from favorites" : " to favorites"}`}
      aria-pressed={saved}
      onClick={() => onToggleFavorite(experience.id)}
    >
      <HeartIcon />
    </button>
  );
}
export function ExperienceCard({
  experience,
  ...favorites
}: { experience: Experience } & FavoriteProps) {
  return (
    <article className="experience-card">
      <div className="card-image">
        <Link
          href={`/experiences/${experience.id}`}
          aria-label={`View ${experience.title}`}
        >
          <Image
            src={experience.imageUrl}
            alt={`${experience.category} travel inspiration for ${experience.destination}`}
            fill
            sizes="(max-width: 640px) 90vw, (max-width: 1000px) 44vw, 29vw"
          />
        </Link>
        <FavoriteButton experience={experience} {...favorites} />
      </div>
      <div className="card-body">
        <span className="category">{experience.category}</span>
        <h3>
          <Link href={`/experiences/${experience.id}`}>{experience.title}</Link>
        </h3>
        <p className="location">
          <PinIcon />
          {experience.destination}
        </p>
        <div className="card-meta">
          <span>
            <span className="star" aria-label="Rating">
              ★
            </span>{" "}
            <strong>{experience.rating.toFixed(1)}</strong>
          </span>
          <span>
            <strong>${experience.price}</strong>{" "}
            <span className="price-unit">USD per person</span>
          </span>
        </div>
      </div>
    </article>
  );
}
