import React from 'react'
import Hero from './Hero';
import Navbar from './Navbar';
import About from './About';
import Skills from './Skills/Skills';
import Educations from './Education/Educations';
import Experince from './Experience/Experience';
import Projects from './Projects/Projects';
import Certifications from './Certifications/Certifications';
import Achievements from './Achievement/Achievements';
import Contact from './Contact';

function Home() {
    return ( 
        <>
        <Navbar/>
        <Hero/>
        <About/>
        <Educations />
        <Skills />
        <Experince />
        <Projects />
        <Certifications/>
        <Achievements/>
        <Contact/>
        </>
     );
}

export default Home;