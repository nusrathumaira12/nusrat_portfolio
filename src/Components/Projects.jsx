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
  {
    title: "FusionSphere",
    description: "FusionSphere is a local event discovery platform where users can explore upcoming events, view details, and make bookings. With authentication and secure booking system, FusionSphere makes finding and attending events easy and seamless..",
    features: [
        "  🔍 Search Events by Name or Location",
        " 🔒 JWT-Protected Private Routes",
        "  🎛️ Toggle Between Card and Table View in Bookings " 
    ],

    tech: ["React","JWt" ,"Tailwind CSS", "Framer Motion" ,"Firebase","Express", "MongoDB"],
    liveLink: "https://quiet-kataifi-5abe2a.netlify.app/",
    githubLink: " https://github.com/nusrathumaira12/event-explorer",
    images: [
      "/images/fusion1.png",
      "/images/fusion2.png",
      "/images/fusion3.png",
      
      
    ],
  },
];


const Projects = () => {
    return (
        <section className="py-16 px-4 bg-base-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-15">My Projects</h2>
        {projectList.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
    );
};

export default Projects;