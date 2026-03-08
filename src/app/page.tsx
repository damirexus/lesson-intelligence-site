import { StickyNav } from "@/components/layout/StickyNav";
import { AboutSection } from "@/components/sections/AboutSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { LayersSection } from "@/components/sections/LayersSection";
import { PracticeSection } from "@/components/sections/PracticeSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { SignupSection } from "@/components/sections/SignupSection";
import { WhatIsLifSection } from "@/components/sections/WhatIsLifSection";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[100] focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:text-brand-navy"
      >
        Skip to content
      </a>
      <StickyNav />
      <main id="main-content" className="bg-gradient-to-b from-brand-bg to-brand-gradientEnd">
        <ScrollReveal initiallyVisible>
          <HeroSection />
        </ScrollReveal>
        <ScrollReveal>
          <ProblemSection />
        </ScrollReveal>
        <ScrollReveal>
          <WhatIsLifSection />
        </ScrollReveal>
        <ScrollReveal>
          <LayersSection />
        </ScrollReveal>
        <ScrollReveal>
          <PracticeSection />
        </ScrollReveal>
        <ScrollReveal>
          <AboutSection />
        </ScrollReveal>
        <ScrollReveal>
          <FaqSection />
        </ScrollReveal>
        <ScrollReveal>
          <SignupSection />
        </ScrollReveal>
      </main>
      <FooterSection />
    </>
  );
}
