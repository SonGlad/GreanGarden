import { Header } from "./Header/Header";
import { SectionHero, SectionAbout, SectionContact, SectionWorks, SectionServices } from "./Section/Section";
import { Container } from "./Container/Container";
import { HeroSection } from "./HeroSection/Hero";
import { Services } from "./ServicesSection/Services";
import { About } from "./AboutSection/About";
import { Works } from "./WorksSection/Works";
import { Contact } from "./ContactSection/Contac";
import { Footer } from "./Footer/Footer";
import { useRef } from "react";


export const App = () => {
  const heroSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const serviceskSectionRef = useRef(null);
  const contactSectionRef = useRef(null);
  const workSectionRef = useRef(null);


  return (
    <>
      <Header
        heroSectionRef={heroSectionRef}
        aboutSectionRef={aboutSectionRef}
        serviceskSectionRef={serviceskSectionRef}
        contactSectionRef={contactSectionRef}
        workSectionRef ={workSectionRef }
      />
      <SectionHero 
        propsId={'HeroSection'}
        heroSectionRef={heroSectionRef}
      >
        <Container>
          <HeroSection/>
        </Container>
      </SectionHero>
      <SectionServices
        propsId={'ServiceSection'}
        serviceskSectionRef={serviceskSectionRef}
      >
        <Container>
          <Services/>
        </Container>
      </SectionServices>
      <SectionAbout
        propsId={'AboutSection'}
        aboutSectionRef={aboutSectionRef}
      >
        <Container>
          <About/>
        </Container>
      </SectionAbout>
      <SectionWorks
        propsId={'WorksSection'}
        workSectionRef={workSectionRef}
      >
        <Container>
          <Works/>
        </Container>
      </SectionWorks>
      <SectionContact
        propsId={'ContactSection'}
        contactSectionRef ={contactSectionRef }
      >
        <Container>
          <Contact/>
        </Container>
      </SectionContact>
      <Footer/>
    </>
  );
}

