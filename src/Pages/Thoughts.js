import React from "react";

function Thoughts() {
  const thoughtsData = [
    {
      title: "AI Advancements",
      description:
        "Artificial Intelligence is evolving at an unprecedented pace, with breakthroughs in deep learning, reinforcement learning, and natural language processing. These innovations are revolutionizing industries and raising ethical considerations that we must address responsibly.",
    },
    {
      title: "Progressive Web Apps",
      description:
        "PWAs bridge the gap between native and web applications by offering offline capabilities, installability, and seamless user experiences. They’re a powerful tool for developers who want to build fast and engaging web applications without the overhead of native development.",
    },
    {
      title: "Python's Popularity",
      description:
        "Python continues to dominate due to its simple syntax, extensive libraries, and vibrant community. Its versatility spans web development, data science, automation, and more, making it a language of choice for both beginners and seasoned professionals.",
    },
    {
      title: "Cloud Computing Growth",
      description:
        "Cloud platforms like AWS, Azure, and Google Cloud have transformed application deployment and scalability. They enable businesses to focus on innovation by offloading infrastructure management, while ensuring flexibility, performance, and cost efficiency.",
    },
    {
      title: "Open Source Collaboration",
      description:
        "Open source projects drive innovation and learning by fostering a global community of developers. Collaboration on open source not only accelerates development but also creates a culture of shared knowledge and collective growth.",
    },
  ];

  const interestsData = [
    {
      title: "Robotics & AI Innovations",
      description:
        "I enjoy exploring the intersection of robotics and artificial intelligence to create smarter, more autonomous systems that have the potential to transform industries.",
    },
    {
      title: "Gaming & Interactive Storytelling",
      description:
        "Immersive gaming experiences and innovative storytelling techniques spark my creativity and offer new ways to experience narratives and technology.",
    },
    {
      title: "Travel & Cultural Exploration",
      description:
        "Traveling allows me to explore diverse cultures, gain fresh perspectives, and find inspiration in the world's rich tapestry of traditions and landscapes.",
    },
    {
      title: "Photography & Visual Arts",
      description:
        "I have a passion for photography and visual arts, which helps me capture moments and express creativity beyond the digital realm.",
    },
    {
      title: "Music Appreciation & Creation",
      description:
        "Whether it’s discovering new genres or dabbling in music creation, music fuels my creativity and provides a refreshing balance to my technical pursuits.",
    },
    {
      title: "Continuous Learning",
      description:
        "I am committed to lifelong learning, constantly exploring new topics in technology, science, and philosophy to broaden my horizons and fuel personal growth.",
    },
  ];

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">
          Thoughts/Interests
        </h1>
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Thoughts</h2>
          {thoughtsData.map((thought, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg border border-gray-700 p-4 mb-4"
            >
              <h3 className="text-xl font-bold mb-2">{thought.title}</h3>
              <p className="text-gray-300">{thought.description}</p>
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">Interests</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {interestsData.map((interest, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg shadow-lg border border-gray-700 p-4"
              >
                <h3 className="text-xl font-bold mb-2">{interest.title}</h3>
                <p className="text-gray-300">{interest.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Thoughts;
