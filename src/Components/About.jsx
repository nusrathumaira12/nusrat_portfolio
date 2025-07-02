import React from 'react';
import {
   FaBook, FaCode, FaUserCircle, FaHome, FaUserFriends
} from 'react-icons/fa';
import { GoGoal } from 'react-icons/go';
import { motion } from 'framer-motion';

// Card data
const cardData = [
  {
    icon: <FaUserCircle className="text-4xl text-amber-500" />,
    description:
      "I'm a passionate Web Developer from Bangladesh 🇧🇩. I specialize in building clean and responsive full-stack applications using MongoDB, Express.js, React, and Node.js. Ever since I realized how much I enjoy coding, I’ve never shied away from solving tough problems or learning something new.",
  },
  {
    icon: <FaBook className="text-4xl text-amber-500" />,
    description:
      "I’m currently learning Next.js and enjoy applying each new concept directly into my projects. This hands-on approach allows me to grasp ideas faster, retain them better, and apply them efficiently in real-world development situations that require practical thinking.",
  },
  {
    icon: <FaCode className="text-4xl text-amber-500" />,
    description:
      "I’m experienced in full-stack development with the MERN stack and love crafting modern UIs using Tailwind CSS. I work with Firebase for real-time features and authentication, and I use Framer Motion to add engaging animations. Writing clean, scalable, and maintainable code is my priority.",
  },
  {
    icon: <FaUserFriends className="text-4xl text-amber-500" />,
    description:
      "I’m naturally friendly, open-minded, and love working with others. I thrive in team environments where ideas are shared, feedback is valued, and success is celebrated together. Whether in tech or beyond, I enjoy building genuine connections, learning from others, and contributing to meaningful teamwork.",
  },
  {
    icon: <FaHome className="text-4xl text-amber-500" />,
    description:
      "Outside of coding, I enjoy collecting decor items. It inspires how I approach web design — I treat each webpage like my home, carefully decorating it with modern trends and creative touches, just like I would a cozy living space.",
  },
  {
    icon: <GoGoal className="text-4xl text-amber-500" />,
    description:
      "My goal is to become a proficient full-stack developer by continuously expanding my technical expertise through dedicated learning and persistent effort. I strive to master diverse technologies and contribute meaningfully to impactful projects while fostering growth within a collaborative and positive team environment.",
  },
];

// Card scroll animation variant
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <motion.section
      id="about"
      className="py-16 px-4 bg-base-200 md:pt-30 "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">About Me</h2>

        {/* Card Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cardData.map((card, index) => (
          <motion.div
          key={index}
          className="p-6 border border-gray-200 rounded-2xl shadow hover:shadow-lg transition-shadow will-change-transform "
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: index * 0.1 }}
        >
        
              <div className="mb-4">{card.icon}</div>
              <p className="text-gray-600 dark:text-white">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default About;
