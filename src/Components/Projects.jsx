import React from 'react';

import ProjectCard from "./ProjectCard";

const projectList = [
  {
    title: "Athlofy",
    description: "Athletic Event is a sports event booking platform with user authentication, protected routes, and booking restriction logic. Users can explore upcoming events, like top tips, and manage their bookings with toggle views.",
    aboutUs: "Athlofy is a user-focused sports event booking platform designed to streamline the way athletes and enthusiasts find, explore, and register for events. The platform was built to reduce the hassle of manual booking processes and instead offer a seamless, intuitive experience for users with various sporting interests.This web application enables users to view a curated list of upcoming athletic events, filter by location or event type, and book their spot with just a few clicks. Behind the scenes, Athlofy uses JWT-based authentication to ensure that only registered users can access protected features like booking history, event participation, and personalized dashboards.",
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
    aboutUs: "GreenTalks is a user-driven gardening platform where individuals can share eco-friendly tips, explore community insights, and manage their own content through a secure dashboard. Designed with sustainability in mind, the app supports tip uploads, real-time interactions, and role-based access control for admins and users. The platform’s clean, responsive interface is built with React, Tailwind CSS, Firebase, Express.js, and MongoDB. Authenticated users can contribute personalized gardening advice, while admins moderate content through a dynamic dashboard. Key features include protected routes, user-specific views, and image upload optimization. Challenges like managing role-specific routes and handling secure interactions were tackled using Firebase listeners and JWT logic. The project promotes collaboration in a green-focused community while ensuring security and usability. GreenTalks serves as a vibrant hub for nature enthusiasts and beginners looking to grow their gardening knowledge while engaging in a shared digital ecosystem.",
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
    aboutUs: "FusionSphere is a sleek, modern platform for discovering and booking tech events such as hackathons, webinars, and developer meetups. It features powerful search capabilities, booking protection (preventing duplicate registrations), and toggleable layout views (card or table) for managing personal bookings. Users can explore events by name or location and securely access private routes using JWT-based authentication. Built with React, Tailwind CSS, Firebase, Framer Motion, Express.js, and MongoDB, FusionSphere combines smooth animations with high performance and responsive design. The platform's booking system ensures clarity and a great user experience by restricting duplicate bookings and supporting real-time updates. Challenges included route protection, layout toggling, and syncing user sessions, all handled with clean code structure and reusable components. FusionSphere empowers tech lovers to stay connected with upcoming opportunities in the developer ecosystem while offering a polished and reliable user experience.",
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