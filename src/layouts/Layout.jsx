import Footer from "../components/general/Footer";
import NavBar from "../components/general/NavBar";
import Hero from "../components/Home/Hero";
import Experience from "../components/Home/Experience";
import ProyectsWrapper from "../components/general/ProyectsWrapper";
import "../styles/style.css";
import { info } from "../data/info";

export default function Layout ( {currentLanguage, handleLanguageChange} ) {
  const experienceENG = info.experience.map(item => item.ENG);
  const experienceESP = info.experience.map(item => item.ESP);
  const educationENG = info.education.map(item => item.ENG);
  const educationESP = info.education.map(item => item.ESP);

  const featureProjects = info.projects.reduce((accumulator, project) => {
    if (accumulator.length < 6 && project[currentLanguage].isFeatured) {
      accumulator.push(project[currentLanguage]);
    }
    return accumulator;
  }, []);
  
  

  function languageSwitch(spanish, english) {
    return currentLanguage === "ESP" ? spanish : english;
  }  

  return (
    <div>
      <NavBar currentLanguage={currentLanguage} handleLanguageChange={handleLanguageChange}/>
      <main className="container">
      <Hero currentLanguage={currentLanguage}/>
      <Experience title={languageSwitch('EXPERIENCIA', 'EXPERIENCE')} details={languageSwitch(experienceESP, experienceENG)} currentLanguage={currentLanguage} isEducation={false}/>
        <Experience title={languageSwitch('EDUCACIÓN', 'EDUCATION')} id="experience" details={languageSwitch(educationESP, educationENG)} currentLanguage={currentLanguage} isEducation={true}/>
      <section>
        <h2 class="w-[15rem] dark:text-light mt-16">FEATURE PROJECTS</h2>
        <ProyectsWrapper projects={featureProjects} currentLanguage={currentLanguage} />
      </section>
      </main>
      <Footer />
    </div>
  );
};
