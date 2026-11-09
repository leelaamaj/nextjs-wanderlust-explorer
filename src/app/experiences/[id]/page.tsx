import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { experiences } from "@/data/experiences";
import { DetailContent } from "@/components/DetailContent";
type Props = { params: Promise<{ id: string }> };
export function generateStaticParams() {
  return experiences.map(({ id }) => ({ id }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const experience = experiences.find((item) => item.id === id);
  return { title: experience?.title ?? "Experience not found" };
}
export default async function DetailPage({ params }: Props) {
  const { id } = await params;
  const experience = experiences.find((item) => item.id === id);
  if (!experience) notFound();
  return <DetailContent experience={experience} />;
}
