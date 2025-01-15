import React, { useState } from "react";
import { GraduationCap, Briefcase } from "lucide-react";

type QualificationItem = {
  title: string;
  institution?: string;
  company?: string;
  location: string;
  date: string;
  position: "right" | "left";
};

type Qualifications = {
  education: QualificationItem[];
  work: QualificationItem[];
};

const qualifications: Qualifications = {
  education: [
    {
      title: "Bachelors in Computer Engineering",
      institution: "IOE, Pulchowk Campus",
      location: "Chakupat, Lalitpur",
      date: "2019-2023",
      position: "left",
    },
    {
      title: "SLC(+2)",
      institution: "SOS Hermann Gmeiner School Gandaki",
      location: "Rambazar, Pokhara",
      date: "2019-2021",
      position: "right",
    },
    {
      title: "SEE",
      institution: "Children Life English Boarding School",
      location: "Ramrekha, Baglung",
      date: "2006-2019",
      position: "left",
    },
  ],
  work: [
    {
      title: "Flutter Intern",
      company: "AskMe Global",
      location: "Chakupat, Lalitpur",
      date: "Oct 2024-Jan 2025",
      position: "right",
    },
  ],
};

const Qualification = () => {
  const [activeTab, setActiveTab] = useState<"education" | "work">("education");

  return (
    <section
      className="py-20 bg-gray-200 dark:bg-gray-900 transition-colors duration-300"
      id="qualification"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Qualification
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            My Personal Journey
          </p>
        </div>

        <div className="flex justify-center gap-8 mb-12">
          <button
            onClick={() => setActiveTab("education")}
            className={`flex items-center gap-2 text-lg font-medium transition-all duration-300 ${
              activeTab === "education"
                ? "text-blue-600 dark:text-blue-400"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
            }`}
          >
            <GraduationCap className="w-5 h-5" />
            Education
          </button>
          <button
            onClick={() => setActiveTab("work")}
            className={`flex items-center gap-2 text-lg font-medium transition-all duration-300 ${
              activeTab === "work"
                ? "text-blue-600 dark:text-blue-400"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
            }`}
          >
            <Briefcase className="w-5 h-5" />
            Work
          </button>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200 dark:bg-blue-900"></div>

            <div className="grid grid-cols-2 gap-8">
              {qualifications[activeTab].map((item, index) => (
                <React.Fragment key={index}>
                  {item.position === "right" ? (
                    <>
                      <div className="relative pb-12">
                        <div className="text-right">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400 mt-1">
                            {item.institution || item.company}
                          </p>
                          <div className="flex items-center justify-end mt-2 text-gray-500 dark:text-gray-400">
                            <span>{item.date}</span>
                          </div>
                        </div>
                      </div>
                      <div className="relative pb-12">
                        <div className="absolute left-0 top-3 -translate-x-1/2 transform">
                          <div className="w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-400 border-4 border-blue-100 dark:border-gray-800 transition-colors duration-300"></div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="relative pb-12">
                        <div className="absolute right-0 top-3 translate-x-1/2 transform">
                          <div className="w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-400 border-4 border-blue-100 dark:border-gray-800 transition-colors duration-300"></div>
                        </div>
                      </div>
                      <div className="relative pb-12">
                        <div className="text-left">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {item.title}
                          </h3>
                          <p>{item.institution || item.company}</p>
                          <p className="text-gray-600 dark:text-gray-400 mt-1">
                            {item.location}
                          </p>
                          <div className="flex items-center mt-2 text-gray-500 dark:text-gray-400">
                            <span>{item.date}</span>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
