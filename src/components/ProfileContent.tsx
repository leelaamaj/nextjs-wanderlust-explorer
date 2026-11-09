"use client";
import Link from "next/link";
import { useFavorites } from "./FavoritesProvider";
import { ArrowIcon } from "./Icons";
export function ProfileContent() {
  const { favoriteIds } = useFavorites();
  return (
    <>
      <div className="page-intro">
        <h1>
          A little about you<span className="accent">.</span>
        </h1>
        <p>Every great story starts with a curious traveler.</p>
      </div>
      <section className="profile-panel">
        <div className="avatar" aria-hidden="true">
          JT
        </div>
        <div>
          <p className="category">Demo traveler profile</p>
          <h2>Jordan Taylor</h2>
          <p>Miami, United States</p>
          <p>
            Weekend wanderer. Market explorer. Always taking the scenic route.
          </p>
        </div>
      </section>
      <section className="saved-summary">
        <div>
          <h2>Your collection, so far.</h2>
          <p>
            <strong className="saved-count">{favoriteIds.length}</strong> saved{" "}
            {favoriteIds.length === 1 ? "experience" : "experiences"}
          </p>
          <p>
            Favorites stay with you as you explore. Refreshing the page starts a
            fresh collection.
          </p>
        </div>
        <Link className="button" href="/favorites">
          See your favorites <ArrowIcon />
        </Link>
      </section>
    </>
  );
}
