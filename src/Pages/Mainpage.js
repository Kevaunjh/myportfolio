import React from "react";
import {
  FaMapMarkerAlt,
  FaUserAlt,
  FaCalendarAlt,
  FaLanguage,
  FaHtml5,
  FaCss3Alt,
  FaPhp,
  FaWordpressSimple,
  FaDownload,
} from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS, registerables, CategoryScale } from "chart.js";

// Example placeholders for images / PDFs
import PersonalImage from "./../Images/PersonalImage.png";
import OuterBanx from "./../Images/OuterBanx.png";
import TrainWeb from "./../Images/TrainWeb.png";
import resumePDF from "./../Images/Kevaun Harris Resume.pdf";

// Register chart components
ChartJS.register(...registerables, CategoryScale);

// Chart data for "Certifications" card
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

// Pie chart data for the "Technologies" card
const pieChartData = {
  labels: ["React", "Node.js", "Python", "Firebase", "AWS", "Docker"],
  datasets: [
    {
      data: [30, 20, 15, 15, 10, 10],
      backgroundColor: [
        "#61DBFB", // React
        "#68A063", // Node.js
        "#FFD43B", // Python
        "#FFCA28", // Firebase
        "#FF9900", // AWS
        "#0db7ed", // Docker
      ],
    },
  ],
};

const pieChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
};

function PortfolioPage() {
  return (
    <div className="min-h-screen flex bg-[#212428] text-gray-100">
      {/* LEFT SIDEBAR */}
      <aside className="w-72 bg-[#1E1F23] flex flex-col p-6">
        {/* Profile Section */}
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

        {/* Additional Info */}
        <div className="text-sm space-y-2 mb-8">
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-[#FFD15C]" />
            <span>Toronto, Canada</span>
          </div>
          <div className="flex items-center gap-2">
            <FaUserAlt className="text-[#FFD15C]" />
            <span>Age: 26</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCalendarAlt className="text-[#FFD15C]" />
            <span>Residence: Canada</span>
          </div>
          <div className="flex items-center gap-2">
            <FaLanguage className="text-[#FFD15C]" />
            <span>English, French, Spanish</span>
          </div>
        </div>

        {/* Skill Bars */}
        <div className="space-y-4">
          <SkillBar skill="HTML" icon={<FaHtml5 />} percentage="90" />
          <SkillBar skill="CSS" icon={<FaCss3Alt />} percentage="85" />
          <SkillBar skill="PHP" icon={<FaPhp />} percentage="60" />
          <SkillBar
            skill="WordPress"
            icon={<FaWordpressSimple />}
            percentage="50"
          />
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-8">
        {/* HERO / INTRO SECTION */}
        <section className="bg-[#1E1F23] rounded-lg p-8 mb-8 flex flex-col md:flex-row items-center">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Discover my Amazing Art Space!
            </h1>
            <p className="text-lg text-gray-300 mb-6">
              I build{" "}
              <code className="bg-[#212428] px-1 py-0.5 rounded">
                {"<code>"}
              </code>
            </p>
            <button className="bg-[#FFD15C] text-gray-900 px-6 py-3 font-semibold rounded-full inline-flex items-center hover:bg-yellow-400 transition">
              Explore Now
              <IoIosArrowForward className="ml-2" />
            </button>
          </div>
          <div className="mt-8 md:mt-0 md:ml-8 w-48 h-48 rounded-full bg-gray-500 flex-shrink-0"></div>
        </section>

        {/* STATS ROW */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <StatCard value="10+" label="Years Experience" />
          <StatCard value="143" label="Completed Projects" />
          <StatCard value="114" label="Happy Customers" />
          <StatCard value="20+" label="Honors & Awards" />
        </section>

        {/* MY SERVICES SECTION */}
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
              title="Sound Design"
              description="I produce immersive audio experiences for apps, games, and interactive projects."
            />
          </div>
        </section>

        {/* DASHBOARD INFO BELOW "MY SERVICES" */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-6">More Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* About Me Card */}
            <div className="bg-[#1E1F23] rounded-lg p-6 flex flex-col">
              <h3 className="text-xl font-bold mb-2">About Me</h3>
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4 mx-auto">
                <img
                  src={PersonalImage}
                  alt="Personal"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-300 mb-4">
                I'm a passionate software engineer with experience in full-stack
                development, creating dynamic user interfaces and scalable
                backend solutions.
              </p>
            </div>

            {/* Certifications Card */}
            <div className="bg-[#1E1F23] rounded-lg p-6 flex flex-col">
              <h3 className="text-xl font-bold mb-2">Certifications</h3>
              <div className="relative w-full" style={{ height: "300px" }}>
                <Bar data={barChartData} options={barChartOptions} />
              </div>
            </div>

            {/* Projects Card */}
            <div className="bg-[#1E1F23] rounded-lg p-6 flex flex-col">
              <h3 className="text-xl font-bold mb-2">My Projects</h3>
              <div className="flex gap-2 mb-4">
                <div className="bg-gray-300 w-1/2 h-24 flex items-center justify-center">
                  <img
                    src={OuterBanx}
                    alt="Outer Banx"
                    className="object-contain"
                  />
                </div>
                <div className="bg-gray-300 w-1/2 h-24 flex items-center justify-center">
                  <img
                    src={TrainWeb}
                    alt="Train Web"
                    className="object-contain"
                  />
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Developed AI dashboards, e-commerce platforms, and real-time
                data visualizations focusing on usability, performance, and
                scalability.
              </p>
            </div>

            {/* Thoughts Card */}
            <div className="bg-[#1E1F23] rounded-lg p-6 flex flex-col">
              <h3 className="text-xl font-bold mb-2">
                My Technological Thoughts
              </h3>
              <p className="text-gray-300 mb-4">
                Sharing insights on software trends, AI innovations, and best
                coding practices.
              </p>
            </div>

            {/* Experience Card */}
            <div className="bg-[#1E1F23] rounded-lg p-6 flex flex-col">
              <h3 className="text-xl font-bold mb-2">Experience</h3>
              <p className="text-gray-300 mb-4">
                Professional experience in developing robust software solutions
                and managing projects.
              </p>
            </div>

            {/* Technologies Card */}
            <div className="bg-[#1E1F23] rounded-lg p-6 flex flex-col md:col-span-2">
              <h3 className="text-xl font-bold mb-2">Technologies</h3>
              <p className="text-gray-300 mb-4">
                Expertise in various technologies including React, Node.js,
                Python, Firebase, AWS, and Docker.
              </p>
              <div className="relative w-full mt-4" style={{ height: "300px" }}>
                <Pie data={pieChartData} options={pieChartOptions} />
              </div>
              <p className="text-gray-300 mt-2">
                This chart represents the distribution of technologies I work
                with, spanning frontend, backend, and cloud-based solutions.
              </p>
            </div>

            {/* Download Resume Card */}
            <a
              href={resumePDF}
              target="_blank"
              rel="noopener noreferrer"
              className="col-span-1"
            >
              <div className="bg-[#1E1F23] rounded-lg p-6 flex flex-col items-center justify-center hover:bg-[#27282C] transition min-h-[420px]">
                <FaDownload size={48} className="mb-4 text-[#FFD15C]" />
                <h3 className="text-xl font-bold mb-2">Download Resume</h3>
                <p className="text-gray-300 text-center">
                  Click here to view or download my latest resume.
                </p>
              </div>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

/* Skill Bar Component */
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

/* Stats Card Component */
function StatCard({ value, label }) {
  return (
    <div className="bg-[#1E1F23] p-6 text-center rounded-lg">
      <h3 className="text-3xl font-bold text-[#FFD15C] mb-2">{value}</h3>
      <p className="text-sm text-gray-300">{label}</p>
    </div>
  );
}

/* Service Card Component */
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

export default PortfolioPage;
