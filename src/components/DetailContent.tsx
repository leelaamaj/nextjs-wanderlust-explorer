"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Experience } from "@/types/experience";
import { useFavorites } from "./FavoritesProvider";
import { FavoriteButton } from "./ExperienceCard";
import { PinIcon } from "./Icons";
export function DetailContent({ experience }: { experience: Experience }) {
  const favorites = useFavorites();
  useEffect(() => {
    document.title = `${experience.title} | Wanderlust`;
  }, [experience.title]);
  return (
    <>
      <Link className="text-link back-link" href="/experiences">
        Back to experiences
      </Link>
      <section className="detail-heading">
        <div>
          <p className="category">{experience.category}</p>
          <h1>{experience.title}</h1>
          <p className="location">
            <PinIcon />
            {experience.destination}
            <span className="star">★</span> {experience.rating.toFixed(1)}
          </p>
        </div>
        <div className="detail-save">
          <FavoriteButton experience={experience} {...favorites} />
          <span>Save experience</span>
        </div>
      </section>
      <div className="detail-image">
        <Image
          src={experience.imageUrl}
          alt={`${experience.category} travel inspiration for ${experience.destination}`}
          fill
          sizes="90vw"
          priority
        />
      </div>
      <section className="detail-body">
        <div>
          <h2>A story worth stepping into.</h2>
          <p>{experience.description}</p>
          <h2>What makes it memorable</h2>
          <ul>
            {experience.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </div>
        <aside>
          <p className="detail-price">
            <strong>${experience.price}</strong> USD per person
          </p>
          <dl>
            <dt>Duration</dt>
            <dd>{experience.duration}</dd>
            <dt>Category</dt>
            <dd>{experience.category}</dd>
            <dt>Destination</dt>
            <dd>{experience.destination}</dd>
          </dl>
          <p className="muted">
            Fictional experience for discovery practice. Bookings are not
            offered in this demo.
          </p>
        </aside>
      </section>
    </>
  );
}
