import React from "react";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Project One",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.",
      image: "https://via.placeholder.com/300x200",
      github: "https://github.com/Kevaunjh",
      technologies: "JavaScript, React, Node.js",
    },
    {
      id: 2,
      title: "Project Two",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.",
      image: "https://via.placeholder.com/300x200",
      github: "https://github.com/Kevaunjh",
      technologies: "HTML, CSS, Tailwind CSS",
    },
    {
      id: 3,
      title: "Project Three",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.",
      image: "https://via.placeholder.com/300x200",
      github: "https://github.com/Kevaunjh",
      technologies: "Python, Django, PostgreSQL",
    },
    {
      id: 4,
      title: "Project Four",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.",
      image: "https://via.placeholder.com/300x200",
      github: "https://github.com/Kevaunjh",
      technologies: "Java, Spring Boot, MySQL",
    },
    {
      id: 5,
      title: "Project Five",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.",
      image: "https://via.placeholder.com/300x200",
      github: "https://github.com/Kevaunjh",
      technologies: "C#, .NET, SQL Server",
    },
    {
      id: 6,
      title: "Project Six",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.",
      image: "https://via.placeholder.com/300x200",
      github: "https://github.com/Kevaunjh",
      technologies: "Ruby, Rails, SQLite",
    },
  ];

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen p-6">
      <div className="w-full">
        <h1 className="text-4xl font-bold mb-6 text-center">Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex-1 flex flex-col">
                <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <p className="text-gray-400 mb-4">
                  <span className="font-semibold">Technologies:</span>{" "}
                  {project.technologies}
                </p>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-block text-blue-400 hover:underline"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
