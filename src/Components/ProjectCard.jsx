import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";

const techColors = {
  React: "border-cyan-500 text-cyan-600",
  "Tailwind CSS": "border-blue-400 text-blue-500",
  Firebase: "border-yellow-400 text-yellow-500",
  MongoDB: "border-green-500 text-green-600",
  Redux: "border-purple-500 text-purple-600",
};

const ProjectCard = ({
  title,
  features,
  description,
  aboutUs,
  tech = [],
  liveLink,
  githubLink,
  images = [],
  challenges = "Handling JWT auth, responsive layout with Swiper, and conditional booking restriction logic."
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const backdrop = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modal = {
    hidden: { opacity: 0, scale: 0.75, y: "-50%" },
    visible: { opacity: 1, scale: 1, y: "-50%" },
  };

  return (
    <>
      <div className="flex flex-col-reverse md:flex-row gap-8 items-center mb-12">
        {/* LEFT: Screenshot Carousel */}
        <div className="w-full md:w-1/2">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            loop={true}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            spaceBetween={20}
            slidesPerView={1}
            className="rounded-lg shadow"
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img}
                  alt={`${title} Screenshot ${index + 1}`}
                  className="rounded"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* RIGHT: Text Content */}
        <div className="w-full md:w-1/2 pl-2">
          <h3 className="text-2xl font-bold text-black mb-2">{title}</h3>
          <p className="text-gray-700 mb-3">{description.slice(0, 100)}...</p>

          <div className="mb-3">
            <h4 className="text-sm font-semibold text-gray-800">Main Features:</h4>
            <ul className="list-disc list-inside text-gray-600 text-sm mt-1 space-y-1">
              {features.slice(0, 2).map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {tech.map((item, index) => (
              <span
                key={index}
                className={`px-3 py-1 text-sm rounded-full border ${
                  techColors[item] || "border-gray-300 text-gray-600"
                }`}
              >
                {item}
              </span>
            ))}
          </div>

          <div className="space-x-4">
            <a href={liveLink} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">Live Site</a>
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-900">GitHub</a>
            <button onClick={() => setIsOpen(true)} className="px-4 py-2 bg-amber-500 text-white rounded hover:bg-amber-600">Details</button>
          </div>
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div className="fixed inset-0 bg-black bg-opacity-50 z-50" variants={backdrop} initial="hidden" animate="visible" exit="hidden" onClick={() => setIsOpen(false)} />

            <div className="fixed inset-0 flex items-center justify-center z-50">
              <motion.div
                className="w-[95%] max-w-4xl bg-white rounded-xl shadow-lg p-6 pt-8 mt-190 max-h-[90vh] overflow-y-auto"
                variants={modal}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="pt-4 space-y-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-3xl font-bold">{title}</h3>
                    <button onClick={() => setIsOpen(false)} className="text-red-500 text-2xl font-bold">✖</button>
                  </div>

                  <p className="text-gray-700 leading-relaxed">{description}</p>
                  <p className="text-gray-700 leading-relaxed"><strong>About {title} </strong> <br /> {aboutUs}</p>

                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">Main Features</h4>
                    <ul className="list-disc ml-6 space-y-1 text-gray-700 text-sm">
                      {features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">Challenges Faced</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{challenges}</p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2 text-sm">
                      {tech.map((t, i) => (
                        <span key={i} className={`bg-gray-100 px-3 py-1 rounded-full border ${techColors[t] || ""}`}>{t}</span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Screenshots</h4>
                    <div className="space-y-4">
                      {images.map((img, i) => (
                        <img
                          key={i}
                          src={img}
                          alt={`Screenshot ${i + 1}`}
                          className="rounded-lg border w-full max-h-[400px] object-cover"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-end gap-4 pt-4 border-t">
                    <a href={liveLink} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">Live Site</a>
                    <a href={githubLink} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-900">GitHub</a>
                    <button onClick={() => setIsOpen(false)} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Close</button>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;
