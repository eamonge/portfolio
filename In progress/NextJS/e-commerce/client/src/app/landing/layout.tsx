import type { Metadata } from "next";
import LandingShell from "./LandingShell";

export const metadata: Metadata = {
  title: "Landing",
};

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LandingShell>
      {children}
    </LandingShell>
  );
}