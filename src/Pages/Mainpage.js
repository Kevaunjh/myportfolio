import React, { useState } from "react";
import {
  FaUserCircle,
  FaGithub,
  FaLinkedin,
  FaBriefcase,
  FaDownload,
} from "react-icons/fa";
import { Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS, registerables, CategoryScale } from "chart.js";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Experience from "./Experience";
import Contact from "./Contact";
import Thoughts from "./Thoughts";
import resumePDF from "./../Images/Kevaun Harris Resume.pdf";
import OuterBanx from "./../Images/OuterBanx.png";
import TrainWeb from "./../Images/TrainWeb.png";
import PersonalImage from "./../Images/PersonalImage.png";
ChartJS.register(...registerables, CategoryScale);

function Landingpage() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const chartData = {
    labels: ["Data Structures", "Web Dev", "AI", "Cloud", "Security"],
    datasets: [
      {
        label: "Proficiency Level",
        data: [90, 85, 80, 70, 75],
        backgroundColor: [
          "#4A90E2",
          "#50E3C2",
          "#F5A623",
          "#D0021B",
          "#9013FE",
        ],
      },
      {
        label: "Interest Level",
        data: [95, 80, 85, 90, 70],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#8E44AD",
          "#2ECC71",
        ],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  const pieData = {
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

  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  const renderContent = () => {
    if (activeTab === "dashboard") {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div
            onClick={() => setActiveTab("aboutme")}
            className="bg-gray-800 p-4 rounded-lg shadow-md flex flex-col cursor-pointer hover:bg-gray-700 transition"
          >
            <h2 className="text-3xl font-bold mb-2">About Me</h2>
            <div className="bg-gray-300 w-32 h-32 rounded-full mb-2 flex items-center justify-center">
              <img
                src={PersonalImage}
                alt="Personal"
                className="rounded-full mt-8 mb-8"
              />
            </div>
            <p className="text-md">
              I'm a passionate software engineer with experience in full-stack
              development, creating dynamic user interfaces and scalable backend
              solutions.
            </p>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg shadow-md flex flex-col">
            <h2 className="text-3xl font-bold mb-2">Certifications</h2>
            <div className="relative w-full" style={{ height: "300px" }}>
              <Bar data={chartData} options={chartOptions} />
            </div>
          </div>

          <div
            onClick={() => setActiveTab("projects")}
            className="bg-gray-800 p-4 rounded-lg shadow-md flex flex-col cursor-pointer hover:bg-gray-700 transition"
          >
            <h2 className="text-3xl font-bold mb-2">My Projects</h2>
            <div className="flex gap-2 items-center">
              <div className="bg-gray-300 w-1/2 h-24 flex items-center justify-center">
                <img src={OuterBanx} alt="Outer Banx" />
              </div>
              <div className="bg-gray-300 w-1/2 h-24 flex items-center justify-center">
                <img src={TrainWeb} alt="Train Web" />
              </div>
            </div>
            <p className="text-md mt-2">
              Developed AI dashboards, e-commerce platforms, and real-time data
              visualizations focusing on usability, performance, and
              scalability.
            </p>
          </div>

          <div
            onClick={() => setActiveTab("thoughts")}
            className="bg-gray-800 p-4 rounded-lg shadow-md flex flex-col cursor-pointer hover:bg-gray-700 transition"
          >
            <h2 className="text-3xl font-bold mb-2">
              My Technological Thoughts
            </h2>
            <p className="text-md">
              Sharing insights on software trends, AI innovations, and best
              coding practices.
            </p>
          </div>

          <div
            onClick={() => setActiveTab("experience")}
            className="bg-gray-800 p-4 rounded-lg shadow-md flex flex-col cursor-pointer hover:bg-gray-700 transition"
          >
            <h2 className="text-3xl font-bold mb-2">Experience</h2>
            <p className="text-md">
              Professional experience in developing robust software solutions
              and managing projects.
            </p>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg shadow-md flex flex-col md:col-span-2">
            <h2 className="text-3xl font-bold mb-2">Technologies</h2>
            <p className="text-md">
              Expertise in various technologies including React, Node.js,
              Python, Firebase, AWS, and Docker.
            </p>
            <div className="relative w-full mt-4" style={{ height: "300px" }}>
              <Pie data={pieData} options={pieOptions} />
            </div>
            <p className="text-md mt-2">
              This chart represents the distribution of technologies I work
              with, spanning frontend, backend, and cloud-based solutions.
            </p>
          </div>

          <a
            href={resumePDF}
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-1"
          >
            <div className="bg-gray-800 p-4 rounded-lg shadow-md flex flex-col items-center justify-center hover:bg-gray-700 transition min-h-[420px]">
              <FaDownload size={48} className="mb-4" />
              <h2 className="text-3xl font-bold mb-2">Download Resume</h2>
              <p className="text-md text-center">
                Click here to view or download my latest resume.
              </p>
            </div>
          </a>
        </div>
      );
    } else if (activeTab === "aboutme") {
      return <AboutMe />;
    } else if (activeTab === "projects") {
      return <Projects />;
    } else if (activeTab === "experience") {
      return <Experience />;
    } else if (activeTab === "thoughts") {
      return <Thoughts />;
    } else if (activeTab === "technologies") {
      return (
        <div className="p-6">
          <h2 className="text-3xl font-bold mb-4">Technologies</h2>
          <div className="relative w-full" style={{ height: "300px" }}>
            <Pie data={pieData} options={pieOptions} />
          </div>
          <p className="text-md mt-2">
            This chart represents the distribution of technologies I work with,
            including frontend, backend, and cloud-based solutions.
          </p>
        </div>
      );
    } else {
      return (
        <div className="p-6">
          <h2 className="text-3xl font-bold mb-4">
            {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
          </h2>
          <p>Content for {activeTab} will be added soon.</p>
        </div>
      );
    }
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white overflow-x-hidden">
      <div className="w-64 bg-blue-950 text-white flex flex-col p-4">
        <div className="flex items-center gap-2 mb-4 border-b border-white pb-2">
          <FaUserCircle size={50} />
          <div>
            <h2 className="text-2xl font-bold">Kevaun Harris</h2>
            <p className="text-lg">Software Engineer</p>
            <p className="text-md">
              Expertise in React, JavaScript, Python, Java
            </p>
          </div>
        </div>
        <nav className="flex flex-col gap-2 flex-1">
          {[
            "dashboard",
            "aboutme",
            "projects",
            "experience",
            "courses",
            "thoughts",
            "technologies",
          ].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`p-2 text-lg rounded-md ${
                activeTab === tab ? "bg-blue-700" : "hover:bg-blue-700"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </nav>
        <div className="mt-4 pt-4 border-t border-white flex items-center justify-around">
          <a
            href="https://github.com/Kevaunjh"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 flex flex-col items-center"
          >
            <FaGithub size={24} />
            <span className="text-xs mt-1">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/kevaunharris/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 flex flex-col items-center"
          >
            <FaLinkedin size={24} />
            <span className="text-xs mt-1">LinkedIn</span>
          </a>
          <a
            href="https://profile.indeed.com/?hl=en_US&co=US&from=gnav-homepage"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 flex flex-col items-center"
          >
            <FaBriefcase size={24} />
            <span className="text-xs mt-1">Indeed</span>
          </a>
        </div>
      </div>

      <div className="flex-1 p-6 overflow-auto">
        <h1 className="text-5xl font-extrabold mb-6">My Dashboard</h1>
        {renderContent()}
      </div>
    </div>
  );
}

export default Landingpage;
