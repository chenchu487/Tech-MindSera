import Hero from "../components/Hero/Hero";
import ServicesOverview from "../components/ServicesOverview/ServicesOverview";
import WhyChooseUs from "../components/WhyChooseus/WhyChooseUs.jsx";
import HowWeWork from "../components/How-we-work/HowWeWork.jsx";
import StudyAbroad from "../components/Study-Abroad/StudyAbroad.jsx";
import ProjectsInternships from "../components/Projects-Internships/ProjectsInternships.jsx";
import Stats from "../components/stats/Stats.jsx";
import Testimonials from "../components/testimonials/Testimonials.jsx";
import FinalCTA from "../components/Final-CTA/FinalCTA.jsx";


function App() {

  return (
    <>
      <Hero />
      <ServicesOverview />
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

export default App
