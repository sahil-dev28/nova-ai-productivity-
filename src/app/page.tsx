import { Nav } from "@/components/layout/Nav";
import { Features } from "@/components/sections/Features";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Product } from "@/components/sections/Product";
import { TrustedBy } from "@/components/sections/TrustedBy";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main" className="flex-1">
        <Hero />
        <TrustedBy />
        <Features />
        <Product />
        <HowItWorks />
      </main>
    </>
  );
}
