import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs,
    FaGithub,
    FaFigma,
  } from "react-icons/fa";
  import {
    SiExpress,
    SiMongodb,
    SiFirebase,
    SiTailwindcss,
  } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
  
  const row1 = [
    { icon: <FaHtml5 size={60} color="#E34F26"/>, title: "HTML" },
    { icon: <FaCss3Alt size={60} color="#1572B6"/>, title: "CSS" },
    { icon: <FaJs size={60} color="#F7DF1E"/>, title: "JavaScript" },
    { icon: <FaReact size={60} color="#61DAFB"/>, title: "React" },
    { icon: <FaNodeJs size={60} color="	#339933"/>, title: "Node.js" },
    { icon: <SiExpress size={60} color="#000000"/>, title: "Express.js" },
  ];
  
  const row2 = [
    { icon: <SiMongodb size={60} color="#47A248"/>, title: "MongoDB" },
    { icon: <SiFirebase size={60} color="#FFCA28"/>, title: "Firebase" },
    { icon: <FaFigma size={60} color="#F24E1E"/>, title: "Figma" },
    { icon: <SiTailwindcss size={60} color="#38B2AC"/>, title: "Tailwind CSS" },
    { icon: <FaGithub size={60} color="#181717"/>, title: "GitHub" },
    { icon: <VscVscode size={60} color="#007ACC"/>, title: "VsCode" }, // Added 6th skill to row2
  ];
  
  // Skill card component
  const SkillCard = ({ icon, title }) => (
    <div className="bg-white text-gray-800 shadow-md rounded-xl px-12 py-10 flex flex-col items-center min-w-[140px]">
      {icon}
      <span className="mt-2 text-lg font-semibold">{title}</span>
    </div>
  );
  
  // Marquee row component duplicating items for infinite loop
  const MarqueeRow = ({ items, animation }) => (
    <div className="overflow-hidden">
        
      <div className={`flex gap-30 min-w-max ${animation}`}>
        {[...items, ...items].map((skill, index) => (
          <SkillCard key={index} icon={skill.icon} title={skill.title} />
        ))}
      </div>
    </div>
  );
  
  const SkillsSection = () => (
    <div className="space-y-8  p-6 rounded-lg bg-base-200">
        <h2 className="font-bold my-20 text-4xl text-center mx-auto">My Skills</h2>
      {/* Row 1: left to right */}
      <MarqueeRow items={row1} animation="animate-marquee-right" />
  
      {/* Row 2: right to left */}
      <MarqueeRow items={row2} animation="animate-marquee-left" />
    </div>
  );
  
  export default SkillsSection;
  