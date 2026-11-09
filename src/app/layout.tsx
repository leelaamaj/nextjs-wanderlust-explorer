import type { Metadata } from "next";
import { FavoritesProvider } from "@/components/FavoritesProvider";
import { Navbar } from "@/components/Navbar";
import "./globals.css";
export const metadata: Metadata = {
  title: {
    default: "Wanderlust — Find your next great story",
    template: "%s | Wanderlust",
  },
  description:
    "Discover 100 fictional travel experiences, share your filters, and save your favorites.",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <FavoritesProvider>
          <Navbar />
          <main id="main" className="page-shell">
            {children}
          </main>
          <footer className="site-footer">
            <span>Wanderlust Labs</span>
            <span>A world worth exploring. A coursework demo.</span>
          </footer>
        </FavoritesProvider>
      </body>
    </html>
  );
}
