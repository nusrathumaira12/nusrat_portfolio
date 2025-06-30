import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  return (
    <section id="education" className="py-16 px-4 bg-base-200 ">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-15 mt-12">My Education</h2>

        <div className="bg-white p-6 rounded-2xl shadow-md flex items-start gap-4">
          <FaGraduationCap size={200} className="text-4xl text-black mt-1" />
          <div>
            <h3 className="text-xl font-semibold text-gray-800">
              Bachelor of Arts (B.A. Hons)
            </h3>
            <p className="text-gray-700 mt-1">
              Completed my undergraduate degree focused on arts and humanities, developing strong communication, research, and critical thinking skills. I’ve since transitioned into tech, applying my academic strengths to problem solving and user-focused development.
            </p>
            <p className="text-sm text-amber-600 mt-2 font-bold">
              CGPA : 3.48 
            </p>
            <p className="text-sm text-amber-600 font-bold">
              Graduation Year: 2018 
            </p>
            <p className="text-sm text-amber-600 font-bold">
              University: University Of Chittagong
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
