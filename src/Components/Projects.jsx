import React from 'react';

import ProjectCard from "./ProjectCard";

const projectList = [
  {
    title: "Athlofy",
    description: "Athletic Event is a sports event booking platform with user authentication, protected routes, and booking restriction logic. Users can explore upcoming events, like top tips, and manage their bookings with toggle views.",
    features: [
        "JWT-based user authentication and authorization",
        "Real-time event filtering and search",
      ],
      tech: ["React","JWt" , "Express" ,"Tailwind CSS", "Firebase", "MongoDB"],

    liveLink: "https://athletic-event-2d384.web.app/",
    githubLink: "https://github.com/nusrathumaira12/athletic-event",
    images: [
      "/images/event1.png",
      "/images/event2.png",
      "/images/event3.png",
    ],
  },
  {
    title: "GreenTalks",
    description: "A gardening-focused web app with authentication, a dynamic user/admin dashboard, and secure backend integration. Users can upload personalized tips, manage content, and explore community-driven gardening advice.",
    features: [
        " Robust Authentication with Multiple Providers",
        " Comprehensive Protected Routes with Contextual Access",
        " User-Specific Dashboard " 
    ],

    tech: ["React","JWt" ,"Tailwind CSS", "Firebase","Express", "MongoDB"],
    liveLink: "https://gardening-auth-project.web.app/",
    githubLink: "https://github.com/nusrathumaira12/gardening-hub-auth",
    images: [
      "/images/green1.png",
      "/images/green2.png",
      "/images/green3.png",
      
    ],
  },
];


const Projects = () => {
    return (
        <section className="py-16 px-4 bg-base-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
        {projectList.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
    );
};

export default Projects;