import AboutMe from "./components/home/about-me"
import Contact from "./components/home/contact"
import Education from "./components/home/education"
import Skills from "./components/home/skills"
import ExperienceSec from "./components/home/experience-sec"
import HeroSection from "./components/home/hero-section"
import ContactBar from "./components/home/hero-section/contact-bar"
import LatestWork from "./components/home/latest-work"
import Gallery from "./components/home/gallery"
import Certifications from "./components/home/certifications"

const page = () => {
  return (
    <>
      <main>
        <HeroSection />
        <ContactBar />
        <AboutMe />
        <ExperienceSec />
        <Education />
        <Skills />
        <LatestWork />
        <Gallery />
        <Certifications />
        <Contact />
      </main>
    </>
  )
}

export default page