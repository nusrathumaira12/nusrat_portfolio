import React from 'react';
import Banner from './Banner';
import About from './About';
import SkillsSection from './skillsSection';
import Education from './Education';
import Projects from './Projects';
import Contact from './Contact';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
           <About></About>
           <SkillsSection></SkillsSection>
           <Education></Education>
           <Projects></Projects>
           <Contact></Contact>
        </div>
    );
};

export default Home;