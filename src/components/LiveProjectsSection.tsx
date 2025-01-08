// Importing necessary components from React, libraries, and Framer Motion
import { ExternalLink, Eye } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "FitMetrics Project",
    techStack: "React-Js, Spring Boot, PostgreSQL, Docker",
    description: `fitness tracking application FitMetrics to analyze raw data and 
    generate comprehensive BMI reports. Implemented the frontend using React.js, enabling users to upload 
    raw data, including height and weight, in a user-friendly interface. Developed backend services with 
    Spring Boot to process data, calculate BMI, and generate detailed reports.`,
    liveLink: "https://fit-metrics.vercel.app/",
    previewImage: "fitmetrics.png",
  },
  {
    title: "Freelance Project (HopeAndHarmony)",
    techStack: "React, Node, Express, MongoDB",
    description: `Developed a full-stack web application for NGO 'Hope and Harmony' using the MERN stack. 
    Collaborated with the NGO to understand their requirements, delivering a solution that improved their 
    online presence and functionality.`,
    liveLink: "https://www.hopeandharmonyfoundation.org/#/",
    previewImage: "hopeandharmony.png",
  },
  {
    title: "Freelance Project (Gentech Solar)",
    techStack: "JavaScript, HTML, CSS, Bootstrap, PHP",
    description: `Designed, developed, and launched a dynamic commercial website, GenTechSolar.in, using HTML, 
    CSS, Bootstrap, PHP, and JavaScript, contributing to the organization’s online presence and customer engagement.`,
    liveLink: "https://gentechsolar.in",
    previewImage: "gentechsolar.png",
  },
];

function LiveProjectsSection() {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">
        Live Projects
      </h2>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.img
              src={project.previewImage}
              alt={`${project.title} Preview`}
              className="w-full h-48 object-cover"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-bold">Tech Stack:</span>{" "}
                {project.techStack}
              </p>
              <p className="text-gray-700 mb-4 line-clamp-3">
                {project.description}
              </p>
              <div className="flex justify-between items-center">
                <button
                  onClick={() => window.open(project.liveLink, "_blank")}
                  className="flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                >
                  <ExternalLink className="mr-2 w-5 h-5" />
                  View Live
                </button>
                <button
                  onClick={() => alert("Preview feature coming soon!")}
                  className="flex items-center text-blue-500 hover:text-blue-700 transition"
                >
                  <Eye className="mr-1 w-5 h-5" />
                  Preview
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default LiveProjectsSection;
