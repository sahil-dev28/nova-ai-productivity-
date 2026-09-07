import { Nav } from "@/components/layout/Nav";
import { Hero } from "@/components/sections/Hero";
import { TrustedBy } from "@/components/sections/TrustedBy";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main" className="flex-1">
        <Hero />
        <TrustedBy />
      </main>
    </>
  );
}
