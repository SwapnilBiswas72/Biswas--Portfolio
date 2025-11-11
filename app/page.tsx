import Hero from './(site)/sections/Hero'
import About from './(site)/sections/About'
import Education from './(site)/sections/Education'
import Experience from './(site)/sections/Experience'
import Publications from './(site)/sections/Publications'
import ResearchInterests from './(site)/sections/ResearchInterests'
import Honors from './(site)/sections/Honors'
import Projects from './(site)/sections/Projects'
import Skills from './(site)/sections/Skills'
import Extracurricular from './(site)/sections/Extracurricular'
import ContactSection from './(site)/sections/Contact'

export default function Page(){
  return (
    <main>
      <Hero/>
      <div className="container">
        <About/>
        <Education/>
        <Experience/>
        <Publications/>
        <ResearchInterests/>
        <Projects/>
        <Skills/>
        <Honors/>
        <Extracurricular/>
        <ContactSection/>
      </div>
    </main>
  )
}