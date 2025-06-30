import React from 'react';
import Banner from './Banner';
import About from './About';
import SkillsSection from './skillsSection';
import Education from './Education';
import Projects from './Projects';
import Contact from './Contact';

const Home = () => {
    return (
        <div className='bg-base-200'>
            <section id="home">
                <Banner />
            </section>

            <section id="about">
                <About />
            </section>

            <section id="skills">
                <SkillsSection />
            </section>

            <section id="education">
                <Education />
            </section>

            <section id="projects">
                <Projects />
            </section>

            <section id="contact">
                <Contact />
            </section>
        </div>
    );
};

export default Home;
