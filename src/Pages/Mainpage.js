import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, registerables, CategoryScale } from "chart.js";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Experience from "./Experience";
import Classes from "./Classes";
ChartJS.register(...registerables, CategoryScale);

function Landingpage() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const renderContent = () => {
    if (activeTab === "dashboard") {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div
            onClick={() => setActiveTab("aboutme")}
            className="bg-gray-800 p-4 rounded-lg shadow-md flex flex-col cursor-pointer hover:bg-gray-700"
          >
            <h2 className="text-3xl font-bold mb-2">About Me</h2>
            <div className="bg-gray-300 w-32 h-32 rounded-full mb-2 flex items-center justify-center">
              Profile Image
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
            className="bg-gray-800 p-4 rounded-lg shadow-md flex flex-col cursor-pointer hover:bg-gray-700"
          >
            <h2 className="text-3xl font-bold mb-2">My Projects</h2>
            <div className="flex gap-2">
              <div className="bg-gray-300 w-1/2 h-24 flex items-center justify-center">
                Image 1
              </div>
              <div className="bg-gray-300 w-1/2 h-24 flex items-center justify-center">
                Image 2
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
            className="bg-gray-800 p-4 rounded-lg shadow-md flex flex-col cursor-pointer hover:bg-gray-700"
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
            onClick={() => setActiveTab("contacts")}
            className="bg-gray-800 p-4 rounded-lg shadow-md flex flex-col cursor-pointer hover:bg-gray-700"
          >
            <h2 className="text-3xl font-bold mb-2">Contacts</h2>
            <p className="text-md">
              Get in touch with me via email, LinkedIn, or GitHub.
            </p>
          </div>

          <div
            onClick={() => setActiveTab("interests")}
            className="bg-gray-800 p-4 rounded-lg shadow-md flex flex-col cursor-pointer hover:bg-gray-700"
          >
            <h2 className="text-3xl font-bold mb-2">Interests</h2>
            <p className="text-md">
              Outside of coding, I enjoy gaming, robotics, and exploring
              AI-driven innovations.
            </p>
          </div>

          <div
            onClick={() => setActiveTab("experience")}
            className="bg-gray-800 p-4 rounded-lg shadow-md flex flex-col cursor-pointer hover:bg-gray-700"
          >
            <h2 className="text-3xl font-bold mb-2">Experience</h2>
            <p className="text-md">
              Professional experience in developing robust software solutions
              and managing projects.
            </p>
          </div>

          <div
            onClick={() => setActiveTab("technologies")}
            className="bg-gray-800 p-4 rounded-lg shadow-md flex flex-col cursor-pointer hover:bg-gray-700"
          >
            <h2 className="text-3xl font-bold mb-2">Technologies</h2>
            <p className="text-md">
              Expertise in various technologies including React, Node.js, and
              cloud services.
            </p>
          </div>

          <div
            onClick={() => setIsModalOpen(true)}
            className="bg-gray-800 p-4 rounded-lg shadow-md flex flex-col cursor-pointer hover:bg-gray-700"
          >
            <h2 className="text-3xl font-bold mb-2">Download Resume</h2>
            <p className="text-md">Click here to download my latest resume.</p>
          </div>
        </div>
      );
    } else if (activeTab === "aboutme") {
      return <AboutMe />;
    } else if (activeTab === "projects") {
      return <Projects />;
    } else if (activeTab === "experience") {
      return <Experience />;
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
        <nav className="flex flex-col gap-2">
          {[
            "dashboard",
            "aboutme",
            "projects",
            "experience",
            "courses",
            "thoughts",
            "contacts",
            "interests",
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
      </div>

      <div className="flex-1 p-6 overflow-auto">
        <h1 className="text-5xl font-extrabold mb-6">My Dashboard</h1>
        {renderContent()}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg text-black w-96">
              <h2 className="text-xl font-bold mb-4">Download Resume</h2>
              <p className="mb-4">Do you want to download the resume?</p>
              <div className="flex justify-end gap-4">
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded-md"
                  onClick={() => setIsModalOpen(false)}
                >
                  Yes
                </button>
                <button
                  className="px-4 py-2 bg-gray-500 text-white rounded-md"
                  onClick={() => setIsModalOpen(false)}
                >
                  No
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Landingpage;
