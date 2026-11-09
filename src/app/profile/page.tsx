import type { Metadata } from "next";
import { ProfileContent } from "@/components/ProfileContent";
export const metadata: Metadata = { title: "Your profile" };
export default function ProfilePage() {
  return <ProfileContent />;
}
