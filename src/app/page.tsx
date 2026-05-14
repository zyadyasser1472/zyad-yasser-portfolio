import PortfolioHero from "@/components/ui/portfolio-hero";
import AboutSection from "@/components/ui/about-section";
import ProjectsSection from "@/components/ui/projects-section";

export default function Home() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@700&family=Antic&family=Great+Vibes&display=swap"
      />
      <main className="w-full">
        <PortfolioHero />
        <AboutSection />
        <ProjectsSection />
      </main>
    </>
  );
}
