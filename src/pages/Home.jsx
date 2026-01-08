import Hero from "../components/Hero/Hero";
import WhyChooseUs from "../components/WhyChooseus/WhyChooseUs";
import HowWeWork from "../components/How-we-work/HowWeWork";
import StudyAbroad from "../components/Study-Abroad/StudyAbroad";
import ProjectsInternships from "../components/Projects-Internships/ProjectsInternships";
import Stats from "../components/stats/Stats";
import Testimonials from "../components/testimonials/Testimonials";
import FinalCTA from "../components/Final-CTA/FinalCTA";


function Home() {

  return (
    <>
      <Hero />
      <StudyAbroad />
      <WhyChooseUs />
      <HowWeWork />
      <ProjectsInternships />
      <Stats />
      <Testimonials />
      <FinalCTA />
      
    </>
  )
}

export default Home
