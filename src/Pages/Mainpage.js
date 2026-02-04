import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TypeAnimation } from "react-type-animation";
import {
  FaMapMarkerAlt,
  FaUserAlt,
  FaCalendarAlt,
  FaLanguage,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaPython,
  FaDownload,
  FaTrain,
  FaChartLine,
  FaGamepad,
  FaBug,
  FaTimes,
  FaPaperPlane,
  FaBars,
  FaBookOpen,
} from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS, registerables, CategoryScale } from "chart.js";
import PersonalImage from "./../Images/PersonalImage.png";
import resumePDF from "./../Images/Kevaun Harris Resume.pdf";
import MovingGif from "./../Images/MovingGif.gif";
ChartJS.register(...registerables, CategoryScale);

const barChartData = {
  labels: ["Data Structures", "Web Dev", "AI", "Cloud", "Security"],
  datasets: [
    {
      label: "Proficiency Level",
      data: [90, 85, 80, 70, 75],
      backgroundColor: ["#7C3AED", "#2DD4BF", "#F59E0B", "#EC4899", "#3B82F6"],
    },
    {
      label: "Interest Level",
      data: [95, 80, 85, 90, 70],
      backgroundColor: ["#8B5CF6", "#14B8A6", "#D97706", "#DB2777", "#2563EB"],
    },
  ],
};

const barChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
};

const pieChartData = {
  labels: ["React", "Node.js", "Python", "Firebase", "AWS", "Docker"],
  datasets: [
    {
      data: [30, 20, 15, 15, 10, 10],
      backgroundColor: [
        "#7C3AED",
        "#2DD4BF",
        "#F59E0B",
        "#EC4899",
        "#3B82F6",
        "#8B5CF6",
      ],
    },
  ],
};

const pieChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
};

const projectsData = [
  {
    title: "Railway System Management",
    technologies: "PHP, HTML, CSS",
    icon: <FaTrain className="text-[#7C3AED] text-2xl" />,
    githubLink: "https://github.com/Kevaunjh/railway-system-website",
    description:
      "A comprehensive railway management system that handles ticket bookings, train schedules, and passenger information. Built with PHP backend and responsive frontend design to ensure accessibility across devices.",
  },
  {
    title: "Tesla Stock Prediction",
    technologies: "Python",
    icon: <FaChartLine className="text-[#7C3AED] text-2xl" />,
    githubLink: "https://github.com/Kevaunjh/Stock-Prediction",
    description:
      "A machine learning model that predicts Tesla stock price movements using historical data and sentiment analysis. Implements various ML algorithms including LSTM networks and random forests to compare prediction accuracy.",
  },
  {
    title: "Overwatch Wordle",
    technologies: "React, Node.js",
    icon: <FaGamepad className="text-[#7C3AED] text-2xl" />,
    githubLink: "https://github.com/Kevaunjh/Overwatch_Wordle",
    description:
      "A Wordle-style game themed around Overwatch characters. Players must guess a daily Overwatch hero based on various attributes and characteristics. Features custom animations and game mechanics.",
  },
  {
    title: "Autonomous Insect Identification",
    technologies: "Python, React, MongoDB",
    icon: <FaBug className="text-[#7C3AED] text-2xl" />,
    githubLink: "https://github.com/Kevaunjh/insect-identification",
    description:
      "A computer vision application that identifies insect species from images. Uses convolutional neural networks for classification and features a React frontend for user interaction. The system maintains a MongoDB database of identified species and their characteristics.",
  },
  {
    title: "MangaDIO",
    technologies: "React, Node.js, Express",
    icon: <FaBookOpen className="text-[#7C3AED] text-2xl" />,
    githubLink: "https://github.com/Kevaunjh/mangadio",
    description:
      "IN PROGRESS: A manga site focused around built in text-to-speech that works with manga, comics and many more. The site has responsive screen scaling, uses open router API's to utilize AI for OCR capabilities, and uses RESTful API calls to ensure consistently updated mangas.",
  },
];

const serviceTypes = ["Web Development", "UI/UX Design", "AI Training"];

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const hoverScale = {
  scale: 1.05,
  transition: { duration: 0.2 },
};

const containerAnimation = {
  initial: {
    scale: 1,
  },
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.3,
    },
  },
};

const lineAnimation = {
  initial: {
    width: 0,
  },
  hover: {
    width: "100%",
    transition: {
      duration: 0.3,
    },
  },
};

function AnimatedContainer({ children, className }) {
  return (
    <motion.div
      className={`relative ${className}`}
      variants={containerAnimation}
      initial="initial"
      whileHover="hover"
    >
      {children}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-[#7C3AED]"
        variants={lineAnimation}
      />
    </motion.div>
  );
}

function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showProjectModal, setShowProjectModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const modalRef = React.createRef();
  const [formData, setFormData] = useState({
    company: "",
    position: "",
    location: "",
    workType: "Remote",
    message: "",
    email: "",
  });
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setShowProjectModal(true);
  };

  const closeProjectModal = () => {
    setShowProjectModal(false);
  };

  const openContactModal = (service) => {
    setSelectedService(service);
    setShowContactModal(true);
  };

  const closeContactModal = () => {
    setShowContactModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      `Form submitted! An email would be sent to Kevaunjh@gmail.com with the subject "Application Offer From ${formData.company}"`,
    );
    closeContactModal();
    setFormData({
      company: "",
      position: "",
      location: "",
      workType: "Remote",
      message: "",
      email: "",
    });
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      const clickedOutside = event.target.closest(".modal-content") === null;

      if (clickedOutside) {
        if (showProjectModal) {
          closeProjectModal();
        }
        if (showContactModal) {
          closeContactModal();
        }
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [showProjectModal, showContactModal]);

  return (
    <>
      <div className="lg:hidden flex items-center justify-between p-4 bg-[#0F172A] fixed top-0 left-0 right-0 z-40">
        <button
          onClick={toggleSidebar}
          className="text-gray-100 flex items-center justify-center"
        >
          <FaBars size={24} />
        </button>
        <h1 className="text-xl font-bold text-white">
          Kevaun Harris' Portfolio Page
        </h1>
        <div className="w-6"></div>
      </div>

      <div className="min-h-screen flex bg-[#1E293B] text-gray-100">
        <aside
          className={`w-72 bg-[#0F172A] p-6 h-screen fixed inset-y-0 left-0 transform transition-transform duration-300 ease-in-out z-50 overflow-y-auto ${
            isSidebarOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }`}
        >
          <div className="flex justify-end lg:hidden mb-4">
            <button
              onClick={toggleSidebar}
              className="text-gray-400 hover:text-white"
            >
              <FaTimes size={20} />
            </button>
          </div>

          <div className="flex flex-col items-center text-center mb-8">
            <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
              <img
                src={PersonalImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-xl font-bold">Kevaun Harris</h2>
            <p className="text-sm text-gray-400">
              Front End Developer / UI/UX Engineer
            </p>
          </div>
          <div className="text-sm space-y-2 mb-8">
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-[#7C3AED]" />
              <span>Toronto, Canada</span>
            </div>
            <div className="flex items-center gap-2">
              <FaUserAlt className="text-[#7C3AED]" />
              <span>Age: 22</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCalendarAlt className="text-[#7C3AED]" />
              <span>Residence: Ontario, Whitby</span>
            </div>
            <div className="flex items-center gap-2">
              <FaLanguage className="text-[#7C3AED]" />
              <span>English</span>
            </div>
          </div>
          <h3 className="text-lg mb-4">Proficiency</h3>
          <div className="space-y-4">
            <SkillBar skill="React" icon={<FaReact />} percentage="95" />
            <SkillBar skill="Python" icon={<FaPython />} percentage="92" />
            <SkillBar skill="HTML" icon={<FaHtml5 />} percentage="90" />
            <SkillBar skill="CSS" icon={<FaCss3Alt />} percentage="85" />
          </div>
        </aside>

        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={toggleSidebar}
          ></div>
        )}

        <main className="flex-1 p-8 lg:ml-72 w-full overflow-y-auto pt-20 md:pt-8">
          <AnimatedContainer className="bg-[#0F172A] rounded-lg p-8 mb-8 flex flex-col md:flex-row items-center">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Discover My Abilities!
              </h1>
              <TypeAnimation
                sequence={[
                  "I work with Websites, UI/UX Designs, Data Management and AI Solutions.",
                  1000,
                ]}
                wrapper="p"
                cursor={true}
                repeat={false}
                className="text-lg text-gray-300 mb-6"
              />
              <a href="https://github.com/Kevaunjh" className="hover:underline">
                <button className="bg-[#7C3AED] text-gray-900 px-6 py-3 font-semibold rounded-full inline-flex items-center hover:bg-purple-400 transition">
                  Check Me Out!
                  <IoIosArrowForward className="ml-2" />
                </button>
              </a>
            </div>
            <div className="mt-8 md:mt-0 md:ml-8 w-48 h-48 rounded-full bg-gray-500 flex-shrink-0">
              <img
                src={MovingGif}
                alt="Moving Gif"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </AnimatedContainer>
          <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <StatCard value="6+" label="Years Web Experience" />
            <StatCard value="5+" label="Completed AI Projects" />
            <StatCard value="100+" label="Leet Code Questions Solved" />
            <StatCard value="3" label="Years on the Dean List" />
          </section>
          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4">My Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ServiceCard
                title="Web Development"
                description="I create responsive, dynamic websites using modern frameworks and best practices."
              />
              <ServiceCard
                title="UI/UX Design"
                description="I design user-centric interfaces that balance aesthetics and usability."
              />
              <ServiceCard
                title="AI Training"
                description="I provide AI solutions for data analysis, image recognition, and natural language processing."
              />
              <ServiceCard
                title="Data Analyst"
                description="I collect, process, and manage databases by identifying patterns and trends within data."
              />
              <ServiceCard
                title="Mobile Development"
                description="I engineer, develop and maintain mobile applications in Android Studio."
              />
              <ServiceCard
                title="Full-Stack Development"
                description="I simultaneously manage websites and databases for smooth integration and styling of realtime data."
              />
            </div>
          </section>
          <section className="mb-8 px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-6 text-center sm:text-left">
              My Information
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {" "}
              <AnimatedContainer className="bg-[#0F172A] rounded-lg p-6 flex flex-col">
                <h3 className="text-xl font-bold mb-4">About Me</h3>
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4 mx-auto">
                  <img
                    src={PersonalImage}
                    alt="Personal"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-gray-300 space-y-3 text-sm sm:text-base">
                  <p>
                    I'm a passionate software engineer specializing in React and
                    Python development with a strong foundation in data
                    structures and algorithms.
                  </p>
                  <p>
                    As a graduate from Ontario Tech University with a degree in
                    Software Engineering, I've cultivated expertise in building
                    responsive web applications and implementing AI solutions.
                  </p>
                  <p>
                    My technical journey is driven by a desire to create
                    intuitive user experiences while solving complex problems
                    through innovative coding approaches and continuous
                    learning.
                  </p>
                </div>
              </AnimatedContainer>
              <AnimatedContainer className="bg-[#0F172A] rounded-lg p-6 flex flex-col">
                <h3 className="text-xl font-bold mb-2">Certifications</h3>
                <div className="relative w-full aspect-[4/3] max-h-[300px]">
                  <Bar data={barChartData} options={barChartOptions} />
                </div>
              </AnimatedContainer>
              <AnimatedContainer className="bg-[#0F172A] rounded-lg p-6 flex flex-col">
                <h3 className="text-xl font-bold mb-4">Skills Highlight</h3>
                <div className="space-y-3 mb-4 text-sm sm:text-base">
                  <SkillItem skill="Front-End Development" level="Advanced" />
                  <SkillItem
                    skill="Data Structure & Algorithms"
                    level="Advanced"
                  />
                  <SkillItem
                    skill="AI & Machine Learning"
                    level="Intermediate"
                  />
                  <SkillItem skill="Database Management" level="Intermediate" />
                  <SkillItem skill="Cloud Computing" level="Intermediate" />
                </div>
                <p className="text-gray-300 mt-auto text-sm sm:text-base">
                  Continuously expanding my technical expertise through
                  projects, courses, and hands-on experience.
                </p>
              </AnimatedContainer>
              <AnimatedContainer className="bg-[#0F172A] rounded-lg p-6 flex flex-col items-center justify-center hover:bg-[#334155] transition ">
                <a
                  href={resumePDF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center w-full justify-center text-center"
                >
                  <FaDownload size={48} className="mb-4 text-[#7C3AED]" />
                  <h3 className="text-xl font-bold mb-2">Download Resume</h3>
                  <p className="text-gray-300 text-sm sm:text-base">
                    Click here to view or download my latest resume.
                  </p>
                </a>
              </AnimatedContainer>
              <AnimatedContainer className="bg-[#0F172A] rounded-lg p-6 flex flex-col sm:col-span-2">
                <h3 className="text-xl font-bold mb-2">Technologies</h3>
                <p className="text-gray-300 mb-4 text-sm sm:text-base">
                  Expertise in various technologies including React, Node.js,
                  Python, Firebase, AWS, and Docker.
                </p>
                <div className="relative w-full mt-4 flex-grow min-h-[200px] sm:min-h-[300px]">
                  <Pie data={pieChartData} options={pieChartOptions} />
                </div>
                <p className="text-gray-300 mt-2 text-sm sm:text-base">
                  This chart represents the distribution of technologies I work
                  with, spanning frontend, backend, and cloud-based solutions.
                </p>
              </AnimatedContainer>
              <h3 className="text-3xl font-bold mb-2 col-span-1 sm:col-span-2">
                Professional Experience
              </h3>
              <AnimatedContainer className="bg-[#0F172A] rounded-lg p-6 flex flex-col col-span-1 sm:col-span-2 text-sm sm:text-base">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold">
                    Front-End Engineer at SeeTek
                  </h2>
                  <p className="mt-2">
                    At SeeTek—a company specializing in innovative mobile
                    banking solutions—I worked as a Front-End Engineer. In this
                    role, I focused on creating seamless and engaging user
                    interfaces with React, while integrating Firebase for secure
                    authentication and robust backend functionality.
                  </p>
                </div>
                <div className="mb-8">
                  <h2 className="text-xl font-bold">
                    Key Responsibilities & Achievements
                  </h2>
                  <ul className="list-disc list-inside mt-2">
                    <li>
                      Designed and implemented responsive web applications using
                      React, ensuring a fluid user experience across devices.
                    </li>
                    <li>
                      Integrated Firebase to handle authentication and backend
                      services, reinforcing security and reliability.
                    </li>
                    <li>
                      Collaborated with designers, backend developers, and
                      product managers to create user-centered solutions that
                      met both technical and business needs.
                    </li>
                    <li>
                      Actively participated in agile ceremonies—daily stand-ups,
                      sprint planning, and retrospectives—to foster clear
                      communication and continuous improvement.
                    </li>
                    <li>
                      Applied best practices in coding and optimization to
                      enhance application performance and maintainability.
                    </li>
                  </ul>
                </div>
                <div className="mb-8">
                  <h2 className="text-xl font-bold">
                    Teamwork and Collaborative Culture
                  </h2>
                  <p className="mt-2">
                    My time at SeeTek was enriched by a strong collaborative
                    culture. I actively contributed ideas during brainstorming
                    sessions and worked closely with my teammates to overcome
                    challenges. This environment not only honed my technical
                    skills but also reinforced the importance of teamwork,
                    communication, and mutual support in achieving common goals.
                  </p>
                </div>
                <div className="mb-8">
                  <h2 className="text-xl font-bold">
                    What Employers Appreciate
                  </h2>
                  <p className="mt-2">
                    In my experience, a successful project hinges on a balance
                    of technical expertise and interpersonal skills. Employers
                    value adaptability, creative problem solving, and a
                    proactive attitude. I consistently demonstrated these
                    qualities by continuously learning new technologies and
                    maintaining a commitment to delivering high-quality,
                    user-friendly solutions.
                  </p>
                </div>
                <div>
                  <h2 className="text-xl font-bold">
                    Reflection on My Journey
                  </h2>
                  <p className="mt-2">
                    Working at SeeTek was a transformative experience. It taught
                    me the importance of merging innovative design with
                    practical functionality. I learned how to navigate complex
                    technical challenges while fostering a collaborative and
                    supportive work environment. This journey not only enhanced
                    my professional skill set but also deepened my appreciation
                    for user-centered design and continuous learning.
                  </p>
                </div>
              </AnimatedContainer>
              <h3 className="text-3xl font-bold mb-2 col-span-1 sm:col-span-2">
                My Projects
              </h3>
              <div className="bg-[#0F172A] rounded-lg p-6 flex flex-col col-span-1 sm:col-span-2">
                <motion.div
                  ref={ref}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {projectsData.map((project, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      initial="initial"
                      animate={inView ? "animate" : "initial"}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <ProjectCard
                        project={project}
                        openProjectModal={openProjectModal}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </section>
        </main>

        {showProjectModal && selectedProject && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
            <div className="bg-[#0F172A] p-6 rounded-lg w-full max-w-2xl mx-4">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  {selectedProject.icon}
                  <h2 className="text-2xl font-bold ml-3">
                    {selectedProject.title}
                  </h2>
                </div>
                <button
                  onClick={closeProjectModal}
                  className="text-gray-400 hover:text-white"
                >
                  <FaTimes size={24} />
                </button>
              </div>

              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Technologies</h3>
                <p className="text-gray-300">{selectedProject.technologies}</p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Description</h3>
                <p className="text-gray-300">{selectedProject.description}</p>
              </div>

              <div className="flex justify-between">
                <button
                  onClick={closeProjectModal}
                  className="bg-[#7C3AED] text-gray-900 px-4 py-2 font-semibold rounded-full inline-flex items-center hover:bg-purple-400 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {showContactModal && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
            <div className="bg-[#0F172A] p-6 rounded-lg w-full max-w-2xl mx-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">
                  Request {selectedService} Service
                </h2>
                <button
                  onClick={closeContactModal}
                  className="text-gray-400 hover:text-white"
                >
                  <FaTimes size={24} />
                </button>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="company" className="block text-gray-300 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full bg-[#334155] text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="position"
                    className="block text-gray-300 mb-2"
                  >
                    Position
                  </label>
                  <input
                    type="text"
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    className="w-full bg-[#334155] text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="location"
                    className="block text-gray-300 mb-2"
                  >
                    Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full bg-[#334155] text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="workType"
                    className="block text-gray-300 mb-2"
                  >
                    Work Type
                  </label>
                  <select
                    id="workType"
                    name="workType"
                    value={formData.workType}
                    onChange={handleInputChange}
                    className="w-full bg-[#334155] text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
                  >
                    <option value="Remote">Remote</option>
                    <option value="Hybrid">Hybrid</option>
                    <option value="On-site">On-site</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-[#334155] text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-300 mb-2">
                    Additional Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full bg-[#334155] text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
                  ></textarea>
                </div>

                <div className="flex justify-between mt-6">
                  <button
                    type="submit"
                    className="bg-[#7C3AED] text-gray-900 px-6 py-3 font-semibold rounded-full inline-flex items-center hover:bg-purple-400 transition"
                  >
                    Submit Application
                    <FaPaperPlane className="ml-2" />
                  </button>
                  <button
                    type="button"
                    onClick={closeContactModal}
                    className="bg-gray-600 px-6 py-3 rounded-full hover:bg-gray-500 transition"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

function SkillBar({ skill, icon, percentage }) {
  return (
    <div>
      <div className="flex justify-between mb-1 text-sm">
        <span className="flex items-center gap-2">
          <span className="text-[#7C3AED]">{icon}</span>
          {skill}
        </span>
        <span>{percentage}%</span>
      </div>
      <div className="w-full bg-[#475569] h-2 rounded">
        <div
          className="bg-[#7C3AED] h-2 rounded"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}

function SkillItem({ skill, level }) {
  const getColorClass = (level) => {
    switch (level) {
      case "Advanced":
        return "text-green-400";
      case "Intermediate":
        return "text-blue-400";
      case "Beginner":
        return "text-yellow-400";
      default:
        return "text-gray-400";
    }
  };

  return (
    <div className="flex justify-between items-center">
      <span className="font-medium">{skill}</span>
      <span className={`text-sm ${getColorClass(level)}`}>{level}</span>
    </div>
  );
}

function StatCard({ value, label }) {
  return (
    <AnimatedContainer className="bg-[#0F172A] p-6 text-center rounded-lg">
      <h3 className="text-3xl font-bold text-[#7C3AED] mb-2">{value}</h3>
      <p className="text-sm text-gray-300">{label}</p>
    </AnimatedContainer>
  );
}

function ServiceCard({ title, description }) {
  return (
    <AnimatedContainer className="bg-[#0F172A] p-6 rounded-lg text-center flex flex-col">
      <h3 className="text-2xl font-bold mb-2 text-[#7C3AED]">{title}</h3>
      <p className="text-gray-300  text-md mb-4">{description}</p>
    </AnimatedContainer>
  );
}

function ProjectCard({ project, openProjectModal }) {
  return (
    <AnimatedContainer className="bg-[#334155] p-6 rounded-lg">
      <div className="flex items-center mb-4">
        {project.icon}
        <h3 className="text-xl font-bold ml-3">{project.title}</h3>
      </div>
      <p className="text-gray-400 mb-3">Technologies: {project.technologies}</p>
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => openProjectModal(project)}
          className="bg-transparent border border-[#7C3AED] text-[#7C3AED] px-3 py-1 rounded text-sm hover:bg-[#7C3AED] hover:text-gray-900 transition"
        >
          View Details
        </button>
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-transparent text-gray-400 px-3 py-1 rounded text-sm hover:text-white transition"
        >
          GitHub <IoIosArrowForward className="inline ml-1" />
        </a>
      </div>
    </AnimatedContainer>
  );
}

export default PortfolioPage;
