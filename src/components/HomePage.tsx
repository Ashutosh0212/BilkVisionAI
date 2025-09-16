import { Hero } from "./Hero";
import { Industries } from "./Industries";
import { Features } from "./Features";
import { CTA } from "./CTA";

export function HomePage() {
  return (
    <main>
      <Hero />
      <Industries />
      <Features />
      <CTA />
    </main>
  );
}