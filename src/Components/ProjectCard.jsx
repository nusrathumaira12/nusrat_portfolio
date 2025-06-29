import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
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
  tech = [],
  liveLink,
  githubLink,
  images = [],
}) => {
  return (
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
        <p className="text-gray-700 mb-3">{description}</p>

        {Array.isArray(features) && features.length > 0 && (
          <div className="mb-3">
            <h4 className="text-sm font-semibold text-gray-800">Main Features:</h4>
            <ul className="list-disc list-inside text-gray-600 text-sm mt-1 space-y-1">
              {features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        {Array.isArray(tech) && tech.length > 0 && (
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
        )}

        <div className="space-x-4">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          >
            Live Site
          </a>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-900"
          >
            GitHub
          </a>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-amber-500 text-white rounded hover:bg-gray-900"
          >
           Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
