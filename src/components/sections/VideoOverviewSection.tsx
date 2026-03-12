import { Container } from "@/components/layout/Container";

export function VideoOverviewSection() {
  return (
    <section id="video-overview" aria-labelledby="video-overview-heading" className="bg-brand-bg py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="mx-auto max-w-4xl text-left">
          <h2
            id="video-overview-heading"
            className="font-display text-[2rem] uppercase leading-[1.08] tracking-[0.03em] text-brand-navy sm:text-[2.5rem]"
          >
            Watch the 2' LIF Video Overview
          </h2>
          <p className="mt-5 text-[1.03rem] leading-8 text-brand-muted sm:text-[1.15rem]">
            Prefer a quick explanation? Watch a short walkthrough of the Lesson Intelligence Framework before downloading
            the guide.
          </p>
        </div>

        <div className="video-container">
          <video controls preload="none" playsInline poster="/assets/LIF_coverImage.jpeg">
            <source src="/assets/LIF_video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </Container>
    </section>
  );
}
