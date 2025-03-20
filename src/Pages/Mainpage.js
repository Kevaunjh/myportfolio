import React from "react";
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
  FaMusic,
  FaTrain,
  FaChartLine,
  FaGamepad,
  FaBug,
  FaGraduationCap,
  FaAward,
  FaJava,
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
      backgroundColor: ["#4A90E2", "#50E3C2", "#F5A623", "#D0021B", "#9013FE"],
    },
    {
      label: "Interest Level",
      data: [95, 80, 85, 90, 70],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#8E44AD", "#2ECC71"],
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
        "#61DBFB",
        "#68A063",
        "#FFD43B",
        "#FFCA28",
        "#FF9900",
        "#0db7ed",
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
    title: "Musical Teaching",
    technologies: "HTML, CSS",
    icon: <FaMusic className="text-[#FFD15C] text-2xl" />,
  },
  {
    title: "Railway System Management",
    technologies: "PHP, HTML, CSS",
    icon: <FaTrain className="text-[#FFD15C] text-2xl" />,
  },
  {
    title: "Tesla Stock Prediction",
    technologies: "Python",
    icon: <FaChartLine className="text-[#FFD15C] text-2xl" />,
  },
  {
    title: "Overwatch Wordle",
    technologies: "React, Node.js",
    icon: <FaGamepad className="text-[#FFD15C] text-2xl" />,
  },
  {
    title: "Autonomous Insect Identification",
    technologies: "Python, React, MongoDB",
    icon: <FaBug className="text-[#FFD15C] text-2xl" />,
  },
];

function PortfolioPage() {
  return (
    <div className="min-h-screen flex bg-[#212428] text-gray-100">
      <aside className="w-72 bg-[#1E1F23] p-6 h-screen sticky top-0 flex flex-col">
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
            <FaMapMarkerAlt className="text-[#FFD15C]" />
            <span>Toronto, Canada</span>
          </div>
          <div className="flex items-center gap-2">
            <FaUserAlt className="text-[#FFD15C]" />
            <span>Age: 22</span>
            <span>Age: 22</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCalendarAlt className="text-[#FFD15C]" />
            <span>Residence: Ontario, Whitby</span>
          </div>
          <div className="flex items-center gap-2">
            <FaLanguage className="text-[#FFD15C]" />
            <span>English</span>
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
      <main className="flex-1 p-8 overflow-y-auto">
        <section className="bg-[#1E1F23] rounded-lg p-8 mb-8 flex flex-col md:flex-row items-center">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Discover My Abilities!
            </h1>
            <p className="text-lg text-gray-300 mb-6">
              I work with{" "}
              <code className="bg-[#212428] px-1 py-0.5 rounded">
                {"Websites, UI/UX Designs, and AI Solutions."}
              </code>
            </p>
            <a href="https://github.com/Kevaunjh" className="hover:underline">
              <button className="bg-[#FFD15C] text-gray-900 px-6 py-3 font-semibold rounded-full inline-flex items-center hover:bg-yellow-400 transition">
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
        </section>
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
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-6">My Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#1E1F23] rounded-lg p-6 flex flex-col min-h-[420px]">
              <h3 className="text-xl font-bold mb-4">About Me</h3>
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4 mx-auto">
                <img
                  src={PersonalImage}
                  alt="Personal"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-gray-300 space-y-3">
                <p>
                  I'm a passionate software engineer specializing in React and
                  Python development with a strong foundation in data structures
                  and algorithms.
                </p>
                <p>
                  As a graduate from the University of Toronto with a degree in
                  Computer Science, I've cultivated expertise in building
                  responsive web applications and implementing AI solutions.
                </p>
                <p>
                  My technical journey is driven by a desire to create intuitive
                  user experiences while solving complex problems through
                  innovative coding approaches and continuous learning.
                </p>
              </div>
            </div>

            <div className="bg-[#1E1F23] rounded-lg p-6 flex flex-col min-h-[420px]">
              <h3 className="text-xl font-bold mb-2">Certifications</h3>
              <div
                className="relative w-full flex-grow"
                style={{ height: "300px" }}
              >
                <Bar data={barChartData} options={barChartOptions} />
              </div>
            </div>

            <div className="bg-[#1E1F23] rounded-lg p-6 flex flex-col min-h-[420px]">
              <h3 className="text-xl font-bold mb-4">Skills Highlight</h3>
              <div className="space-y-3 mb-4">
                <SkillItem skill="Front-End Development" level="Advanced" />
                <SkillItem
                  skill="Data Structure & Algorithms"
                  level="Advanced"
                />
                <SkillItem skill="AI & Machine Learning" level="Intermediate" />
                <SkillItem skill="Database Management" level="Intermediate" />
                <SkillItem skill="Cloud Computing" level="Intermediate" />
              </div>
              <p className="text-gray-300 mt-auto">
                Continuously expanding my technical expertise through projects,
                courses, and hands-on experience.
              </p>
            </div>

            <div className="bg-[#1E1F23] rounded-lg p-6 flex flex-col md:col-span-2 min-h-[420px]">
              <h3 className="text-xl font-bold mb-2">Technologies</h3>
              <p className="text-gray-300 mb-4">
                Expertise in various technologies including React, Node.js,
                Python, Firebase, AWS, and Docker.
              </p>
              <div
                className="relative w-full mt-4 flex-grow"
                style={{ height: "300px" }}
              >
                <Pie data={pieChartData} options={pieChartOptions} />
              </div>
              <p className="text-gray-300 mt-2">
                This chart represents the distribution of technologies I work
                with, spanning frontend, backend, and cloud-based solutions.
              </p>
            </div>
            <div className="bg-[#1E1F23] rounded-lg p-6 flex flex-col items-center justify-center hover:bg-[#27282C] transition min-h-[420px]">
              <a
                href={resumePDF}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center w-full h-full justify-center"
              >
                <FaDownload size={48} className="mb-4 text-[#FFD15C]" />
                <h3 className="text-xl font-bold mb-2">Download Resume</h3>
                <p className="text-gray-300 text-center">
                  Click here to view or download my latest resume.
                </p>
              </a>
            </div>

            <h3 className="text-3xl font-bold mb-2 col-span-3">
              Professional Experience
            </h3>
            <div className="bg-[#1E1F23] rounded-lg p-6 flex flex-col md:col-span-3">
              <div className="mb-8">
                <h2 className="text-2xl font-bold">
                  Front-End Engineer at SeeTek
                </h2>
                <p className="mt-2">
                  At SeeTek—a company specializing in innovative mobile banking
                  solutions—I worked as a Front-End Engineer. In this role, I
                  focused on creating seamless and engaging user interfaces with
                  React, while integrating Firebase for secure authentication
                  and robust backend functionality.
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
                    Collaborated with designers, backend developers, and product
                    managers to create user-centered solutions that met both
                    technical and business needs.
                  </li>
                  <li>
                    Actively participated in agile ceremonies—daily stand-ups,
                    sprint planning, and retrospectives—to foster clear
                    communication and continuous improvement.
                  </li>
                  <li>
                    Applied best practices in coding and optimization to enhance
                    application performance and maintainability.
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
                <h2 className="text-xl font-bold">What Employers Appreciate</h2>
                <p className="mt-2">
                  In my experience, a successful project hinges on a balance of
                  technical expertise and interpersonal skills. Employers value
                  adaptability, creative problem solving, and a proactive
                  attitude. I consistently demonstrated these qualities by
                  continuously learning new technologies and maintaining a
                  commitment to delivering high-quality, user-friendly
                  solutions.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-bold">Reflection on My Journey</h2>
                <p className="mt-2">
                  Working at SeeTek was a transformative experience. It taught
                  me the importance of merging innovative design with practical
                  functionality. I learned how to navigate complex technical
                  challenges while fostering a collaborative and supportive work
                  environment. This journey not only enhanced my professional
                  skill set but also deepened my appreciation for user-centered
                  design and continuous learning.
                </p>
              </div>
            </div>

            <h3 className="text-3xl font-bold mb-2 col-span-3">My Projects</h3>
            <div className="bg-[#1E1F23] rounded-lg p-6 flex flex-col md:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectsData.map((project, index) => (
                  <ProjectCard
                    key={index}
                    title={project.title}
                    technologies={project.technologies}
                    icon={project.icon}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function SkillBar({ skill, icon, percentage }) {
  return (
    <div>
      <div className="flex justify-between mb-1 text-sm">
        <span className="flex items-center gap-2">
          <span className="text-[#FFD15C]">{icon}</span>
          {skill}
        </span>
        <span>{percentage}%</span>
      </div>
      <div className="w-full bg-[#2A2B2F] h-2 rounded">
        <div
          className="bg-[#FFD15C] h-2 rounded"
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
    <div className="bg-[#1E1F23] p-6 text-center rounded-lg">
      <h3 className="text-3xl font-bold text-[#FFD15C] mb-2">{value}</h3>
      <p className="text-sm text-gray-300">{label}</p>
    </div>
  );
}

function ServiceCard({ title, description }) {
  return (
    <div className="bg-[#1E1F23] p-6 rounded-lg text-center flex flex-col">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <button className="bg-[#FFD15C] text-gray-900 px-4 py-2 font-semibold rounded-full hover:bg-yellow-400 transition mt-auto">
        Order Now
      </button>
    </div>
  );
}

function ProjectCard({ title, technologies, icon }) {
  return (
    <div className="bg-[#27282C] p-6 rounded-lg hover:transform hover:scale-105 transition duration-300">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-xl font-bold ml-3">{title}</h3>
      </div>
      <p className="text-gray-400 mb-3">Technologies: {technologies}</p>
      <div className="flex justify-between items-center mt-4">
        <button className="bg-transparent border border-[#FFD15C] text-[#FFD15C] px-3 py-1 rounded text-sm hover:bg-[#FFD15C] hover:text-gray-900 transition">
          View Details
        </button>
        <button className="bg-transparent text-gray-400 px-3 py-1 rounded text-sm hover:text-white transition">
          GitHub <IoIosArrowForward className="inline ml-1" />
        </button>
      </div>
    </div>
  );
}

export default PortfolioPage;
