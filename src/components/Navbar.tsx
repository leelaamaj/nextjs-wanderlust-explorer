"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CompassIcon } from "./Icons";
export function Navbar() {
  const pathname = usePathname();
  return (
    <header className="site-header">
      <div className="nav-wrap">
        <Link className="brand" href="/" aria-label="Wanderlust home">
          <CompassIcon />
          wanderlust
        </Link>
        <nav aria-label="Main navigation">
          {[
            ["/", "Home"],
            ["/experiences", "Explore"],
            ["/favorites", "Favorites"],
            ["/profile", "Profile"],
          ].map(([href, label]) => {
            const active =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
