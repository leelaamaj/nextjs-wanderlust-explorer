import type { Metadata } from "next";
import { FavoritesContent } from "@/components/FavoritesContent";
export const metadata: Metadata = { title: "Your favorites" };
export default function FavoritesPage() {
  return <FavoritesContent />;
}
