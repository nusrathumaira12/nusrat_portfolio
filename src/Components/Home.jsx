import React from 'react';
import Banner from './Banner';
import About from './About';
import SkillsSection from './skillsSection';
import Education from './Education';
import Projects from './Projects';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
           <About></About>
           <SkillsSection></SkillsSection>
           <Education></Education>
           <Projects></Projects>
        </div>
    );
};

export default Home;