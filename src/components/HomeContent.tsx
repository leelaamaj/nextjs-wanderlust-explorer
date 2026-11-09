"use client";
import Link from "next/link";
import Image from "next/image";
import { experiences } from "@/data/experiences";
import { useFavorites } from "./FavoritesProvider";
import { ExperienceGrid } from "./ExperienceGrid";
import { ArrowIcon } from "./Icons";
export function HomeContent() {
  const favorites = useFavorites();
  return (
    <>
      <section className="home-hero">
        <div>
          <h1>
            Less ordinary.
            <br />
            More unforgettable<span className="accent">.</span>
          </h1>
          <p>
            From quiet corners to wide-open horizons. Find experiences that turn
            a trip into a story.
          </p>
          <Link className="button" href="/experiences">
            Explore experiences <ArrowIcon />
          </Link>
        </div>
        <div className="hero-image">
          <Image
            src="/images/adriatic.png"
            alt="A sailboat on the Adriatic near Dubrovnik at sunset"
            fill
            sizes="(max-width: 760px) 90vw, 48vw"
            priority
          />
          <span>Dubrovnik, Croatia</span>
        </div>
      </section>
      <section className="featured">
        <div className="section-heading">
          <div>
            <h2>Start somewhere extraordinary.</h2>
            <p>Three experiences to spark your next escape.</p>
          </div>
          <Link className="text-link" href="/experiences">
            View all experiences <ArrowIcon />
          </Link>
        </div>
        <ExperienceGrid items={experiences.slice(0, 3)} {...favorites} />
      </section>
    </>
  );
}
