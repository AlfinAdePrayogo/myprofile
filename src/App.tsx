import { AboutSection } from "./components/sections/AboutSection";
import { ContactSection } from "./components/sections/ContactSection";
import { ExperienceSection } from "./components/sections/ExperienceSection";
import { Footer } from "./components/sections/Footer";
import { HeroSection } from "./components/sections/HeroSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { SkillsSection } from "./components/sections/SkillsSection";
import { TrustSection } from "./components/sections/TrustSection";
import { profile } from "./data/profile";

function App() {
  return (
    <div className="relative overflow-x-hidden">
      <HeroSection hero={profile.hero} stats={profile.stats} links={profile.socialLinks} />
      <main>
        <AboutSection about={profile.about} highlights={profile.highlights} />
        <SkillsSection skillGroups={profile.skillGroups} />
        <ExperienceSection experiences={profile.experiences} />
        <ProjectsSection projects={profile.projects} />
        <TrustSection testimonials={profile.testimonials} trustStats={profile.trustStats} />
        <ContactSection contact={profile.contact} />
      </main>
      <Footer footer={profile.footer} links={profile.socialLinks} />
    </div>
  );
}

export default App;
