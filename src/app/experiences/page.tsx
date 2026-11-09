import { Suspense } from "react";
import type { Metadata } from "next";
import { Explorer } from "@/components/Explorer";
export const metadata: Metadata = { title: "Explore experiences" };
export default function ExperiencesPage() {
  return (
    <Suspense fallback={<p role="status">Finding your next story…</p>}>
      <Explorer />
    </Suspense>
  );
}
